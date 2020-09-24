import React from "react";
import { Container } from "rsuite";
import "./pages/Champions/Champions.css";
import Champions from "./pages/Champions/Champions";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Container style={{ padding: 20 }}>
        <Champions></Champions>
      </Container>
    );
  }
}

export default App;
