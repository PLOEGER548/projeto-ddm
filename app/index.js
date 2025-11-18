import { subscribe } from 'expo-router/build/link/linking';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pagina Inicial</Text>
      <Text style={styles.subtitle}>Bem Vindo ao Aplicativo!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontsize: 36,
  },
  
  subtitle: {
    fontSize: 18,
    color: '#888',
  }
});