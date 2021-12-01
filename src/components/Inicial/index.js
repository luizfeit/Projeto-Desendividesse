import React, { useEffect, useState } from 'react';

import { ScrollView, View, Text, Alert, Dimensions } from 'react-native';

import { styles, theme } from './styles';

import { useFocusEffect } from '@react-navigation/native';

import {
    Button,
    Card,
    Title,
    Chip,
    Provider as PaperProvider,
    RadioButton,
    TextInput,
    Avatar
} from "react-native-paper";

import Movimentacao from '../../services/database/Movimentacoes';
import Metas from '../../services/database/Metas';

import { data, screenWidth, chartConfig } from './GraficoTag'
import { data1, screenWidth1, chartConfig1 } from './GraficoGasto'

import {
    BarChart,
    ProgressChart,
} from "react-native-chart-kit";


export function Inicial({ route, navigation }) {

    const { UserId, OtherParam } = route.params;
    const [salMov, setSalMov] = useState(null);
    const [meta, setMeta] = useState(null);


    const printSaldo = (valor) => {
        setSalMov(valor);
    }

    const printMeta = (valor) => {
        setMeta(valor)
    }


    useFocusEffect(
        React.useCallback(() => {
            Movimentacao.saldo(UserId)
                .then((valor) => printSaldo(valor['SUM(valor)']))
                .catch(err => alert(err)),
                Metas.meta(UserId)
                    .then((valor) => printMeta(valor.valor))
                    .catch(err => alert(err))
        })
    );

    return (
        <PaperProvider theme={theme}>
            <ScrollView style={styles.background}>
                <View style={styles.container}>
                    <View>
                        <Card style={styles.borderCard}>

                            <Card.Title
                                title={`Bem vindo ${OtherParam}`}
                                titleStyle={[styles.cardTitle, styles.userName]} />


                            <Card.Content>
                                <Title style={styles.saldo}>Valor da meta: {meta || parseFloat(0.00)}</Title>
                                <Title style={styles.saldo}>Saldo de Gastos: {salMov || parseFloat(0.00)}</Title>



                                <Button mode='contained' style={styles.cardLogin}
                                    onPress={() => navigation.navigate('RegistroMovimentacao', { UserId: UserId, OtherParam: OtherParam })}>
                                    Registrar Movimentação
                                </Button>

                                <Button mode='contained' style={styles.cardLogin}
                                    onPress={() => navigation.navigate('RegistroMeta', { UserId: UserId, OtherParam: OtherParam })}>
                                    Registrar Meta
                                </Button>


                            </Card.Content>

                            <Text style={styles.tipo}>Gráfico de Tags</Text>
                            <View>
                                <ProgressChart
                                    width={screenWidth}
                                    data={data}
                                    height={200}
                                    strokeWidth={16}
                                    radius={32}
                                    chartConfig={chartConfig}
                                    hideLegend={false} />
                            </View>

                            <Text style={styles.tipo}>Gráfico de Gastos</Text>

                            <BarChart
                                data={data1}
                                style={styles.chart}
                                width={screenWidth1}
                                height={300}
                                yAxisLabel="R$"
                                chartConfig={chartConfig1}
                                verticalLabelRotation={27}
                            />

                            <Card.Content>
                                <Button mode='contained' style={styles.cardLogin}
                                    onPress={() => navigation.navigate('Historico', { UserId: UserId, OtherParam: OtherParam })}>
                                    Historico
                                </Button>

                            </Card.Content>

                        </Card>
                    </View>
                </View>
            </ScrollView >
        </PaperProvider >
    );
}
