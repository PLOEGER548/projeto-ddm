import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import bg from "../assets/backgound2.jpg"
export default function AboutMe() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={bg}
        style={styles.avatar}
      />
      <Text style={styles.title}>👤 Guilherme</Text>
      <Text style={styles.subtitle}>Olá, meu nome é Guilherme e esse foi o meu projeto final de DDM,
         nesta parte vc podera ver um pouco mais sobre mim</Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>🎓 Formação</Text>
        <Text style={styles.cardText}>
          Atualmente cursando o 2* Mtec informatica para internet, na escola Etec professor Milton gazzeti
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>💼 Objetivos</Text>
        <Text style={styles.cardText}>
          Meu objetivo é me tornar uma pessoa de sucesso na parte de emprededorismo, e ser um otimo advogado
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>🎾 Interesses</Text>
        <Text style={styles.cardText}>
          Apaixonado por esportes, especialmente tênis, e tambem gosto de praticar atividades fisicas
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flexGrow: 1, backgroundColor: '#f1f8e9', padding: 20, alignItems: 'center' },
  avatar: { width: 120, height: 120, borderRadius: 60, marginBottom: 20 },
  title: { fontSize: 32, fontWeight: 'bold', color: '#388e3c', marginBottom: 10 },
  subtitle: { fontSize: 18, color: '#555', marginBottom: 20, textAlign: 'center' },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
    width: '100%',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  cardTitle: { fontSize: 20, fontWeight: '600', marginBottom: 8, color: '#1e88e5' },
  cardText: { fontSize: 16, color: '#333', textAlign: 'justify' },
});