import React from "react";
import { Container } from "rsuite";
// import AddCampeon from "./AddCampeon";

class HomeAdmin extends React.Component {
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
          HOlasoy admin
        {/* <AddCampeon></AddCampeon> */}
      </Container>
    );
  }
}

export default HomeAdmin;
