import React, { Component } from "react";
import fire from "../../assets/fire";
import { Avatar, Col, Container, Divider, Nav, Panel, Row } from "rsuite";
import { Progress } from "rsuite";
import "./Champions.css";

function Datoscampeon(props) {
  const { Circle } = Progress;

  const fase = props.fase;
  let banrate = (props.stats[fase].ban * 100) / props.stats[fase].games;
  let winrate = (props.stats[fase].win * 100) / props.stats[fase].games;
  let pickrate = (props.stats[fase].pick * 100) / props.stats[fase].games;
  let kda = parseFloat(
    (props.stats[fase].kill + props.stats[fase].assits) /
    props.stats[fase].death
  );

  kda = Math.round(kda).toFixed(2);

  return (
    <Col md={6} sm={12} style={{ marginTop: 15 }}>
      <Panel
        shaded
        bordered
        bodyFill
        style={{ display: "inline-block" }}
      >

        <Row>
          <Col md={24} sm={24}>
            <Row>
              <Col md={8} sm={24}> <img src={props.image} className="imagencamp" /></Col>
              <Col md={16} sm={24} style={{ textAlign: "center" }}>
                <h4>{props.name}</h4>
                {/* <h5>KDA: {kda}</h5>
                <p>
                  Kills: {props.stats[fase].kill} Assits: {props.stats[fase].assits}{" "}
              Death: {props.stats[fase].death}
                </p> */}
                <div style={{ marginTop: 5 }}>
                  <div className="graficas">
                    <Circle percent={pickrate} />
                Pick Rate
              </div>
                  <div className="graficas">
                    <Circle percent={banrate} strokeColor="#ffc107" />
                Ban Rate
              </div>
                  <div className="graficas">
                    <Circle percent={winrate} />
                Win Rate
              </div>
                </div>
              </Col>
            </Row>
          </Col>
          <Col md={24} sm={24} style={{ textAlign: "center" }}>


          </Col>
        </Row>
      </Panel>
    </Col>
  );
}

function Cargarcampeones(props) {
  let campeoneslist, array;
  if (props.campeones !== null) {
    array = Object.values(props.campeones);
    if (array.length !== 0) {
      campeoneslist = array.map((campeon) => {
        if (campeon.stats[props.fase].games != 0) {
          return (
            <Datoscampeon
              key={campeon.key}
              image={campeon.image}
              name={campeon.name}
              stats={campeon.stats}
              fase={props.fase}
            ></Datoscampeon>
          );
        }
      });
    }
  }

  return <Row>{campeoneslist}</Row>;
}

const CustomNav = ({ active, onSelect, ...props }) => {
  return (
    <Nav justified {...props} activeKey={active} onSelect={onSelect}>
      <Nav.Item eventKey="PLAYING_EVENT">Playing Event</Nav.Item>
      <Nav.Item eventKey="MAIN_EVENT">Main Event</Nav.Item>
      <Nav.Item eventKey="TOTAL">Total</Nav.Item>
    </Nav>
  );
};

class Champions extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      campeones: [],
      active: "PLAYING_EVENT",
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(activeKey) {
    this.setState({ active: activeKey });
  }
  componentDidMount() {
    this.database = fire.database().ref().child("Champions");

    this.database.on("value", (snap) => {
      this.setState({ campeones: snap.val() });
      //   this.setState({ image: snap.child("image").val() });
      //   this.setState({ stats: snap.child("stats").val() });
      //   this.setState({ cargando: "cargado" });
    });
  }
  render() {
    const { active } = this.state;
    return (
      <div>
        <Container>
          {/* <Cargarproduct
            cargando={this.state.cargando}
            imagenes={this.state.imagenes}
            name={this.state.name}
            desc={this.state.desc}
          ></Cargarproduct> */}
          <CustomNav
            appearance="tabs"
            active={active}
            onSelect={this.handleSelect}
          />
          <Cargarcampeones
            campeones={this.state.campeones}
            fase={this.state.active}
          ></Cargarcampeones>
        </Container>
      </div>
    );
  }
}

export default Champions;
