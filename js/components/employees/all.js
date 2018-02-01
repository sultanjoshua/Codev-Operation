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
  },
  {
    img: pratik,
    text: "Kumar Pratik",
    note: "Android Developer",
    status: "In",
    bg: "#1EBC7C",
  },
  {
    img: sanket,
    text: "Kumar Sanket",
    note: "Android Developer",
    status: "In",
    bg: "#1EBC7C",
  },
  {
    img: megha,
    text: "Megha",
    note: "Android Developer",
    status: "In",
    bg: "#1EBC7C",
  },
  {
    img: atul,
    text: "Atul Ranjan",
    note: "Android Developer",
    status: "In",
    bg: "#1EBC7C",
  },
  {
    img: saurabh,
    text: "Saurabh Sahu",
    note: "Android Developer",
    status: "In",
    bg: "#1EBC7C",
  },
  {
    img: varun,
    text: "Varun Sahu",
    note: "Android Developer",
    status: "In",
    bg: "#1EBC7C",
  }
];

class All extends Component {
  
dataFirebase = App.dataFirebase;

  render() {
    i = 0;
    var dataDb = new Array();
    var bgColor = "#DA4437";
    dataFirebase.forEach(function(childSnapshot) {
      var childKey = childSnapshot.key;
      var childData = childSnapshot.val();

      // alert('image: ' + childData.image + "\n is_login: " + childData.is_login
      // + "\n jobtitle: " + childData.jobtitle
      // + "\n name: " + childData.name);
      // console.log('image: ' + childData.image + " is_login: " + childData.is_login
      // + " jobtitle: " + childData.jobtitle
      // + " name: " + childData.name);

      dataDb[i] = childData;
      i++;
    });
    return (
      
      <Container style={styles.container}>   
        <Content>
          <List
            dataArray={dataDb}            
            renderRow={data =>
              <ListItem avatar>
                <Left>
                  <Image source={{uri : data.image}} style = {{height: 50, width: 50, margin: 1 }} />
                </Left>
                <Body>
                  <Text>{data.name}</Text>
                  <Text numberOfLines={1} note>{data.jobtitle}</Text>
                </Body>
                <Right style={{ flex: 1 }}>
                  <Badge
                    style={{
                      borderRadius: 3,
                      height: 25,
                      width: 72,
                      backgroundColor : "#DA4437",
                    }}
                  >
                    <Text style={styles.badgeText}>{data.is_login}</Text>
                  </Badge>
                </Right>
              </ListItem>}
          />
        </Content>
      </Container>
    );
  }
}

export default All;
