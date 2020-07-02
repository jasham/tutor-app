import React, { Component } from "react";
import { InputGroup, FormControl, form, input } from "react-bootstrap";

class TeaxtArea extends Component {
  render() {
    return (
      <div>
        <div style={{ width: "100%", background: "red" }}>
          <InputGroup>
            <InputGroup.Prepend></InputGroup.Prepend>
            <FormControl
              className="p-1"
              as="textarea"
              aria-label="With textarea"
              placeholder="Teaxt Area"
            />
          </InputGroup>
        </div>
        <form>
          <input type="radio" name="gender" value="male" />
          <br />
          <input type="radio" name="gender" value="female" className="px-5" />
        </form>
      </div>
    );
  }
}

export default TeaxtArea;
