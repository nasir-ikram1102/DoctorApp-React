import React from 'react'
import axios from 'axios'
import moment from "moment";

const api = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}cases/`
})

class ViewCaseDetail extends React.Component {
  state = { caseDetail: null, loading: false }

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.setState({
      ...this.state,
      loading: true
    });
    api.get('/getCaseById/' + this.props.match.params.caseId).then(res => {
      this.setState({
        ...this.state,
        loading: false,
        caseDetail: res.data
      })
    }).catch((error) => {
      this.setState({
        ...this.state,
        loading: false
      });

    });
  }

  render() {

    const style = {
      noCasesStyle: {
        textAlign: "center",
      },
      loadingStyle: {
        marginLeft: "40%",
        width: "200px"
      }
    }

    return (
      <div className="container-fluid">
        {/* Page Heading */}
        <h1 className="h3 mb-4 text-gray-800">Case Details</h1>
        <div className="card shadow mb-4">
          <div className="card-header py-3 d-flex justify-content-between align-items-center">
            <div className="row d-flex align-items-center w-100">
              <div className="col-md-7 col-lg-8 mb-4 mb-md-0">
                <h6 className="m-0 font-weight-bold text-primary">View Case Details</h6>
              </div>
              <div className="col-md-5 col-lg-4 text-left text-md-right">
                <button type="submit" className="btn btn-primary btn-user btn-radius" data-toggle="modal" data-target="#exportModal">Export</button>
              </div>
            </div>
          </div>
          <div className="card-body">

            {

              (!this.state.loading) ?
                ((this.state.caseDetail) ?
                  (
                    <div className="row m-0">
                      <div className="col-12 mb-4">
                        <div className="h5 mb-0 font-weight-bold text-gray-900">{this.state.caseDetail.firstName} {this.state.caseDetail.lastName}<label className={"gender-icon ml-2 " + (this.state.caseDetail.gender == "Male" ? "men-icon" : "women-icon")}>
                          <i className={"fa " + (this.state.caseDetail.gender == "Male" ? "fa-mars-stroke" : "fa fa-venus")} /></label></div>
                      </div>
                      <div className="col-md-6 col-lg-3 mb-3">
                        <label>Medical Record No.</label>
                        <h6 className="m-0 font-weight-bold text-gray-900">{this.state.caseDetail.medicalRecordNumber}</h6>
                      </div>
                      <div className="col-md-6 col-lg-3 mb-3">
                        <label>Date of Birth</label>
                        <h6 className="m-0 font-weight-bold text-gray-900">{moment(this.state.caseDetail.dateOfBirth).format('DD MMM YYYY')}</h6>
                      </div>
                      <div className="col-md-6 col-lg-3 mb-3">
                        <label>Insurance</label>
                        <h6 className="m-0 font-weight-bold text-gray-900">Private</h6>
                      </div>
                      <div className="col-md-6 col-lg-3 mb-3">
                        <label>Diagnosis (ICD-10)</label>
                        <h6 className="m-0 font-weight-bold text-gray-900">{this.state.caseDetail.diagnosis}</h6>
                      </div>
                      <div className="col-md-6 col-lg-3 mb-3">
                        <label>Date of Surgery</label>
                        <h6 className="m-0 font-weight-bold text-gray-900">9:49 AM Nov 05 2009</h6>
                      </div>
                      <div className="col-md-6 col-lg-3 mb-3">
                        <label>Institution</label>
                        <h6 className="m-0 font-weight-bold text-gray-900">{this.state.caseDetail.institution}</h6>
                      </div>
                      <div className="col-md-6 col-lg-3 mb-3">
                        <label>Procedure Type</label>
                        <h6 className="m-0 font-weight-bold text-gray-900">{this.state.caseDetail.procedureType}</h6>
                      </div>
                      <div className="col-md-6 col-lg-3 mb-3">
                        <label>Role</label>
                        <h6 className="m-0 font-weight-bold text-gray-900">{this.state.caseDetail.role}</h6>
                      </div>
                      <div className="col-md-6 col-lg-3 mb-3">
                        <label>CPT Code</label>
                        <h6 className="m-0 font-weight-bold text-gray-900">{this.state.caseDetail.cpt}</h6>
                      </div>
                      <div className="col-md-6 col-lg-3 mb-3">
                        <label>Procedure Length in Minutes</label>
                        <h6 className="m-0 font-weight-bold text-gray-900">{this.state.caseDetail.procedureLength}</h6>
                      </div>
                      <div className="col-md-6 col-lg-3 mb-3">
                        <label>Vendors</label>
                        <h6 className="m-0 font-weight-bold text-gray-900">{this.state.caseDetail.vendor}</h6>
                      </div>
                      <div className="col-md-6 col-lg-3 mb-3">
                        <label>Instrumentation</label>
                        <h6 className="m-0 font-weight-bold text-gray-900">{this.state.caseDetail.instrumentation}</h6>
                      </div>
                      <div className="col-md-12 mb-3">
                        <label>Images</label>
                        <div className="images-upload">
                          <div className="row form-row">
                            {(this.state.caseDetail.fileName && this.state.caseDetail.fileName.length > 0)
                              ? this.state.caseDetail.fileName.map((item, index) => (
                                < div key={index} className="col-4 col-md-3 col-lg-2">
                                  <div className="iu-box text-center" data-toggle="modal" data-target="#imagegallery1Modal">
                                    <img src={`${process.env.REACT_APP_IMAGE_URL}` + item} className="img-fluid mb-3 w-100" />
                                  </div>
                                </div>)) : ""}
                          </div>
                        </div>
                      </div>
                    </div>)
                  : <h3 style={style.noCasesStyle}>No cases found</h3>)
                : <img style={style.loadingStyle} src="/image/loading.gif" />
            }
          </div>
        </div>
      </div >
    );
  }
}

export default ViewCaseDetail