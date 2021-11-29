import React, { useState } from 'react';

import { ScrollView, View, Text } from 'react-native';

import { styles, theme } from './styles';

import {
    Button,
    Card,
    Chip,
    Provider as PaperProvider,
    RadioButton,
    TextInput
} from "react-native-paper";

import { Header } from '../Header/header.component';

export function RegistroMovimentacao({ route, navigation }) {

    const [tipo, setTipo] = useState("1");
    console.log(tipo)

    const { UserId, OtherParam } = route.params;

    return (
        <PaperProvider theme={theme}>
            <ScrollView style={styles.background}>
                <View style={styles.container}>
                    <View>
                        <Card style={styles.borderCard}>
                            <Card.Title title="Nova Movimentação" />
                            <Card.Content>
                            <Text>UserId: {UserId}</Text>
                            <Text>OtherParam: {OtherParam}</Text>

                                <TextInput label="Valor"
                                    keyboardType="numeric"
                                    style={styles.cardInput} />

                                <RadioButton.Group
                                    onValueChange={setTipo}
                                    value={tipo}>

                                    <View>
                                        <Text>Crédito</Text>
                                        <RadioButton value="1" />
                                    </View>

                                    <View>
                                        <Text>Débito</Text>
                                        <RadioButton value="2" />
                                    </View>

                                    <View>
                                        <Text>Transferência</Text>
                                        <RadioButton value="3" />
                                    </View>

                                    <View>
                                        <Text>Saque</Text>
                                        <RadioButton value="4" />
                                    </View>

                                </RadioButton.Group>

                                <TextInput label="Tag"
                                    style={styles.cardInput}
                                    disabled />
                                    <Chip icon="info" mode="outlined" onPress={() => console.log('Pressed')}>Example Chip</Chip>
                                    <Chip icon="info" mode="outlined" onPress={() => console.log('Pressed1')}>Example 1</Chip>
                                    <Chip icon="info" mode="outlined" onPress={() => console.log('Pressed2')}>Example 2</Chip>
                                    <Chip icon="info" mode="outlined" onPress={() => console.log('Pressed3')}>Example 3</Chip>

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