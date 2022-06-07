import * as React from 'react';
import {StyleSheet, Text, ScrollView} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {List, DataTable, FAB} from 'react-native-paper';
import * as jarvisClient from '../services/jarivsClient';
import * as secureStorage from '../services/secureStorage';

function Product({ product }) {
    const [color, setColor] = React.useState("black");

    const toggleColor = () => {
        const newColor = color === "black" ? "lightgrey" : "black";
        setColor(newColor);
    };

    return (
        <DataTable.Row
            onPress={toggleColor}
        >
            <DataTable.Cell >
                <Text style={{ color: color }}>{product.name}</Text>
            </DataTable.Cell>
            <DataTable.Cell numeric>
                <Text style={{ color: color }}>{product.amount}</Text>
            </DataTable.Cell>
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
    const [token, setToken] = React.useState('');

    React.useEffect(async () => {
        const storedToken = await secureStorage.getToken();
        setToken(storedToken);

        if (storedToken) {
            const fetchedLists = await jarvisClient.fetchShoppingLists(storedToken);
            setLists(fetchedLists);
        }
    }, [token]);

    return (
        <SafeAreaView style={style.container}>
            <ShoppingLists lists={lists} />
            <FAB
                style={style.fab}
                small
                icon="refresh"
                onPress={async () => {
                    if (token) {
                        const fetchedLists = await jarvisClient.fetchShoppingLists(token);
                        setLists(fetchedLists);
                    }
                }}
            />
        </SafeAreaView>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        margin: 15,
        justifyContent: 'flex-start',
    },
    fab: {
        position: 'absolute',
        backgroundColor: '#ff9800',
        margin: 15,
        right: -10,
        bottom: -10,
    },
})
