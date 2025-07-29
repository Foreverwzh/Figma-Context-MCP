// Re-export the server and its types
export { createServer } from "./mcp/index.js";
export * from "./extractors/types.js";
export { FigmaService } from "./services/figma.js";
export { getServerConfig } from "./config.js";
export { startServer } from "./cli.js";

// Flexible extractor system
export * from "./extractors/index.js";
