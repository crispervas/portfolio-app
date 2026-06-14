import { Preferences } from '@capacitor/preferences';

/**
 * Persistent storage service.
 *
 * Wraps the `@capacitor/preferences` plugin to offer a typed, JSON-oriented API.
 * It works the same in the browser (backed by localStorage) and on iOS/Android
 * (native storage), so the rest of the app never needs to know where the data
 * is actually stored.
 *
 * Every operation degrades gracefully: if storage fails, the app keeps working
 * with a default value instead of crashing.
 */
export const storageService = {
  /**
   * Reads and deserializes a JSON value stored under `key`.
   * @param key Storage key.
   * @param fallback Value returned if it does not exist or an error occurs.
   */
  async get<T>(key: string, fallback: T): Promise<T> {
    try {
      const { value } = await Preferences.get({ key });
      return value ? (JSON.parse(value) as T) : fallback;
    } catch (error) {
      console.error(`[storageService] Error reading "${key}":`, error);
      return fallback;
    }
  },

  /**
   * Serializes and stores a value under `key`.
   * @param key Storage key.
   * @param value Value to persist (serialized to JSON).
   */
  async set<T>(key: string, value: T): Promise<void> {
    try {
      await Preferences.set({ key, value: JSON.stringify(value) });
    } catch (error) {
      console.error(`[storageService] Error saving "${key}":`, error);
    }
  },

  /**
   * Removes the value associated with `key`.
   * @param key Storage key.
   */
  async remove(key: string): Promise<void> {
    try {
      await Preferences.remove({ key });
    } catch (error) {
      console.error(`[storageService] Error removing "${key}":`, error);
    }
  }
};
