export async function onRequest(context) {
    const { request, env } = context;
    const { pathname } = new URL(request.url);
  
    if (pathname === "/api/pelanggan") {
      const result = await env.DB.prepare("SELECT * FROM pelanggan").all();
      return new Response(JSON.stringify(result), {
        headers: { "Content-Type": "application/json" },
      });
    }
  
    return new Response("Not found", { status: 404 });
  }