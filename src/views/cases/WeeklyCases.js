import React from 'react'
import axios from 'axios'
import moment from "moment";
import { CPagination } from '@coreui/react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class WeeklyCases extends React.Component {
  state = { cases: [], limit: 10, currentPage: 1, totalPages: 0, sortBy: "createdAt", search: "", startDate: "", endDate: "", loading: false }

  constructor() {
    super();
  }

  componentDidMount() {

    var startDate = this.getWeekStartDate();
    var endDate = this.getWeekEndDate();

    this.setState({
      ...this.state,
      startDate: startDate,
      endDate: endDate,
      currentPage: 1,
    }, () => {
      this.getCases();
    });
  }

  getWeekStartDate = () => {
    var currentDate = new Date;
    return new Date(currentDate.setDate(currentDate.getDate() - currentDate.getDay()));
  }

  getWeekEndDate = () => {
    var currentDate = new Date;
    return new Date(currentDate.setDate((currentDate.getDate() - currentDate.getDay()) + 6));
  }

  getCases = () => {

    this.setState({
      ...this.state,
      loading: true
    });

    try {
      axios({
        url: `${process.env.REACT_APP_API_URL}cases/getCases`,
        method: "POST",
        data: {
          startDate: this.state.startDate,
          endDate: this.state.endDate,
          search: this.state.search,
          sortBy: this.state.sortBy,
          limit: this.state.limit,
          page: this.state.currentPage,
        },
      }).then(response => {
        this.setState({
          ...this.state,
          totalPages: response.data.totalPages,
          cases: response.data.results,
          loading: false
        })
      }).catch((error) => {
        this.setState({
          ...this.state,
          loading: false
        })
      });
    }
    catch (err) {
      console.log(err);
    }
  }

  searchCase = (e) => {
    let query = e.target.value.toLowerCase();
    this.setState({
      ...this.state,
      search: query,
      currentPage: 1
    }, () => { this.getCases() });
  }

  sortCases = (event) => {
    var selection = event.target.value;
    this.setState({
      ...this.state,
      sortBy: selection,
      currentPage: 1,
    }, () => { this.getCases() });
  }

  searchByDate = (event) => {
    var selection = event.target.value;
    var startDate;
    var endDate;
    if (selection == "all") {
      startDate = this.getWeekStartDate();
      endDate = this.getWeekEndDate();
    }
    if (selection == "today") {
      startDate = new Date();
      endDate = startDate;
    }
    if (selection == "yesterday") {
      startDate = new Date();
      startDate.setDate(startDate.getDate() - 1);
      endDate = startDate;
    }

    // if(selection == "week") {
    // }

    this.setState({
      ...this.state,
      startDate: startDate,
      endDate: endDate,
      currentPage: 1,
    }, () => { this.getCases() });
  }

  setCurrentPage = (page) => {
    this.setState({
      ...this.state,
      currentPage: (page == 0) ? 1 : page
    }, () => {
      this.getCases();
    });
  }

  getAge = (dateString) => {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }

  exportCasesInExcel = () => {
    axios({
      //url: `${process.env.REACT_APP_API_URL}cases/exportCasesInExcel`,
      url: `${process.env.REACT_APP_API_URL}cases/exportCasesInPdf`,
      method: "POST",
      data: {
        startDate: this.state.startDate,
        endDate: this.state.endDate,
        search: this.state.search,
        sortBy: this.state.sortBy,
        limit: this.state.limit,
        page: this.state.currentPage,
      },
    }).then(response => {
      const link = document.createElement('a');
      link.href = response.data;

      console.log(response);
      link.setAttribute(
        'download',
        `FileName.pdf`,
      );

      document.body.appendChild(link);
      link.click();

    }).catch((error) => {
      
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
      <div>
        <div className="container-fluid">
          {/* Page Heading */}
          <h1 className="h3 mb-4 text-gray-800">This Week </h1>
          <div className="card shadow mb-4">
            <div className="card-header py-3">
              <h6 className="m-0 font-weight-bold text-primary">List of This Week's Cases</h6>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-12 col-lg-3 mb-4" onChange={this.sortCases}>
                  <input type="radio" className="cal-radio d-none" name="sortBy" id="sortByInstitution" defaultValue="institution" defaultChecked />
                  <label className="radio-label" htmlFor="sortByInstitution">Institution</label>
                  <input type="radio" className="cal-radio d-none" name="sortBy" id="sortByCpt" defaultValue="cpt" />
                  <label className="radio-label radius-right" htmlFor="sortByCpt">CPT</label>
                </div>
                <div className="col-md-12 col-lg-3  mb-4" onChange={this.searchByDate}>
                  <input type="radio" className="cal-radio d-none" name="dateFilter" id="searchAll" defaultValue="all" defaultChecked />
                  <label className="radio-label radius-left" htmlFor="searchAll">All</label>
                  <input type="radio" className="cal-radio d-none" name="dateFilter" id="searchToday" defaultValue="today" />
                  <label className="radio-label" htmlFor="searchToday">Today</label>
                  <input type="radio" className="cal-radio d-none" name="dateFilter" id="searchYesterday" defaultValue="yesterday" />
                  <label className="radio-label radius-right" htmlFor="searchYesterday">Yesterday</label>
                  {/* <input type="radio" className="cal-radio d-none" name="dateFilter" id="searchAllWeek" defaultValue="week" />
                  <label className="radio-label radius-right" htmlFor="searchAllWeek">1 Week</label> */}
                </div>
                <div className="col-12 col-lg-2 mb-4">
                  <form className="user">
                    <input type="text" name="practice_name" id="practice_name" className="form-control form-control-user"
                      onChange={this.searchCase}
                      placeholder="Search case.." />
                  </form>
                </div>
                {/* <div className="col-6 col-md-6 col-lg-2">
                <button type="submit" className="btn btn-primary btn-user br-50" data-toggle="modal" data-target="#filterbydateModal">Search by Date</button>
              </div> */}
                <div className="col-6 col-md-6 col-lg-2">
                <button type="button" onClick={this.exportCasesInExcel} className="btn btn-primary btn-user">Export</button>
                  {/* <ExportExcel /> */}
                  {/* <button type="button" className="btn btn-primary btn-user br-50 min-width-130" onClick={this.ExportExcelData} >Export</button> */}
                </div>
              </div>

              {(!this.state.loading) ?
                ((this.state.cases && this.state.cases.length > 0) ?
                  (<div>
                    <div className="table-responsive">
                      <table className="table table-bordered" id="dataTable" width="100%" cellSpacing={0}>
                        <thead>
                          <tr>
                            <th>#</th>
                            {/* <th><div>
                        <input type="checkbox" id="test1" />
                        <label htmlFor="test1" className="mb-0">Check All</label>
                      </div> </th> */}
                            <th>Name</th>
                            <th>Institution</th>
                            <th>Diagnosis</th>
                            <th>CPT</th>
                            <th>Date</th>
                            <th>Years</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tfoot>
                        </tfoot>
                        <tbody>
                          {(this.state.cases && this.state.cases.length > 0) ? (this.state.cases.map((item, i) => (
                            <tr key={i}>
                              <td>{i + 1}</td>
                              {/* <td><div>
                        <input type="checkbox" id="test2" />
                        <label htmlFor="test2" className="mb-0 tr-td-checkbox" />
                      </div>
                    </td>  */}
                              <td>{item.firstName} {item.lastName}</td>
                              <td>{item.institution}</td>
                              <td>{item.diagnosis}</td>
                              <td>{item.cpt}</td>
                              <td>{moment(item.createdAt).format('DD MMM YYYY')}</td>
                              <td>{this.getAge(item.dateOfBirth)} <label className={"gender-icon ml-2 " + (item.gender == "Male" ? "men-icon" : "women-icon")}>
                                <i className={"fa " + (item.gender == "Male" ? "fa-mars-stroke" : "fa fa-venus")} /></label></td>
                              <td><Link to={"view-case-detail/" + item.id} className="text-primary" value={item.id}><u>View detail</u></Link></td>
                            </tr>
                          ))) : ""}
                        </tbody>
                      </table>
                    </div>
                    <CPagination
                      align="end"
                      activePage={this.state.currentPage}
                      pages={this.state.totalPages}
                      onActivePageChange={this.setCurrentPage} />
                  </div>)
                  : <h3 style={style.noCasesStyle}>No cases found</h3>)
                : <img style={style.loadingStyle} src="/image/loading.gif" />
              }
            </div>
          </div>
        </div>

        <div className="modal fade" id="exportModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Export Type</h5>
                <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="form-group">
                  <label>Select Export Type</label><label className="mendatory-star"> *</label><br />
                  <label className="container1">Detailed View
                    <input type="radio" defaultChecked="checked" name="radio" />
                    <span className="checkmark" />
                  </label>
                  <label className="container1">Summary View
                    <input type="radio" name="radio" />
                    <span className="checkmark" />
                  </label>
                </div>
              </div>
              <div className="modal-footer">
                <button className="btn btn-secondary" type="button">Cancel</button>
                <button className="btn btn-primary">Export</button>
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
    
  }
}

const mapDispatchToProps = (dispatch) => {
}

export default connect(mapStateToProps)(WeeklyCases);


