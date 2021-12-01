import React, {useState} from 'react';

import {
    Provider as PaperProvider,
    DataTable } from 'react-native-paper';

import Movimentacao from '../../services/database/Movimentacoes';

export function Tabela () {
    Movimentacao.historico(1)
      .then((valor) => valor.forEach( v => printHist(v)))
      .catch(err => alert(err))
    
      function printHist (valor) {
          return(
        <DataTable.Row>
          <DataTable.Cell>{valor.id_mov}</DataTable.Cell>
          <DataTable.Cell>{valor.tag}</DataTable.Cell>
          <DataTable.Cell numeric>R$ {valor.valor}</DataTable.Cell>
          </DataTable.Row>
          )
      }
}