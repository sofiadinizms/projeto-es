import React, { useState} from 'react';
import { StyleSheet, TouchableOpacity, Linking, Share } from 'react-native';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  const [section, setSection] = useState(0);

  const onShare = async () => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const result = await Share.share({
        message: `Você sabia que qualquer pessoa pode ter um NFT? Muitas pessoas ainda acham que o NFT pode representar apenas artes digitais. Porém, ele já está inserido em diversas áreas, como no setor de alimentos, música, moda e até esportes.\n
        Venha conosco conhecer mais sobre essa tecnologia!\n
        App Store: https://apps.apple.com/br/app/ntf-oo-jogo\nGoogle Play: https://play.google.com/apps/internaltest/4701163021900152778\nVisite o nosso site:\nhttp://projeto-nft-o-jogo.herokuapp.com/`,
      });
    } catch (error) {
      alert(error.message);
    }
  };


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
          <TouchableOpacity style={styles.menuButton} onPress={() => {setSection(3)}} >
            <Text style={styles.buttonText}>Quiz</Text>
          </TouchableOpacity>
          <View style={styles.sectionFooter}>
            <TouchableOpacity style={styles.menuButton} onPress={() => {setSection(2)}}>
              <Text style={styles.buttonText}>Sobre nós</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuButton} onPress={() => {onShare()}} >
              <Text style={styles.buttonText}>Compartilhar</Text>
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
            <Text style={styles.buttonText}>Nível 2 - Os planetas</Text>
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
            NFT:O Jogo foi idealizado e desenvolvido por Sofia Diniz e Vitória Pinheiro, ambas naturais de Recife-PE e estudantes de Sistemas de Informação e Engenharia da computação, respectivamente, na Universidade Federal de Pernambuco. O jogo surgiu como um projeto para a cadeira de Engenharia de Software, ministrada por Vinicius Garcia no primeiro semestre de 2022. Vitória Pinheiro tem interesse em desenvolvimento web e mobile, apesar de preferir Mobile. Por sua vez, Sofia Diniz tem interesse em desenvolvimento full-stack web e front-end no contexto Mobile.
            </Text>
          </View>
          <TouchableOpacity style={styles.menuButton} onPress={() => {Linking.openURL('http://projeto-nft-o-jogo.herokuapp.com/')}}>
            <Text style={styles.buttonText}>Conheça nosso site</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuButton} onPress={() => {setSection(0)}}>
            <Text style={styles.buttonText}>Voltar</Text>
          </TouchableOpacity>
        </>
      )}
      {section === 3 && (
        <>
          <View style={styles.sectionTitleContainer}>
            <Text style={styles.title}>Quiz</Text>
          </View>
          <TouchableOpacity style={styles.menuButton} onPress={() => {navigation.navigate("Quiz")}} >
            <Text style={styles.buttonText}>Começar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuButton} onPress={() => {navigation.navigate("Questions")}} >
            <Text style={styles.buttonText}>Ver perguntas e respostas</Text>
          </TouchableOpacity>
          <View style={styles.sectionFooter}>
            <TouchableOpacity style={styles.menuButton} onPress={() => {setSection(0)}}>
            <Text style={styles.buttonText}>Voltar</Text>
            </TouchableOpacity>
          </View>
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
