# Amazfit AeroMETAR - Zepp OS Watch Mini Program

Aviation METAR weather viewer tailored for **Amazfit smartwatches** running Zepp OS (Amazfit Balance, T-Rex 3, Falcon, Cheetah, GTR 4, GTS 4, Active).

## Pre-configured Airfields
1. **KCBM** - KCBM Airport (Station KCBM, Custom Airfield)
2. **KTUP** - KTUP Airport (Station KTUP, Custom Airfield)
3. **KTCL** - KTCL Airport (Station KTCL, Custom Airfield)
4. **KMEI** - KMEI Airport (Station KMEI, Custom Airfield)
5. **KJAN** - KJAN Airport (Station KJAN, Custom Airfield)

## How to Install on your Amazfit Watch

### Method 1: Zepp App Developer Mode (Recommended & Easiest)
1. Open the official **Zepp App** on your iPhone or Android phone.
2. Go to **Profile** > **Settings** > **About Zepp**.
3. Tap on the **Zepp App Version** number rapidly **7 times** until you see *"You are now a developer"*.
4. Return to **Profile** > your paired Amazfit Watch (e.g. *Amazfit Balance* or *T-Rex 3*).
5. Scroll down to find the newly unlocked **Developer Mode** menu item.
6. Enable **Bridge Mode** or tap **Scan QR Code**.
7. Deploy using the Zepp CLI or test package generator!

### Method 2: Zepp CLI Sideloading
1. Install NodeJS (v18+) on your computer.
2. Install the Zepp OS CLI:
   ```bash
   npm install -g @zeppos/zepp-cli
   ```
3. Unzip this package and run:
   ```bash
   zepp build
   zepp preview
   ```
4. Scan the QR code displayed in your terminal using the Zepp mobile app!

---
*Safe Flying from AeroPulse!*
