import React, {Component} from 'react';
import {Paper, TextField, Subheader} from 'material-ui';

const styles = {
  paperStyle: {
    margin: "20px 10%",
    padding: "20px"
  },
  subHeaderStyle: {
    padding: 0
  }
};

class Mathematics extends Component {
  constructor(props) {
    super(props);

    this.state = {
      operandOne: null,
      operandTwo: null,
      operator: null,
      answer: ""
    };
  };

  componentWillMount() {
    this.setState({
      operandOne: Math.round(Math.random() * 999),
      operandTwo: Math.round(Math.random() * 999),
      operator: ["+", "-", "*", "/"][Math.floor(Math.random() * 4)]
    });
  };

  onInputChange = (event) => {
    this.setState({answer: event.target.value});
  };

  render() {
    return (
      <div className="text-center">
        <Paper style={styles.paperStyle} zDepth={4}>
          <Subheader style={styles.subHeaderStyle}>
            Can you solve the equation in your mind?
          </Subheader>

          <h2>
            {this.state.operandOne} {this.state.operator} {this.state.operandTwo} = {this.state.answer}
          </h2>

          <TextField hintText="Enter the number" floatingLabelText="Your answer"
                     value={this.state.answer} onChange={this.onInputChange}/>
        </Paper>
      </div>
    )
  };
}

export default Mathematics;
