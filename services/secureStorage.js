import * as React from 'react';
import * as SecureStore from 'expo-secure-store';

const tokenKey = 'jarvisApiToken'

/**
 * Saves the jARVIS API token.
 * @param token
 * @returns {Promise<void>}
 */
export async function saveToken(token) {
    await SecureStore.setItemAsync(tokenKey, token);
}

/**
 * Get the jARVIS API token.
 * @returns {Promise<string>}
 */
export async function getToken() {
    const token = await SecureStore.getItemAsync(tokenKey);

    if (!token) {
        alert('No jARVIS API token available');
    }

    return token;
}
