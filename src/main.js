// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from "~/layouts/Default.vue";
import Container from "~/components/Container";
import VuePrism from "vue-prism";
import * as dayjs from "dayjs";
require("dayjs/locale/uz-latn");

export default function(Vue, { router, head, isClient }) {
  head.link.push({
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
  });
  head.link.push({
    rel: "stylesheet",
    href:
      "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap",
  });

  dayjs.locale("uz-latn");

  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);
  Vue.component("Container", Container);
  Vue.use(VuePrism);
  Vue.prototype.$dayjs = dayjs;
}
