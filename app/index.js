import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import bg from "../assets/background.jpg";

export default function Index() {
  return (
    <ImageBackground source={bg} style={styles.background}>
      <View style={styles.overlay}>
        <Text style={styles.title}>🎾 Evolução do Tênis</Text>
        <Text style={styles.subtitle}>
          Um aplicativo informativo sobre a história do tênis, os calçados e as quadras.
        </Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingVertical: 60,
    backgroundColor: 'rgba(0,0,0,0.6)', // leve escurecimento com profundidade
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
    textAlign: 'center',
    textShadowColor: 'rgba(0,0,0,0.3)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  subtitle: {
    fontSize: 18,
    color: '#f0f0f0',
    textAlign: 'center',
    lineHeight: 24,
    maxWidth: 320,
  },
});
