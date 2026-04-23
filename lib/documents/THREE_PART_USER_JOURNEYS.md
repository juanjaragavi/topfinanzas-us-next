# Three-Part User Journeys

Based on the codebase audit, here are the five distinct 3-part user journeys (funnels/quizzes) in the `app` directory.

## Entry Point Routes

These conversational intro pages serve as initial landing points that route users into the recommendation flows:

- **Finance Chat Intro:** [https://us.topfinanzas.com/finance-chat-intro](https://us.topfinanzas.com/finance-chat-intro)
- **Finance Chat Intro P2:** [https://us.topfinanzas.com/finance-chat-intro-p2](https://us.topfinanzas.com/finance-chat-intro-p2) _(Directs to the Algorithm Processing Funnel Flow)_

## 1. Standard Progress Bar Quiz Flow

This flow uses a `Step X of 3` progress bar component to guide the user through a standard credit card recommendation questionnaire.

- **Part 1:** [https://us.topfinanzas.com/invit-credit-card-rec-us-3](https://us.topfinanzas.com/invit-credit-card-rec-us-3)
- **Part 2:** [https://us.topfinanzas.com/invit-credit-card-rec-us-4](https://us.topfinanzas.com/invit-credit-card-rec-us-4)
- **Part 3:** [https://us.topfinanzas.com/invit-credit-card-rec-us-5](https://us.topfinanzas.com/invit-credit-card-rec-us-5) _(Redirects to affiliate offer on completion)_

## 2. Alternative Standard Progress Bar Quiz Flow

This is another variation of the `Step X of 3` progress bar flow, functioning similarly to the first but using different routes within the `app/(routes)/` directory.

- **Part 1:** [https://us.topfinanzas.com/invit-credit-card-rec-us-6](https://us.topfinanzas.com/invit-credit-card-rec-us-6)
- **Part 2:** [https://us.topfinanzas.com/invit-credit-card-rec-us-7](https://us.topfinanzas.com/invit-credit-card-rec-us-7)
- **Part 3:** [https://us.topfinanzas.com/invit-credit-card-rec-us-8](https://us.topfinanzas.com/invit-credit-card-rec-us-8) _(Redirects to affiliate offer on completion)_

## 3. "Card Quest" Gamified Flow

This flow adds gamification effects (engagement tracking, confetti, power challenges) over 3 steps.

- **Part 1:** [https://us.topfinanzas.com/invit-credit-card-rec-us-9](https://us.topfinanzas.com/invit-credit-card-rec-us-9) _(Quest start)_
- **Part 2:** [https://us.topfinanzas.com/invit-credit-card-rec-us-10](https://us.topfinanzas.com/invit-credit-card-rec-us-10)
- **Part 3:** [https://us.topfinanzas.com/invit-credit-card-rec-us-11](https://us.topfinanzas.com/invit-credit-card-rec-us-11) _(Completes quest and redirects to a financial-solutions article)_

## 4. Algorithm Processing Funnel Flow

This flow uses a percentage-based animated progress bar (`33% -> 66% -> 100%`) utilizing `useCreditCardFunnel()` state management.

- **Part 1:** [https://us.topfinanzas.com/invit-credit-card-rec-us-12](https://us.topfinanzas.com/invit-credit-card-rec-us-12) _(Progress: 33%)_
- **Part 2:** [https://us.topfinanzas.com/invit-credit-card-rec-us-13](https://us.topfinanzas.com/invit-credit-card-rec-us-13) _(Progress: 66%)_
- **Part 3:** [https://us.topfinanzas.com/invit-credit-card-rec-us-14](https://us.topfinanzas.com/invit-credit-card-rec-us-14) _(Progress: 100% with algorithm completion and bounce effects)_

## 5. Interactive Scratch Card Funnel Flow

This flow follows a similar 3-part percentage structure but incorporates an interactive scratch card mechanism at the end.

- **Part 1:** [https://us.topfinanzas.com/invit-credit-card-rec-us-15](https://us.topfinanzas.com/invit-credit-card-rec-us-15) _(Progress: 33%)_
- **Part 2:** [https://us.topfinanzas.com/invit-credit-card-rec-us-16](https://us.topfinanzas.com/invit-credit-card-rec-us-16) _(Progress: 66%)_
- **Part 3:** [https://us.topfinanzas.com/invit-credit-card-rec-us-17](https://us.topfinanzas.com/invit-credit-card-rec-us-17) _(Progress: 100% with Scratch Card and confetti effects)_
