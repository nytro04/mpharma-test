import React, { Component } from "react";
import { Link } from "react-router-dom";

class Product extends Component {
  checkDates = prices => {
    if (prices[0].date > prices[1].date) {
      return (
        <li key={prices[0].id} className="list-group-item">
          Prices: {prices[0].price}
        </li>
      );
    }
    return (
      <li key={prices[1].id} className="list-group-item">
        Prices: {prices[1].price}
      </li>
    );
  };

  render() {
    const { product } = this.props;

    return (
      <div className="card card-body mb-3">
        <h4>
          <span className="mr-3">Name:</span>
          {product.name}
          <i
            className="fas fa-times"
            style={{ cursor: "pointer", float: "right", color: "red" }}
            // onClick={this.onDeleteClick.bind(this, id)}
          />
          <Link to={`contact/edit/${product.id}`}>
            <i
              className="fas fa-pencil-alt"
              style={{
                cursor: "pointer",
                float: "right",
                color: "black",
                marginRight: "1rem"
              }}
            />
          </Link>
        </h4>

        <ul className="list-group">{this.checkDates(product.prices)}</ul>
      </div>
    );
  }
}

export default Product;
