import React, { useContext, useEffect, useState } from 'react';
import { TouchableOpacity, Modal } from 'react-native';
//import { AuthContext } from '../../contexts/auth';
import Header from '../../components/Header';

import {
  Background,
  ListBalance,
  Area,
  Title,
  List,
  LabelData
} from './styles';

import api from '../../services/api'
import { format } from 'date-fns';
import { useIsFocused } from '@react-navigation/native';
import BalanceItem from '../../components/BalanceItemHistoric';
import HistoricoList from '../../components/Historic';
import CalendarModal from '../../components/CalendarModal';
import Icon from 'react-native-vector-icons/MaterialIcons';
import moment from 'moment';

export default function Home() {
  const isFocused = useIsFocused();
  const [listBalance, setListBalance] = useState([]);
  const [movements, setMovements] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [dateMovements, setDateMovements] = useState(new Date());
  const currentDate = moment().format('DD/MM/YYYY');

  useEffect(() => {
    let isActive = true;

    async function getMovements() {
      let date = new Date(dateMovements)
      //diferença entre os minutos do celular e o local universal UTC, sem o timezone
      let onlyDate = date.valueOf() + date.getTimezoneOffset() * 60 * 1000;
      let dateFormated = format(onlyDate, 'dd/MM/yyyy');

      const receives = await api.get('/receives', {
        params: {
          date: dateFormated
        }
      })

      const balance = await api.get('/balance', {
        params: {
          date: dateFormated
        }
      })

      if (isActive) {
        setMovements(receives.data)
        setListBalance(balance.data);
      }
    }

    getMovements();

    return () => isActive = false;

  }, [isFocused, dateMovements]) //array de dependencias

  async function handleDelete(id) {
    try {
      await api.delete('/receives/delete', {
        params: {
          item_id: id
        }
      })

      setDateMovements(new Date())
      alert('Registro deletado com sucesso!')
    } catch (error) {
      console.log(error);
    }
  }

  function filterDateMovements(dateSelected) {
    setDateMovements(dateSelected);
  }

  return (
    <Background>
      <Header title="Historico de Movimentações" />

      <ListBalance
        data={listBalance}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.tag}
        renderItem={({ item }) => (<BalanceItem data={item} />)}
      />
      <LabelData>
        Data {currentDate}
      </LabelData>
      <Area>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Icon name="event" color="#121212" size={30} />
        </TouchableOpacity>
        <Title>Movimentações</Title>
      </Area>

      <List
        data={movements}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <HistoricoList data={item} deleteItem={handleDelete} />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      />

      <Modal visible={modalVisible} animationType="fade" transparent={true}>
        <CalendarModal
          setVisible={() => setModalVisible(false)}
          handleFilter={filterDateMovements}
        />
      </Modal>

    </Background>
  )
}