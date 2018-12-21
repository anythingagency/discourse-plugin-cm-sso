import { withPluginApi } from "discourse/lib/plugin-api";

function initializeCmSso(api) {
  
  // see app/assets/javascripts/discourse/lib/plugin-api
  // for the functions available via the api object

  // handle login redirect
  if (typeof localStorage !== 'undefined') {
    var ssoUrl = '/session/sso';
    console.log(ssoUrl);
    if (localStorage.getItem("jwt") && !api.getCurrentUser()) {
      if (!document.referrer.includes(ssoUrl)) {
        window.location = ssoUrl;
      }
    }
  }
  
}

export default {
  name: "cm-sso",

  initialize() {
    withPluginApi("0.8.24", initializeCmSso);
  }
};
