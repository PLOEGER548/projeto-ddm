import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import pg from "../assets/background4.jpg"
import gp from "../assets/background5.jpg"
import gh from "../assets/background6.jpg"
export default function Quadras() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>🏟️ Tipos de Quadra</Text>

      
      <Image
        source={pg}
        style={styles.image}
      />
      <Text style={styles.text}>
        • Saibro: quadra mais lenta, favorece trocas longas e jogadores consistentes,
         É o piso de Roland Garros uma das quadras de Saibro mais famosas do mundo, localizada em Paris na França.
      </Text>

      
      <Image
        source={gp}
        style={styles.image}
      />
      <Text style={styles.text}>
        • Grama: quadra rápida, favorece saques e voleios. Wimbledon é o torneio mais famoso nesse piso,
         principalmente porque todos os tenistas tem q usar vestes brancas, uma regra q remonta tempos pré historicos do tenis.
      </Text>

      
      <Image
        source={gh}
        style={styles.image}
      />
      <Text style={styles.text}>
        • Piso duro: equilibrado, mistura velocidade e resistência, US Open e Australian Open são disputados nesse tipo de quadra,
         naturalmente é a quadra mais comum do tenis.
      </Text>

      <Text style={styles.text}>
        Cada tipo de quadra influencia diretamente o estilo de jogo, exigindo dos atletas adaptação técnica e estratégica.
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

