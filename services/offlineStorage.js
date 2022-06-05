import AsyncStorage from '@react-native-async-storage/async-storage';

const slKey = 'shoppingLists';

export async function storeShoppingLists(shoppingLists) {
    try {
        const lists = JSON.stringify(shoppingLists);
        await AsyncStorage.setItem(slKey, lists);
    } catch (err) {
        console.error(err);
        return [];
    }
}

export async function getShoppingLists() {
    try {
        const lists = await AsyncStorage.getItem(slKey);
        return JSON.parse(lists);
    } catch (err) {
        console.error(err);
        return [];
    }
}
