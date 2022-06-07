import * as React from 'react';
import * as SecureStore from 'expo-secure-store';

const tokenKey = 'jarvisApiToken'

/**
 * Saves the jARVIS API token.
 * @param token
 * @returns {Promise<void>}
 */
export async function saveToken(token) {
    try {
        await SecureStore.setItemAsync(tokenKey, token);
    } catch (err) {
        console.error(err);
        alert('Could not store API token');
    }
}

/**
 * Get the jARVIS API token.
 * @returns {Promise<string>}
 */
export async function getToken() {
    let token = '';

    try {
        token = await SecureStore.getItemAsync(tokenKey);
    } catch (err) {
        console.error(err);
    }

    if (!token) {
        alert('No jARVIS API token available');
    }

    return token;
}
