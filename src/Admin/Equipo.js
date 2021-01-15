import React from "react";
import fire from "../assets/fire";
import "./Calendario.css";
import {
  Container,
  Row,
  Col,
  Card,
  CardTitle,
  CardImg,
  CardBody,
  Form,
  Button,
  FormGroup,
  FormInput,
  FormSelect,
  CardHeader,
} from "shards-react";

class Equipo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      key: props.id,
      nombre: "",
      image: "",
    };
  }
  componentDidMount() {
    var key = this.state.key;
    var liga = this.props.liga;
    console.log(key);
    this.database = fire
      .database()
      .ref()
      .child("Teams")
      .child(liga)
      .child(key);
    // .orderByChild("fecha");
    this.database.on("value", (snap) => {
      this.setState({ nombre: snap.child("name").val() });
      this.setState({ image: snap.child("image").val() });
    });
  }
  render() {
    return (
      <Card>
        <CardImg src={this.state.image} className="imgCalendar" />
        <CardBody>
        <CardTitle>{this.state.nombre}</CardTitle>
      </CardBody>
      </Card>
    );
  }
}

export default Equipo;
