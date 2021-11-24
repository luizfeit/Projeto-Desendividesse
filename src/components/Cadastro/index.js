import React, { useState } from 'react';

import { ScrollView, View } from 'react-native';

import { styles, theme } from './styles';

import Usuarios from '../../services/database/Usuarios';

import {
    Button,
    Card,
    Provider as PaperProvider,
    TextInput
} from "react-native-paper";

import { Header } from '../Header/header.component';

const printUsu = (usu) => {
    console.log(`id:${usu.id_usuario}, name:${usu.nome}, email:${usu.email}, password:${usu.senha}`)
}

export function Cadastro() {

    const [nome, setNome] = useState(null)
    const [email, setEmail] = useState(null)
    const [senha, setSenha] = useState(null)
    const [confirmarSenha, setConfirmarSenha] = useState(null)

    const RegistrarUsuario = () => {
        Usuarios.create({nome, email, senha})
            .then(id_usuario => console.log("Usuarios Criado com o id:" + id_usuario))
            .catch(err => console.error(err))
    }

    return (
        <PaperProvider theme={theme}>
            {/* <Header title="Cadastro" /> */}
            <ScrollView style={styles.background}>
                <View style={styles.container}>
                    <View>
                        <Card style={styles.borderCard}>
                            <Card.Title title="Registre-se" />
                            <Card.Content>

                                <TextInput label="Nome"
                                    style={styles.cardInput}
                                    value={nome}
                                    onChangeText={nome => setNome(nome || null)} />

                                <TextInput label="E-mail"
                                    keyboardType="email-address"
                                    style={styles.cardInput}
                                    value={email}
                                    onChangeText={email => setEmail(email || null)} />

                                <TextInput label="Senha"
                                    secureTextEntry={true}
                                    right={<TextInput.Icon name="eye-off-outline" />}
                                    style={styles.cardInput}
                                    value={senha}
                                    onChangeText={senha => setSenha(senha || null)} />

                                <TextInput label="Confirmar Senha"
                                    secureTextEntry={true}
                                    right={<TextInput.Icon name="eye-off-outline" />}
                                    style={styles.cardInput}
                                    value={confirmarSenha || null}
                                    onChangeText={confirmarSenha => setConfirmarSenha(confirmarSenha)} />

                                <Button mode="contained"
                                    style={styles.cardRegister}
                                    onPress={() => RegistrarUsuario(nome, senha, email)}>
                                    Cadastrar
                                </Button>

                            </Card.Content>
                        </Card>
                    </View>
                </View>
            </ScrollView>
        </PaperProvider>
    );
}