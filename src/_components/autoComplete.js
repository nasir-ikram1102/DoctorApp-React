import { connect } from 'react-redux';
import React from 'react'

class AutoComplete extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      userInput: ""
    };
  }

  onChange = (e) => {
    const userInput = e.target.value;
    this.setState({userInput: userInput});
    this.props.searchCallback(userInput);
  };

  render() {
    return (
      <>
        <input type="text" name="suggestionBox" id="suggestionBox" className="form-control form-control-user mt-3"
          placeholder="Search here" onChange={this.onChange} />
        {(this.props.data && this.props.data.length) ? this.props.template : (
          (this.state.userInput.length == 0) ? "" : <div className="no-suggestions">
            <em>No suggestions, you're on your own!</em>
          </div>
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
  }
}


export default connect(mapStateToProps)(AutoComplete);
