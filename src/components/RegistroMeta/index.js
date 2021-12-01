import React, { useState } from 'react';

import Metas from '../../services/database/Metas';

import { ScrollView, View, Text, Alert } from 'react-native';

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

    const [data, setDate] = useState(new Date());
    const [show, setShow] = useState(false);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || data
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
    };

    const showDatepicker = () => {
        setShow(true);
    };

    const [titulo, setTitulo] = useState(null);
    const [valor, setValor] = useState(null);
    const [descricao, setDescricao] = useState(null);

    const { UserId, OtherParam } = route.params;
    // const id_user = (user.id);

    const RegistrarMeta = (titulo, data, valor, descricao, id_user) => {
        id_user = UserId;
        // data = date;
        Metas.create({ titulo, data, valor, descricao, id_user })
            .then(() => Alert.alert("Meta registrada com Sucesso!"), 
            navigation.navigate('Inicial', { UserId: UserId, OtherParam: OtherParam }))
            .catch(err => alert(err))
    }

    const Cancelar = () => {
        navigation.navigate('Inicial', { UserId: UserId, OtherParam: OtherParam })
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

                                <Text style={styles.date}> Seleciona a data: </Text>
                                <View style={styles.calendar}>

                                    <Button
                                        onPress={showDatepicker}
                                        icon="calendar">
                                    </Button>
                                    {show && (
                                        <DateTimePicker
                                            testID="dateTimePicker"
                                            value={data}
                                            minimumDate={new Date()}
                                            mode={'date'}
                                            onChange={onChange}
                                        />

                                    )}
                                    <Text style={styles.date2}>
                                        {data.getDate()}/{data.getMonth() + 1}/{data.getFullYear()}
                                    </Text>
                                </View>




                                <TextInput label="Descrição"
                                    style={styles.cardInput}
                                    value={descricao}
                                    onChangeText={descricao => setDescricao(descricao || null)} />

                                <Button mode="contained"
                                    style={styles.cardRegister}
                                    onPress={() => {
                                        RegistrarMeta(titulo, data.toLocaleDateString(), valor, descricao, UserId)
                                        console.log(titulo, data.toLocaleDateString(), valor, descricao, UserId)
                                    }}>
                                    Salvar
                                </Button>

                                <Button mode="outlined"
                                    style={styles.cardRegister}
                                    onPress={() => Cancelar()}>
                                    Cancelar
                                </Button>

                            </Card.Content>
                        </Card>
                    </View>
                </View>
            </ScrollView>
        </PaperProvider >
    );
}
