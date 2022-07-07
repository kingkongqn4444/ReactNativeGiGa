<h1 align="center">
  React Native Giga
</h1>

<h3 align="center">
Project Setup Structure
</h3>

# Installation

Step 1 : install react native CLI from Official Page Setting up the development environment

```
https://reactnative.dev/docs/environment-setup
```

Step 2. Clone the project repository from github:

<p> Git Clone: </p>

```
git clone https://github.com/kingkongqn4444/ReactNativeGiGa
```

```
cd gagacover_test
```

Step 2. install package manager.

Yarn :

```
brew install yarn
```

Step 3. install package.

Yarn :

```
yarn install
```

Npm :

```
npm install
```

Step 3. Start project with 2 command

```
yarn start
```

Step 4. Start propject Android or Ios on simulator

Android:

```
react-native run-android
```

Ios:

```
react-native run-ios
```

## React Native debugging

1. Install RN Debuger from `https://github.com/jhen0409/react-native-debugger`

2. Run app on simulator or device

3. Run app React Native Debuger

4. Open context debugger on devices and choose Debug menu

5. Debug app.

## React Native Testting

Check out the \*.spec.js files in the project for tests. and run yarn test

```
yarn test
```

# Building the app

If you have Android Studio, simply open the project, wait for the gradle synchronization and then build/install the app.
It will download the project native library from our Maven repository as an AAR file so you don't have to build anything yourself.

If you don't have Android Studio, you can build and install the app using gradle:

```
./gradlew assembleDebug
```

will compile the APK file (assembleRelease to instead if you want to build a release package), and then

```
./gradlew installDebug
```

to install the generated APK in the previous step (use installRelease instead if you built a release package).

APK files are stored within `./app/build/outputs/apk/debug/` and `./app/build/outputs/apk/release/` directories.

# APK file

<a href="https://drive.google.com/file/d/1xjuAYjt3khRs6PmufLpt3Zd1rqistUuF/view?usp=sharing">`Download`</a>

## Using

- <a href="https://reactnative.dev/">React Native</a>
- <a href="https://reactnavigation.org/">React Navigation</a>
- <a href="https://redux.js.org/">React Redux</a>
- <a href="https://redux-saga.js.org/">Redux Saga</a>
- <a href="https://jestjs.io/">Jest</a>
