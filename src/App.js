import React from "react";
import firebaseConf from "../src/assets/fire";
import Calendario from "./Admin/Calendario";
// import HomeAdmin from "./Admin/HomeAdmin";
import { Container, Row, Col } from "shards-react";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: [],
      alert: false,
      alertData: {},
    };
  }

  render() {
    return (
      <Container style={{ padding: 20 }}>
        hola soy home
        <Calendario></Calendario>
      </Container>
    );
  }
}

export default App;
