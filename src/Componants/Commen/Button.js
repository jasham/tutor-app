import React, { Component } from "react";
import styled from "styled-components";
import { Button } from "react-bootstrap";

const Button = styled.button``;

class ButtonComp extends Component {
  render() {
    return (
      <div>
        <h2>buttun Component</h2>
        <Button />
      </div>
    );
  }
}

export default ButtonComp;
