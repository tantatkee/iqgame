# 🧠 IQGame

A premium brain-training puzzle game built with **React** and **Vite**. Challenge yourself across 6 core subjects: Math, Science, History, Geography, Language, and Logic.

---

## 🚀 Web Development

To run the game locally in your browser:

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start the development server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` (or the port shown in your terminal).

3. **Build for production**:
   ```bash
   npm run build
   ```

---

## 📱 Mobile App (Android & iOS)

To run IQGame as a native app on Android or Apple devices, we recommend using **[Capacitor](https://capacitorjs.com/)**.

### 1. Setup Capacitor
First, initialize Capacitor in the project:
```bash
npm install @capacitor/core @capacitor/cli
npx cap init IQGame com.yourname.iqgame --web-dir dist
```

### 2. Add Platforms
```bash
# For Android
npm install @capacitor/android
npx cap add android

# For iOS (Requires macOS)
npm install @capacitor/ios
npx cap add ios
```

### 3. Build and Sync
Every time you make changes to the web code, you must build and sync to the native projects:
```bash
npm run build
npx cap sync
```

### 4. Run on Device
*   **Android (WSL Setup)**:
    Since you are working in WSL, follow these steps to set up the Android environment:

#### 1. Install Android Studio in WSL
Download the Linux version of Android Studio and install it in your home directory:
```bash
# Example for installing in ~/android-studio
tar -xvzf android-studio-*-linux.tar.gz
cd android-studio/bin
./studio.sh
```
*Note: This requires WSLg (standard in Windows 11 and updated Windows 10).*

#### 2. Configure Environment Variables
Add these to your `~/.bashrc` or `~/.zshrc`:
```bash
export CAPACITOR_ANDROID_STUDIO_PATH=$HOME/android-studio/bin/studio.sh
export ANDROID_HOME=$HOME/Android/Sdk
export PATH=$PATH:$ANDROID_HOME/platform-tools
export PATH=$PATH:$ANDROID_HOME/tools/bin
```

#### 3. Connect Physical Device
To run on a physical device from WSL, you need to "attach" the USB device to WSL:
1.  Install **[usbipd-win](https://github.com/dorssel/usbipd-win)** on Windows. See https://learn.microsoft.com/en-us/windows/wsl/connect-usb.
2.  On Windows Terminal (Admin), list devices: `usbipd list`.
3.  Bind your phone: `usbipd bind --busid <BUSID>`.
4.  Attach it to WSL: `usbipd attach --wsl --busid <BUSID>`.
5.  In WSL, run `adb devices` to confirm connection.

#### 4. Run IQGame
```bash
npx cap open android
```
The above command will bring up Android Studio.
Select your connected device in Android Studio and click **Run**.
    
*   **iOS**: 
    ```bash
    npx cap open ios
    ```
    This opens Xcode. Select your device/simulator and click **Run**.

---

## 🧩 Features
- **6 subjects** with curated puzzle banks.
- **Dynamic Difficulty**: Easy, Medium, and Hard modes.
- **XP & Leveling**: Gamified progress stored locally.
- **Responsive Design**: Optimized for both high-end desktops and mobile screens.
- **Audio Effects**: Built-in sound cues for feedback.

## 🛠 Tech Stack
- **Frontend**: React.js
- **Tooling**: Vite
- **Styling**: Vanilla CSS (Modern CSS variables & Grid)
- **Persistence**: LocalStorage API
- **Audio**: Web Audio API
