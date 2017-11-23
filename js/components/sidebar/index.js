import React, { Component } from "react";
import { ImageBackground } from "react-native";

import {
	Content,
	Text,
	List,
	ListItem,
	Icon,
	Container,
	Left,
	Right,
	Badge,
	Button,
	View,
	StyleProvider,
	getTheme,
	variables,
} from "native-base";

import styles from "./style";

const drawerCover = require("../../../img/drawer-cover.png");
const drawerImage = require("../../../img/logo-codev-ops.png");

const datas = [
	{
		name: "Employees",
		route: "Employees",
		icon: "person"
	},
	{
		name: "Leaves",
		route: "Leaves",
		icon: "paper"
	},
	{
		name: "Clients",
		route: "Clients",
		icon: "clipboard"
	},
];

class SideBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			shadowOffsetWidth: 1,
			shadowRadius: 4,
		};
	}

	render() {
		return (
			<Container>
				<Content bounces={false} style={{ flex: 1, backgroundColor: "#fff", top: -1 }}>
					<ImageBackground source={drawerCover} style={styles.drawerCover}>
						<ImageBackground square style={styles.drawerImage} source={drawerImage} />
					</ImageBackground>
					<List
						dataArray={datas}
						renderRow={data =>
							<ListItem button noBorder onPress={() => this.props.navigation.navigate(data.route)}>
								<Left>
									<Icon active name={data.icon} style={{ color: "#777", fontSize: 26, width: 30 }} />
									<Text style={styles.text}>
										{data.name}
									</Text>
								</Left>
							</ListItem>}
					/>
				</Content>
			</Container>
		);
	}
}

export default SideBar;
