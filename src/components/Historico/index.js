import React, {useState} from 'react';

import { ScrollView, View , Text} from 'react-native';

import { styles, theme } from './styles';

import {Tabela} from './tabela';

import {
  Provider as PaperProvider,
  DataTable} from 'react-native-paper';



export function Historico ({ route, navigation }) {
  const { UserId, OtherParam } = route.params;

return (
  <PaperProvider theme={theme}>
    <ScrollView style={styles.background}>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Id</DataTable.Title>
          <DataTable.Title>Tag</DataTable.Title>
          <DataTable.Title numeric>Valor</DataTable.Title>
        </DataTable.Header>
        <Tabela />
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