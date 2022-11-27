import React from 'react';
import { Container, Row, Form, Button } from 'react-bootstrap';
import '../productos.css';
import { request } from '../../helper/helper';
import Loading from '../../loading/loading';
import MessagePrompt from '../../prompts/message';
import ConfirmationPrompts from '../../prompts/confirmation';

export default class ProductosEditar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      idProducto: this.props.getIdProducto(),
      rediret: false,
      message: {
        text: '',
        show: false,
      },
      confirmation: {
        title: 'Modificar producto',
        text: '¿Desea modificar el producto?',
        show: false,
      },
      loading: false,
      producto:{
        id_producto: "",
        nombre_producto:"",
        descripcion:"",
        precio:"",
        disponibilidad:"",
        codigo_producto:"",
        imagen1:"",
        imagen2:"",
        imagen3:"",
        tamano:"",
        raza:"",
        etapa_vida:"",
        tipo_producto:"",
        marca:"",
        peso:"",
        beneficios:"",
        caracteristicas:"",
      },
    };
    this.onExitedMessage = this.onExitedMessage.bind(this);
    this.onCancel = this.onCancel.bind(this);
    this.onConfirm = this.onConfirm.bind(this);
  }
  componentDidMount() {
    this.getProducto();
  }
  getProducto() {
    this.setState({ loading: true });
    request
      .get(`/productos/${this.state.idProducto}`)
      .then((response) => {
        this.setState({
          producto: response.data,
          loading: false,
        });
      })
      .catch((err) => {
        console.error(err);
        this.setState({ loading: false });
      });
  }
  setValue(inicioe, value) {
    this.setState({
      producto: {
        ...this.state.producto,
        [inicioe]: value,
      },
    });
  }
  guardarProductos() {
    this.setState({ loading: true });
    request
      .put(`/productos/${this.state.idProducto}`, this.state.producto)
      .then((response) => {
        if (response.data.exito) {
          this.props.changeTab('buscar');
        }
        this.setState({ loading: false });
      })

      .catch((err) => {
        console.error(err);
        this.setState({ loading: true });
      });
  }
  onExitedMessage() {
    if (this.state.rediret) this.props.changeTab('buscar');
  }
  onCancel() {
    this.setState({
      confirmation: {
        ...this.state.confirmation, 
        show: false,
      },
    })
  }
  onConfirm() {
    this.setState({
      confirmation: {
        ...this.state.confirmation, 
        show: false,
      },
    },
    this.guardarProductos()
    );
  }
  render() {
    return (
      <Container id='productos-crear-container'>
        <MessagePrompt
          text={this.state.message.text}
          show={this.state.message.show}
          duration={2500}
          onExited={this.onExitedMessage}
        />
        <ConfirmationPrompts
          show={this.state.confirmation.show}
          title={this.state.confirmation.title}
          text={this.state.confirmation.text}  
          onCancel={this.onCancel}
          onConfirm={this.onConfirm}
        />
        <Loading show={this.state.loading} />
        <Row>
          <h1>Editar productos</h1>
        </Row>
        <Row>
        <Form>
          <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>ID</Form.Label>
              <Form.Control 
              value={this.state.producto.id_producto}
              onChange={ (e) => this.setValue("id_producto", e.target.value) }/>              
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Producto</Form.Label>
              <Form.Control 
              value={this.state.producto.nombre_producto}
              onChange={ (e) => this.setValue("nombre_producto", e.target.value) }/>              
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Descripción</Form.Label>
              <Form.Control 
              value={this.state.producto.descripcion}
              onChange={ (e) => this.setValue("descripcion", e.target.value) }/>              
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Precio</Form.Label>
              <Form.Control 
              value={this.state.producto.precio}
              onChange={ (e) => this.setValue("precio", e.target.value) }/>              
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Disponibilidad</Form.Label>
              <Form.Control 
              value={this.state.producto.disponibilidad}
              onChange={ (e) => this.setValue("disponibilidad", e.target.value) }/>              
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Código</Form.Label>
              <Form.Control 
              value={this.state.producto.codigo_producto}
              onChange={ (e) => this.setValue("codigo_producto", e.target.value) }/>              
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Imagen 1</Form.Label>
              <Form.Control 
              value={this.state.producto.imagen1}
              onChange={ (e) => this.setValue("imagen1", e.target.value) }/>              
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Imagen 2</Form.Label>
              <Form.Control 
              value={this.state.producto.imagen2}
              onChange={ (e) => this.setValue("imagen2", e.target.value) }/>              
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Imagen 3</Form.Label>
              <Form.Control 
              value={this.state.producto.imagen3}
              onChange={ (e) => this.setValue("imagen3", e.target.value) }/>              
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Tamano</Form.Label>
              <Form.Control 
              value={this.state.producto.tamano}
              onChange={ (e) => this.setValue("tamano", e.target.value) }/>              
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Raza</Form.Label>
              <Form.Control 
              value={this.state.producto.raza}
              onChange={ (e) => this.setValue("raza", e.target.value) }/>              
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Etapa</Form.Label>
              <Form.Control 
              value={this.state.producto.etapa_vida}
              onChange={ (e) => this.setValue("etapa_vida", e.target.value) }/>              
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Tipo de producto</Form.Label>
              <Form.Control 
              value={this.state.producto.tipo_producto}
              onChange={ (e) => this.setValue("tipo_producto", e.target.value) }/>              
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Marca</Form.Label>
              <Form.Control 
              value={this.state.producto.marca}
              onChange={ (e) => this.setValue("marca", e.target.value) }/>              
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Peso</Form.Label>
              <Form.Control 
              value={this.state.producto.peso}
              onChange={ (e) => this.setValue("peso", e.target.value) }/>              
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Beneficios</Form.Label>
              <Form.Control 
              value={this.state.producto.beneficios}
              onChange={ (e) => this.setValue("beneficios", e.target.value) }/>              
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Características</Form.Label>
              <Form.Control 
              value={this.state.producto.caracteristicas}
              onChange={ (e) => this.setValue("caracteristicas", e.target.value) }/>              
            </Form.Group>
            <Button
              variant='primary'
              onClick={() =>
                this.setState({
                  confirmation: { ...this.state.confirmation, show: true },
                })
              }
            >
              Guardar editar producto
            </Button>
          </Form>
        </Row>
      </Container>
    );
  }
}
