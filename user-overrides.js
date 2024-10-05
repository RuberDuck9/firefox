//Disabled Features
user_pref("extensions.pocket.enabled", false); //fully disable pocket
user_pref("identity.fxaccounts.enabled", false); //disable sync
user_pref("signon.rememberSignons", false); //never ask to save passwords
user_pref("permissions.default.geo", 2); //deny location access
user_pref("geo.enabled", false); //fullly disable location acces

//Re-enabled features
// Re-enables 'about:home' page for startup landing page and new tabs.
/* 0102 */ user_pref("browser.startup.page", 1);
/* 0103 */ user_pref("browser.startup.homepage", "about:home");
/* 0104 */ user_pref("browser.newtabpage.enabled", true);
user_pref("browser.search.suggest.enabled", true); //enables search suggestions
user_pref("browser.urlbar.suggest.searches", true); //enables search suggestions in the url-bar

