// don't touch this lol
import adapter from "@sveltejs/adapter-static";

export default {
    kit: {
        adapter: adapter({
            pages: "build",
            assets: "build",
        }),
        output: {
            bundleStrategy: "inline",
        },
        router: { type: "hash" },
    },
};
