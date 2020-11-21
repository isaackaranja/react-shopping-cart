//feature 1 1
import React, {Component} from 'react';
import Products from './components/products';
import Filter from './components/filter';
import Cart from './components/cart';
import data from './data.json'


class App extends Component{
  constructor() {
    super();
    this.state = {
      products: data.products,
      size: "",
      sort: "",
      cartItems: []
    }
  }

  removeFromCart = (product) => {
    const cartItems = this.state.cartItems.slice();
    this.setState({
      cartItems: cartItems.filter((x) =>x._id !== product._id),
    })
    
  }

  addToCart = (product) => {
    const cartItems = this.state.cartItems.slice();
    // console.log(cartItems)
    let alreadyInCart = false;
    
    cartItems.forEach((item) => {
      if(item._id === product._id) {
        item.count++
        alreadyInCart = true
      }
      // console.log("this is item", item)
      
    });
    if(!alreadyInCart) {
      cartItems.push({...product, count: 1});
      // console.log("is already in cart", !alreadyInCart)
    }
    this.setState({cartItems})
    console.log(alreadyInCart)
  }

  sortProducts =(event) => {
    const sort = event.target.value
    // console.log("this is sort",sort);
    this.setState((state) => ({ 
      sort: sort,
      products: this.state.products.slice().sort((a,b) =>(
        sort === "Lowest"
        ? a.price > b.price
          ? 1 
          : -1:
        sort === "Highest" 
        ? a.price < b.price 
          ? 1 
          : -1:
        a._id > b._id
         ? 1
          : -1

      ))
    }))
  }
  filterProducts = (event) => {
    console.log(event.target.value);
    if(event.target.value === ''){
      this.setState({products: data.products, size: event.target.value});
    }
    // console.log("this is data.products",data.products)
    this.setState({
      size: event.target.value,
      products: data.products.filter(product => product.availableSizes.indexOf(event.target.value)>=0)
    })
    console.log(data.products.filter(product => product.availableSizes.indexOf(event.target.value)>=0))
    console.log(data.products)
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
              <Filter 
                count={this.state.products.length}
                size={this.state.size}
                sort={this.state.sort}
                filterProducts={this.filterProducts}
                sortProducts={this.sortProducts}
              ></Filter>
              <Products
                products={this.state.products}
                addToCart={this.addToCart}
              ></Products>
            </div>
            <div className="sidebar">
              <Cart
               cartItems={this.state.cartItems}
               removeFromCart={this.removeFromCart}/>
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
