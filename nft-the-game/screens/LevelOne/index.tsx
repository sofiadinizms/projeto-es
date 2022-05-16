import React, { useRef, useState, Component } from 'react';
import { StyleSheet, StatusBar } from 'react-native';
import { RootTabScreenProps } from '../../types';
import { GameEngine } from 'react-native-game-engine';
import Constants from '../../constants/Game';
import Head from './Head';
import Object from './Object';

import {
  View,
} from './styles';

export default function LevelOneScreen({ navigation }: RootTabScreenProps<'LevelOne'>) {
  const boardSize = Constants.GRID_SIZE * Constants.CELL_SIZE;
  const engine = useRef(null);
  const randomPosition = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  return (
    <View>
      <GameEngine ref={engine}
        style={{
          width: boardSize,
          height: boardSize,
          flex: null,
          backgroundColor: '#fff',
          borderRadius: '8px',
        }}
        entities={{
          head: {
            position: [0, 0],
            size: [Constants.CELL_SIZE],
            updateFrequency: 10,
            nextMove: 10,
            xspeed: 0,
            yspeed: 0,
            renderer: <Head position={undefined} size={undefined} />
          },
          object: {
            position: [
              randomPosition(0, Constants.GRID_SIZE - 1 ),
              randomPosition(0, Constants.GRID_SIZE - 1 ),
            ],
            size: Constants.CELL_SIZE,
            renderer: <Object position={undefined} size={undefined} />
          }
        }}
      >
        <StatusBar hidden />
      </GameEngine>
    </View>
  );
};
