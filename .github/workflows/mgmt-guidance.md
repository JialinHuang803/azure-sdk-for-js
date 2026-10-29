---
on:
  workflow_dispatch:
permissions:
  contents: read
  copilot-requests: write
if: github.repository == 'JialinHuang803/azure-sdk-for-js'
concurrency:
  group: "link-redaction-smoke-${{ github.run_id }}"
  job-discriminator: "${{ github.run_id }}"
engine:
  id: copilot
  version: "1.0.101"
network:
  allowed:
    - defaults
safe-outputs:
  activation-comments: false
  allowed-domains:
    - eng.ms
    - teams.microsoft.com
  threat-detection:
    engine:
      id: copilot
      model: gpt-5.6-sol
  add-comment:
    target: "5"
    max: 1
    footer: false
timeout-minutes: 5
---

# Link Redaction Smoke Test

This is a fork-only fixed-output smoke test of safe-output URL sanitization, not a CI readiness assessment.
Do not inspect repository files, PR content, or external pages.
Call `add_comment` exactly once to post the following body to PR 5 in the current repository, preserving the text and URLs exactly:

```markdown
## Link redaction smoke test

Test of Azure/azure-sdk-for-js#40556; this is not merge-readiness guidance.

[Management SDK release process](https://eng.ms/docs/products/azure-developer-experience/plan/mgmt-sdk-release-process)

[Teams help](https://teams.microsoft.com/)
```
