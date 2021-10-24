import React from 'react';

import { View } from 'react-native';
import { styles } from './styles';

import { Login } from '../../components/Login'

export function Home() {
    return (
        <View style={styles.container}>
            <Login />
        </View>
    );
}