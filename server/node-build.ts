// server/node-build.ts
import path from "path";
import express from "express";
import { createServer as createCustomServer } from "./index"; // your custom server logic

const app = createCustomServer(); // or just `express()` if no extra logic
const port = process.env.PORT || 3000;

// Fix for __dirname in ES modules
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Path to built SPA (frontend)
const distPath = path.join(__dirname, "../spa");

// Middleware to serve static frontend files
app.use(express.static(distPath));

// Example API routes
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from server!" });
});

// Handle React Router for SPA - serve index.html for all non-API routes
app.get("*", (req, res) => {
  // Don't serve index.html for API routes
  if (req.path.startsWith("/api/") || req.path.startsWith("/health")) {
    return res.status(404).json({ error: "API endpoint not found" });
  }

  res.sendFile(path.join(distPath, "index.html"));
});

// Start server
app.listen(port, () => {
  console.log(`🚀 Fusion Starter server running on port ${port}`);
  console.log(`📱 Frontend: http://localhost:${port}`);
  console.log(`🔧 API: http://localhost:${port}/api`);
});

// Graceful shutdown
process.on("SIGTERM", () => {
  console.log("🛑 Received SIGTERM, shutting down gracefully");
  process.exit(0);
});

process.on("SIGINT", () => {
  console.log("🛑 Received SIGINT, shutting down gracefully");
  process.exit(0);
});
