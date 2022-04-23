import * as React from 'react';
import {DefaultStyle} from "../styles/default";
import WebView from "react-native-webview";

export default function JarvisScreen() {
    return (
        <WebView
            style={DefaultStyle.container}
            source={{uri: "https://web-jarvis.de"}}
        />
    )
}