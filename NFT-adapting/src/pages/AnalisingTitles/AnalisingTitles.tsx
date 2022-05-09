/* eslint-disable arrow-body-style */
/* eslint-disable global-require */
import React, { useEffect, useState } from 'react';
import { FlatList, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
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
  CardsContainer,
  CardInfo,
  CardTitle,
  CardValue,
  CardVerticalDivisor,
  LimitCard,
  TableInfoContainer,
  TableContainer,
  TableTitle,
} from './styles';

interface AnalisingTitlesProps {
  idTitulo: string;
  nomeDoSacado: string;
  numeroDaNota: string;
  valorDeFace: string;
  valorLiquido: string;
  dataEmissao: string;
  dataVencimento: string;
  dataVencimentoReal: string;
  status: string;
  taxaPadrao: string;
  tarifaDeposito: string;
  tarifaRegistroDuplicata: string;
  statusLabel: string;
}

const AnalisingTitles: React.FC = () => {
  const [analisingTitleInfo, setAnalisingTitleInfo] = useState<AnalisingTitlesProps[]>(() => {
    return [] as AnalisingTitlesProps[];
  });
  const { user, idPessoa, accessToken } = useAuth();
  const [avaliableValue, setAvaliableValue] = useState('7.000,00');
  const [allValue, setAllValue] = useState('17.000,00');

  const loadAnalisingTitles = async () => {
    const config = {
      method: 'get',
      url: `http://159.65.188.149/cedente/${user.currentIdCedente}/titulos-em-analise`,
      headers: {
        Authorization: `Bearer ${accessToken}`,
        idPessoa: `${idPessoa}`,
      },
    };

    axios(config)
      .then((response) => {
        setAnalisingTitleInfo(response.data);
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
    loadAnalisingTitles();
  }, []);

  return (
    <DefaultScreen
      title="Títulos em análise"
      subtitle="Títulos que estão em análise para serem antecipados"
    >
      <CardsContainer>
        <FlatList
          data={analisingTitleInfo}
          scrollEnabled
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <AppDivisor width={100} height={1} color="#EBEBEB" />}
          renderItem={({ item }) => (
            <CardItem
              cardTitle={cutName(item.nomeDoSacado)}
              LabelOne="Nº da nota: "
              LineOne={item.numeroDaNota}
              LabelTwo="Emissão: "
              LineTwo={item.dataEmissao}
              LabelThree="Vencimento: "
              LineThree={item.dataVencimento}
              ValueOne={item.valorDeFace}
              ValueTwo={item.valorLiquido}
              boldTitle
            />
          )}
        />
      </CardsContainer>
    </DefaultScreen>
  );
};

export default AnalisingTitles;
