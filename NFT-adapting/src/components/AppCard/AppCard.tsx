/* eslint-disable react/require-default-props */
import React from 'react';
import { Modal, ModalProps } from 'react-native';

import {
  CardContainer,
  CardContent,
} from './styles';

type WithChildren<T = unknown> = T & { children?: React.ReactNode };
type CardsProps = {
  isVisible: boolean;
  children: WithChildren;
} & ModalProps;

const AppCard: React.FC<CardsProps> = ({
  isVisible,
  children,
  ...rest
}: CardsProps) => (
  <Modal
    animationType="fade"
    transparent
    visible={isVisible}
  >
    <CardContainer>
      <CardContent>
        {children}
      </CardContent>
    </CardContainer>
  </Modal>
);

export default AppCard;
