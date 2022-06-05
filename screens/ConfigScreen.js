import * as React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TextInput, Headline, Text } from 'react-native-paper';
import * as secureStorage from '../services/secureStorage';
import { FAB, Snackbar } from 'react-native-paper';


export default function ConfigScreen() {
    const [token, setToken] = React.useState("");

    const [visible, setVisible] = React.useState(false);

    const save = async (token) => {
        await secureStorage.saveToken(token);
        setVisible(true);
    }

    React.useEffect(async () => {
        const savedToken = await secureStorage.getToken();
        setToken(savedToken);
    }, []);

    return (
        <SafeAreaView style={style.container}>
            <Headline style={style.headline}>
                Config
            </Headline>
            <TextInput
                label='Token'
                value={token}
                secureTextEntry={true}
                onChangeText={(text) => {
                    setToken(text);
                }}
            />
            <FAB
                style={style.fab}
                small
                icon="content-save"
                onPress={async () => save(token)}
            />
            <Snackbar
                visible={visible}
                style={style.snackbar}
                onDismiss={() => setVisible(false)}
                duration={3000}
                action={{
                    label: 'x',
                    onPress: () => setVisible(false),
                }}
            >
                Saved
            </Snackbar>
        </SafeAreaView>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        margin: 15,
        justifyContent: 'flex-start',
    },
    headline: {
        textAlign: 'center',
    },
    fab: {
        position: 'absolute',
        backgroundColor: '#ff9800',
        margin: 15,
        right: -10,
        bottom: -10,
    },
    snackbar: {
    }
})
