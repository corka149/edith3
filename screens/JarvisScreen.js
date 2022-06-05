import * as React from 'react';
import {DefaultStyle} from "../styles/default";
import {SafeAreaView} from 'react-native-safe-area-context';
import WebView from "react-native-webview";

export default function JarvisScreen() {
    return (
        <SafeAreaView style={{ flex:1 }}>
            <WebView
                style={DefaultStyle.container}
                source={{uri: "https://www.web-jarvis.de"}}
            />
        </SafeAreaView>
    )
}