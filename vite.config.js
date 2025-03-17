import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import fs from "fs";
import path from "path";

export default defineConfig({
  plugins: [react()],
  server: {
    https: {
      key: fs.readFileSync(
        path.resolve(__dirname, "certs/172.17.61.162-key.pem")
      ),
      cert: fs.readFileSync(
        path.resolve(__dirname, "certs/172.17.61.162.pem")
      ),
    },
    host: "172.17.61.162", // Replace with your IP address
    port: 5173, // Optional: Specify a port
  },
});
