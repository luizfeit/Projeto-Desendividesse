import React, { useState } from 'react';

import Metas from '../../services/database/Metas';

import { ScrollView, View, Text } from 'react-native';

import { styles, theme } from './styles';

import DatePicker from 'react-native-date-picker';

import {
    Button,
    Card,
    TextInput,
    Provider as PaperProvider,
} from 'react-native-paper';

import { Header } from '../Header/header.component';

export function RegistroMeta() {

    const [date, setDate] = useState(new Date());

    const [titulo, setTitulo] = useState(null);
    const [valor, setValor] = useState(null);
    const [descricao, setDescricao] = useState(null);
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

                                <TextInput label="Título"
                                    style={styles.cardInput}
                                    value={titulo}
                                    onChangeText={titulo => setTitulo(titulo || null)} />

                                <TextInput label="Valor"
                                    keyboardType="numeric"
                                    style={styles.cardInput}
                                    value={valor}
                                    onChangeText={valor => setValor(valor || null)} />
                                {/* 
                                <DatePicker date={date} onDateChange={setDate}
                            //label="Selecione a Data Final" 
                           >; */}

                                <TextInput label="Descrição"
                                    style={styles.cardInput}
                                    value={descricao}
                                    onChangeText={descricao => setDescricao(descricao || null)} />

                                <Button mode="contained"
                                    style={styles.cardRegister}
                                    onPress={() => RegistraMeta(titulo, data, valor, descricao, id_user)}>
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
