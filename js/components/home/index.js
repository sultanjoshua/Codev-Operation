import React, { Component } from "react";
import { ImageBackground, View, StatusBar } from "react-native";

import { Container, Button, H3, Text, Header, Title, Body, Left, Right } from "native-base";

import styles from "./styles";

const launchscreenBg = require("../../../img/launchscreen-bg.png");
const launchscreenLogo = require("../../../img/logo-codev-ops.png");

class Home extends Component {
	render() {
		return (
			<Container>
				<StatusBar barStyle="light-content" />
				<ImageBackground source={launchscreenBg} style={styles.imageContainer}>
					<View style={styles.logoContainer}>
						<ImageBackground source={launchscreenLogo} style={styles.logo} />
					</View>
					<View
						style={{
							alignItems: "center",
							marginBottom: 35,
							backgroundColor: "transparent",
						}}
					>
						<H3 style={styles.text}>"Up to date with the latest</H3>
						<View style={{ marginTop: 8 }} />
						<H3 style={styles.text}>employee information."</H3>
						<View style={{ marginTop: 8 }} />
					</View>
					<View style={{ marginBottom: 80 }}>
						<Button 
							style={{ alignSelf: "center" , backgroundColor: "#ee2738"}}
							onPress={() => this.props.navigation.navigate("DrawerOpen")}
						>
							<Text>Lets Go!</Text>
						</Button>
					</View>
				</ImageBackground>
			</Container>
		);
	}
}

export default Home;
