/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';

import { RootStackParamList } from '../types';

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          TabOne: {
            screens: {
              TabOneScreen: 'one',
            },
          },
          LevelOne: {
            screens: {
              LevelOneScreen: 'one',
            }
          },
          LevelTwo: {
            screens: {
              LevelTwoScreen: 'one',
            }
          },
          LevelThree: {
            screens: {
              LevelThreeScreen: 'one',
            }
          },
          Questions: {
            screens: {
              QuestionsScreen: 'one'
            }
          },
          Quiz: {
            screens: {
              QuizScreen: 'one'
            }
          },
          Score: {
            screens: {
              ScoreScreen: 'one'
            }
          },
          InConstruction: {
            screens: {
              InConstructionScreen: 'two',
            },
          },
        },
      },
      Modal: 'modal',
      NotFound: '*',
    },
  },
};

export default linking;
