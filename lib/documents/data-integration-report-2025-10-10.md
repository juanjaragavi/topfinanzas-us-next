# Data Integration Audit – 10 Oct 2025

## 1. Normalised Lead Schema

| Group       | Field             | Type       | Populated From                      | Notes                                                       |
| ----------- | ----------------- | ---------- | ----------------------------------- | ----------------------------------------------------------- |
| Identity    | `email`           | string     | User input                          | Primary key for deduplication across all endpoints          |
| Identity    | `firstName`       | string     | User input                          | Parsed into given/surname when submitting to marketing APIs |
| Identity    | `lastName`        | string     | User input (contact form) / derived | Passed to Brevo and ConvertKit when available               |
| Identity    | `phone`           | string     | User input                          | Stored in Brevo `SMS` attribute                             |
| Quiz        | `preference`      | string     | Quiz option id                      | Captured for internal analytics                             |
| Quiz        | `preferenceText`  | string     | Quiz label                          | Human readable value written to Sheets                      |
| Quiz        | `income`          | string     | Quiz option id                      | Retained for downstream segmentation                        |
| Quiz        | `incomeText`      | string     | Quiz label                          | Human readable value written to Sheets                      |
| Consent     | `receiveMessages` | boolean    | Quiz checkbox                       | Maps to ConvertKit/Brevo consent fields                     |
| Consent     | `acceptTerms`     | boolean    | Contact form checkbox               | Required before submission                                  |
| Messaging   | `message`         | string     | Contact form textarea               | Stored as Brevo note alongside the contact                  |
| Attribution | `source`          | string     | Hidden field                        | Mirrors `utm_source`; exposed for GA/Ads pipelines          |
| Attribution | `medium`          | string     | Hidden field                        | Mirrors `utm_medium`                                        |
| Attribution | `campaign`        | string     | Hidden field                        | Mirrors `utm_campaign`                                      |
| Attribution | `term`            | string     | Hidden field                        | Mirrors `utm_term`                                          |
| Attribution | `content`         | string     | Hidden field                        | Mirrors `utm_content`                                       |
| Attribution | `utm_source`      | string     | Hidden field                        | Maintained for historical compatibility                     |
| Attribution | `utm_medium`      | string     | Hidden field                        | "                                                           |
| Attribution | `utm_campaign`    | string     | Hidden field                        | "                                                           |
| Attribution | `utm_term`        | string     | Hidden field                        | "                                                           |
| Attribution | `utm_content`     | string     | Hidden field                        | "                                                           |
| Brand       | `Pais`            | string     | Static "Reino Unido"                | Shared with all endpoints for market rollups                |
| Brand       | `Marca`           | string     | Static "Top Finanzas"               | Shared with all endpoints                                   |
| Brand       | `pais`            | string     | Static lower-case                   | ConvertKit/Brevo custom fields                              |
| Brand       | `marca`           | string     | Static lower-case                   | ConvertKit/Brevo custom fields                              |
| System      | `date_created`    | ISO string | Auto-generated                      | Persisted for ConvertKit audit trail                        |

## 2. Endpoint Audit & Fixes

| Endpoint                           | Previous Gaps                                                                                              | Remediation                                                                                                                                                                                   |
| ---------------------------------- | ---------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `components/credit-card-form*.tsx` | UTM payload only included `utm_*` keys; brand fields not forwarded to Sheets; hidden field aliases missing | Normalised UTM capture, introduced shared brand constants, and ensured both uppercase & lowercase brand keys plus `source/medium/campaign/term/content` are sent to Sheets and marketing APIs |
| `app/api/sheets/route.ts`          | Sheet schema limited to 10 columns and lacked brand/alias fields; no fallback when new keys absent         | Expanded header to include brand and alias columns (`Pais`, `Marca`, `Source`, etc.), normalised inputs with defaults, and widened sheet range to `A:Q`                                       |
| `app/api/subscribe/route.ts`       | Brevo attributes only mapped `utm_*` and lowercase brand keys                                              | Added uppercase fallbacks, mapped alias keys (`source`, `medium`, etc.), and synchronised brand metadata                                                                                      |
| `app/contact-us/page.tsx`          | Contact form excluded hidden fields; payload inconsistent with lead schema                                 | Added hidden-field hydration via `sessionStorage`, embedded brand defaults, and preserved metadata on reset                                                                                   |
| `app/api/contact/route.ts`         | Brevo requests lacked brand metadata and UTM attributes                                                    | Normalised hidden fields, supplied brand defaults, and wrote both alias and `UTM_*` attributes to Brevo                                                                                       |

## 3. Validation Plan

1. **Client capture**
   - Load `/quiz` and `/contact-us` with crafted query strings, e.g. `?utm_source=google&utm_medium=cpc&utm_campaign=promo&utm_content=hero&utm_term=credit+card`.
   - In DevTools console inspect `sessionStorage` and confirm hidden fields populate by logging `window.sessionStorage.getItem("utm_source")`.
2. **Sheets API (local smoke)**
   - With Google credentials configured, run `pnpm dev` and submit the quiz.
   - Inspect the terminal logs for `[Sheets API] Request received` to ensure `hasPais`, `hasMarca`, and alias flags are `true`.
   - Verify the new columns appear in the Google Sheet (`Pais`, `Marca`, `Source`, `Medium`, `Campaign`, `Term`, `Content`, `UTM ...`).
3. **Brevo & ConvertKit**
   - For staging keys, execute `node scripts/test-brevo-integration.js` and confirm `attributes` include the new keys.
   - Review the Brevo contact record (`Attributes` tab) to ensure `PAIS`, `MARCA`, `SOURCE`, `UTM_*` are populated.
   - Check ConvertKit subscriber fields for `pais/marca` and the UTM aliases; add custom fields in the dashboard if absent.

> **Note:** External integrations require live API credentials that are not available in this workspace. The steps above should be executed in staging with the appropriate `.env` values.

## 4. Follow-up Recommendations

- Backfill the new `Pais`, `Marca`, and alias columns in existing Google Sheet rows via Apps Script or Sheets API to maintain historical consistency.
- In ConvertKit and Brevo, ensure the newly referenced custom fields (`SOURCE`, `MEDIUM`, etc.) are created and exposed in analytics dashboards.
- Consider automated integration tests for `/api/sheets` and `/api/subscribe` using mocked HTTP clients to prevent regressions.
