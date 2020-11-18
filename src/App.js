//feature 1 1
import React, {Component} from 'react';
import Products from './components/products';
import data from './data.json'


class App extends Component{
  constructor() {
    super();
    this.state = {
      products: data.products,
      size: "",
      sort: ""
    }
  }
  render(){
    return (
      <div className="grid-container">
        <header>
          <a href="/">React Shopping cart</a>
        </header>
        <main>
          <div className="content">
            <div className="main">
              <Products products={this.state.products}></Products>
            </div>
            <div className="sidebar">
              Cart items
            </div>

          </div>
        </main>
        <footer>
          All right is reserved
        </footer>
        
      </div>
    );
  }
  
}

export default App;
