import React from "react";
import { Button, Checkbox, Form, Container } from "semantic-ui-react";
import "./css/styles.css";

const Property = () => (
  <div className="propertyContainer">
    <div className="leftPusher"></div>
    <div className="propertyForm">
      <Form>
        <Form.Field>
          <label>Property Name</label>
          <input placeholder="Property" />
        </Form.Field>
        <Form.Field>
          <label>Adress</label>
          <input placeholder="Adress" />
        </Form.Field>
        <Form.Field>
          <label>E-mail</label>
          <input placeholder="E-mail" />
        </Form.Field>
        <Form.Field>
          <label>Phone</label>
          <input placeholder="Phone" />
        </Form.Field>
        <Button type="submit">Submit</Button>
      </Form>
    </div>
    <div className="rightPusher"></div>
  </div>
);

export default Property;
