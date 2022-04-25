import * as React from 'react';
import {Text} from 'react-native';
import {DefaultStyle} from "../styles/default";
import { SafeAreaView } from 'react-native-safe-area-context';

export default function EdithScreen() {
    return (
        <SafeAreaView style={DefaultStyle.container}>
            <Text>Edith3</Text>
        </SafeAreaView>
    );
}
