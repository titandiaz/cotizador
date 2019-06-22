import React from 'react';

class Formulario extends React.Component {
  constructor() {
    super();
    this.state = { someKey: 'someValue' };
  }
  marcaRef = React.createRef();
  yearRef = React.createRef();
  planBasicoRef = React.createRef();
  planCompletoRef = React.createRef();
  cotizarSeguro = e => {
    e.preventDefault();
    console.log(this.marcaRef.current.value);
  };

  render() {
    return (
      <form className="cotizar-auto" onSubmit={this.cotizarSeguro}>
        <div className="campo">
          <label>Marca</label>
          <select ref={this.marcaRef} name="marca">
            <option value="americano">Americano</option>
            <option value="europeo">Europeo</option>
            <option value="asiatico">Asiatico</option>
          </select>
        </div>

        <div className="campo">
          <label>Año</label>
          <select ref={this.yearRef} name="year">
            <option value="2018">2018</option>
            <option value="2017">2017</option>
            <option value="2016">2016</option>
            <option value="2015">2015</option>
            <option value="2014">2014</option>
            <option value="2013">2013</option>
            <option value="2012">2012</option>
            <option value="2011">2011</option>
            <option value="2010">2010</option>
            <option value="2009">2009</option>
            <option value="2008">2008</option>
          </select>
        </div>
        <div className="campo">
          <label>Plan:</label>
          <input
            ref={this.planBasicoRef}
            type="radio"
            name="plan"
            value="basico"
          />{' '}
          Básico
          <input
            ref={this.planCompletoRef}
            type="radio"
            name="plan"
            value="completo"
          />{' '}
          Completo
        </div>

        <button type="submit" className="boton">
          Cotizar
        </button>
      </form>
    );
  }

  componentDidMount() {
    this.setState({ someKey: 'otherValue' });
  }
}

export default Formulario;
