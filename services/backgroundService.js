/**
 * Origin
 * https://docs.expo.dev/versions/latest/sdk/background-fetch/
 */
import * as BackgroundFetch from 'expo-background-fetch';
import * as TaskManager from 'expo-task-manager';
import * as secureStorage from "./secureStorage";
import * as jarvisClient from "./jarivsClient";

const BACKGROUND_FETCH_TASK = 'background-fetch';

// 1. Define the task by providing a name and the function that should be executed
// Note: This needs to be called in the global scope (e.g outside of your React components)
TaskManager.defineTask(BACKGROUND_FETCH_TASK, async () => {
    try {
        const token = await secureStorage.getToken();
        const lists = await jarvisClient.fetchShoppingLists(token);

        // Be sure to return the successful result type!
        return BackgroundFetch.BackgroundFetchResult.NewData;
    } catch (err) {
        console.error(err);
        return BackgroundFetch.BackgroundFetchResult.Failed;
    }
});

// 2. Register the task at some point in your app by providing the same name, and some configuration
//    options for how the background fetch should behave.
// Note: This does NOT need to be in the global scope and CAN be used in your React components!
export async function registerBackgroundFetchAsync() {
    return BackgroundFetch.registerTaskAsync(BACKGROUND_FETCH_TASK, {
        minimumInterval: 60 * 30, // 30 minutes
        stopOnTerminate: false, // android only,
        startOnBoot: true, // android only
    });
}

export async function isRegistered() {
    return await TaskManager.isTaskRegisteredAsync(BACKGROUND_FETCH_TASK);
}
