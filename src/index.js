import React from "react";
import { render } from "react-dom";

class BookButton extends React.Component {
  render() {
    <div>
      <button>Checkout</button>
    </div>
  }
};


class BookDisplay extends React.Component {
  render() {
    return (
      <div>
        <div>{this.props.num}</div>
        <div><img alt="Book Cover"/></div>
        <div>
          <h3>Title: {this.props.title}</h3>
        </div>
        <div>
          <h4>Author: {this.props.author}</h4>
        </div>
        <div>
          <h5>Published: {this.props.published}</h5>
        </div>
        <div>BUTTON</div>
      </div>
    )
  }
};

render(<BookDisplay num='1'
                    title='The Amber Spyglass'
                    author='Phillip Pullman'
                    published='2000'/>,
                    document.getElementById('root0'));
