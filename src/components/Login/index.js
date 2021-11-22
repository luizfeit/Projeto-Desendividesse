import React from "react";
import { Text, View } from "react-native";

import { styles, theme } from "./styles";

import { Button, Card, Provider as PaperProvider, TextInput } from "react-native-paper";
import { StatusBar } from "expo-status-bar";


export function Login({ navigation }) {
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
                                keyboardType='email-address' />

                            <TextInput label="Senha"
                                style={styles.cardInput}
                                secureTextEntry={true}/>

                            <Button uppercase={false} style={styles.cardButton} color='#000'>
                                Esqueci minha senha
                            </Button>
                            <Button mode='contained' style={styles.cardLogin}
                            onPress={() => navigation.navigate('Inicial')} >
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