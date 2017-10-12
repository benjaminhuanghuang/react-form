import React, { Component } from "react";
import { Form, FormControl, Button } from "react-bootstrap";

import "./AgeTeller.css";
import AgeStats from "./AgeStats";

class AgeTeller extends Component {
  constructor(prop) {
    super(prop);

    this.state = {
      newDate: "",
      birthday:""
    };
  }

  changeBirthday()
  {
    console.log(this.state);
    this.setState({birthday: this.state.newDate});
  }
  render() {
    return (
      <div className="App">
        <Form inline>
          <h2>Input your birthday.</h2>
          <FormControl
            type="date"
            onChange={event => this.setState({ newDate: event.target.value })}
          />
          <Button onClick={()=>this.changeBirthday()}>Submit</Button>
          <AgeStats date={this.state.birthday}/>
        </Form>
      </div>
    );
  }
}

export default AgeTeller;
