import React from "react";

import { Platform } from "react-native";
import { Root } from "native-base";
import { StackNavigator } from "react-navigation";

import Drawer from "./Drawer";
import Details from "./components/clients/details";

const AppNavigator = StackNavigator(
    {
        Drawer: { screen: Drawer },
        Details: { screen: Details },
    },
    {
        initialRouteName: "Drawer",
        headerMode: "none",
    }
);

export default () =>
    <Root>
        <AppNavigator />
    </Root>;
