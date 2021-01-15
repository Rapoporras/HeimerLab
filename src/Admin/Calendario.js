import React from "react";
import fire from "../assets/fire";
import "./Calendario.css";
import firebaseConf from "../assets/fire";
import "./Equipo";
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
import Equipo from "./Equipo";

function FormSelectDemo(props) {
  let equiposList, array;
  //  console.log(props.equipos)
  if (props != null) {
    array = Object.values(props.equipos);

    if (array.length !== 0) {
      equiposList = array.map((equipo) => {
        return <option value={equipo.key}>{equipo.name}</option>;
      });
    } else {
      equiposList = <option></option>;
    }
  } else {
    equiposList = <option>Cargando</option>;
  }
  // console.log(props.equipos["LEC"])
  return equiposList;
}
// function obtenerimagenEquipo() {
//   var hola = "a";
//   return fire
//     .database()
//     .ref()
//     .child("Teams")
//     .child("LEC")
//     .child("-MR-JhXcfzeXAqNc80c1");
//   // .orderByChild("fecha");
// }
function Cargarequipos(props) {
  let equiposList, array;
  //  console.log(props.equipos)

  if (props != null) {
    array = Object.values(props.equipos);

    if (array.length !== 0) {
      equiposList = array.map((equipo) => {
        // var equipo1 = obtenerimagenEquipo();
        // console.log(equipo1);
        return (
          <Col
            md="12"
            key={equipo.key}
            style={{
              marginBottom: 10,
              color: "black",
              textAlign: "center",
              fontSize: 11,
            }}
          >
            <Card>
              <CardHeader>{equipo.fecha + " " + equipo.hora}</CardHeader>
              <Container style={{ padding: 10 }}>
                <Row>
                  <Col>
                    <Equipo id={equipo.equipo1} liga={props.liga}></Equipo>
                  </Col>
                  <Col>VS</Col>
                  <Col>
                    <Equipo id={equipo.equipo2} liga={props.liga}></Equipo>
                  </Col>
                </Row>
              </Container>
            </Card>
          </Col>
        );
      });
    } else {
      equiposList = <div></div>;
    }
  } else {
    equiposList = <div>Cargando</div>;
  }
  // console.log(props.equipos["LEC"])
  return equiposList;
}

class Calendario extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: [],
      alert: false,
      alertData: {},
      LEC: [],
      SL: [],
      LCS: [],
      fecha: "",
      hora: "",
      equipo1: "",
      equipo2: "",
    };
  }
  // Mostrar una alerta cuando se envia el formulario
  showAlert(type, message) {
    this.setState({
      alert: true,
      alertData: { type, message },
    });
    setTimeout(() => {
      this.setState({ alert: false });
    }, 4000);
  }

  // Con esta funcion borramos todos los elementos del formulario
  resetForm() {
    this.reset();
  }

  // Funcion para enviar la informacion del formulario a Firebase Database
  sendMessage(e) {
    // Detiene la acción predeterminada del elemento
    e.preventDefault();

    // Creamos un objeto con los valores obtenidos de los inputs
    const params = {
      fecha: this.state.fecha,
      hora: this.state.hora,
      equipo1: this.state.equipo1,
      equipo2: this.state.equipo2,
    };
    // Validamos que no se encuentren vacios los principales elementos de nuestro formulario

    // enviamos nuestro objeto "params" a firebase database

    // console.log(params);
    firebaseConf
      .database()
      .ref("Calendar")
      .child("SL")
      .push(params)
      .then(() => {
        // Si todo es correcto, actualizamos nuestro estado para mostrar una alerta.
        this.showAlert("success", "Your message was sent successfull");
      })
      .catch(() => {
        // Si ha ocurrido un error, actualizamos nuestro estado para mostrar el error

        this.showAlert("danger", "Your message could not be sent");
      });
    // limpiamos nuestro formulario llamando la funcion resetform
    // e.reset();
  }

  formulario() {
    var formulariovar = (
      <Container>
        {this.state.alert && (
          <div
            classfecha={`alert alert-${this.state.alertData.type}`}
            role="alert"
          >
            <div classfecha="container">{this.state.alertData.message}</div>
          </div>
        )}
        <Container style={{ padding: `40px 0px` }}>
          <Row>
            <Col>
              <h4>Añadir Campeon</h4>
              <Form onSubmit={this.sendMessage.bind(this)}>
                <FormGroup>
                  <label htmlFor="fecha">fecha</label>
                  <FormInput
                    type="text"
                    id="fecha"
                    placeholder="fecha"
                    onChange={(e) => this.setState({ fecha: e.target.value })}
                  ></FormInput>
                </FormGroup>
                <FormGroup>
                  <label htmlFor="hora">Hora</label>
                  <FormInput
                    type="text"
                    id="hora"
                    placeholder="hora"
                    onChange={(e) => this.setState({ hora: e.target.value })}
                  ></FormInput>
                </FormGroup>
                <FormGroup>
                  <FormSelect
                    onChange={(e) => this.setState({ equipo1: e.target.value })}
                    id="equipo1"
                  >
                    <FormSelectDemo equipos={this.state.SL}></FormSelectDemo>
                  </FormSelect>
                </FormGroup>
                <FormGroup>
                  <FormSelect
                    onChange={(e) => this.setState({ equipo2: e.target.value })}
                    id="equipo2"
                  >
                    <FormSelectDemo equipos={this.state.SL}></FormSelectDemo>
                  </FormSelect>
                </FormGroup>
                <Button type="submit" classfecha="btn btn-primary">
                  Send
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </Container>
    );
    return formulariovar;
  }
  componentDidMount() {
    this.database = fire.database().ref().child("Calendar").child("LEC");
    // .orderByChild("fecha");
    this.database.on("value", (snap) => {
      this.setState({ LEC: snap.val() });
    });

    this.database = fire.database().ref().child("Calendar").child("SL");
    // .orderByChild("fecha");
    this.database.on("value", (snap) => {
      this.setState({ SL: snap.val() });
    });

    this.database = fire.database().ref().child("Calendar").child("LCS");
    // .orderByChild("fecha");
    this.database.on("value", (snap) => {
      this.setState({ LCS: snap.val() });
    });
  }
  render() {
    return (
      <Container style={{ padding: 20 }}>
        <Row>
          <Col md="4">{this.formulario()}</Col>
          <Col md="8">
            <Container>
              <Row style={{ textAlign: "center" }}>
                <Col md="12" style={{ marginBottom: 10 }}>
                  <h4>LEC</h4>
                  <Container>
                    <Row>
                      <Cargarequipos equipos={this.state.LEC} liga="LEC"></Cargarequipos>
                    </Row>
                  </Container>
                </Col>
                <Col md="12" style={{ marginBottom: 10 }}>
                  <h4>LCS</h4>
                  <Container>
                    <Row>
                      <Cargarequipos equipos={this.state.LCS} liga="LCS"></Cargarequipos>
                    </Row>
                  </Container>
                </Col>
                <Col md="12" style={{ marginBottom: 10 }}>
                  <h4>SuperLiga</h4>
                  <Container>
                    <Row>
                      <Cargarequipos equipos={this.state.SL} liga="SL"></Cargarequipos>
                    </Row>
                  </Container>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Calendario;
