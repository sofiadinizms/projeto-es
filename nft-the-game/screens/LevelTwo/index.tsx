import React, { useEffect, useState } from 'react';
import { RootTabScreenProps } from '../../types';
import { Text } from '../../components/Themed';
import {
  View,
  Button,
} from './styles';

export default function LevelTwoScreen({ navigation }: RootTabScreenProps<'LevelTwo'>) {
  const [test, setTest] = useState();
  return (
    <View>
      <Text>
        Level Two
      </Text>
      <Button onPress={() => {navigation.goBack()}}>
        <Text>
          Voltar
        </Text>
      </Button>
    </View>
  );
};
