import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import bg from "../assets/background7.jpg"
import gb from "../assets/background8.jpg"
export default function Pisantes() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>👟 Evolução dos Pisantes</Text>

     
      <Image
        source={bg}
        style={styles.image}
      />
      <Text style={styles.text}>
        No início, os jogadores utilizavam sapatos de couro simples, sem amortecimento ou aderência.
        Com o avanço da tecnologia, surgiram tênis específicos para o esporte, oferecendo maior conforto e segurança.
      </Text>

      <Image
        source={gb}
        style={styles.image}
      />
      <Text style={styles.text}>
        Hoje, os calçados de tênis são desenvolvidos com materiais leves, solados adaptados para diferentes tipos de quadra
        e sistemas de amortecimento que reduzem o impacto e previnem lesões.
      </Text>

      
      <Text style={styles.text}>
        Marcas investem em design e performance, criando modelos que equilibram estilo e funcionalidade,
        tornando os pisantes parte essencial da evolução do esporte.
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

