import { Haptics, ImpactStyle, NotificationType } from '@capacitor/haptics';
import { Toast } from '@capacitor/toast';

/**
 * Native feedback service (haptics + toasts).
 *
 * Centralizes the app's tactile and visual responses so user actions "feel"
 * native. It is best-effort: in environments where haptics are not available
 * (for example a desktop browser), errors are silently ignored and the app
 * continues as normal.
 */
export const feedbackService = {
  /**
   * Light impact vibration, ideal to confirm a tap.
   */
  async impactLight(): Promise<void> {
    try {
      await Haptics.impact({ style: ImpactStyle.Light });
    } catch {
      /* Haptics not available (e.g. browser): ignored. */
    }
  },

  /**
   * Success notification vibration, for completed actions.
   */
  async success(): Promise<void> {
    try {
      await Haptics.notification({ type: NotificationType.Success });
    } catch {
      /* No haptics available: ignored. */
    }
  },

  /**
   * Shows a short native toast at the bottom of the screen.
   * @param text Message to display.
   */
  async toast(text: string): Promise<void> {
    try {
      await Toast.show({ text, duration: 'short', position: 'bottom' });
    } catch {
      /* No toast support: ignored. */
    }
  }
};
