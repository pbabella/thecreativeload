import { getStore } from "@netlify/blobs";

// One shared copy of the board, kept in Netlify Blobs.
export default async (req) => {
  const store = getStore("creative-load");
  const headers = { "cache-control": "no-store" };

  if (req.method === "GET") {
    const data = await store.get("board", { type: "json" });
    return Response.json(data || null, { headers });
  }

  if (req.method === "PUT") {
    let body;
    try { body = await req.json(); } catch (e) { return new Response("Bad JSON", { status: 400 }); }
    const st = body && body.state;
    if (!st || !Array.isArray(st.team) || !Array.isArray(st.items)) {
      return new Response("That does not look like a board", { status: 400 });
    }
    const rev = Date.now();
    await store.setJSON("board", { state: st, rev });
    return Response.json({ rev }, { headers });
  }

  return new Response("Method not allowed", { status: 405 });
};

export const config = { path: "/api/board" };
