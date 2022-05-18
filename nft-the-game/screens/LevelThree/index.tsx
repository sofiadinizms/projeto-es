import React, { useEffect, useState } from 'react';
import { RootTabScreenProps } from '../../types';
import { Text } from '../../components/Themed';
import {
  View,
  Button,
} from './styles';

export default function LevelThreeScreen({ navigation }: RootTabScreenProps<'LevelThree'>) {
  const [test, setTest] = useState();
  return (
    <View>
      <Text>
        Level Three
      </Text>
      <Button onPress={() => {navigation.goBack()}}>
        <Text>
          Voltar
        </Text>
      </Button>
    </View>
  );
};
