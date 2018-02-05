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
  Body,
  View
} from "native-base";

import styles from "./styles";

const joshua = require("../../../img/joshua.jpg");
const richyll = require("../../../img/richyll.jpg");
const michael = require("../../../img/michael.png");
const pratik = require("../../../img/pratik.png");
const sanket = require("../../../img/sanket.png");
const megha = require("../../../img/megha.png");
const atul = require("../../../img/atul.png");
const saurabh = require("../../../img/saurabh.png");
const varun = require("../../../img/varun.png");

const datas = [
  {
    img: michael,
    text: "Michael Gilos",
    note: "Nov 23",
    status: "Sick",
    bg: "#EF6092",
  },
  {
    img: richyll,
    text: "Richyll Son",
    note: "Nov 23 - Nov 29",
    status: "Sick",
    bg: "#EF6092",
  },
];

class Pending extends Component {
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

export default Pending;
