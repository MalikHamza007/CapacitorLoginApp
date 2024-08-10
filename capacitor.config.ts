import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'Riyal',
  webDir: 'www',
  plugins: {
    GoogleAuth:{
      scopes:['profile', 'email'],
      serverClientId:'330649723742-9et6fb38gl9vg2ihirrni98msl4uhck2.apps.googleusercontent.com' ,
      forceCodeForRefreshToken:true
    }
  }
};

export default config;
