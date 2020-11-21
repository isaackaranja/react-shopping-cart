import React from 'react';

class Filter extends React.Component {
constructor(props) {
  super(props);

  this.state = {
  };
}

  render() {
    return (
    <div className="filter">
      <div className="filter-results">{this.props.count}</div>
      <div className="filter-sort">
        {" "}
        Order 
        <select value={this.props.sort} onChange={this.props.sortProducts}>
          <option value="Latest">Latest</option>
          <option value="Lowest">Lowest</option>
          <option value="Highest">Highest</option>
        </select>
      </div>
      <div className="filter-sizes">
        Filter
        {" "}
        <select value={this.props.size} onChange={this.props.filterProducts}>
          <option value="">All</option>
          <option value="XS">XS</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XXL">XL</option>
          <option value="XXL">XXL</option>
        </select>
      </div>
    </div>
    )

  }
}



export default Filter;