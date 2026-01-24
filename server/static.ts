import express, { type Express } from "express";
import fs from "fs";
import path from "path";

export function serveStatic(app: Express) {
  const distPath = path.resolve(__dirname, "public");
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`,
    );
  }

  // Serve static files at the base path
  app.use("/vesinhnhadanang", express.static(distPath));

  // Also serve at root for convenience (optional)
  app.use(express.static(distPath));

  // Handle SPA fallback for the base path
  app.use("/vesinhnhadanang/*", (_req, res) => {
    res.sendFile(path.resolve(distPath, "index.html"));
  });

  // fall through to index.html if the file doesn't exist (root fallback)
  app.use("*", (_req, res) => {
    res.sendFile(path.resolve(distPath, "index.html"));
  });
}
