// www.thejahid.com -> thejahid.com (301, path & query preserved).
// Everything else is served from the static Astro build in dist/.
export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.hostname === 'www.thejahid.com') {
      url.protocol = 'https:';
      url.hostname = 'thejahid.com';
      return Response.redirect(url.toString(), 301);
    }
    return env.ASSETS.fetch(request);
  },
};
