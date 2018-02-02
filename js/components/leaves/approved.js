import React, { Component } from "react";
import {Image} from 'react-native'

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
import App from "../../App"

const joshua = require("../../../img/joshua.jpg");
const richyll = require("../../../img/richyll.jpg");
const michael = require("../../../img/michael.png");
const pratik = require("../../../img/pratik.png");
const sanket = require("../../../img/sanket.png");
const megha = require("../../../img/sanket.png");
const atul = require("../../../img/atul.png");
const saurabh = require("../../../img/saurabh.png");
const varun = require("../../../img/varun.png");

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
  
  dataFirebase_leave = App.dataFirebase_leave;
  
  render() {

    i = 0;
    var dataDb = new Array();
    var bgColor = "#3591FA";
    dataFirebase_leave.forEach(function(childSnapshot) {
      var childKey = childSnapshot.key;
      var childData = childSnapshot.val();
      if (childData.status == "Approved") {
        dataDb[i] = childData;
        i++;
        alert('name: ' + childData.name + "\n type: " + childData.type
      + "\n dates: " + childData.dates);
      }
    });

    return (
      <Container style={styles.container}>
        <Content>
          <List
            dataArray={dataDb}
            renderRow={data =>
              <ListItem thumbnail>
                <Left>
                <Image source={{uri : data.image_path}} style = {{height: 50, width: 50, margin: 1 }} />
                </Left>
                <Body>
                  <Text>{data.name}</Text>
                  <Text numberOfLines={1} note>{data.dates}</Text>
                </Body>
                {data.status &&
									<Right style={{ flex: 1 }}>
										<Badge
											style={{
												borderRadius: 3,
												height: 25,
												width: 72,
												backgroundColor: bgColor,
											}}
										>
											<Text style={styles.badgeText}>{`${data.type}`}</Text>
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
