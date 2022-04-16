import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet } from 'react-native';
import { FAB } from 'react-native-paper';

import { View } from '../components/Themed';

export default function ModalScreen() {
  return (
    <View style={styles.container}>
      <FAB
          style={styles.fab}
          small
          icon="content-save"
          onPress={() => console.log('Pressed')}
      />
      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
});
