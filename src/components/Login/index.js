import React, { useState } from "react";
import { Text, View } from "react-native";

import { styles, theme } from "./styles";

import { Button, Card, Provider as PaperProvider, TextInput } from "react-native-paper";
import { StatusBar } from "expo-status-bar";

import Usuarios from "../../services/database/Usuarios";


export function Login({ navigation }) {

    const [email, setEmail] = useState(null);
    const [senha, setSenha] = useState(null);
    const [icon, setIcon] = useState("eye-off");
    const [visible, setVisible] = useState(true);

    const ValidarLogin = (email, senha) => {
        Usuarios.findUser(email, senha)
            .then((user) => navigation.navigate('Inicial', 
            { UserId: user.id_usuario, OtherParam: user.nome}))
            .catch(err => {
                return alert(err);
            }, setSenha(null))
    }
    const printUser = (user) => {
        console.log(`id_usuario:${user.id_usuario}, nome:${user.nome}, email:${user.email}, senha:${user.senha}`)
    }

    return (
        <PaperProvider theme={theme} >

            <View style={styles.container}>

                <StatusBar style="light" backgroundColor='#78797b' />
                <View style={styles.view}>
                    <Card style={styles.borderCard}>
                        <Card.Title
                            title="Login"
                            titleStyle={styles.cardTitle} />

                        <Card.Content>

                            <TextInput label="E-mail"
                                style={styles.cardInput}
                                keyboardType='email-address'
                                value={email}

                                onChangeText={email => setEmail(email || null)}
                            />

                            <TextInput label="Senha"
                                style={styles.cardInput}
                                secureTextEntry={visible}
                                right={<TextInput.Icon name={icon ? "eye-off" : "eye-outline"}
                                onPress={() => setIcon(!icon, setVisible(!visible))}/>}
                                value={senha}
                                onChangeText={senha => setSenha(senha || null)} />

                            <Button
                                uppercase={false}
                                style={styles.cardButton} color='#000'
                                onPress={() => Usuarios.find(1)
                                    .then(user => printUser(user))
                                    .catch(err => console.log(err))}
                            >
                                Esqueci minha senha
                            </Button>

                            <Button mode='contained' style={styles.cardLogin}
                                onPress={() => ValidarLogin(email, senha)}
                            >
                                Login
                            </Button>

                            <Button uppercase={false} style={styles.cardButton} color='#000'
                                onPress={() => navigation.navigate('Cadastro')}
                            >
                                Cadastre-se
                            </Button>

                        </Card.Content>
                    </Card>
                </View>
            </View>
        </PaperProvider >
    )
}
