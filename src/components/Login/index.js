import React from "react";
import { Text, View } from "react-native";

import { styles, theme } from "./styles";

import { Button, Card, Provider as PaperProvider, TextInput } from "react-native-paper";
import { StatusBar } from "expo-status-bar";


export function Login() {
    return (
        <PaperProvider theme={theme}>
            <View style={styles.container}>

                <StatusBar style="inverted" backgroundColor='#78797b' />
                <View style={styles.view}>
                    <Card style={styles.borderCard}>
                        <Card.Title
                            title="Login"
                            titleStyle={styles.cardTitle} />

                        <Card.Content>

                            <TextInput label="Email"
                                keyboardType='email-address'
                                style={styles.cardInput}
                            />


                            <TextInput label="Senha"
                                secureTextEntry={true}
                                style={styles.cardInput}
                                
                            />


                            <Button uppercase={false} style={styles.cardButton} color='#000'>
                                Esqueci minha senha
                            </Button>
                            <Button mode='contained' style={styles.cardLogin} >
                                Login
                            </Button>

                            <Button uppercase={false} style={styles.cardButton} color='#000' >
                                Cadastre-se
                            </Button>

                        </Card.Content>
                    </Card>
                </View>
            </View>
        </PaperProvider>
    )
}