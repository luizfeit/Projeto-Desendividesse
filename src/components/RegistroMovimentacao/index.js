import React, { useState } from 'react';

import { ScrollView, View, Text, Alert } from 'react-native';

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
import Movimentacoes from '../../services/database/Movimentacoes';

export function RegistroMovimentacao({ route, navigation }) {

    const { UserId, OtherParam } = route.params;
    const [valor, setValor] = useState(null);
    const [tipo, setTipo] = useState("credito");
    const [tag, setTag] = useState("lazer")
    const [descricao, setDescricao] = useState(null)

    
    const RegistrarMovimentacao = (valor, tipo, tag, descricao, id_user) => {
        id_user = UserId;
        Movimentacoes.create({ valor, tipo, tag, descricao, id_user} )
            .then(() => Alert.alert("Movimentação registrada com Sucesso"), 
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
                            <Card.Title title="Nova Movimentação" />
                            <Card.Content>

                                <TextInput label="Valor"
                                    keyboardType="numeric"
                                    value={valor}
                                    style={styles.cardInput}
                                    onChangeText={valor => setValor(valor || null)} />


                                <RadioButton.Group
                                    onValueChange={novoValor => setTipo(novoValor)}
                                    value={tipo}>

                                    <Text style={styles.tipo}>Tipo</Text>
                                    <View style={styles.radioStyle}>
                                        <View>
                                            <Text>Crédito</Text>
                                            <RadioButton value="credito" />
                                        </View>

                                        <View>
                                            <Text>Débito</Text>
                                            <RadioButton value="debito" />
                                        </View>

                                        <View>
                                            <Text>Transferência</Text>
                                            <RadioButton value="transferencia" />
                                        </View>

                                        <View>
                                            <Text>Saque</Text>
                                            <RadioButton value="saque" />
                                        </View>
                                    </View>
                                </RadioButton.Group>


                                <RadioButton.Group onValueChange={novaTag => setTag(novaTag)}
                                    value={tag}>
                                    <Text style={styles.tipo}>Tag</Text>
                                    <View style={styles.radioStyle}>
                                        <View>
                                            <Text>Lazer</Text>
                                            <RadioButton value="lazer" />
                                        </View>

                                        <View>
                                            <Text>Alimentação</Text>
                                            <RadioButton value="alimetacao" />
                                        </View>

                                        <View>
                                            <Text>Transporte</Text>
                                            <RadioButton value="transporte" />
                                        </View>

                                        <View>
                                            <Text>Mercado</Text>
                                            <RadioButton value="mercado" />
                                        </View>
                                    </View>

                                </RadioButton.Group>

                                <TextInput label="Descrição"
                                    style={styles.cardInput}
                                    value={descricao}
                                    onChangeText={(descricao) => setDescricao(descricao)} />

                                <Button mode="contained"
                                    style={styles.cardRegister}
                                    onPress={() => RegistrarMovimentacao(valor, tipo, tag, descricao, UserId)}>
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