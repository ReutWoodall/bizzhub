import React from 'react';

class AddProduct extends React.Component {
  constructor() {
    super()
    this.state = {
      name: '',
      price: 0,
      prodInfo: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  async handleSubmit(event) {
      event.preventDefault();
      let databody = {
        "name": this.state.name,
        "price": this.state.price,
        "prodInfo": this.state.prodInfo
      }

      fetch('http://localhost:3004/products', {
          method: 'POST',
          body: JSON.stringify(databody),
          headers: {
              'Content-Type': 'application/json'
          },
      })
      .then(res => {
        debugger
        res.json()
      })
      .then(data => console.log(data)); 
  }



  render() {
    return (
      <div id="container">

        <form id="form" onSubmit={this.handleSubmit}>

          <div id="prodH">
            <h1 className="hello">Hello, Want to add a product?</h1>
          </div>
          <div id="prodName">
            <label>product name: </label>
            <input
              className="nameInp"
              type='text'
              name='name'
              value={this.state.name}
              onChange={this.handleInputChange}
            />
          </div> 

          <div id="prodPrice"> 
            <label>product price: </label>
            <input
              className="priceInp"
              type='number'
              step='0.01'
              name='price'
              value={this.state.price}
              onChange={this.handleInputChange}
            />
          </div>

          <div id="prodInfo">
            <label>additional information: </label>
            <input
              className="infoInp"
              type='text'
              name='prodInfo'
              value={this.state.prodInfo}
              onChange={this.handleInputChange}
            />
          </div>

          <div id="prodImg">
            <label>images: </label>
            <input
              className="fileInp"
              type='file'
              name='pImg'
              />
          </div>
          
          <div id="submit">
            <input
              className="submitInp"
              type='submit'
              name='prodSubmit'
              />
          </div>
        </form>
      </div>
    );
  }
}

export default AddProduct 