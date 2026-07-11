import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/api/public/marble-products")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const url = new URL(request.url);
        const perPage = Math.min(Number(url.searchParams.get("per_page") || 60), 100);
        const upstream = `https://kayan-egy.net/wp-json/wc/store/v1/products?per_page=${perPage}`;
        try {
          const res = await fetch(upstream, { headers: { Accept: "application/json" } });
          if (!res.ok) {
            return Response.json({ error: "Upstream error", status: res.status }, { status: 502 });
          }
          const data = await res.json();
          return Response.json(data, {
            headers: { "Cache-Control": "public, max-age=300, s-maxage=600" },
          });
        } catch (err) {
          return Response.json({ error: (err as Error).message }, { status: 502 });
        }
      },
    },
  },
});
