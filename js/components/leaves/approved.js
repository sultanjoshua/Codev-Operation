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
const pratik = require("../../../img/contacts/pratik.png");
const sanket = require("../../../img/contacts/sanket.png");
const megha = require("../../../img/contacts/megha.png");
const atul = require("../../../img/contacts/atul.png");
const saurabh = require("../../../img/contacts/saurabh.png");
const varun = require("../../../img/contacts/varun.png");

const datas = [
  {
    img: joshua,
    text: "Joshua Sultan",
    note: "Nov 1 - Nov 8",
    status: "Vacation",
    bg: "#3591FA",
  },
  {
    img: richyll,
    text: "Richyll Son",
    note: "Nov 1 - Nov 8",
    status: "Vacation",
    bg: "#3591FA",
  },
  {
    img: joshua,
    text: "Joshua Sultan",
    note: "Nov 28 - Dec 1",
    status: "Vacation",
    bg: "#3591FA",
  },
  {
    img: michael,
    text: "Michael Gilos",
    note: "Nov 22",
    status: "Sick",
    bg: "#EF6092",
  }
];

class Approved extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <Content>
          <List
            dataArray={datas}
            renderRow={data =>
              <ListItem thumbnail>
                <Left>
                  <Thumbnail square size={55} source={data.img} />
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

export default Approved;
