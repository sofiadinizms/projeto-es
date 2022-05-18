import React, { useState} from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  const [section, setSection] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.mainTitle}>NFT</Text>
      <Text style={styles.title}>o jogo</Text>
      <View style={styles.separator} />
      {section === 0 && (
        <>
          <TouchableOpacity style={styles.menuButton}  onPress={() => {navigation.navigate("LevelOne")}} >
            <Text style={styles.buttonText}>Jogar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuButton} onPress={() => {setSection(1)}} >
            <Text style={styles.buttonText}>Níveis</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuButton} onPress={() => {setSection(1)}} >
            <Text style={styles.buttonText}>Quiz</Text>
          </TouchableOpacity>
          <View style={styles.sectionFooter}>
            <TouchableOpacity style={styles.menuButton} onPress={() => {setSection(2)}}>
              <Text style={styles.buttonText}>Sobre nós</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuButton} onPress={() => {navigation.navigate("InConstruction")}} >
              <Text style={styles.buttonText}>Configurações</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
      {section === 1 && (
        <>
          <View style={styles.sectionTitleContainer}>
            <Text style={styles.title}>Níveis</Text>
          </View>
          <TouchableOpacity style={styles.menuButton} onPress={() => {navigation.navigate("LevelOne")}} >
            <Text style={styles.buttonText}>Nível 1 - O Museu</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuButton} onPress={() => {navigation.navigate("LevelTwo")}} >
            <Text style={styles.buttonText}>Nível 2 - O labirinto</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuButton} onPress={() => {navigation.navigate("LevelThree")}} >
            <Text style={styles.buttonText}>Nível 3 - O espaço</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuButton} onPress={() => {setSection(0)}}>
            <Text style={styles.buttonText}>Voltar</Text>
          </TouchableOpacity>
        </>
      )} 
      {section === 2 && (
        <>
          <View style={styles.sectionTitleContainer}>
            <Text style={styles.title}>Sobre nós</Text>
          </View>
          <View style={styles.menuButton} >
            <Text style={styles.regularText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>
          </View>
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
    marginBottom: 8,
    fontSize: 24,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
    backgroundColor: "grey",
  },
  sectionTitleContainer: {
    margin: 16,
  },
  sectionFooter: {
    width: '100%',
    marginTop: 32,
    alignItems: 'center',
  },
  menuButton: {
    width: '80%',
    margin: 8,
    padding: 8,
    borderRadius: 12,
    border: 2,
    borderWidth: 1,
    borderColor: "grey",
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 18,
  },
  regularText: {
    margin: 4,
    textAlign: 'justify',
    fontSize: 18,
  }
});
