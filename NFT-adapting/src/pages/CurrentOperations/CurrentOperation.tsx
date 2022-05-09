/* eslint-disable arrow-body-style */
/* eslint-disable global-require */
import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { FlatList } from 'react-native';
import axios from 'axios';
import { useAuth } from '../../hooks/auth';
import {
  AppDivisor,
  DefaultScreen,
  TableLine,
  TableHeader,
  CardItem,
} from '../../components';
import {
  ButtonCard,
  TableInfoContainer,
  TableContainer,
  TableTitle,
  CardsContainer,
  CardTable,
} from './styles';

interface CurrentOperationsProps {
  idOperacao: string;
  data: string;
  numeroNotas: string;
  valorLiquido: string;
  valorFace: string;
  idContaBancaria: string;
  nomeBanco: string;
  numConta: string;
  digitoConta: string;
  numAgencia: string;
  contaPadrao: string;
  statusDaOperacao: string;
  labelAgencia: string;
  labelConta: string;
}

const CurrentOperations: React.FC = () => {
  const [currentOperationInfo, setCurrentOperationInfo] = useState<CurrentOperationsProps[]>(() => {
    return [] as CurrentOperationsProps[];
  });
  const navigation = useNavigation();
  const { user, idPessoa, accessToken } = useAuth();
  const loadCurrentOperations = async () => {
    const config = {
      method: 'get',
      url: `http://159.65.188.149/cedente/${user.currentIdCedente}/operacoes-em-andamento`,
      headers: {
        Authorization: `Bearer ${accessToken}`,
        idPessoa: `${idPessoa}`,
      },
    };

    axios(config)
      .then((response) => {
        setCurrentOperationInfo(response.data);
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const cutName = (fullName: string) => {
    let cuttedName = fullName.substring(0, 30);
    if (fullName.length > 30) {
      cuttedName += '...';
    }
    return cuttedName;
  };

  useEffect(() => {
    loadCurrentOperations();
  }, []);

  return (
    <DefaultScreen
      title="Operações em andamento"
      subtitle="Acompanhe as operações realizadas e o status delas"
    >
      <CardsContainer>
        <FlatList
          data={currentOperationInfo}
          scrollEnabled
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <AppDivisor width={100} height={1} color="#EBEBEB" />}
          renderItem={({ item }) => (
            <ButtonCard onPress={() => navigation.navigate('OperationID')}>
              <CardItem
                cardTitle={item.valorFace}
                LabelOne="Nº de notas: "
                LineOne={item.numeroNotas}
                LabelTwo="Data: "
                LineTwo={item.data}
                ValueOne={item.nomeBanco}
                ValueTwo={item.statusDaOperacao}
                boldTitle
              />
            </ButtonCard>
          )}
        />
      </CardsContainer>
    </DefaultScreen>
  );
};

export default CurrentOperations;
