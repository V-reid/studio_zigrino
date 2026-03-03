import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import fs from "node:fs";

export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
		},
	},
	server: {
		host: true,
		https: {
			key: fs.readFileSync("./localhost+3-key.pem"),
			cert: fs.readFileSync("./localhost+3.pem"),
		},
		port: 5173,
	},
});
