cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "call-number.CallNumber",
    "file": "plugins/call-number/www/CallNumber.js",
    "pluginId": "call-number",
    "clobbers": [
      "call"
    ]
  },
  {
    "id": "cordova-plugin-camera.Camera",
    "file": "plugins/cordova-plugin-camera/www/CameraConstants.js",
    "pluginId": "cordova-plugin-camera",
    "clobbers": [
      "Camera"
    ]
  },
  {
    "id": "cordova-plugin-camera.CameraPopoverOptions",
    "file": "plugins/cordova-plugin-camera/www/CameraPopoverOptions.js",
    "pluginId": "cordova-plugin-camera",
    "clobbers": [
      "CameraPopoverOptions"
    ]
  },
  {
    "id": "cordova-plugin-camera.camera",
    "file": "plugins/cordova-plugin-camera/www/Camera.js",
    "pluginId": "cordova-plugin-camera",
    "clobbers": [
      "navigator.camera"
    ]
  },
  {
    "id": "cordova-plugin-camera.CameraPopoverHandle",
    "file": "plugins/cordova-plugin-camera/www/CameraPopoverHandle.js",
    "pluginId": "cordova-plugin-camera",
    "clobbers": [
      "CameraPopoverHandle"
    ]
  },
  {
    "id": "cordova-plugin-device.device",
    "file": "plugins/cordova-plugin-device/www/device.js",
    "pluginId": "cordova-plugin-device",
    "clobbers": [
      "device"
    ]
  },
  {
    "id": "cordova-plugin-email-composer.EmailComposer",
    "file": "plugins/cordova-plugin-email-composer/www/email_composer.js",
    "pluginId": "cordova-plugin-email-composer",
    "clobbers": [
      "cordova.plugins.email"
    ]
  },
  {
    "id": "cordova-plugin-file.DirectoryEntry",
    "file": "plugins/cordova-plugin-file/www/DirectoryEntry.js",
    "pluginId": "cordova-plugin-file",
    "clobbers": [
      "window.DirectoryEntry"
    ]
  },
  {
    "id": "cordova-plugin-file.DirectoryReader",
    "file": "plugins/cordova-plugin-file/www/DirectoryReader.js",
    "pluginId": "cordova-plugin-file",
    "clobbers": [
      "window.DirectoryReader"
    ]
  },
  {
    "id": "cordova-plugin-file.Entry",
    "file": "plugins/cordova-plugin-file/www/Entry.js",
    "pluginId": "cordova-plugin-file",
    "clobbers": [
      "window.Entry"
    ]
  },
  {
    "id": "cordova-plugin-file.File",
    "file": "plugins/cordova-plugin-file/www/File.js",
    "pluginId": "cordova-plugin-file",
    "clobbers": [
      "window.File"
    ]
  },
  {
    "id": "cordova-plugin-file.FileEntry",
    "file": "plugins/cordova-plugin-file/www/FileEntry.js",
    "pluginId": "cordova-plugin-file",
    "clobbers": [
      "window.FileEntry"
    ]
  },
  {
    "id": "cordova-plugin-file.FileError",
    "file": "plugins/cordova-plugin-file/www/FileError.js",
    "pluginId": "cordova-plugin-file",
    "clobbers": [
      "window.FileError"
    ]
  },
  {
    "id": "cordova-plugin-file.FileReader",
    "file": "plugins/cordova-plugin-file/www/FileReader.js",
    "pluginId": "cordova-plugin-file",
    "clobbers": [
      "window.FileReader"
    ]
  },
  {
    "id": "cordova-plugin-file.FileSystem",
    "file": "plugins/cordova-plugin-file/www/FileSystem.js",
    "pluginId": "cordova-plugin-file",
    "clobbers": [
      "window.FileSystem"
    ]
  },
  {
    "id": "cordova-plugin-file.FileUploadOptions",
    "file": "plugins/cordova-plugin-file/www/FileUploadOptions.js",
    "pluginId": "cordova-plugin-file",
    "clobbers": [
      "window.FileUploadOptions"
    ]
  },
  {
    "id": "cordova-plugin-file.FileUploadResult",
    "file": "plugins/cordova-plugin-file/www/FileUploadResult.js",
    "pluginId": "cordova-plugin-file",
    "clobbers": [
      "window.FileUploadResult"
    ]
  },
  {
    "id": "cordova-plugin-file.FileWriter",
    "file": "plugins/cordova-plugin-file/www/FileWriter.js",
    "pluginId": "cordova-plugin-file",
    "clobbers": [
      "window.FileWriter"
    ]
  },
  {
    "id": "cordova-plugin-file.Flags",
    "file": "plugins/cordova-plugin-file/www/Flags.js",
    "pluginId": "cordova-plugin-file",
    "clobbers": [
      "window.Flags"
    ]
  },
  {
    "id": "cordova-plugin-file.LocalFileSystem",
    "file": "plugins/cordova-plugin-file/www/LocalFileSystem.js",
    "pluginId": "cordova-plugin-file",
    "clobbers": [
      "window.LocalFileSystem"
    ],
    "merges": [
      "window"
    ]
  },
  {
    "id": "cordova-plugin-file.Metadata",
    "file": "plugins/cordova-plugin-file/www/Metadata.js",
    "pluginId": "cordova-plugin-file",
    "clobbers": [
      "window.Metadata"
    ]
  },
  {
    "id": "cordova-plugin-file.ProgressEvent",
    "file": "plugins/cordova-plugin-file/www/ProgressEvent.js",
    "pluginId": "cordova-plugin-file",
    "clobbers": [
      "window.ProgressEvent"
    ]
  },
  {
    "id": "cordova-plugin-file.fileSystems",
    "file": "plugins/cordova-plugin-file/www/fileSystems.js",
    "pluginId": "cordova-plugin-file"
  },
  {
    "id": "cordova-plugin-file.requestFileSystem",
    "file": "plugins/cordova-plugin-file/www/requestFileSystem.js",
    "pluginId": "cordova-plugin-file",
    "clobbers": [
      "window.requestFileSystem"
    ]
  },
  {
    "id": "cordova-plugin-file.resolveLocalFileSystemURI",
    "file": "plugins/cordova-plugin-file/www/resolveLocalFileSystemURI.js",
    "pluginId": "cordova-plugin-file",
    "merges": [
      "window"
    ]
  },
  {
    "id": "cordova-plugin-file.isChrome",
    "file": "plugins/cordova-plugin-file/www/browser/isChrome.js",
    "pluginId": "cordova-plugin-file",
    "runs": true
  },
  {
    "id": "cordova-plugin-file.androidFileSystem",
    "file": "plugins/cordova-plugin-file/www/android/FileSystem.js",
    "pluginId": "cordova-plugin-file",
    "merges": [
      "FileSystem"
    ]
  },
  {
    "id": "cordova-plugin-file.fileSystems-roots",
    "file": "plugins/cordova-plugin-file/www/fileSystems-roots.js",
    "pluginId": "cordova-plugin-file",
    "runs": true
  },
  {
    "id": "cordova-plugin-file.fileSystemPaths",
    "file": "plugins/cordova-plugin-file/www/fileSystemPaths.js",
    "pluginId": "cordova-plugin-file",
    "merges": [
      "cordova"
    ],
    "runs": true
  },
  {
    "id": "cordova-plugin-file-transfer.FileTransferError",
    "file": "plugins/cordova-plugin-file-transfer/www/FileTransferError.js",
    "pluginId": "cordova-plugin-file-transfer",
    "clobbers": [
      "window.FileTransferError"
    ]
  },
  {
    "id": "cordova-plugin-file-transfer.FileTransfer",
    "file": "plugins/cordova-plugin-file-transfer/www/FileTransfer.js",
    "pluginId": "cordova-plugin-file-transfer",
    "clobbers": [
      "window.FileTransfer"
    ]
  },
  {
    "id": "cordova-plugin-inappbrowser.inappbrowser",
    "file": "plugins/cordova-plugin-inappbrowser/www/inappbrowser.js",
    "pluginId": "cordova-plugin-inappbrowser",
    "clobbers": [
      "cordova.InAppBrowser.open",
      "window.open"
    ]
  },
  {
    "id": "cordova-plugin-ionic-keyboard.keyboard",
    "file": "plugins/cordova-plugin-ionic-keyboard/www/android/keyboard.js",
    "pluginId": "cordova-plugin-ionic-keyboard",
    "clobbers": [
      "window.Keyboard"
    ]
  },
  {
    "id": "cordova-plugin-ionic-webview.IonicWebView",
    "file": "plugins/cordova-plugin-ionic-webview/src/www/util.js",
    "pluginId": "cordova-plugin-ionic-webview",
    "clobbers": [
      "Ionic.WebView"
    ]
  },
  {
    "id": "cordova-plugin-network-information.network",
    "file": "plugins/cordova-plugin-network-information/www/network.js",
    "pluginId": "cordova-plugin-network-information",
    "clobbers": [
      "navigator.connection",
      "navigator.network.connection"
    ]
  },
  {
    "id": "cordova-plugin-network-information.Connection",
    "file": "plugins/cordova-plugin-network-information/www/Connection.js",
    "pluginId": "cordova-plugin-network-information",
    "clobbers": [
      "Connection"
    ]
  },
  {
    "id": "cordova-plugin-splashscreen.SplashScreen",
    "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
    "pluginId": "cordova-plugin-splashscreen",
    "clobbers": [
      "navigator.splashscreen"
    ]
  },
  {
    "id": "cordova-plugin-statusbar.statusbar",
    "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
    "pluginId": "cordova-plugin-statusbar",
    "clobbers": [
      "window.StatusBar"
    ]
  },
  {
    "id": "cordova-uxcam.UXCam",
    "file": "plugins/cordova-uxcam/www/UXCam.js",
    "pluginId": "cordova-uxcam",
    "clobbers": [
      "UXCam"
    ]
  },
  {
    "id": "cordova.plugins.diagnostic.Diagnostic",
    "file": "plugins/cordova.plugins.diagnostic/www/android/diagnostic.js",
    "pluginId": "cordova.plugins.diagnostic",
    "merges": [
      "cordova.plugins.diagnostic"
    ]
  },
  {
    "id": "cordova.plugins.diagnostic.Diagnostic_Location",
    "file": "plugins/cordova.plugins.diagnostic/www/android/diagnostic.location.js",
    "pluginId": "cordova.plugins.diagnostic",
    "merges": [
      "cordova.plugins.diagnostic.location"
    ]
  },
  {
    "id": "cordova.plugins.diagnostic.Diagnostic_Bluetooth",
    "file": "plugins/cordova.plugins.diagnostic/www/android/diagnostic.bluetooth.js",
    "pluginId": "cordova.plugins.diagnostic",
    "merges": [
      "cordova.plugins.diagnostic.bluetooth"
    ]
  },
  {
    "id": "cordova.plugins.diagnostic.Diagnostic_Wifi",
    "file": "plugins/cordova.plugins.diagnostic/www/android/diagnostic.wifi.js",
    "pluginId": "cordova.plugins.diagnostic",
    "merges": [
      "cordova.plugins.diagnostic.wifi"
    ]
  },
  {
    "id": "cordova.plugins.diagnostic.Diagnostic_Camera",
    "file": "plugins/cordova.plugins.diagnostic/www/android/diagnostic.camera.js",
    "pluginId": "cordova.plugins.diagnostic",
    "merges": [
      "cordova.plugins.diagnostic.camera"
    ]
  },
  {
    "id": "cordova.plugins.diagnostic.Diagnostic_Notifications",
    "file": "plugins/cordova.plugins.diagnostic/www/android/diagnostic.notifications.js",
    "pluginId": "cordova.plugins.diagnostic",
    "merges": [
      "cordova.plugins.diagnostic.notifications"
    ]
  },
  {
    "id": "cordova.plugins.diagnostic.Diagnostic_Microphone",
    "file": "plugins/cordova.plugins.diagnostic/www/android/diagnostic.microphone.js",
    "pluginId": "cordova.plugins.diagnostic",
    "merges": [
      "cordova.plugins.diagnostic.microphone"
    ]
  },
  {
    "id": "cordova.plugins.diagnostic.Diagnostic_Contacts",
    "file": "plugins/cordova.plugins.diagnostic/www/android/diagnostic.contacts.js",
    "pluginId": "cordova.plugins.diagnostic",
    "merges": [
      "cordova.plugins.diagnostic.contacts"
    ]
  },
  {
    "id": "cordova.plugins.diagnostic.Diagnostic_Calendar",
    "file": "plugins/cordova.plugins.diagnostic/www/android/diagnostic.calendar.js",
    "pluginId": "cordova.plugins.diagnostic",
    "merges": [
      "cordova.plugins.diagnostic.calendar"
    ]
  },
  {
    "id": "cordova.plugins.diagnostic.Diagnostic_NFC",
    "file": "plugins/cordova.plugins.diagnostic/www/android/diagnostic.nfc.js",
    "pluginId": "cordova.plugins.diagnostic",
    "merges": [
      "cordova.plugins.diagnostic.nfc"
    ]
  },
  {
    "id": "cordova.plugins.diagnostic.Diagnostic_External_Storage",
    "file": "plugins/cordova.plugins.diagnostic/www/android/diagnostic.external_storage.js",
    "pluginId": "cordova.plugins.diagnostic",
    "merges": [
      "cordova.plugins.diagnostic.external_storage"
    ]
  },
  {
    "id": "cordova-plugin-contacts.contacts",
    "file": "plugins/cordova-plugin-contacts/www/contacts.js",
    "pluginId": "cordova-plugin-contacts",
    "clobbers": [
      "navigator.contacts"
    ]
  },
  {
    "id": "cordova-plugin-contacts.Contact",
    "file": "plugins/cordova-plugin-contacts/www/Contact.js",
    "pluginId": "cordova-plugin-contacts",
    "clobbers": [
      "Contact"
    ]
  },
  {
    "id": "cordova-plugin-contacts.convertUtils",
    "file": "plugins/cordova-plugin-contacts/www/convertUtils.js",
    "pluginId": "cordova-plugin-contacts"
  },
  {
    "id": "cordova-plugin-contacts.ContactAddress",
    "file": "plugins/cordova-plugin-contacts/www/ContactAddress.js",
    "pluginId": "cordova-plugin-contacts",
    "clobbers": [
      "ContactAddress"
    ]
  },
  {
    "id": "cordova-plugin-contacts.ContactError",
    "file": "plugins/cordova-plugin-contacts/www/ContactError.js",
    "pluginId": "cordova-plugin-contacts",
    "clobbers": [
      "ContactError"
    ]
  },
  {
    "id": "cordova-plugin-contacts.ContactField",
    "file": "plugins/cordova-plugin-contacts/www/ContactField.js",
    "pluginId": "cordova-plugin-contacts",
    "clobbers": [
      "ContactField"
    ]
  },
  {
    "id": "cordova-plugin-contacts.ContactFindOptions",
    "file": "plugins/cordova-plugin-contacts/www/ContactFindOptions.js",
    "pluginId": "cordova-plugin-contacts",
    "clobbers": [
      "ContactFindOptions"
    ]
  },
  {
    "id": "cordova-plugin-contacts.ContactName",
    "file": "plugins/cordova-plugin-contacts/www/ContactName.js",
    "pluginId": "cordova-plugin-contacts",
    "clobbers": [
      "ContactName"
    ]
  },
  {
    "id": "cordova-plugin-contacts.ContactOrganization",
    "file": "plugins/cordova-plugin-contacts/www/ContactOrganization.js",
    "pluginId": "cordova-plugin-contacts",
    "clobbers": [
      "ContactOrganization"
    ]
  },
  {
    "id": "cordova-plugin-contacts.ContactFieldType",
    "file": "plugins/cordova-plugin-contacts/www/ContactFieldType.js",
    "pluginId": "cordova-plugin-contacts",
    "merges": [
      ""
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "call-number": "0.0.2",
  "cordova-android-support-gradle-release": "2.0.1",
  "cordova-plugin-camera": "4.0.3",
  "cordova-plugin-console": "1.1.0",
  "cordova-plugin-device": "2.0.2",
  "cordova-plugin-email-composer": "0.9.2",
  "cordova-plugin-file": "6.0.1",
  "cordova-plugin-file-transfer": "1.7.1",
  "cordova-plugin-inappbrowser": "3.0.0",
  "cordova-plugin-ionic-keyboard": "2.1.3",
  "cordova-plugin-ionic-webview": "4.0.0",
  "cordova-plugin-network-information": "2.0.1",
  "cordova-plugin-splashscreen": "5.0.2",
  "cordova-plugin-statusbar": "2.4.2",
  "cordova-plugin-vibration": "3.1.0",
  "cordova-plugin-whitelist": "1.3.3",
  "cordova-support-google-services": "1.2.1",
  "cordova-uxcam": "3.0.2",
  "cordova.plugins.diagnostic": "4.0.12",
  "phonegap-plugin-multidex": "1.0.0",
  "cordova-plugin-contacts": "3.0.1"
};
// BOTTOM OF METADATA
});