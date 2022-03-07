import React from 'react'
import axios from 'axios'
import FileUpload from 'src/FileUpload'
import CptPopup from '../shared/Cpt.popup'
import IcdPopup from '../shared/Icd.popup'

import { caseActions, alertActions } from '../../_actions'
import { connect } from 'react-redux';
import { Spinner, Button } from "react-bootstrap";

import moment, { calendarFormat } from "moment";
import { Formik } from 'formik';
import * as Yup from 'yup';

class AddCases extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      inputs: {
        fileName: []
      },
      data: {
        Roles: [],
      }
    };
  }

  toggleCptPopup() {
    this.props.dispatch(caseActions.toggleCaseCptPopup());
  }

  toggleIcdPopup() {
    this.props.dispatch(caseActions.toggleCaseIcdPopup());
  }

  componentDidMount() {
    axios.get(`${process.env.REACT_APP_API_URL}cases/getCasePrebindData`)
      .then(res => {
        if (res.data) {
          this.setState({
            data: {
              ...this.state.data,
              Roles: res.data.roles.results,
            }
          });
        }
      }).catch(error => console.log(error.response));

  }

  addFile = (data) => {
    var filesArray = this.state.inputs.fileName;
    console.log(data.data.name);
    filesArray.push(data.data.name);

    this.setState({
      inputs: {
        ...this.state.inputs,
        fileName: filesArray
      }
    });
  }

  removeFile = (index) => {
    var filesArray = this.state.inputs.fileName;
    filesArray.splice(index, 1);

    this.setState({
      inputs: {
        ...this.state.inputs,
        fileName: filesArray
      }
    });
  }

  onIcdSuggestionClick = (selectedIcd) => {
    this.props.dispatch(caseActions.setSelectedCaseIcd(selectedIcd));
    this.toggleIcdPopup();
  }

  onCptSuggestionClick = (selectedIcd) => {
    this.props.dispatch(caseActions.setSelectedCaseCpt(selectedIcd));
    this.toggleCptPopup();
  }

  render() {
    const caseFormSchema = Yup.object().shape({
      firstName: Yup.string()
        .required('First name is required'),
      lastName: Yup.string()
        .required('Last name is required'),
      dateOfBirth: Yup.string()
        .required('Date of Birth is required'),
      gender: Yup.string()
        .required('Gender is required'),
    });

    const style = {
      buttonStyle: {
        border: "0",
        backgroundColor: "transparent",
      },
      loadingBtnStyle: {
        borderRadius: "25px",
        height: "46px"
      }
    };

    var clearFiles = ()=> {
      this.setState({
        inputs: {
          fileName: []
        }
      });
    }

    return (
      <div id="content-wrapper" className="d-flex flex-column" >
        <div id="content">
          <div className="container-fluid">
            <h1 className="h3 mb-4 text-gray-800">Add Case</h1>
            <div className="row">
              <div className="col-lg-12">
                <div className="card shadow mb-4">
                  <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Add new Case</h6>
                  </div>
                  <div className="card-body">

                    <Formik
                      initialValues={{
                        firstName: "",
                        lastName: "",
                        gender: "Male",
                        dateOfBirth: "",
                        medicalRecordNumber: "",
                        procedureType: "",
                        role: "",
                        institution: "",
                        procedureLength: "",
                        instrumentation: "",
                        findings: "",
                        vendor: "",
                        complications: "",
                        outcome: "",
                        hospitalization: "",
                        followUp: "",
                        period: "",
                        notes: "",
                        fileName: [],
                      }}
                      validationSchema={caseFormSchema}
                      onReset={()=>{
                        clearFiles();
                      }}
                      onSubmit={(values, { setSubmitting, resetForm }) => {
                        console.log(values);

                        axios({
                          method: "POST",
                          url: `${process.env.REACT_APP_API_URL}cases/createCase`,
                          data: {
                            firstName: values.firstName,
                            lastName: values.lastName,
                            gender: values.gender,
                            dateOfBirth: values.dateOfBirth,
                            medicalRecordNumber: values.medicalRecordNumber,
                            procedureType: values.procedureType,
                            diagnosis: values.icd,
                            institution: values.institution,
                            role: values.role,
                            cpt: values.icd,
                            procedureLength: values.procedureLength,
                            instrumentation: values.instrumentation,
                            vendor: values.vendor,
                            findings: values.findings,
                            complications: values.complications,
                            outCome: values.outcome,
                            hospitalization: values.hospitalization,
                            notes: values.notes,
                            followUp: values.followUp,
                            fileName: this.state.inputs.fileName
                          }
                        }).then(res => {
                          this.props.dispatch(alertActions.success("Case added successfully"));
                          setSubmitting(false);
                          resetForm();
                          clearFiles();
                        }).catch((error) => {
                          console.log(error);
                          setSubmitting(false);
                        })
                      }
                      }
                    >
                      {({
                        values,
                        errors,
                        touched,
                        isSubmitting,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        handleReset,
                        /* and other goodies */
                      }) => (

                        <form className="user" onSubmit={handleSubmit}>
                          <div className="row">
                            <div className="col-md-6 col-lg-3">
                              <div className="form-group">
                                <label>Patient First Name</label><label className="mendatory-star"> *</label>
                                <input type="text" name="firstName" id="firstName"
                                  className={"form-control form-control-user" + ((errors.firstName && touched.firstName) ? " form-input-fail" : "")}
                                  value={values.firstName}
                                  onChange={handleChange}
                                  onBlur={handleBlur} />
                                {/* {errors.firstName && touched.firstName && errors.firstName} */}
                              </div>
                            </div>
                            <div className="col-md-6 col-lg-3">
                              <div className="form-group">
                                <label>Patient Last Name</label><label className="mendatory-star"> *</label>
                                <input type="text" name="lastName" id="lastName" className={"form-control form-control-user" + ((errors.lastName && touched.lastName) ? " form-input-fail" : "")}
                                  value={values.lastName}
                                  onChange={handleChange}
                                  onBlur={handleBlur} />
                                {/* {errors.lastName && touched.lastName && errors.lastName} */}
                              </div>
                            </div>
                            <div className="col-md-6 col-lg-3">
                              <div className="form-group" id="gender">
                                <label>Gender</label><label className="mendatory-star"> *</label><br />
                                <label className="container1">Male
                                  <input type="radio"
                                    checked={values.gender === "Male"}
                                    onChange={handleChange}
                                    value="Male" name="gender" />
                                  <span className="checkmark" />
                                </label>
                                <label className="container1">Female
                                  <input type="radio"
                                    checked={values.gender === "Female"}
                                    onChange={handleChange}
                                    value="Female" name="gender" />
                                  <span className="checkmark" />
                                </label>
                                <label className="container1">Neutral
                                  <input type="radio"
                                    checked={values.gender === "Neutral"}
                                    onChange={handleChange}
                                    value="Neutral" name="gender" />
                                  <span className="checkmark" />
                                </label>
                                {/* {errors.gender && touched.gender && errors.gender} */}
                              </div>
                            </div>
                            <div className="col-md-6 col-lg-3">
                              <div className="form-group">
                                <label>Date of Birth</label><label className="mendatory-star"> *</label>
                                <input type="date" name="dateOfBirth" id="dateOfBirth" className={"form-control form-control-user" + ((errors.dateOfBirth && touched.dateOfBirth) ? " form-input-fail" : "")}
                                  value={values.dateOfBirth}
                                  max={moment().format("YYYY-MM-DD")}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                />
                                {/* {errors.dateOfBirth && touched.dateOfBirth && errors.dateOfBirth} */}
                              </div>
                            </div>
                            <div className="col-md-6 col-lg-3">
                              <div className="form-group">
                                <label>Medical Record Number<small> (Optional)</small></label>
                                <input type="text" name="medicalRecordNumber" id="medicalRecordNumber"
                                  className="form-control form-control-user"
                                  value={values.medicalRecordNumber}
                                  onChange={handleChange} />
                              </div>
                            </div>
                            <div className="col-md-6 col-lg-3">
                              <div className="form-group">
                                <label>Procedure Type</label>
                                <input type="text" name="procedureType" id="procedureType" className="form-control form-control-user"
                                  value={values.procedureType}
                                  onChange={handleChange} />
                              </div>
                            </div>
                            <div className="col-md-6 col-lg-3">
                              <div className="form-group">
                                <div className="d-flex justify-content-between">
                                  <label>Diagnosis (CD-10) <small>(Optional)</small></label>
                                  <button type="button" style={style.buttonStyle} onClick={this.toggleIcdPopup.bind(this)}>  <i className="fa fa-plus-circle mr-1 text-primary" /></button>
                                  {this.props.isIcdPopupShown && <IcdPopup onSuggestionClick={this.onIcdSuggestionClick} filterCallback={(userInput) => { caseActions.getIcdsByCode(userInput) }} data={this.props.casesIcds} closePopupCallBack={this.toggleIcdPopup.bind(this)} />}
                                </div>
                                <input type="text" name="icd" id="icd" className="form-control form-control-user"
                                  onChange={handleChange} defaultValue={(this.props.selectedIcd) ? this.props.selectedIcd.Code + ' - ' + this.props.selectedIcd.Description : ''} />
                              </div>
                            </div>
                            <div className="col-md-6 col-lg-3">
                              <div className="form-group">
                                <label>Institution <small>(Optional)</small></label>
                                <select className="form-control form-control-user"
                                  name="institution"
                                  onChange={handleChange}
                                  value={values.institution}
                                >
                                  <option>Select a Hospital</option>
                                  <option value="PKLI">PKLI</option>
                                  <option value="CMH">CMH</option>
                                  <option value="Mayo">Mayo</option>
                                </select>
                              </div>
                            </div>
                            <div className="col-md-6 col-lg-3">
                              <div className="form-group">
                                <label>Role</label>
                                <select className="form-control form-control-user"
                                  onChange={handleChange}
                                  value={values.role}
                                  name="role">
                                  <option value="">Select Role</option>
                                  {(this.state.data.Roles) ? this.state.data.Roles.map(role => (
                                    <option key={role.id} defaultValue={role.name}>{role.name}</option>
                                  ))
                                    : null
                                  }
                                </select>
                              </div>
                            </div>
                            <div className="col-md-6 col-lg-3">
                              <div className="form-group">
                                <div className="d-flex justify-content-between">
                                  <label>CPT Code  <small>(Optional)</small></label>
                                  <button type="button" style={style.buttonStyle} onClick={this.toggleCptPopup.bind(this)}>  <i className="fa fa-plus-circle mr-1 text-primary" /></button>
                                  {this.props.isCptPopupShown && <CptPopup onSuggestionClick={this.onCptSuggestionClick} filterCallback={(userInput) => { caseActions.getIcdsByCode(userInput) }} data={this.props.casesCpts} closePopupCallBack={this.toggleCptPopup.bind(this)} />}
                                </div>
                                <input type="text" name="cpt" id="cpt" className="form-control form-control-user"
                                  onChange={handleChange} defaultValue={(this.props.selectedCpt) ? this.props.selectedCpt.Code + ' - ' + this.props.selectedCpt.Description : ''} />
                              </div>
                            </div>
                            <div className="col-md-6 col-lg-3">
                              <div className="form-group">
                                <label>Procedure Length in Minutes <small>(optional)</small></label>
                                <select className="form-control form-control-user"
                                  name="procedureLength"
                                  onChange={handleChange}
                                  value={values.procedureLength}
                                >
                                  <option>Procedure Length in Minutes</option>
                                  <option value="10">10</option>
                                  <option value="15">15</option>
                                  <option value="30">30</option>
                                </select>
                              </div>
                            </div>
                            <div className="col-md-6 col-lg-3">
                              <div className="form-group">
                                <div className="d-flex justify-content-between">
                                  <label>Instrumentation   <small>(Optional)</small></label>
                                </div>
                                <input type="text" name="instrumentation" id="instrumentation" className="form-control form-control-user"
                                  onChange={handleChange}
                                  value={values.instrumentation}
                                />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                <div className="d-flex justify-content-between">
                                  <label>Vendor <small>(Optional)</small></label>
                                </div>
                                <textarea name="vendor" id="vendor" className="form-control form-control-user txtbx" rows={4}
                                  onChange={handleChange}
                                  value={values.vendor}
                                />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                <div className="d-flex justify-content-between">
                                  <label>Findings <small>(Optional)</small></label>
                                </div>
                                <textarea name="findings" id="findings" className="form-control form-control-user txtbx" rows={4}
                                  onChange={handleChange}
                                  value={values.findings}
                                />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                <div className="d-flex justify-content-between">
                                  <label>Complications <small>(Optional)</small></label>
                                </div>
                                <textarea name="complications" id="complications" className="form-control form-control-user txtbx" rows={4}
                                  onChange={handleChange}
                                  value={values.complications}
                                />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                <div className="d-flex justify-content-between">
                                  <label>Outcome  <small>(Optional)</small></label>
                                </div>
                                <textarea name="outcome" id="outcome" className="form-control form-control-user txtbx" rows={4}
                                  onChange={handleChange}
                                  value={values.outcome}
                                />
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="form-group">
                                <div className="d-flex justify-content-between">
                                  <label>Length of Hospitalization in days    <small>(Optional)</small></label>
                                </div>
                                <input type="text" name="hospitalization" id="hospitalization" className="form-control form-control-user"
                                  onChange={handleChange}
                                  value={values.hospitalization}
                                />
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="d-flex justify-content-between">
                                <label>Follow up     <small>(Optional)</small></label>
                              </div>
                              <div className="form-group">
                                <select className="form-control form-control-user"
                                  name="followUp"
                                  onChange={handleChange}
                                  value={values.followUp}
                                >
                                  <option>Select a Number</option>
                                  <option>2</option>
                                  <option>4</option>
                                  <option>6</option>
                                </select>
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="d-flex justify-content-between">
                                <label>Period</label>
                              </div>
                              <div className="form-group">
                                <select className="form-control form-control-user"
                                  name="period"
                                  onChange={handleChange}
                                  value={values.period}
                                >
                                  <option>Select a Period</option>
                                </select>
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="form-group">
                                <div className="d-flex justify-content-between">
                                  <label>More <small>(Optional)</small></label>
                                </div>
                                <textarea name="notes" id="notes" className="form-control form-control-user txtbx" rows={4}
                                  name="notes"
                                  onChange={handleChange}
                                  value={values.notes}
                                />
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="form-group">
                                <div className="d-flex justify-content-between">
                                  <label>Images</label>
                                </div>
                                <div className="images-upload">
                                  <div className="row">

                                    {(this.state.inputs.fileName) ? this.state.inputs.fileName.map((fileName, index) => (
                                      <div key={index} className="col-4 col-md-3 col-lg-2">
                                        <div className="iu-box text-center">
                                          <img src={`${process.env.REACT_APP_IMAGE_URL}` + fileName} className="img-fluid mb-3  w-100" /><br />
                                          <i className="fa fa-times-circle  text-danger" onClick={() => this.removeFile(index)} />
                                        </div>
                                      </div>
                                    ))
                                      : null}

                                    <div className="col-4 col-md-3 col-lg-2">
                                      <div className="iu-box text-center">
                                        <FileUpload callback={(data) => { this.addFile(data) }} />
                                        <br />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className=" col-md-12 mt-4 text-center">
                              <div className="form-group">
                                <button onClick={handleReset} className="btn btn-white btn-user">CLEAR</button> &nbsp;&nbsp;
                                {(isSubmitting) ?
                                  <Button variant="primary" style={style.loadingBtnStyle} disabled>
                                    <Spinner
                                      as="span"
                                      animation="border"
                                      size="sm"
                                      role="status"
                                      aria-hidden="true"
                                    />  Loading...
                                  </Button> :
                                  <button type="submit" className="btn btn-primary btn-user">ADD CASE</button>
                                }
                              </div>
                            </div>
                          </div>
                        </form>
                      )}
                    </Formik>
                    <div className="row">
                      <div className="col-md-12">
                        <small><label className="mendatory-star"> *</label> fields are mandetory</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    //properties for Add Case
    case: state.cases.case,

    casesIcds: state.cases.casesIcds,
    isIcdPopupShown: state.cases.isIcdPopupShown,

    casesCpts: state.cases.casesCpts,
    isCptPopupShown: state.cases.isCptPopupShown,

    selectedCpt: state.cases.cpt,
    selectedIcd: state.cases.icd
  }
}

const mapDispatchToProps = (dispatch) => {
}

export default connect(mapStateToProps)(AddCases);
//export default connect(mapStateToProps, mapDispatchToProps)(AddCases);