import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = process.env.PORT || 3000;

// Fix __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const assetLinks = [
  {
    relation: ["delegate_permission/common.handle_all_urls"],
    target: {
      namespace: "android_app",
      package_name: "com.cairosquad.movio",
      sha256_cert_fingerprints: [
        "C6:48:DD:3A:AA:90:99:34:36:56:0F:E5:33:EE:2C:2D:11:76:C6:48:AC:27:C4:11:24:07:C2:3D:AB:C5:00:97",
	    "7D:87:9C:39:29:93:66:75:60:C4:6E:CD:F8:CB:42:26:EC:C8:00:03:BA:A5:8D:1B:04:D7:A8:84:0B:45:5A:4E"
      ]
    }
  }
];

// Serve Vite production build
app.use(express.static(path.join(__dirname, "client/dist")));

app.use((req, res) => {
  res.sendFile(path.join(__dirname, "client/dist", "index.html"));
});

app.get("/.well-known/assetlinks.json", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.json(assetLinks);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});