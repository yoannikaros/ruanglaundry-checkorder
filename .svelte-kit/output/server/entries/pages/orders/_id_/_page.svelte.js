import "clsx";
import "../../../../chunks/firebase.js";
import "firebase/firestore";
import "@sveltejs/kit/internal";
import "../../../../chunks/exports.js";
import "../../../../chunks/utils.js";
import "@sveltejs/kit/internal/server";
import "../../../../chunks/state.svelte.js";
import "qrcode";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="min-h-screen bg-gradient-to-br from-white to-slate-50 flex items-center justify-center"><div class="text-center"><div class="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-500 mx-auto mb-4"></div> <p class="text-slate-600">Memuat data order...</p></div></div>`);
    }
    $$renderer2.push(`<!--]-->`);
  });
}
export {
  _page as default
};
