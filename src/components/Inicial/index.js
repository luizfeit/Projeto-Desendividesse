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

import { data, screenWidth, chartConfig } from './GraficoTag'
import { screenWidth1, chartConfig1 } from './GraficoGasto'

import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
} from "react-native-chart-kit";


export function Inicial({ route, navigation }) {

    const { UserId, OtherParam } = route.params;
    const [salMov, setSalMov] = useState(null);
    const [data1, setData1] = useState(null);
    const [data, setData] = useState(null);


    const printSaldo = (valor) => {
        setSalMov(valor);
    }

    function printTipo (tipos) {
        tipos.push(tipos[0]);
        var values = [];
        for (let i = 0; i <= 5; i++) {
            var object = tipos[i];
            console.log(object[property]);
            // values.push(object[property]);
            for (var property in object) {
            }}
    }
        // setData1({
        //     labels: ["Crédito","Débito","Saque", "Transferencia" ],
        //     datasets: [
        //     {
        //         data: []
        //     }
        //     ]
        // })
    // const printTag = (tags) => {
    //     data.data.forEach[tags['SUM(valor)']]
    // }

    useFocusEffect(
        React.useCallback(() => {
            Movimentacao.saldo(UserId)
            .then((valor) => printSaldo(valor['SUM(valor)']))
            .catch(err => alert(err))
            // Movimentacao.countTipo(UserId)
            //     .then((tipos) => printTipo(tipos))
            //     .catch(err => alert(err))
            // Movimentacao.countTag(UserId)
            //     .then((tags) => console.log(tags))
            //     .catch(err => alert(err))
        })
    );

    // const data1 = {
    //             labels: ["Crédito","Débito","Saque", "Transferencia" ],
    //             datasets: [
    //             {
    //                 data: []
    //             }
    //             ]
    //         }
    

    //   const data = {
    //     labels: ["Lazer", "Alime.", "Trans.", "Mer."], // optional
    //     data: [0.4, 0.6, 0.8, 0.1]
    // };
    
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
                                <Title style={styles.saldo}>Saldo de Gastos: {salMov || parseFloat(0.00)}</Title>



                                <Button mode='contained' style={styles.cardLogin}
                                    onPress={() => navigation.navigate('RegistroMovimentacao', { UserId: UserId, OtherParam: OtherParam })}>
                                    Registrar Movimentação
                                </Button>

                                <Button mode='contained' style={styles.cardLogin}
                                    onPress={() => navigation.navigate('RegistroMeta', { UserId: UserId, OtherParam: OtherParam })}>
                                    Registrar Meta
                                </Button>

                                <Button mode='contained' style={styles.cardLogin}
                                    onPress={() => navigation.navigate('Historico', { UserId: UserId, OtherParam: OtherParam })}>
                                    Historico
                                </Button>
                            </Card.Content>

                            {/* <Text style={styles.tipo}>Gráfico de Tags</Text>
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
                            /> */}

                        </Card>
                    </View>
                </View>
            </ScrollView>
        </PaperProvider>
    );
}
