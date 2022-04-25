import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import EdithScreen from "./screens/EdithScreen";
import JarvisScreen from "./screens/JarvisScreen";
import Ionicons from "@expo/vector-icons/Ionicons";
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const Tab = createMaterialBottomTabNavigator();

export default function App() {
    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <Tab.Navigator initialRouteName={"Jarvis"}
                               barStyle={{backgroundColor: '#ff9800'}}>
                    <Tab.Screen
                        name="Jarvis"
                        component={JarvisScreen}
                        options={tabOptions("cart")}
                    />

                    <Tab.Screen
                        name="Edith3"
                        component={EdithScreen}
                        options={tabOptions("phone-portrait")}
                    />
                </Tab.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    );
}

function tabOptions(iconName) {
    return {
        tabBarIcon: ({color}) => {
            return <Ionicons name={iconName} size={20} color={color}/>;
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
