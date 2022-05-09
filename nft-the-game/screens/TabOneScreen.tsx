import React, { useState} from 'react';
import { StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  const [section, setSection] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.mainTitle}>NFT</Text>
      <Text style={styles.title}>o jogo</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      {section === 0 && (
        <>
        <Text style={styles.title}>Menu principal</Text>
        <TouchableOpacity style={styles.menuButton} >
          <Text style={styles.buttonText}>Começar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuButton} onPress={() => {setSection(1)}} >
          <Text style={styles.buttonText}>Níveis</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuButton} >
          <Text style={styles.buttonText}>Sobre nós</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuButton} >
          <Text style={styles.buttonText}>Configurações</Text>
        </TouchableOpacity>
        </>
      )}
      {section === 1 && (
        <>
        <Text style={styles.title}>Níveis</Text>
        <TouchableOpacity style={styles.menuButton} >
          <Text style={styles.buttonText}>Nível 1 - O Museu</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuButton} >
          <Text style={styles.buttonText}>Nível 2 - O labirinto</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuButton} >
          <Text style={styles.buttonText}>Nível 3 - O espaço</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuButton} onPress={() => {setSection(0)}}>
          <Text style={styles.buttonText}>Voltar</Text>
        </TouchableOpacity>
        </>
      )} 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainTitle: {
    fontSize: 60,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  menuButton: {
    margin: 8,
    padding: 8,
    borderRadius: 5,
    backgroundColor: '#e5e5e5',
  },
  buttonText: {
    fontSize: 18,
  }
});
