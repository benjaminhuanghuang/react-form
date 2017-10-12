import React, { Component } from "react";
import { Form, FormControl, Button } from "react-bootstrap";

class AgeTeller extends Component {
  render() {
    return (
      <div>
        <Form inline>
          <FormControl type="date" />
          <Button>Submit</Button>
        </Form>
      </div>
    );
  }
}

export default AgeTeller;
