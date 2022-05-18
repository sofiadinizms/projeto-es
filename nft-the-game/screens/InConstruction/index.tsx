import React from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, View } from '../../components/Themed';
import { RootTabScreenProps } from '../../types';

export default function InContructionScreen({ navigation }: RootTabScreenProps<'InConstruction'>) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tela em construção</Text>
      <View style={styles.separator} />
      <Image
        source={require('../../assets/images/construction.png')}
      />
      <TouchableOpacity style={styles.menuButton} onPress={() => {navigation.goBack()}} >
        <Text style={styles.buttonText}>Voltar</Text>
      </TouchableOpacity>
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

