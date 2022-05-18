import React, { useEffect, useState } from 'react';
import { RootTabScreenProps } from '../../types';
import { Text } from '../../components/Themed';
import {
  View,
  Button,
} from './styles';

export default function LevelOneScreen({ navigation }: RootTabScreenProps<'LevelOne'>) {
  const [test, setTest] = useState();
  return (
    <View>
      <Text>
        Level One
      </Text>
      <Button onPress={() => {navigation.goBack()}}>
        <Text>
          Voltar
        </Text>
      </Button>
    </View>
  );
};
