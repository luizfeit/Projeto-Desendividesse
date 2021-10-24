import { StyleSheet } from "react-native";
import { DefaultTheme } from "react-native-paper";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#78797b',

    },
    view: {
        width: '80%',

    },
    cardTitle: {
        fontSize: 28,
        fontFamily: 'Roboto_700Bold',
        color: '#fac829',
    },
    cardButton: {
        margin: 2,
        marginLeft: 0,
        marginRight: 0,
        color: '#000',
    },
    borderCard: {
        borderRadius: 10,
    },
    cardInput: {
        margin: 3,
        marginLeft: 0,
        marginRight: 0,
        
    },
    cardLogin: {
        borderBottomWidth: 2,
        borderLeftWidth: 3,
        borderTopWidth: 1,
        borderRightWidth: 1,
        borderColor: '#000',
        margin: 2,
        marginLeft: 0,
        marginRight: 0,
    },
})

export const theme ={
    ...DefaultTheme,
    roundness: 2,
    colors:{
        ...DefaultTheme.colors,
        primary: "#fac829",
        border  : '#000',
        background: "transparent",
    }
}