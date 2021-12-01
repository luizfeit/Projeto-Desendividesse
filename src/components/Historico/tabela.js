import React, { useState, useCallback } from 'react';

import { styles, theme } from './styles';

import {
  Provider as PaperProvider,
  DataTable,
  TextInput
} from 'react-native-paper';

import Movimentacao from '../../services/database/Movimentacoes';
import { useFocusEffect } from '@react-navigation/core';
import { useContext } from 'react/cjs/react.development';

export function Tabela() {

  const [id_mov, setIdMov] = useState()
  const [tag, setTag] = useState()
  const [val, setVal] = useState()

  useFocusEffect(() => {
    Movimentacao.historico(1)
      .then((valor) => valor.forEach(v => {
          setIdMov(v.id_mov), setTag(v.tag), setVal(v.valor)
      }))
      .catch(err => alert(err))
  })



  return (
    <PaperProvider theme={theme}>
      <DataTable.Row>
        <DataTable.Cell>{id_mov}</DataTable.Cell>
        <DataTable.Cell>{tag}</DataTable.Cell>
        <DataTable.Cell numeric>R$ {val}</DataTable.Cell>
      </DataTable.Row>

      <DataTable.Row>
        <DataTable.Cell>{id_mov}</DataTable.Cell>
        <DataTable.Cell>{tag}</DataTable.Cell>
        <DataTable.Cell numeric>R$ {val}</DataTable.Cell>
      </DataTable.Row>
    </PaperProvider>


  )




}