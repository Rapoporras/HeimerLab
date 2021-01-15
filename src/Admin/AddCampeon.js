import React from "react";
import { Container, Grid, Row, Col, Panel } from "rsuite";
import fire from "../assets/fire";
import "./AddCampeon.css";
import firebaseConf from "../assets/fire";

function CargarProyecto(props) {
  let campeonesList, array;

  array = Object.values(props.campeones);

  if (array.length !== 0) {
    campeonesList = array.map((campeon) => {
      return (
        <Col xs={24} sm={2} md={2} key={campeon.key} style={{marginBottom: 10, color: "black",textAlign:"center",fontSize:11}}>
          <img src={campeon.image} className="imgcampeon" />
          {campeon.name}
        </Col>
      );
    });
  } else {
    campeonesList = <div></div>;
  }

  return campeonesList;
}

class AddCampeon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: [],
      alert: false,
      alertData: {},
      campeones: [],
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
    this.refs.contactForm.reset();
  }

  // Funcion para enviar la informacion del formulario a Firebase Database
  sendMessage(e) {
    // Detiene la acción predeterminada del elemento
    e.preventDefault();

    // Creamos un objeto con los valores obtenidos de los inputs
    const params = {
      name: this.inputName.value,
      image: this.inputImage.value,
      stats: {
        LEC: {
          TOP: {
            assits: 0,
            ban: 0,
            death: 0,
            games: 0,
            kill: 0,
            pick: 0,
            games: 0,
            win: 0,
          },
          JUNGLE: {
            assits: 0,
            ban: 0,
            death: 0,
            games: 0,
            kill: 0,
            pick: 0,
            games: 0,
            win: 0,
          },
          MID: {
            assits: 0,
            ban: 0,
            death: 0,
            games: 0,
            kill: 0,
            pick: 0,
            games: 0,
            win: 0,
          },
          ADC: {
            assits: 0,
            ban: 0,
            death: 0,
            games: 0,
            kill: 0,
            pick: 0,
            games: 0,
            win: 0,
          },
          SUPPORT: {
            assits: 0,
            ban: 0,
            death: 0,
            games: 0,
            kill: 0,
            pick: 0,
            games: 0,
            win: 0,
          },
        },
        SLO: {
          TOP: {
            assits: 0,
            ban: 0,
            death: 0,
            games: 0,
            kill: 0,
            pick: 0,
            games: 0,
            win: 0,
          },
          JUNGLE: {
            assits: 0,
            ban: 0,
            death: 0,
            games: 0,
            kill: 0,
            pick: 0,
            games: 0,
            win: 0,
          },
          MID: {
            assits: 0,
            ban: 0,
            death: 0,
            games: 0,
            kill: 0,
            pick: 0,
            games: 0,
            win: 0,
          },
          ADC: {
            assits: 0,
            ban: 0,
            death: 0,
            games: 0,
            kill: 0,
            pick: 0,
            games: 0,
            win: 0,
          },
          SUPPORT: {
            assits: 0,
            ban: 0,
            death: 0,
            games: 0,
            kill: 0,
            pick: 0,
            games: 0,
            win: 0,
          },
        },
        LCK: {
          TOP: {
            assits: 0,
            ban: 0,
            death: 0,
            games: 0,
            kill: 0,
            pick: 0,
            games: 0,
            win: 0,
          },
          JUNGLE: {
            assits: 0,
            ban: 0,
            death: 0,
            games: 0,
            kill: 0,
            pick: 0,
            games: 0,
            win: 0,
          },
          MID: {
            assits: 0,
            ban: 0,
            death: 0,
            games: 0,
            kill: 0,
            pick: 0,
            games: 0,
            win: 0,
          },
          ADC: {
            assits: 0,
            ban: 0,
            death: 0,
            games: 0,
            kill: 0,
            pick: 0,
            games: 0,
            win: 0,
          },
          SUPPORT: {
            assits: 0,
            ban: 0,
            death: 0,
            games: 0,
            kill: 0,
            pick: 0,
            games: 0,
            win: 0,
          },
        },
        LPL: {
          TOP: {
            assits: 0,
            ban: 0,
            death: 0,
            games: 0,
            kill: 0,
            pick: 0,
            games: 0,
            win: 0,
          },
          JUNGLE: {
            assits: 0,
            ban: 0,
            death: 0,
            games: 0,
            kill: 0,
            pick: 0,
            games: 0,
            win: 0,
          },
          MID: {
            assits: 0,
            ban: 0,
            death: 0,
            games: 0,
            kill: 0,
            pick: 0,
            games: 0,
            win: 0,
          },
          ADC: {
            assits: 0,
            ban: 0,
            death: 0,
            games: 0,
            kill: 0,
            pick: 0,
            games: 0,
            win: 0,
          },
          SUPPORT: {
            assits: 0,
            ban: 0,
            death: 0,
            games: 0,
            kill: 0,
            pick: 0,
            games: 0,
            win: 0,
          },
        },
        LCS: {
          TOP: {
            assits: 0,
            ban: 0,
            death: 0,
            games: 0,
            kill: 0,
            pick: 0,
            games: 0,
            win: 0,
          },
          JUNGLE: {
            assits: 0,
            ban: 0,
            death: 0,
            games: 0,
            kill: 0,
            pick: 0,
            games: 0,
            win: 0,
          },
          MID: {
            assits: 0,
            ban: 0,
            death: 0,
            games: 0,
            kill: 0,
            pick: 0,
            games: 0,
            win: 0,
          },
          ADC: {
            assits: 0,
            ban: 0,
            death: 0,
            games: 0,
            kill: 0,
            pick: 0,
            games: 0,
            win: 0,
          },
          SUPPORT: {
            assits: 0,
            ban: 0,
            death: 0,
            games: 0,
            kill: 0,
            pick: 0,
            games: 0,
            win: 0,
          },
        },
      },
    };
    // Validamos que no se encuentren vacios los principales elementos de nuestro formulario
    if (params.name && params.image) {
      // enviamos nuestro objeto "params" a firebase database
      firebaseConf
        .database()
        .ref("Champions")
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
      this.resetForm();
    } else {
      // En caso de no llenar los elementos necesario despliega un mensaje de alerta
      this.showAlert("warning", "Please fill the form");
    }
  }

  componentDidMount() {
    this.database = fire
      .database()
      .ref()
      .child("Champions")
      .orderByChild("name");
    this.database.on("value", (snap) => {
      this.setState({ campeones: snap.val() });
    });
  }

  render() {
    // const { campeones } = this.state;
    return (
      <Container style={{ padding: 20 }}>
        <Grid fluid>
          <Row>
            <Col xs={4}>
              <div>
                {this.state.alert && (
                  <div
                    className={`alert alert-${this.state.alertData.type}`}
                    role="alert"
                  >
                    <div className="container">
                      {this.state.alertData.message}
                    </div>
                  </div>
                )}
                <div className="container" style={{ padding: `40px 0px` }}>
                  <div className="row">
                    <div className="col-sm-12">
                      <h2>Añadir Campeon</h2>
                      <form
                        onSubmit={this.sendMessage.bind(this)}
                        ref="contactForm"
                      >
                        <div className="form-group">
                          <label htmlFor="name">Name</label>
                          <input
                            type="text"
                            className="form-control"
                            id="name"
                            placeholder="Name"
                            ref={(name) => (this.inputName = name)}
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="exampleInputEmail1">Email</label>
                          <input
                            type="text"
                            className="form-control"
                            id="image"
                            placeholder="Imagen"
                            ref={(image) => (this.inputImage = image)}
                          />
                        </div>

                        <button type="submit" className="btn btn-primary">
                          Send
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={20}>
              <CargarProyecto campeones={this.state.campeones}></CargarProyecto>
            </Col>
          </Row>
        </Grid>
      </Container>
    );
  }
}

export default AddCampeon;
