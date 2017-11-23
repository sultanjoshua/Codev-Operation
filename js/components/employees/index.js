import React, { Component } from "react";

import { 
	Container, 
	Header, 
	Title, 
	Button, 
	Icon, 
	Tabs, 
	Tab, 
	Right, 
	Left, 
	Body 
} from 'native-base';

import styles from "./styles";

import All from './all';
import MyTeam from './myTeam';

class Employees extends Component {
	render() {
		return (
			<Container style={styles.container}>
				<Header hasTabs
						style={{ backgroundColor: "#ee2738" }}
          				androidStatusBarColor="#56565b"
          				iosBarStyle="light-content">
					<Left>
						<Button
							transparent
							onPress={() => this.props.navigation.navigate("DrawerOpen")}
						>
							<Icon name="ios-menu" />
						</Button>
					</Left>
					<Body>
						<Title>Employees</Title>
					</Body>
					<Right>
						<Button transparent><Icon name="search" /></Button>
						<Button transparent><Icon name="more" /></Button>
					</Right>
				</Header>

				<Tabs>
					<Tab heading="All" 
						 tabStyle={{backgroundColor: '#ee2738'}} 
						 textStyle={{color: '#fff'}} 
						 activeTabStyle={{backgroundColor: '#ee2738'}} 
						 activeTextStyle={{color: '#fff', fontWeight: 'bold'}}
					>
						<All />
					</Tab>
					<Tab heading="My Team" 
						 tabStyle={{backgroundColor: '#ee2738'}} 
						 textStyle={{color: '#fff'}} 
						 activeTabStyle={{backgroundColor: '#ee2738'}} 
						 activeTextStyle={{color: '#fff', fontWeight: 'bold'}}
					>
						<MyTeam />
					</Tab>
				</Tabs>
			</Container>
		);
	}
}

export default Employees;