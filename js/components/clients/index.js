import React, { Component } from "react";

import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Text,
  Left,
  Body,
  Right,
  List,
  ListItem
} from "native-base";

import styles from "./styles";

const datas = [
  {
    route: "Details",
    text: "Client A"
  },
  {
    route: "Details",
    text: "Client B"
  },
  {
    route: "Details",
    text: "Client C"
  },
  {
    route: "Details",
    text: "Client D"
  },
  {
    route: "Details",
    text: "Client E"
  },
];

class NHCard extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <Header
              style={{ backgroundColor: "#ee2738" }}
              androidStatusBarColor="#56565b"
              iosBarStyle="light-content">
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}
            >
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Clients</Title>
          </Body>
          <Right>
						<Button transparent><Icon name="search" /></Button>
						<Button transparent><Icon name="more" /></Button>
					</Right>

        </Header>

        <Content>
          <List
            dataArray={datas}
            renderRow={data =>
              <ListItem
                button
                onPress={() => this.props.navigation.navigate(data.route)}
              >
                <Text>{data.text}</Text>
                <Right>
                  <Icon name="arrow-forward" style={{ color: "#999" }} />
                </Right>
              </ListItem>}
          />
        </Content>
      </Container>
    );
  }
}

export default NHCard;
