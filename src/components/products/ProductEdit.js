import React, { Component } from "react";
import { connect } from "react-redux";
import TextInput from "../utils/TextInput";
import { updateProduct } from "./../../actions";

class ProductEdit extends Component {
  state = {
    name: "",
    prices: "",
    errors: {}
  };

  handleSubmit = e => {
    e.preventDefault();

    const { name, prices } = this.state;

    //Validate input
    if (name === "") {
      this.setState({ errors: { name: "Product name is required" } });
      return;
    }
    if (prices === "") {
      this.setState({ errors: { prices: "Product price is required" } });
      return;
    }

    const { id } = this.props.match.params;

    const updateProduct = {
      id,
      name,
      prices: Number(prices),
      date: Date.now()
    };

    this.props.updateProduct(id, updateProduct);

    this.setState({
      name: "",
      prices: "",
      date: "",
      errors: {}
    });

    this.props.history.push("/");
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { name, prices, errors } = this.state;
    return (
      <div className="container">
        <h3 className="text-center py-4">Edit Product</h3>
        <div className="row justify-content-center py-5">
          <div className="col-md-8">
            <div className="card mb-3">
              <div className="card-header">Edit Product</div>
              <div className="card-body">
                <form onSubmit={this.handleSubmit}>
                  <TextInput
                    type="text"
                    label="Product Name"
                    name="name"
                    placeholder="Enter Product Name"
                    value={name}
                    onChange={this.onChange}
                    error={errors.name}
                  />
                  <TextInput
                    label="Product Price"
                    name="prices"
                    type="number"
                    placeholder="Enter Product Price"
                    value={prices}
                    onChange={this.onChange}
                    error={errors.prices}
                  />

                  <button className="btn btn-primary btn-block">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { updateProduct })(ProductEdit);
