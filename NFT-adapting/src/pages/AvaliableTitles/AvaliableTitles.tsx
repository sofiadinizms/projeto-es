/* eslint-disable arrow-body-style */
/* eslint-disable global-require */
import React, { useEffect, useState } from 'react';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { Alert, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { useAuth } from '../../hooks/auth';
import {
  AppButton,
  AppCard,
  AppDivisor,
  CardItem,
  CardTable,
  DefaultScreen,
} from '../../components';
import {
  ControlsContainer,
  ButtonContainer,
  CardButtonContainer,
  CardTitle,
  CardSubtitle,
  CardsContainer,
  FilterButton,
} from './styles';

interface AvaliableTitlesProps {
  idTituloIntegracaoSacado: string;
  nomeDoSacado: string;
  numeroDaNota: string;
  valorFace: string;
  dataEmissao: string;
  dataVencimento: string;
  taxaPadrao: string;
  tarifaDeposito: string;
  tarifaRegistroDuplicata: string;
  valorLiquido: string;
  selected: boolean;
}

const AvaliableTitles: React.FC = () => {
  const { user, idPessoa, accessToken } = useAuth();
  const [showModal, setShowModal] = useState(false);
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [selectAll, setSelectedAll] = useState(false);
  const [anticipateTotalvalue, setAnticipateTotalValue] = useState(0);
  const [ticketTotalvalue, setTicketTotalValue] = useState(0);
  const [avaliableTitlesInfo, setAvaliableTitlesInfo] = useState<AvaliableTitlesProps[]>(() => {
    return [] as AvaliableTitlesProps[];
  });
  const [anticipate, setAnticipate] = useState<AvaliableTitlesProps[]>(() => {
    return [] as AvaliableTitlesProps[];
  });

  useEffect(() => {
    let isEverythingSelected = true;
    avaliableTitlesInfo.forEach((item) => {
      isEverythingSelected = isEverythingSelected && item.selected;
    });

    setSelectedAll(isEverythingSelected);
  }, [avaliableTitlesInfo]);

  const loadAvaliableTitles = async () => {
    const IdCedente = await AsyncStorage.getItem('@PassAqui:currentIdCedente');
    const config = {
      method: 'get',
      url: `http://159.65.188.149/cedente/${IdCedente}/titulos-disponiveis`,
      headers: {
        Authorization: `Bearer ${accessToken}`,
        idPessoa: `${idPessoa}`,
      },
    };

    axios(config)
      .then((response) => {
        const newData = response.data.map((item: any) => {
          return {
            ...item,
            selected: false,
          };
        });
        setAvaliableTitlesInfo(newData);
      })
      .catch((error) => {
        console.log(error);
      });

    const newData = avaliableTitlesInfo.map((item) => {
      return {
        ...item,
        selected: false,
      };
    });

    setAvaliableTitlesInfo([...newData]);
  };

  const selectAllSecurities = () => {
    let isEverythingSelected = true;
    avaliableTitlesInfo.forEach((item) => {
      isEverythingSelected = isEverythingSelected && item.selected;
    });
    const newSelectAll = !isEverythingSelected;
    const newData = avaliableTitlesInfo.map((item) => {
      return {
        ...item,
        selected: newSelectAll,
      };
    });
    setAvaliableTitlesInfo([...newData]);
  };

  const onChangeCheck = (itemId: any) => {
    const newData = avaliableTitlesInfo.map((item) => {
      if (item.idTituloIntegracaoSacado === itemId) {
        return {
          ...item,
          selected: !item.selected,
        };
      }
      return {
        ...item,
        selected: item.selected,
      };
    });
    setAvaliableTitlesInfo([...newData]);
  };

  const cutName = (fullName: string) => {
    let cuttedName = fullName.substring(0, 30);
    if (fullName.length > 30) {
      cuttedName += '...';
    }
    return cuttedName;
  };

  const LoadAnticipateInfo = () => {
    const filteredData = avaliableTitlesInfo.filter(
      (item: {selected: boolean }) => item.selected === true,
    );
    if (filteredData.length === 0) {
      Alert.alert('Não foi possível antecipar os Títulos',
        'Assegure-se de ter selecionado um ou mais títulos');
    } else {
      let anticipateValue = 0;
      let ticketValue = 0;
      // eslint-disable-next-line array-callback-return
      filteredData.map((data) => {
        anticipateValue += Number(data.valorLiquido);
        ticketValue += Number(data.valorFace);
      });
      setAnticipateTotalValue(anticipateValue);
      setTicketTotalValue(ticketValue);
      setAnticipate([...filteredData]);
      setShowModal(!showModal);
    }
    loadAvaliableTitles();
  };

  const anticipateSecurities = async () => {
    const IdCedente = await AsyncStorage.getItem('@PassAqui:currentIdCedente');
    await anticipate.map((data) => {
      const config = {
        method: 'put',
        url: `http://159.65.188.149/cedente/${IdCedente}/titulos-disponiveis-antecipar/${data.idTituloIntegracaoSacado}`,
        headers: {
          Authorization: `Bearer ${accessToken}`,
          idPessoa: `${idPessoa}`,
        },
      };
      axios(config)
        .then((response) => {
          console.log(JSON.stringify(response.data));
        })
        .catch((error) => {
          console.log(error);
        });
    });
    setShowModal(!showModal);
    loadAvaliableTitles();
  };

  useEffect(() => {
    loadAvaliableTitles();
  }, []);

  return (
    <DefaultScreen
      title="Títulos Disponíveis"
      subtitle="Títulos disponíveis para serem atencipados"
    >
      <ButtonContainer>
        <AppButton
          title="Antecipar"
          width={100}
          background
          backgroundColor="#CAD0D4"
          handleButton={() => LoadAnticipateInfo()}
        />
      </ButtonContainer>
      {avaliableTitlesInfo.length > 0 ? (
        <>
          <ControlsContainer>
            <BouncyCheckbox
              size={16}
              fillColor="#115F49"
              unfillColor="#EBEBEB"
              text="Selecionar todos"
              iconStyle={{
                borderColor: '#373435',
                borderRadius: 4,
                marginLeft: 8,
              }}
              textStyle={{
                fontFamily: 'OpenSans_400Regular',
                fontSize: 12,
                color: '#000',
                textDecorationLine: 'none',
              }}
              isChecked={selectAll}
              disableBuiltInState
              onPress={(checked: boolean) => selectAllSecurities()}
            />
          </ControlsContainer>
          <CardsContainer>
            <FlatList
              data={avaliableTitlesInfo}
              scrollEnabled
              showsVerticalScrollIndicator={false}
              ItemSeparatorComponent={() => <AppDivisor width={100} height={1} color="#EBEBEB" />}
              renderItem={({ item }) => (
                <CardItem
                  cardTitle={cutName(item.nomeDoSacado)}
                  LabelOne="Nº da nota: "
                  LineOne={item.numeroDaNota}
                  LabelTwo="Vencimento: "
                  LineTwo={item.dataVencimento}
                  ValueOne={item.valorFace}
                  ValueTwo={item.valorLiquido}
                  boldTitle
                  checkboxState={item.selected}
                  checkboxAction={() => onChangeCheck(item.idTituloIntegracaoSacado)}
                />
              )}
            />
          </CardsContainer>
        </>
      ) : <FilterButton>Sem títulos disponíveis</FilterButton>}
      <AppCard isVisible={showModal}>
        <CardTitle>Antecipar Títulos</CardTitle>
        <CardSubtitle>Notas fiscais</CardSubtitle>
        <CardButtonContainer>
          <CardTable
            CollumnOne="Número da nota"
            CollumnTwo="Valor a ser adiantado"
            CollumnThree="Valor da nota"
          />
          <AppDivisor width={100} height={1} color="#EBEBEB" />
          <FlatList
            data={anticipate}
            scrollEnabled
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={() => <AppDivisor width={100} height={1} color="#EBEBEB" />}
            renderItem={({ item }) => (
              <CardTable
                startGreen
                CollumnOne={item.numeroDaNota}
                CollumnTwo={item.valorLiquido}
                CollumnThree={item.valorFace}
              />
            )}
          />
          <AppDivisor width={100} height={1} color="#EBEBEB" />
          <CardTable
            startGreen
            CollumnOne={`${anticipate.length} notas`}
            CollumnTwo={`${anticipateTotalvalue}`}
            CollumnThree={`${ticketTotalvalue}`}
          />
          <AppButton
            title="Antecipar"
            width={70}
            background
            backgroundColor="#CFDFDA"
            handleButton={() => anticipateSecurities()}
          />
        </CardButtonContainer>
        <CardButtonContainer>
          <AppButton
            title="Cancelar"
            width={70}
            background
            backgroundColor="#EBEBEB"
            handleButton={() => setShowModal(!showModal)}
          />
        </CardButtonContainer>
      </AppCard>
    </DefaultScreen>
  );
};

export default AvaliableTitles;
