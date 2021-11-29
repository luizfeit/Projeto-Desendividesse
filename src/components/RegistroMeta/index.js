import React, { useState } from 'react';

import Metas from '../../services/database/Metas';

import { ScrollView, View, Text } from 'react-native';

import { styles, theme } from './styles';

import DateTimePicker from '@react-native-community/datetimepicker';

import {
    Button,
    Card,
    TextInput,
    Provider as PaperProvider,
} from 'react-native-paper';

import { Header } from '../Header/header.component';

export function RegistroMeta({ route, navigation }) {

    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
      };

      const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
      };
    
      const showDatepicker = () => {
        showMode('date');
      };
    
      const showTimepicker = () => {
        showMode('time');
      };

    const [titulo, setTitulo] = useState(null);
    const [valor, setValor] = useState(null);
    const [descricao, setDescricao] = useState(null);

    const { UserId, OtherParam } = route.params;
    // const id_user = (user.id);

    const RegistraMeta = () => {
        Metas.create({ titulo, data, valor, descricao, id_user })
            .then(id_meta => console.log('Meta registrada com id=' + id_meta))
            .catch(err => console.log(err))
    }

    return (
        
        <PaperProvider theme={theme}>
            <ScrollView style={styles.background}>
                <View style={styles.container}>
                    <View>
                        <Card style={styles.borderCard}>
                            <Card.Title title="Nova Meta" />
                            <Card.Content>
                            <Text>UserId: {UserId}</Text>
                            <Text>OtherParam: {OtherParam}</Text>

                                <TextInput label="Título"
                                    style={styles.cardInput}
                                    value={titulo}
                                    onChangeText={titulo => setTitulo(titulo || null)} />

                                <TextInput label="Valor"
                                    keyboardType="numeric"
                                    style={styles.cardInput}
                                    value={valor}
                                    onChangeText={valor => setValor(valor || null)} />

<Button onPress={showDatepicker} title="Show date picker!" />

<Button onPress={showTimepicker} title="Show time picker!" />
                                
                                {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}

                                <TextInput label="Descrição"
                                    style={styles.cardInput}
                                    value={descricao}
                                    onChangeText={descricao => setDescricao(descricao || null)} />

                                <Button mode="contained"
                                    style={styles.cardRegister}
                                    onPress={() => RegistraMeta(titulo, date, valor, descricao, UserId)}>
                                    Salvar
                                </Button>

                                <Button mode="outlined"
                                    style={styles.a}>
                                    Cancelar
                                </Button>

                            </Card.Content>
                        </Card>
                    </View>
                </View>
            </ScrollView>
        </PaperProvider>
    );
}
