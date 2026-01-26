window.topAds = window.topAds || {};

topAds.config = {
  domain: "TOPFIN_US",
  networkCode: "23062212598",
  lazyLoad: "soft",
  pageSetting: {
    exclude: [
      "/terms",
      "/privacy-policy",
      "/cookie-policy",
      "/about-us",
      "/contact-us",
      "/quiz",
    ],
  },
  formats: {
    interstitial: {
      status: "active",
      exclude: [],
    },
    offerwall: {
      status: "active",
      logoUrl: "https://media.topfinanzas.com/images/logo-english.webp",
      websiteName: "TopFinanzas US",
      cooldown: "12",
      exclude: ["/invit-credit-card-rec-us"],
    },
  },
};

(function () {
  var w = window.top,
    d = w.document,
    h = d.head || d.getElementsByTagName("head")[0];
  var s = d.createElement("script");
  s.src = "https://topads.topnetworks.co/topAds.min.js";
  s.type = "text/javascript";
  s.defer = true;
  s.async = true;
  s.setAttribute("data-cfasync", "false");
  h.appendChild(s);
})();
