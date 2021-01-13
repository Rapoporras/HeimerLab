import React from "react";
import { Container } from "rsuite";
import firebaseConf from '../src/assets/fire';
import HomeAdmin from "./Admin/HomeAdmin";

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
      <Container style={{padding:20}}>
        hola soy home
        <HomeAdmin></HomeAdmin>
      </Container>
    );
  }
}

export default App;
