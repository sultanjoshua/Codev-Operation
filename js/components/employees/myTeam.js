import React, { Component } from "react";
import firebase from 'react-native-firebase';

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

const joshua = require("../../../img/joshua.jpg");
const richyll = require("../../../img/richyll.jpg");
const michael = require("../../../img/michael.png");

// const datas = [
//   {
//     img: joshua,
//     text: "Joshua Sultan",
//     note: "Android Developer",
//     status: "In",
//     bg: "#1EBC7C",
//   },
//   {
//     img: michael,
//     text: "Michael Gilos",
//     note: "Android Developer",
//     status: "Not Yet",
//     bg: "#DA4437",
//   },
//   {
//     img: richyll,
//     text: "Richyll Son",
//     note: "Android Developer",
//     status: "On Leave",
//     bg: "#EFB406",
//   }
// ];

class MyTeam extends Component {

  constructor(props) {
    super(props);
    
    this.state = {dataSource: []};
  }

  componentDidMount() {
    firebase.app().database().ref('employees').on('value', this.populateSnapshotData.bind(this));
  }

  populateSnapshotData(snapshot) {
    var responseData = [];
      snapshot.forEach( childSnapshot => {
        var childKey = childSnapshot.key;
        var childData = childSnapshot.val();
        
        if (childData.supervisor != null) {
          if (childData.supervisor.toUpperCase() == "ANTONIO BIROL JR") {
            responseData.push({
              img: childData.image_path,
              text: childData.name,
              note: childData.job_title,
              status: childData.clockin_status,
              bg: this.statusButtonColor(childData.clockin_status),
            });
          }
        } 
      });
      this.setState(prevData => {
        return { dataSource: responseData };
      });
      console.log(this.state.dataSource);
  }

  statusButtonColor(status) {
    switch(status.toUpperCase()) {
      case "IN": return "#1EBC7C";
      case "ON LEAVE": return "#EFB406";
      default: return "#DA4437";
    }
  }

  render() {
    return (
      <Container style={styles.container}>
        <Content>
          <List
            dataArray={this.state.dataSource}
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
