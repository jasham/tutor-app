import React, { Component } from "react";
import { SplitButton, Form, Button } from "react-bootstrap";
import TeaxtArea from "./TeaxtArea";

export default class DaropDwonMenu extends Component {
  render() {
    return (
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div
          className="mr-3"
          style={{ width: "27%", height: "400px", background: "red" }}
        >
          {["left"].map((direction) => (
            <SplitButton
              key={direction}
              id={`dropdown-button-drop-${direction}`}
              drop={direction}
              variant="secondary"
              title={`Drop ${direction}`}
            >
              <Form className="p-3" style={{ width: "18rem" }}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </SplitButton>
          ))}
        </div>
        <div style={{ width: "27%", height: "400px", background: "red" }}>
          <TeaxtArea />
        </div>
      </div>
    );
  }
}
