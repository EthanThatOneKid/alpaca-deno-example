import { serveDir } from "@std/http/file-server";

if (import.meta.main) {
  Deno.serve((request) => {
    return serveDir(request, {
      fsRoot: "./",
      showIndex: true,
    });
  });
}
