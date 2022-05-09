/* eslint-disable arrow-body-style */
/* eslint-disable global-require */
import React, { useState, useEffect } from 'react';
import {
  ScrollView,
  FlatList,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { useAuth } from '../../hooks/auth';
import {
  AppDivisor,
  CardItem,
  DefaultScreen,
  TableLine,
  TableHeader,
} from '../../components';
import {
  TabButton,
  TabContainer,
  TabTitle,
  TableInfoContainer,
} from './styles';

interface OpenSecuritiesProps {
  idTitulo: string;
  idCedente: string;
  nomeDoSacado: string;
  numeroDaNota: string;
  valorLiquido: string;
  valorFace: string;
  dataEmissao: string;
  dataVencimento: string;
  dataVencimentoDiaUtil: string;
  dataMovimentacao: string;
  status: string;
  statusLabel: string;
}

interface LiquidSecuritiesProps {
  idTitulo: string;
  idCedente: string;
  nomeDoSacado: string;
  numeroDaNota: string;
  valorFace: string;
  dataEmissao: string;
  dataVencimento: string;
  dataVencimentoDiaUtil: string;
  status: string;
  statusLabel: string;
}

const TabOptions = [
  {
    id: '1',
    title: 'Títulos em aberto',
  },
  {
    id: '2',
    title: 'Títulos liquidados',
  },
  {
    id: '3',
    title: 'Títulos não operados',
  },
];

const History: React.FC = () => {
  const navigation = useNavigation();
  const { user, idPessoa, accessToken } = useAuth();
  const [screen, setScreen] = useState('1');
  const [nonOperatedsecuritiesInfo, setNonOperatedSecuritiesInfo] = useState([]);
  const [OpenSecuritiesInfo, setOpenSecuritiesInfo] = useState<OpenSecuritiesProps[]>(() => {
    return [] as OpenSecuritiesProps[];
  });
  const [LiquidSecuritiesInfo, setLiquidSecuritiesInfo] = useState<LiquidSecuritiesProps[]>(() => {
    return [] as LiquidSecuritiesProps[];
  });

  const loadOpenSecurities = async () => {
    const config = {
      method: 'get',
      url: `http://159.65.188.149/cedente/${user.currentIdCedente}/titulos-em-aberto`,
      headers: {
        Authorization: `Bearer ${accessToken}`,
        idPessoa: `${idPessoa}`,
      },
    };

    axios(config)
      .then((response) => {
        setOpenSecuritiesInfo(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const loadLiquidSecurities = async () => {
    const config = {
      method: 'get',
      url: `http://159.65.188.149/cedente/${user.currentIdCedente}/titulos-liquidados`,
      headers: {
        Authorization: `Bearer ${accessToken}`,
        idPessoa: `${idPessoa}`,
      },
    };

    axios(config)
      .then((response) => {
        setLiquidSecuritiesInfo(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const loadNonOperatedSecurities = async () => {
    const config = {
      method: 'get',
      url: `http://159.65.188.149/cedente/${user.currentIdCedente}/titulos-nao-operados`,
      headers: {
        Authorization: `Bearer ${accessToken}`,
        idPessoa: `${idPessoa}`,
      },
    };

    axios(config)
      .then((response) => {
        setNonOperatedSecuritiesInfo(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    loadOpenSecurities();
    loadLiquidSecurities();
    loadNonOperatedSecurities();
  }, []);

  return (
    <DefaultScreen
      exit
      title="Histórico"
      subtitle="Visualização de todos os títulos e passados"
    >
      <TabContainer>
        <FlatList
          data={TabOptions}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          bounces={false}
          keyExtractor={(item) => item.title}
          renderItem={({ item }) => (
            <TabButton onPress={() => setScreen(item.id)}>
              <TabTitle onFocus={item.id === screen}>
                {item.title}
              </TabTitle>
            </TabButton>
          )}
        />
      </TabContainer>
      <AppDivisor width={100} height={1} color="#EBEBEB" />
      { screen === '1' && (
      <FlatList
        data={OpenSecuritiesInfo}
        scrollEnabled
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <AppDivisor width={100} height={1} color="#EBEBEB" />}
        renderItem={({ item }) => (
          <CardItem
            cardTitle={item.nomeDoSacado}
            LabelOne="Nº da nota: "
            LineOne={item.numeroDaNota}
            LabelTwo="Vencimento: "
            LineTwo={item.dataVencimento}
            ValueOne={item.valorFace}
            ValueTwo={item.valorLiquido}
            boldTitle
          />
        )}
      />
      )}
      { screen === '2' && (
      <FlatList
        data={LiquidSecuritiesInfo}
        scrollEnabled
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <AppDivisor width={100} height={1} color="#EBEBEB" />}
        renderItem={({ item }) => (
          <CardItem
            cardTitle={item.nomeDoSacado}
            LabelOne="Nº da nota: "
            LineOne={item.numeroDaNota}
            LabelTwo="Vencimento: "
            LineTwo={item.dataVencimento}
            LabelThree="Pagamento: "
            LineThree={item.dataVencimentoDiaUtil}
            ValueOne={item.valorFace}
            boldTitle
          />
        )}
      />
      )}
      { screen === '3' && (
      <FlatList
        data={nonOperatedsecuritiesInfo}
        scrollEnabled
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <AppDivisor width={100} height={1} color="#EBEBEB" />}
        renderItem={({ item }) => (
          <CardItem
            cardTitle={item.nomeDoSacado}
            LabelOne="Nº da nota: "
            LineOne={item.numeroDaNota}
            LabelTwo="Vencimento: "
            LineTwo={item.dataVencimento}
            LabelThree="Pagamento: "
            LineThree={item.dataVencimentoDiaUtil}
            ValueOne={item.valorFace}
            boldTitle
          />
        )}
      />
      )}
    </DefaultScreen>
  );
};

export default History;
