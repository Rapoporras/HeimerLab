import React from "react";
import firebaseConf from '../assets/fire';

class Partido extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: [],
      alert: false,
      alertData: {},
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
        "LEC": {
          "TOP": {
            "assits": 0,
            "ban": 0,
            "death": 0,
            "games": 0,
            "kill": 0,
            "pick": 0,
            "games": 0,
            "win": 0
          },
          "JUNGLE": {
            "assits": 0,
            "ban": 0,
            "death": 0,
            "games": 0,
            "kill": 0,
            "pick": 0,
            "games": 0,
            "win": 0
          },
          "MID": {
            "assits": 0,
            "ban": 0,
            "death": 0,
            "games": 0,
            "kill": 0,
            "pick": 0,
            "games": 0,
            "win": 0
          },
          "ADC": {
            "assits": 0,
            "ban": 0,
            "death": 0,
            "games": 0,
            "kill": 0,
            "pick": 0,
            "games": 0,
            "win": 0
          },
          "SUPPORT": {
            "assits": 0,
            "ban": 0,
            "death": 0,
            "games": 0,
            "kill": 0,
            "pick": 0,
            "games": 0,
            "win": 0
          }
        },
        "SLO": {
          "TOP": {
            "assits": 0,
            "ban": 0,
            "death": 0,
            "games": 0,
            "kill": 0,
            "pick": 0,
            "games": 0,
            "win": 0
          },
          "JUNGLE": {
            "assits": 0,
            "ban": 0,
            "death": 0,
            "games": 0,
            "kill": 0,
            "pick": 0,
            "games": 0,
            "win": 0
          },
          "MID": {
            "assits": 0,
            "ban": 0,
            "death": 0,
            "games": 0,
            "kill": 0,
            "pick": 0,
            "games": 0,
            "win": 0
          },
          "ADC": {
            "assits": 0,
            "ban": 0,
            "death": 0,
            "games": 0,
            "kill": 0,
            "pick": 0,
            "games": 0,
            "win": 0
          },
          "SUPPORT": {
            "assits": 0,
            "ban": 0,
            "death": 0,
            "games": 0,
            "kill": 0,
            "pick": 0,
            "games": 0,
            "win": 0
          }
        },
        "LCK": {
          "TOP": {
            "assits": 0,
            "ban": 0,
            "death": 0,
            "games": 0,
            "kill": 0,
            "pick": 0,
            "games": 0,
            "win": 0
          },
          "JUNGLE": {
            "assits": 0,
            "ban": 0,
            "death": 0,
            "games": 0,
            "kill": 0,
            "pick": 0,
            "games": 0,
            "win": 0
          },
          "MID": {
            "assits": 0,
            "ban": 0,
            "death": 0,
            "games": 0,
            "kill": 0,
            "pick": 0,
            "games": 0,
            "win": 0
          },
          "ADC": {
            "assits": 0,
            "ban": 0,
            "death": 0,
            "games": 0,
            "kill": 0,
            "pick": 0,
            "games": 0,
            "win": 0
          },
          "SUPPORT": {
            "assits": 0,
            "ban": 0,
            "death": 0,
            "games": 0,
            "kill": 0,
            "pick": 0,
            "games": 0,
            "win": 0
          }
        },
        "LPL": {
          "TOP": {
            "assits": 0,
            "ban": 0,
            "death": 0,
            "games": 0,
            "kill": 0,
            "pick": 0,
            "games": 0,
            "win": 0
          },
          "JUNGLE": {
            "assits": 0,
            "ban": 0,
            "death": 0,
            "games": 0,
            "kill": 0,
            "pick": 0,
            "games": 0,
            "win": 0
          },
          "MID": {
            "assits": 0,
            "ban": 0,
            "death": 0,
            "games": 0,
            "kill": 0,
            "pick": 0,
            "games": 0,
            "win": 0
          },
          "ADC": {
            "assits": 0,
            "ban": 0,
            "death": 0,
            "games": 0,
            "kill": 0,
            "pick": 0,
            "games": 0,
            "win": 0
          },
          "SUPPORT": {
            "assits": 0,
            "ban": 0,
            "death": 0,
            "games": 0,
            "kill": 0,
            "pick": 0,
            "games": 0,
            "win": 0
          }
        },
        "LCS": {
          "TOP": {
            "assits": 0,
            "ban": 0,
            "death": 0,
            "games": 0,
            "kill": 0,
            "pick": 0,
            "games": 0,
            "win": 0
          },
          "JUNGLE": {
            "assits": 0,
            "ban": 0,
            "death": 0,
            "games": 0,
            "kill": 0,
            "pick": 0,
            "games": 0,
            "win": 0
          },
          "MID": {
            "assits": 0,
            "ban": 0,
            "death": 0,
            "games": 0,
            "kill": 0,
            "pick": 0,
            "games": 0,
            "win": 0
          },
          "ADC": {
            "assits": 0,
            "ban": 0,
            "death": 0,
            "games": 0,
            "kill": 0,
            "pick": 0,
            "games": 0,
            "win": 0
          },
          "SUPPORT": {
            "assits": 0,
            "ban": 0,
            "death": 0,
            "games": 0,
            "kill": 0,
            "pick": 0,
            "games": 0,
            "win": 0
          }
        }
     
    }
  };
    // Validamos que no se encuentren vacios los principales elementos de nuestro formulario
    if (
      params.name &&
      params.image 
     
    ) {
      // enviamos nuestro objeto "params" a firebase database
      firebaseConf
        .database()
        .ref("Teams")
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

  render() {
    return (
      <div>
        {this.state.alert && (
          <div
            className={`alert alert-${this.state.alertData.type}`}
            role="alert"
          >
            <div className="container">{this.state.alertData.message}</div>
          </div>
        )}
        <div className="container" style={{ padding: `40px 0px` }}>
          <div className="row">
            <div className="col-sm-4">
              <h2>Añadir Campeon</h2>
              <form onSubmit={this.sendMessage.bind(this)} ref="contactForm">
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
    );
  }
}

export default Partido;