import React, { useState } from "react";
import { Text, View } from "react-native";

import { styles, theme } from "./styles";

import { Button, Card, Provider as PaperProvider, TextInput } from "react-native-paper";
import { StatusBar } from "expo-status-bar";

import Usuarios from "../../services/database/Usuarios";


<<<<<<< HEAD
export function Login() {

    const [email, setEmail] = useState(null);
    const [senha, setSenha] = useState(null);

    const ValidarLogin = (id_usuario) => {
        Usuarios.find({ id_usuario, email, senha })
            .then(id_usuario => console.log("Usuario encontrado" + id_usuario))
            .catch(err => console.log(err))
    }

=======
export function Login({ navigation }) {
>>>>>>> origin
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
                                onChangeText={email => setEmail(email)}
                            />

                            <TextInput label="Senha"
                                style={styles.cardInput}
                                secureTextEntry={true}
                                value={senha}
                                onChangeText={senha => setSenha(senha)} />

                            <Button uppercase={false} style={styles.cardButton} color='#000'>
                                Esqueci minha senha
                            </Button>
                            <Button mode='contained' style={styles.cardLogin}
<<<<<<< HEAD
                                onPress={() => ValidarLogin()}>
=======
                            onPress={() => navigation.navigate('Inicial')} >
>>>>>>> origin
                                Login
                            </Button>

                            <Button uppercase={false} style={styles.cardButton} color='#000' 
                            onPress={() => navigation.navigate('Cadastro')} >
                                Cadastre-se
                            </Button>

                        </Card.Content>
                    </Card>
                </View>
            </View>
        </PaperProvider >
    )
}