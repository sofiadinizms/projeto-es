/* eslint-disable react/require-default-props */
import React from 'react';

import { Container, ButtonTitle, InfoContainer } from './styles';

type InvoiceWidgetProps = {
  handleButton?: () => void;
};

const InvoiceWidget: React.FC<InvoiceWidgetProps> = ({
  handleButton,
}) => (
  <>
    <Container
      onPress={handleButton}
    >
      <InfoContainer onPress={handleButton}>
        <ButtonTitle numberOfLines={1}>
          Adicionar nota fiscal
        </ButtonTitle>
      </InfoContainer>
    </Container>
  </>
);

export default InvoiceWidget;
