import React from "react";
import { DrawerNavigator } from "react-navigation";

import Home from "./components/home/";
import Employees from "./components/employees/";
import Leaves from "./components/leaves/";
import Clients from "./components/clients/";
import SideBar from "./components/sidebar";

const Drawer = DrawerNavigator(
  {
    Home: { screen: Home },
    Employees: { screen: Employees },
    Leaves: { screen: Leaves },
    Clients: { screen: Clients },
  },
  {
    initialRouteName: "Home",
    contentOptions: {
      activeTintColor: "#e91e63"
    },
    contentComponent: props => <SideBar {...props} />
  }
);

export default Drawer;
