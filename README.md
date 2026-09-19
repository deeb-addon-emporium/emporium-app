# Deeb's Addon Emporium

A [WowUp](https://github.com/WowUp/WowUp) fork for **WoW Forever** (the `_classic_beta_` client).
Every addon from [the catalogue](https://github.com/deeb-addon-emporium/emporium) shows up on the
Get Addons page. Click install. Updates arrive like any other addon.

## Install

1. Go to the [latest release](https://github.com/deeb-addon-emporium/emporium-app/releases/latest).
2. **Windows:** download `DeebsAddonEmporium-Setup-<version>.exe`, run it, Next, Next, done.
   SmartScreen will say "Windows protected your PC" once: click **More info**, then **Run anyway**.
3. **Linux:** download the `.AppImage`, make it executable (right click, Properties, "Is executable"), run it.
4. First run: pick your World of Warcraft folder if it is not found. Then **Get Addons**. Every
   Emporium addon is already listed. Click **Install**.

Windows installer and Linux AppImage are on the Releases page. Windows will show a SmartScreen
warning the first time, because the build is not code-signed. Linux: point it at the folder that
contains `_classic_beta_` (a Lutris `battlenet/drive_c` prefix is found on its own).

What changed from WowUp: the GitHub provider reads `catalogue.json` for featured and search
results, WoW Forever accepts a plain release zip, branding, unsigned Windows build, builds on tag.
