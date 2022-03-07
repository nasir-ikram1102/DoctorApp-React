import React, { Component } from 'react'
import {
  Content,
  Sidebar,
  Footer,
  Header
} from './index'
import { connect } from 'react-redux';
import { Alert } from 'react-bootstrap';

class Layout extends Component {

  render() {
    const aleryStyle = {
      "width": "273px",
      "position": "fixed",
      "bottom": "0",
      "right": "15px"
    }

    return (
      <div className="c-app c-default-layout">
        <Sidebar />
        <div className="c-wrapper">
          <Header />
          <div className="c-body">
            <Content />
          </div>
          <Alert style={aleryStyle} show={this.props.show} transition={true} variant={this.props.variant} dismissible>
            <Alert.Heading>
              {this.props.heading}
            </Alert.Heading>
            <p>
              {this.props.message}
            </p>
          </Alert>
          <Footer />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    variant: state.alert.variant,
    heading: state.alert.heading,
    message: state.alert.message,
    show: (state.alert.show) ? state.alert.show : false,
  }
}

export default connect(mapStateToProps)(Layout);