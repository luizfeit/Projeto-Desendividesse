import React from 'react';

import { ScrollView, View , Text} from 'react-native';

import { styles, theme } from './styles';

import {
  Provider as PaperProvider,
  DataTable } from 'react-native-paper';

import { Header } from '../Header/header.component';

export function Historico () {
    return (
        <PaperProvider theme={theme}>
            <Header title="Histórico de Movimentações" />
            <ScrollView style={styles.background}>
            <DataTable>
        <DataTable.Header>
          <DataTable.Title>Data</DataTable.Title>
          <DataTable.Title>Tag</DataTable.Title>
          <DataTable.Title numeric>Valor</DataTable.Title>
        </DataTable.Header>

        <DataTable.Row>
          <DataTable.Cell>12/08</DataTable.Cell>
          <DataTable.Cell>Alimentação</DataTable.Cell>
          <DataTable.Cell numeric>R$ 100,00</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>23/09</DataTable.Cell>
          <DataTable.Cell>Transporte</DataTable.Cell>
          <DataTable.Cell numeric>R$ 180,00</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Pagination
          page={1}
          numberOfPages={3}
          onPageChange={(page) => { console.log(page); }}
          label="1-2 of 6"
        />
      </DataTable>

            </ScrollView>
        </PaperProvider>
        

    );
}