import React, { useState } from 'react';

import { ScrollView, View, Alert } from 'react-native';

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

export function Cadastro({ navigation }) {

    const [nome, setNome] = useState(null)
    const [email, setEmail] = useState(null)
    const [senha, setSenha] = useState(null)
    const [confirmarSenha, setConfirmarSenha] = useState(null)
    const [icon, setIcon] = useState("eye-off")
    const [icon2, setIcon2] = useState("eye-off")
    const [visible, setVisible] = useState(true)
    const [visible2, setVisible2] = useState(true)

    const RegistrarUsuario = () => {
        if (!confirmarSenha) {
            Alert.alert("Preencha todos os campos corretamente")
        } else if (senha === confirmarSenha) {
            Usuarios.create({ nome, email, senha })
                .then((id_usuario) => {
                    console.log("Usuarios Criado com o id:" + id_usuario)
                    Alert.alert("Usuario Cadastro com Sucesso",
                        navigation.navigate('Login')
                    )

                })
                .catch(err => console.error(err))

        } else {
            Alert.alert("As senhas não são iguais ")
        }
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
                                    secureTextEntry={visible ? true : false}
                                    right={<TextInput.Icon name={icon ? "eye-off" : "eye-outline"}
                                        onPress={() => setIcon(!icon, setVisible(!visible))} />}
                                    style={styles.cardInput}
                                    value={senha}
                                    onChangeText={senha => setSenha(senha || null)} />

                                <TextInput label="Confirmar Senha"
                                    secureTextEntry={visible2 ? true : false}
                                    right={<TextInput.Icon name={icon2 ? "eye-off" : "eye-outline"}
                                        onPress={() => setIcon2(!icon2, setVisible2(!visible2))} />}
                                    style={styles.cardInput}
                                    value={confirmarSenha || null}
                                    onChangeText={confirmarSenha => setConfirmarSenha(confirmarSenha)} />

                                <Button mode="contained"
                                    style={styles.cardRegister}
                                    onPress={() => RegistrarUsuario(nome, email, senha)}>
                                    Cadastrar
                                </Button>

                                <Button mode="outlined"
                                    style={styles.cardRegister}
                                    onPress={() => navigation.navigate("Login")}>
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