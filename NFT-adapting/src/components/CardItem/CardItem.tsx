/* eslint-disable react/require-default-props */
import React from 'react';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

import {
  CardContainer,
  CardContent,
  CardText,
  CardCollumn,
  CardLine,
  Container,
} from './styles';

type CardsProps = {
  cardTitle: string,
  checkboxState?: boolean,
  LabelOne: string,
  LineOne: string,
  LabelTwo: string,
  LineTwo: string,
  LabelThree?: string
  LineThree?: string,
  ValueOne: string,
  ValueTwo?: string,
  boldTitle: boolean,
  checkboxAction?: () => void;
}

const CardItem: React.FC<CardsProps> = ({
  cardTitle,
  checkboxState,
  LabelOne,
  LineOne,
  LabelTwo,
  LineTwo,
  LabelThree,
  LineThree,
  ValueOne,
  ValueTwo,
  boldTitle,
  checkboxAction,
}: CardsProps) => (
  <CardContainer>
    <CardContent>
      <Container>
        {checkboxAction && (
          <BouncyCheckbox
            isChecked={checkboxState}
            size={16}
            fillColor="#115F49"
            unfillColor="#FEFEFE"
            iconStyle={{ borderColor: '#373435', borderRadius: 4 }}
            textStyle={{
              fontFamily: 'OpenSans_400Regular',
              fontSize: 12,
              color: 'rgba(55, 52, 53, 0.7)',
              textDecorationLine: 'none',
            }}
            onPress={() => checkboxAction()}
            disableBuiltInState
          />
        )}
        <CardCollumn>
          <CardText isBold={boldTitle} isGreen>{cardTitle}</CardText>
          <CardLine>
            <CardText>{LabelOne}</CardText>
            <CardText isBold={boldTitle}>{LineOne}</CardText>
          </CardLine>
          <CardLine>
            <CardText>{LabelTwo}</CardText>
            <CardText isBold={boldTitle}>{LineTwo}</CardText>
          </CardLine>
          {LabelThree && (
            <CardLine>
              <CardText>{LabelThree}</CardText>
              <CardText isBold={boldTitle}>{LineThree}</CardText>
            </CardLine>
          )}
        </CardCollumn>
      </Container>
      <CardCollumn>
        <CardText isBold={boldTitle} isGreen>{ValueOne}</CardText>
        <CardText isGreen>{ValueTwo}</CardText>
      </CardCollumn>
    </CardContent>
  </CardContainer>
);

export default CardItem;
