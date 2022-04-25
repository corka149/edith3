import * as React from 'react';
import {StyleSheet, Text} from 'react-native';
import {DefaultStyle} from "../styles/default";
import {SafeAreaView} from 'react-native-safe-area-context';
import {TextInput, Headline, Divider} from 'react-native-paper';
import * as secureStorage from '../services/secureStorage';

export default function ConfigScreen() {
    const [token, setToken] = React.useState("");

    React.useEffect(async () => {
       const savedToken = await secureStorage.getToken();
       setToken(savedToken);
    });

    return (
        <SafeAreaView style={[DefaultStyle.default, style.container]}>
            <Headline>
                <Text>Config</Text>
            </Headline>
            <TextInput
                label='Token'
                value={token}
                secureTextEntry={true}
                onChangeText={async (text) => {
                    if (text.length > 0) {
                        setToken(text);
                        await secureStorage.saveToken(text);
                    }
                }}
            />
        </SafeAreaView>
    );
}

const style = StyleSheet.create({
    container: {
        margin: 15,
    },
})
