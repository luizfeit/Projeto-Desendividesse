import React from 'react';

import { ScrollView, View , Text} from 'react-native';

import { styles, theme } from './styles';

import { Header } from '../Header/header.component';

export function Inicial () {
    return (
        <PaperProvider theme={theme}>
            <Header title="Desendividesse" />
            <ScrollView style={styles.background}>
                <View style={styles.container}>
                    <View>
                        
                    </View>
                </View>
            </ScrollView>
        </PaperProvider>
    );
}
