const path = require("path");

module.exports = {
  packagerConfig: {
    icon: path.resolve(__dirname, "assets/icons/win/icon"),
  },
  rebuildConfig: {},
  makers: [
    {
      name: "@electron-forge/maker-squirrel",
      productName: "Little Polymath",
      config: {
        // An URL to an ICO file to use as the application icon (displayed in Control Panel > Programs and Features).
        iconUrl: path.resolve(__dirname, "assets/icons/win/icon.ico"),
        // The ICO file to use as the icon for the generated Setup.exe
        setupIcon: path.resolve(__dirname, "assets/icons/win/icon.ico"),
      },
    },
    {
      name: "@electron-forge/maker-zip",
      platforms: ["darwin"],
    },
    {
      name: "@electron-forge/maker-deb",
      config: {},
    },
    {
      name: "@electron-forge/maker-rpm",
      config: {},
    },
  ],
};
