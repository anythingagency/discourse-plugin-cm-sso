import { acceptance } from "helpers/qunit-helpers";

acceptance("CmSso", { loggedIn: true });

test("CmSso works", async assert => {
  await visit("/admin/plugins/cm-sso");

  assert.ok(false, "it shows the CmSso button");
});
