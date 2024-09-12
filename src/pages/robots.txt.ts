import type { APIRoute } from "astro";
import { SITE } from "@config";

const robots = `
User-agent: Googlebot
Disallow: /nogooglebot/

User-agent: *
Allow: /

User-agent: anthropic-ai
Disallow: /

User-agent: Claude-Web
Disallow: /

User-agent: CCbot
Disallow: /

User-agent: FacebookBot
Disallow: /

User-agent: Google-Extended
Disallow: /

User-agent: GPTBot
Disallow: /

User-agent: PiplBot
Disallow: /

Sitemap: ${new URL("sitemap-index.xml", SITE.website).href}
`.trim();

export const GET: APIRoute = () =>
  new Response(robots, {
    headers: { "Content-Type": "text/plain" },
  });
