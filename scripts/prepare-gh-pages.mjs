import { copyFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const clientDir = join(process.cwd(), "dist", "client");
const indexPath = join(clientDir, "index.html");

if (!existsSync(indexPath)) {
  console.error(
    "Missing dist/client/index.html. Enable TanStack Start prerendering in vite.config.ts.",
  );
  process.exit(1);
}

// GitHub Pages serves 404.html for unknown paths; reuse the app shell for client-side routing.
copyFileSync(indexPath, join(clientDir, "404.html"));

console.log("Prepared dist/client for GitHub Pages (404.html created).");
