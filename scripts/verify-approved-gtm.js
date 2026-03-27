const fs = require("fs");
const path = require("path");

const rootDir = path.resolve(__dirname, "..");
const approvedGtmId = "GTM-5568TKCX";
const forbiddenGtmIds = ["GTM-MR76NXR3"];

const filesToCheck = [
  "app/layout.tsx",
  "components/analytics/gtm.tsx",
  "components/analytics/google-ads.tsx",
  "components/GoogleTagManager.tsx",
];

const errors = [];

function readWorkspaceFile(relativePath) {
  return fs.readFileSync(path.join(rootDir, relativePath), "utf8");
}

const fileContents = Object.fromEntries(
  filesToCheck.map((relativePath) => [
    relativePath,
    readWorkspaceFile(relativePath),
  ]),
);

for (const forbiddenGtmId of forbiddenGtmIds) {
  for (const [relativePath, content] of Object.entries(fileContents)) {
    if (content.includes(forbiddenGtmId)) {
      errors.push(
        `${relativePath} still references deprecated GTM ID ${forbiddenGtmId}.`,
      );
    }
  }
}

if (!fileContents["components/analytics/gtm.tsx"].includes(approvedGtmId)) {
  errors.push(
    `components/analytics/gtm.tsx does not reference the approved GTM ID ${approvedGtmId}.`,
  );
}

if (!fileContents["components/GoogleTagManager.tsx"].includes(approvedGtmId)) {
  errors.push(
    `components/GoogleTagManager.tsx does not reference the approved GTM ID ${approvedGtmId}.`,
  );
}

if (fileContents["app/layout.tsx"].includes("<GoogleAds />")) {
  errors.push("app/layout.tsx still mounts the GoogleAds component.");
}

if (fileContents["app/layout.tsx"].includes("import GoogleAds")) {
  errors.push("app/layout.tsx still imports the GoogleAds component.");
}

if (
  fileContents["components/analytics/google-ads.tsx"].includes(
    "googletagmanager.com/gtag/js",
  )
) {
  errors.push(
    "components/analytics/google-ads.tsx still loads gtag.js directly instead of relying on GTM.",
  );
}

if (
  fileContents["components/analytics/google-ads.tsx"].includes("window.gtag(")
) {
  errors.push(
    "components/analytics/google-ads.tsx still uses window.gtag directly instead of the GTM dataLayer.",
  );
}

if (errors.length > 0) {
  console.error("GTM verification failed:\n");
  for (const error of errors) {
    console.error(`- ${error}`);
  }
  process.exit(1);
}

console.log(
  `GTM verification passed. Only ${approvedGtmId} is configured in source.`,
);
