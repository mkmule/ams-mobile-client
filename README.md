# AMS Client
React Native mobile application integrated with Firebase Realtime Database.

## Prerequisites
Configured React Native development environment, namely:

- Java SDK (preferred: _openjdk@17_ due to some RN Dependencies)
- Android SDK
- Android Simulator(s) / Device (included in Android Studio)
- iOS xCode and Command Line Tools
- iOS Simulators / Device
- iOS Developer program subscription (for device installation)

Also, you might require to configure your environment variables, ex:
```
export JAVA_HOME="/opt/homebrew/Cellar/openjdk@17/17.0.9/libexec/openjdk.jdk/Contents/Home"
export ANDROID_HOME="$HOME/Library/Android/sdk"
```

## Setup
In order to build and run the app you need to specify your firebase platform configuration files. These files are available within your firebase console once you add application platform.
```
/ios/GoogleService-Info.plist
/android/app/google-services.json
```

## Build & Run
Build (download required dependencies):
```
yarn install
npx pod-install
```

Run on simulator:
```
yarn run ios
yarn run android
yarn ios --simulator "iPhone 15 Pro" (example)
```

