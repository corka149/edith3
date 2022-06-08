import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import EdithScreen from "./screens/EdithScreen";
import JarvisScreen from "./screens/JarvisScreen";
import Ionicons from "@expo/vector-icons/Ionicons";
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider as PaperProvider} from 'react-native-paper';
import ConfigScreen from "./screens/ConfigScreen";
import * as backgroundService from "./services/backgroundService";
import * as BackgroundFetch from "expo-background-fetch";

const Tab = createMaterialBottomTabNavigator();

export default function App() {
    React.useEffect(async () => {
        const isRegistered = await backgroundService.isRegistered();

        if (!isRegistered) {
            await backgroundService.registerBackgroundFetchAsync();
        }
    }, []);

    return (
        <PaperProvider>
            <SafeAreaProvider>
                <NavigationContainer>
                    <Tab.Navigator initialRouteName={"Jarvis"}
                                   barStyle={{backgroundColor: '#ff9800'}}>
                        <Tab.Screen
                            name="Jarvis"
                            component={JarvisScreen}
                            options={{
                                tabBarIcon: ({color}) => {
                                    return <Ionicons name='cart' size={20} color={color}/>;
                                },
                            }}
                        />

                        <Tab.Screen
                            name="Edith3"
                            component={EdithScreen}
                            options={{
                                tabBarIcon: ({color}) => {
                                    return <Ionicons name='phone-portrait' size={20} color={color}/>;
                                },
                            }}
                        />

                        <Tab.Screen
                            name={"Config"}
                            component={ConfigScreen}
                            options={{
                                tabBarIcon: ({color}) => {
                                    return <Ionicons name='construct' size={20} color={color}/>;
                                },
                            }}
                        />
                    </Tab.Navigator>
                </NavigationContainer>
            </SafeAreaProvider>
        </PaperProvider>
    );
}
