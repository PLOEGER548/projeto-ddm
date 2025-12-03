import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import bg from "../assets/background3.jpg"
import fg from "../assets/background9.jpg"
import gf from "../assets/background10.jpg"
export default function Historia() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>📜 História do Tênis</Text>
      <Image
        source={bg}
        style={styles.image}
      />
      <Text style={styles.text}>
        O tênis moderno surgiu na Inglaterra no século XIX, inspirado em jogos franceses como o “jeu de paume”.
        Rapidamente se popularizou entre a aristocracia e ganhou regras oficiais em 1877, com o primeiro torneio de Wimbledon.
      </Text>

      <Image
              source={fg}
              style={styles.image}
            />
      <Text style={styles.text}>
        Ao longo do século XX, o esporte se expandiu globalmente, tornando-se olímpico e atraindo milhões de fãs.
        Grandes torneios como Roland Garros, US Open e Australian Open consolidaram o tênis como um dos esportes mais prestigiados.
      </Text>

      <Image
              source={gf}
              style={styles.image}
            />
      <Text style={styles.text}>
        Ídolos como Roger Federer, Rafael Nadal, Novak Djokovic e Serena Williams marcaram gerações,
        elevando o tênis a um patamar de excelência e inspiração mundial, assim inspirando muitos jogadores a se tornarem os melhores.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#f9f9f9', // fundo neutro
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#2e7d32', // cor temática
    textShadowColor: 'rgba(0,0,0,0.2)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  image: {
    width: '100%',
    height: 220,
    borderRadius: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 4,
  },
  text: {
    fontSize: 16,
    marginBottom: 18,
    textAlign: 'justify',
    color: '#444',
    lineHeight: 22,
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
});

