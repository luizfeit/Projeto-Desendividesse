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
        margin: 9,
        marginLeft: 0,
        marginRight: 0,
    },
    borderCard: {
        borderRadius: 10,
    },
    calendar: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignContent: 'center',
        textAlign: 'center',
        width: Dimensions.get("window").width / 2,
        textAlign: 'center',
    },
    date: {
        marginTop: 6,
        fontSize: 20,
        marginBottom: 7
    },
    date2: {
        marginTop: 6,
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