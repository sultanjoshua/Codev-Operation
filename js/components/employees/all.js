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

// const joshua = require("../../../img/joshua.jpg");
// const richyll = require("../../../img/richyll.jpg");
// const michael = require("../../../img/michael.png");
// const pratik = require("../../../img/pratik.png");
// const sanket = require("../../../img/sanket.png");
// const megha = require("../../../img/megha.png");
// const atul = require("../../../img/atul.png");
// const saurabh = require("../../../img/saurabh.png");
// const varun = require("../../../img/varun.png");

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
//   },
//   {
//     img: pratik,
//     text: "Kumar Pratik",
//     note: "Android Developer",
//     status: "In",
//     bg: "#1EBC7C",
//   },
//   {
//     img: sanket,
//     text: "Kumar Sanket",
//     note: "Android Developer",
//     status: "In",
//     bg: "#1EBC7C",
//   },
//   {
//     img: megha,
//     text: "Megha",
//     note: "Android Developer",
//     status: "In",
//     bg: "#1EBC7C",
//   },
//   {
//     img: atul,
//     text: "Atul Ranjan",
//     note: "Android Developer",
//     status: "In",
//     bg: "#1EBC7C",
//   },
//   {
//     img: saurabh,
//     text: "Saurabh Sahu",
//     note: "Android Developer",
//     status: "In",
//     bg: "#1EBC7C",
//   },
//   {
//     img: varun,
//     text: "Varun Sahu",
//     note: "Android Developer",
//     status: "In",
//     bg: "#1EBC7C",
//   }
// ];

class All extends Component {

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
        
        // console.log(childData);
        responseData.push({
          img: childData.image_path,
          text: childData.name,
          note: childData.job_title,
          status: childData.clockin_status,
          bg: childData.clockin_status == "In" ? "#1EBC7C" : "#DA4437",
        });
      });
      this.setState(prevData => {
        return { dataSource: responseData };
      });
      console.log(this.state.dataSource);
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

export default All;
