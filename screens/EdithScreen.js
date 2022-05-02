import * as React from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { List, DataTable } from 'react-native-paper';
import * as jarvisClient from '../services/jarivsClient';

function Product({ product }) {
    return (
        <DataTable.Row>
            <DataTable.Cell>{product.name}</DataTable.Cell>
            <DataTable.Cell numeric>{product.amount}</DataTable.Cell>
        </DataTable.Row>
    );
}

function ShoppingList({ list }) {
    return (
        <List.Accordion
            title={list.planned_for}
            description={`Of ${list.belongs_to.name}`}
        >
            <DataTable>
                <DataTable.Header>
                    <DataTable.Title>Name</DataTable.Title>
                    <DataTable.Title numeric>Amount</DataTable.Title>
                </DataTable.Header>

                {
                    list.products.map(product => <Product key={product.id} product={product} />)
                }

            </DataTable>
        </List.Accordion>
    );
}

function ShoppingLists(props) {
    return (
        <List.Section title="Shopping lists">
            {
                props.lists.map(list =>
                    <ShoppingList key={list.id} list={list} />
                )
            }
        </List.Section>
    );
}

export default function EdithScreen() {
    const [lists, setLists] = React.useState([]);

    React.useEffect(async () => {
        const fetchedLists = await jarvisClient.fetchShoppingLists();
        setLists(fetchedLists);
    });

    return (
        <SafeAreaView >
            <ShoppingLists lists={lists} />
        </SafeAreaView>
    );
}
