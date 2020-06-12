import React from 'react'

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = true;
  }

  render() {
    return (
      <div className="food-kind" onClick = {() => this.props.onClick()}>
        {this.props.value}
      </div>
    )
  }
}