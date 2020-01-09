import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchProducts } from "./../../actions";
import Product from "./Product";

class ProductList extends Component {
  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    const { products } = this.props.products;

    return (
      <div className="container text-center py-3">
        <h2>Product List</h2>
        {products
          ? products.map(product => (
              <Product key={product.id} product={product} />
            ))
          : null}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.products.products
  };
};

export default connect(mapStateToProps, { fetchProducts })(ProductList);
