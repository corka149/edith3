import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import EdithScreen from "./screens/EdithScreen";
import JarvisScreen from "./screens/JarvisScreen";
import Ionicons from "@expo/vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
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
    );
}

function tabOptions(iconName) {
    return {
        tabBarIcon: ({ color, size }) => {
            return <Ionicons name={iconName} size={size} color={color} />;
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
