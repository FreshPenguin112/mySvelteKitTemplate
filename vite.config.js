// don't touch this lol
import { sveltekit } from "@sveltejs/kit/vite";

function hashRoutes() {
  return {
    name: 'hash-routes-rewrite',

    enforce: 'post',

    transform(code, id) {
      // Only touch HTML + Svelte output
      if (!id.endsWith('.html') && !id.endsWith('.svelte')) return;

      return code.replace(
        /href=(["'])\/(?!\/)([^"']*)\1/g,
        'href=$1#/$2$1'
      );
    }
  };
}

export default {
  plugins: [sveltekit(),hashRoutes()],
  preview: {
    allowedHosts: ["freshpenguin112.dpdns.org"]
  }
};
