import React from "react";
import { Appbar } from "react-native-paper";


export const Header = (props) => {
    return (
        <Appbar>
            <Appbar.BackAction />
            <Appbar.Content title={props.title} />
        </Appbar>
    )
}