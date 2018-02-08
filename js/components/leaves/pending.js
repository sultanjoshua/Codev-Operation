import React, { Component } from "react";
import firebase from 'react-native-firebase';
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
  Body,
  View
} from "native-base";

import styles from "./styles";

// const joshua = require("../../../img/joshua.jpg");
// const richyll = require("../../../img/richyll.jpg");
// const michael = require("../../../img/michael.png");
// const pratik = require("../../../img/pratik.png");
// const sanket = require("../../../img/sanket.png");
// const megha = require("../../../img/sanket.png");
// const atul = require("../../../img/atul.png");
// const saurabh = require("../../../img/saurabh.png");
// const varun = require("../../../img/varun.png");

// const datas = [
//   {
//     img: michael,
//     text: "Michael Gilos",
//     note: "Nov 23",
//     status: "Sick",
//     bg: "#EF6092",
//   },
//   {
//     img: richyll,
//     text: "Richyll Son",
//     note: "Nov 23 - Nov 29",
//     status: "Sick",
//     bg: "#EF6092",
//   },
// ];

class Pending extends Component {
  
  constructor(props) {
    super(props);
    
    this.state = {dataSource: []};
  }
  
  componentDidMount() {
    firebase.app().database().ref('leaves').on('value', this.populateSnapshotData.bind(this));
  }
  
  populateSnapshotData(snapshot) {
    var responseData = [];
      snapshot.forEach( childSnapshot => {
        var childKey = childSnapshot.key;
        var childData = childSnapshot.val();
        
        // console.log(childData);
        if (childData.status.toUpperCase() == "PENDING") {
          responseData.push({
            img: childData.image_path,
            text: childData.name,
            note: childData.dates,
            status: childData.type,
            bg: this.statusButtonColor(childData.type),
          });
        }
      });
      this.setState(prevData => {
        return { dataSource: responseData };
      });
      console.log(this.state.dataSource);
  }

  statusButtonColor(status) {
    switch(status.toUpperCase()) {
      case "SICK": return "#EF6092";
      default: return "#3591FA";
    }
  }
  
  render() {
    return (
      <Container style={styles.container}>
        <Content>
          <List
            dataArray={this.state.dataSource}
            renderRow={data =>
              <ListItem thumbnail>
                <Left>
                <Image 
                  source={{uri : data.img}} 
                  style = {{height: 50, width: 50, margin: 1 }} />
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
