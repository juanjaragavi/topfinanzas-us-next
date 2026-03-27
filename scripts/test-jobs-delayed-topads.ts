import assert from "node:assert/strict";

import {
  DELAYED_JOBS_AD_PATHS,
  TOPADS_EXCLUDED_PATHS,
  isJobsDelayedAdPath,
  removePathFromTopAdsExclusions,
} from "@/lib/jobs-delayed-ads";

function run() {
  assert.deepEqual(DELAYED_JOBS_AD_PATHS, [
    "/jobs/jobs-promise-p1",
    "/jobs/jobs-promise-p2",
  ]);

  for (const path of DELAYED_JOBS_AD_PATHS) {
    assert.equal(
      TOPADS_EXCLUDED_PATHS.includes(path),
      true,
      `${path} should be excluded from initial TopAds boot`,
    );
    assert.equal(
      isJobsDelayedAdPath(path),
      true,
      `${path} should be recognized as a delayed jobs ad path`,
    );
  }

  assert.equal(
    isJobsDelayedAdPath("/jobs/jobs-promise-p3"),
    false,
    "non-quiz promise pages should not be delayed",
  );

  const updatedExclusions = removePathFromTopAdsExclusions(
    TOPADS_EXCLUDED_PATHS,
    "/jobs/jobs-promise-p1",
  );

  assert.equal(
    updatedExclusions.includes("/jobs/jobs-promise-p1"),
    false,
    "activated path should be removed from exclusions",
  );
  assert.equal(
    updatedExclusions.includes("/jobs/jobs-promise-p2"),
    true,
    "other delayed paths must remain excluded until their own quiz completes",
  );

  console.log("Jobs delayed TopAds tests passed.");
}

run();
