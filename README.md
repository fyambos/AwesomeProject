# AwesomeProject
## Requirements
[NodeApp](https://github.com/fyambos/NodeAPP)'s Requirements and Installation

## Requirements

**[Node LTS](https://nodejs.org/en/download/)**
> Pour exécuter le script, un peu comme une app react normale, d’ailleurs il y a la libraire react et la librairie react native. En web on a react-dom à la place de native.
> Choisir d'installer automatiquement les tools necessaires
>
**[Java JDK](https://www.oracle.com/java/technologies/javase/jdk11-archive-downloads.html)**
> Pour développer en Android notamment avec Android Studio, les versions supérieures à 14 ne sont pas compatibles, version recommandée: 11
 

**[Android Studio](https://developer.android.com/studio)**
> Pour windows il faut Android Studio, pour Mac il faut XCode

**yarn ou npm**

## Installation

```bash
git clone https://github.com/fyambos/AwesomeProject.git
```

### [Environnement de développement](https://reactnative.dev/docs/environment-setup):

Expo Go vs React Native CLI:
L’avantage de Expo Go est que l’on peut run sur son iPhone même sans Mac, mais Expo est un environnement à part, ni IOS, ni Android, et est à éviter car pose beaucoup de problèmes notamment lors de la compilation de l’app sur les téléphones.
React Native CLI est recommandé. Pour tester iOS sans iPhone utiliser Expo Go en parallèle.

### Variables Environnement et PATH:
**Windows:**
Dans les variables d’environnement ajouter (dans la section variable système en bas)

```bash
ANDROID_HOME
%LOCALAPPDATA%\Android\Sdk
```

Vérifier l’ajout avec Powershell: `Get-ChildItem -Path Env:\`

```bash
JAVA_HOME
C:\Program Files\Java\jdk-11.0.16.1
```

Ajouter tools dans le Path:
`%LOCALAPPDATA%\Android\Sdk\platform-tools`


**MacOS:**
Sur bash: vim ~/.bashrc OU Sur zsh: vim ~/.zshrc

```bash
export ANDROID_SDK_ROOT=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_SDK_ROOT/emulator
export PATH=$PATH:$ANDROID_SDK_ROOT/platform-tools
```

> Note: Need to restart the CMD and VSCode.

### Installer React Nagivation
```bash
npm install @react-navigation/native
npm install react-native-screens react-native-safe-area-context
```


Choisir la [navigation](https://reactnavigation.org/docs/hello-react-navigation) à installer:
> Pour Stack:
> `npm install @react-navigation/native-stack`

### Start the metro bundler and run the app
Navigate to the cloned repository folder and do in two separate terminals:
First terminal:
```
npx react-native start
```
Second terminal:
```
npx react-native run-android
```

The app will open (make sure a device is created in Android studio's device manager, [create a device](https://developer.android.com/studio/run/managing-avds?hl=fr) if not, or use [your own android device](https://reactnative.dev/docs/running-on-device))

Test the app with:
Mail: test@test.com
Pass: test
