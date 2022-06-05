

export async function fetchShoppingLists(token) {
    try {
        const response = await fetch(
            "https://www.web-jarvis.de/v1/shoppinglists/",
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': token
                }
            }
        )

        const lists = await response.json();

        return lists.data || [];
    } catch (err) {
        console.error(err);
        return [];
    }
}