# 🔗 Movio Deep Link AssetLinks Host

This repository hosts the [`assetlinks.json`](https://developer.android.com/training/app-links/verify-site-associations#asset-statements) file required to enable **App Links** for the [Movio](https://github.com/<your-org>/movio) Android application.

By serving this file from the `/.well-known/assetlinks.json` endpoint, the Movio app can securely claim the associated domain and handle deep links.

---

## ⚙️ Setup & Deployment

### 1. Clone the repository
```bash
git clone https://github.com/<your-org>/assetlinks-host.git
cd assetlinks-host
````

### 2. Install dependencies

```bash
npm install
```

### 3. Run locally

```bash
npm start
```

Your server will be running at `http://localhost:3000`.

Check:

```
http://localhost:3000/.well-known/assetlinks.json
```

### 4. Deploy

#### Vercel

This repo is pre-configured with `vercel.json`. To deploy:

```bash
vercel
```

The file will be served at:

```
https://<your-vercel-domain>/.well-known/assetlinks.json
```

#### Custom Hosting

If deploying elsewhere, make sure your web server serves:

```
/.well-known/assetlinks.json
```

with MIME type `application/json`.

---

## 📝 assetlinks.json Example

```json
[
  {
    "relation": ["delegate_permission/common.handle_all_urls"],
    "target": {
      "namespace": "android_app",
      "package_name": "com.example.movio",
      "sha256_cert_fingerprints": [
        "12:34:56:78:90:AB:CD:EF:12:34:56:78:90:AB:CD:EF:12:34:56:78:90:AB:CD:EF:12:34:56:78:90:AB:CD:EF"
      ]
    }
  }
]
```

* Replace `com.example.movio` with the actual package name of your app.
* Replace the fingerprint with your app’s **SHA256 signing cert**. You can get it via:

  ```bash
  keytool -list -v -keystore my-release-key.jks -alias my-key-alias -storepass <password> -keypass <password>
  ```

---

## 📱 Movio App Configuration

In the **Movio app repo**, add an intent filter to your `AndroidManifest.xml`:

```xml
<intent-filter android:autoVerify="true">
    <action android:name="android.intent.action.VIEW" />
    <category android:name="android.intent.category.DEFAULT" />
    <category android:name="android.intent.category.BROWSABLE" />

    <!-- Replace with your domain -->
    <data android:scheme="https"
          android:host="your-domain.com"
          android:pathPrefix="/" />
</intent-filter>
```

---

## ✅ Verification

After deployment:

1. Visit `https://your-domain.com/.well-known/assetlinks.json` in your browser.
2. Install the Movio app on a device.
3. Open a link pointing to `https://your-domain.com/...`.
4. Android should suggest opening it in Movio instead of a browser.

---

## 📜 License

MIT License © 2025 \[Your Name / Organization]

```
Would you like me to also **include badges** (e.g., Vercel deploy status, license, Node.js version) to make the README look more professional?
```
