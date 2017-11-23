import React, { Component } from "react";

import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  List,
  ListItem,
  Text,
  Thumbnail,
  Left,
  Right,
  Badge,
  Body
} from "native-base";

import styles from "./styles";

const joshua = require("../../../img/contacts/joshua.jpg");
const richyll = require("../../../img/contacts/richyll.jpg");
const michael = require("../../../img/contacts/michael.png");

const datas = [
  {
    img: joshua,
    text: "Joshua Sultan",
    note: "Android Developer",
    status: "In",
    bg: "#1EBC7C",
  },
  {
    img: michael,
    text: "Michael Gilos",
    note: "Android Developer",
    status: "Not Yet",
    bg: "#DA4437",
  },
  {
    img: richyll,
    text: "Richyll Son",
    note: "Android Developer",
    status: "On Leave",
    bg: "#EFB406",
  }
];

class MyTeam extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <Content>
          <List
            dataArray={datas}
            renderRow={data =>
              <ListItem avatar>
                <Left>
                  <Thumbnail small source={data.img} />
                </Left>
                <Body>
                  <Text>{data.text}</Text>
                  <Text numberOfLines={1} note>{data.note}</Text>
                </Body>
                {data.status &&
									<Right style={{ flex: 1 }}>
										<Badge
											style={{
												borderRadius: 3,
												height: 25,
												width: 72,
												backgroundColor: data.bg,
											}}
										>
											<Text style={styles.badgeText}>{`${data.status}`}</Text>
										</Badge>
									</Right>}
              </ListItem>}
          />
        </Content>
      </Container>
    );
  }
}

export default MyTeam;
