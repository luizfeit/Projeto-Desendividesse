import { Dimensions, StyleSheet } from 'react-native';
import { DefaultTheme } from "react-native-paper";

export const styles = StyleSheet.create({
    background: {
        backgroundColor: '#78797b'
    },
    container: {
        padding: 15,
        paddingTop: 50,
    },
    view: {
        width: "80%",
    },
    cardRegister: {
        margin: 15,
        marginLeft: 0,
        marginRight: 0,
        borderBottomWidth: 2,
        borderLeftWidth: 3,
        borderTopWidth: 1,
        borderRightWidth: 1,
        borderColor: '#000',
    },
    cardInput: {
        marginLeft: 0,
        marginRight: 0,
    },
    borderCard: {
        borderRadius: 10,
    },
    radioStyle: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignContent: 'center',
        height: Dimensions.get('window').width / 2,
        width: Dimensions.get("window").width / 2,
        textAlign: 'center',
    },
    tipo: {
        marginTop: 6,
        fontSize: 20
    },
    chip: {
        margin: 6,
        padding: 6,
        width: "100%",

    }

});

export const theme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
        ...DefaultTheme.colors,
        primary: "#fac829",
        border: '#000',
        background: "transparent",
    }
}