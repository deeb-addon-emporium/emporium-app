# Deeb's Addon Emporium

A [WowUp](https://github.com/WowUp/WowUp) fork for **WoW Forever** (the `_classic_beta_` client).
Every addon from [the catalogue](https://github.com/deeb-addon-emporium/emporium) shows up on the
Get Addons page. Click install. Updates arrive like any other addon.

Windows installer and Linux AppImage are on the Releases page. Windows will show a SmartScreen
warning the first time, because the build is not code-signed. Linux: point it at the folder that
contains `_classic_beta_` (a Lutris `battlenet/drive_c` prefix is found on its own).

What changed from WowUp: the GitHub provider reads `catalogue.json` for featured and search
results, WoW Forever accepts a plain release zip, branding, unsigned Windows build, builds on tag.
