

export async function fetchShoppingLists(params) {
    return [
        {
            id: 1,
            planned_for: "2022-04-05",
            belongs_to: {
                name: "Miller"
            },
            products: [
                {
                    id: 1,
                    name: "Bread",
                    amount: 2
                },
                {
                    id: 2,
                    name: "Beer",
                    amount: 22
                },
                {
                    id: 3,
                    name: "Butter",
                    amount: 3
                },
                {
                    id: 4,
                    name: "Board",
                    amount: 6
                }
            ]
        }
    ];
}