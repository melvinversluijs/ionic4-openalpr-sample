# Ionic 4 OpenALPR sample.

This sample project will be used to demonstrate the usage of the [Cordova OpenALPR plugin](https://github.com/iMicknl/cordova-plugin-openalpr).

## Usage

### iOS

1. Go to the root of the project using a terminal.
2. Use `npm install` to install the required packages.
3. Use `ionic cordova prepare ios --no-build` to install the required cordova plugins, choose `Y` when prompted to add the ios platform.
4. Use `cd ./plugins/cordova-plugin-openalpr/src/ios/lib/opencv2.framework` to navigate to the opencv directory.
   1. In here you need to add 2 symlinks before being able to build the project. For some reason these symlinks get removed during installation.
   2. Use `ln -s ./Versions/A/Headers Headers` to create the Headers symlink.
   3. Use `ln -s ./Versions/A/Resources Resources` to create the Resources symlink.
5. Go back to the root of your project.
6. Remove the ios platform, since it has the plugin without the symlinks. `rm -rf platforms/ios`.
7. Use `ionic cordova build ios` to build the project for iOS.

Now you can open your created platform in Xcode where you can sign an build it. Afterwards you can use an emulator to test the applications.

After modifying the ionic code your are required to rebuild the ios platform using the command in step 7.
