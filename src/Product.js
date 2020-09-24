import React from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Carousel from 'nuka-carousel';
import CircularIndeterminate from '../../components/Progreso/Progreso'
import fire from '../../assets/fire';
import './Product.css'



function Imgcarrousel(props) {
    let imglist, array;
    if (props.imagenes !== null) {



        array = Object.values(props.imagenes);
        if (array.length !== 0) {
            imglist = array.map(imagen => {
                return <img key={imagen.alt} src={imagen.url} alt={imagen.alt} />
            });
        }
    } else {
        return <img src="" alt="" />
    }
    return (<Carousel>
        {imglist}
    </Carousel>);

}

function Cargarproduct(props) {
    if (props.cargando !== "cargando") {
        return <div style={{ marginBottom: 150 }}>
            <div style={{ width: "100%" }}>
                <Imgcarrousel imagenes={props.imagenes}></Imgcarrousel>
            </div>
            <div>
                <Card style={{ marginTop: 15, width: "95%", marginLeft: "2.5%", borderRadius: "1em" }}>
                    <CardContent>

                        <Typography variant="h5" component="h2" style={{ textAlign: "center" }}>
                            {props.name}
                        </Typography>
                        <div dangerouslySetInnerHTML={{ __html: props.desc }} >
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>;
    } else {
        return <div>
            <CircularIndeterminate></CircularIndeterminate>
        </div>;
    }
}

class Product extends React.Component {


    constructor(props) {
        super()

        this.state = {
            axis: 'x',
            name: "nombre producto",
            desc: "descripcion",
            imagenes: [],
            tipo: "",
            cargando: "cargando"
        }
        this.setAxis = axis => {
            return () => this.setState({ 'axis': axis })
        }
    }



    componentDidMount() {

        this.database = fire.database().ref().child("productos").child(this.props.match.params.product);
        this.database.on('value', snap => {
            this.setState({ name: snap.child("nombre").val() })
            this.setState({ desc: snap.child("descripcion").val() })
            this.setState({ imagenes: snap.child("imagenes").val() })
            this.setState({ cargando: "cargado" })
        })


    }

    render() {

        const product = this.props.match.params.product
        return <Cargarproduct
            cargando={this.state.cargando}
            imagenes={this.state.imagenes}
            name={this.state.name}
            desc={this.state.desc}>

        </Cargarproduct>;
    }
}


export default Product;