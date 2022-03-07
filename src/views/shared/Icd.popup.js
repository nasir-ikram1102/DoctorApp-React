import React from "react";
import AutoComplete from '../../_components/autoComplete'
import { connect } from 'react-redux';
import { caseActions } from '../../_actions';

class IcdPopup extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.caseIcdRequestLoading);
    return (
      <div className="cptpopup-box">
        <div className="modal-dialog cptPopSetting" role="document">
          <div className="modal-content cptPopSetting">
            <div className="modal-header">
              <h5 className="modal-title" id="ICDModal">Diagnosis</h5>
              <button className="close" onClick={this.props.closePopupCallBack} type="button" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">Diagnosis <small className="no-suggestions">
              <em>(Example: A1034, B2014)</em>
            </small>
              <AutoComplete suggestions={this.props.data}
                searchCallback={(userInput) => {
                  if (userInput.length > 1) {
                    this.props.dispatch(caseActions.getIcdsByCode(userInput));
                  }
                  if (userInput.length == 0) {
                    this.props.dispatch(caseActions.clearCaseIcds());
                  }
                }}
                data={this.props.data}
                template={
                  // (this.props.caseIcdRequestLoading) ? 
                  // <div class="spinner-border" role="status">
                  //   <span class="sr-only">Loading...</span>
                  // </div> : (
                    (this.props.data) ?
                      <ul className="suggestions">
                        {this.props.data.map((item, index) => {
                          return (
                            <li key={index} onClick={() => { this.props.onSuggestionClick(item) }}>
                              <span><b>{item.Code} </b> - {item.Description}</span>
                            </li>
                          );
                        })}
                      </ul> : ""
                      // )
                } />

            </div>

            <div className="modal-footer">
              <button className="btn btn-secondary" onClick={this.props.closePopupCallBack} type="button" >Cancel</button>
              {/* <button className="btn btn-primary" >Add</button> */}
            </div>
          </div>
        </div>

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    caseIcdRequestLoading: state.cases.caseIcdRequestLoading
  }
}

export default connect(mapStateToProps)(IcdPopup);