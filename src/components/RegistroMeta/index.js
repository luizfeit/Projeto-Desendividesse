import React, {useState} from 'react';

import { ScrollView, View, Text} from 'react-native';

import { styles, theme } from './styles';

import { DatePicker } from 'react-datepicker';

import {
    Button,
    Card,
    TextInput,
    Provider as PaperProvider,
} from 'react-native-paper';

import { Header } from '../Header/header.component';

export function RegistroMeta () {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <PaperProvider theme={theme}>
            <Header title="Metas" />
            <ScrollView style={styles.background}>
                <View style={styles.container}>
                    <View>
                    <Card style={styles.borderCard}>
                        <Card.Title title="Nova Meta" />
                        <Card.Content>

                            <TextInput label="Título"
                            style={styles.cardInput} />

                            <TextInput label="Valor"
                            keyboardType="numeric"
                            style={styles.cardInput} />

                            {/* <DatePicker dateFormat="dd/mm/yyyy"
                            closeOnScroll={true}
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
                            label = "Selecione a Data Final"
                            /> */}

                            <TextInput label="Descrição"
                            style={styles.cardInput} />

                            <Button mode="contained"
                            style={styles.cardRegister}>
                            Salvar
                            </Button>

                            <Button mode="contained"
                            style={styles.cardRegister}>
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
