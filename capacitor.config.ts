import type { CapacitorConfig } from '@capacitor/cli';

/**
 * Capacitor configuration.
 * - `appId`: unique app identifier (reverse-domain format).
 * - `appName`: visible name of the application on the device.
 * - `webDir`: folder with the web build that Capacitor bundles into the native app.
 */
const config: CapacitorConfig = {
  appId: 'com.cristhianpereira.portfolio',
  appName: 'Cristhian Pereira',
  webDir: 'dist'
};

export default config;
