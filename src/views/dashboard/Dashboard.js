import React, { lazy } from 'react'

const Dashboard = () => {
  return (
    <div className="container-fluid">
        {/* Page Heading */}
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
        </div>
        {/* Content Row */}
        <div className="row">
          {/* Earnings (Monthly) Card Example */}
          <div className="col-xl-3 col-md-6 mb-4">
            <a href="cases/add-cases"><div className="card border-left-primary shadow h-100 py-2">
                <div className="card-body">
                  <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                      <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">New Case</div>
                      <div className="h5 mb-0 font-weight-bold text-gray-800">Add New Case</div>
                    </div>
                    <div className="col-auto">
                      <i className="fa fa-plus-circle fa-2x text-primary" />
                    </div>
                  </div>
                </div>
              </div></a>
          </div>
          {/* Earnings (Monthly) Card Example */}
          <div className="col-xl-3 col-md-6 mb-4">
            <a href="" data-toggle="modal" data-target="#exportModal"><div className="card border-left-success shadow h-100 py-2">
                <div className="card-body">
                  <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                      <div className="text-xs font-weight-bold text-success text-uppercase mb-1">Export</div>
                      <div className="h5 mb-0 font-weight-bold text-gray-800">Export Test</div>
                    </div>
                    <div className="col-auto">
                      <i className="fa fa-upload fa-2x text-success" />
                    </div>
                  </div>
                </div>
              </div></a>
          </div>
          {/* Earnings (Monthly) Card Example */}
          <div className="col-xl-3 col-md-6 mb-4">
            <a href="cases/this-week-cases"><div className="card border-left-info shadow h-100 py-2">
                <div className="card-body">
                  <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                      <div className="text-xs font-weight-bold text-info text-uppercase mb-1">This Week</div>
                      <div className="h5 mb-0 font-weight-bold text-gray-800">This Week's Cases</div>
                    </div>
                    <div className="col-auto">
                      <i className="  fa fa-list-ul fa-2x text-info" />
                    </div>
                  </div>
                </div>
              </div></a>
          </div>
          {/* Pending Requests Card Example */}
          <div className="col-xl-3 col-md-6 mb-4">
            <a href="cases/older-cases"><div className="card border-left-warning shadow h-100 py-2">
                <div className="card-body">
                  <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                      <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">Older Cases</div>
                      <div className="h5 mb-0 font-weight-bold text-gray-800">List of Older Cases</div>
                    </div>
                    <div className="col-auto">
                      <i className="  fa fa-list-ul fa-2x text-warning" />
                    </div>
                  </div>
                </div>
              </div></a>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-12 col-lg-12">
            {/* Bar Chart */}
            <div className="card shadow mb-4">
              <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">Cases</h6>
              </div>
              <div className="card-body">
                <div className="chart-bar">
                  <canvas id="myBarChart" />
                </div>
                <hr />
                Developer can display here any informative data of <code>chart</code>, Thank you.
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6">
            <div className="card shadow mb-4">
              {/* Card Header - Dropdown */}
              <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">Cases by Doctors</h6>
              </div>
              {/* Card Body */}
              <div className="card-body revenue-by-service">
                <div className="row d-flex justify-content-between">
                  <div className="col-xs-7 col-md-7">
                    <img className="doctor-profile rounded-circle" src="img/profile-photo.jpg" />
                    <label className="d-name">Dr Stewart K.</label>
                  </div>
                  <div className="col-xs-5 col-md-5 mt-2 mb-3">
                    <label className="d-name">80</label>
                  </div>
                  <div className="col-xs-7 col-md-7">
                    <img className="doctor-profile rounded-circle" src="img/profile-photo.jpg" />
                    <label className="d-name">Dr Kevin B.</label>
                  </div>
                  <div className="col-xs-5 col-md-5 mt-2 mb-3">
                    <label className="d-name">32</label>
                  </div>
                  <div className="col-xs-7 col-md-7">
                    <img className="doctor-profile rounded-circle" src="img/profile-photo.jpg" />
                    <label className="d-name">Dr Raj M.</label>
                  </div>
                  <div className="col-xs-5 col-md-5 mt-2 mb-3">
                    <label className="d-name">12</label>
                  </div>
                  <div className="col-xs-7 col-md-7">
                    <img className="doctor-profile rounded-circle" src="img/profile-photo.jpg" />
                    <label className="d-name">Dr Stewart K.</label>
                  </div>
                  <div className="col-xs-5 col-md-5 mt-2 mb-3">
                    <label className="d-name"> 80</label>
                  </div>
                  <div className="col-xs-7 col-md-7">
                    <img className="doctor-profile rounded-circle" src="img/profile-photo.jpg" />
                    <label className="d-name">Dr Kevin B.</label>
                  </div>
                  <div className="col-xs-5 col-md-5 mt-2 mb-3">
                    <label className="d-name"> 32</label>
                  </div>
                  <div className="col-xs-7 col-md-7">
                    <img className="doctor-profile rounded-circle" src="img/profile-photo.jpg" />
                    <label className="d-name">Dr Raj M.</label>
                  </div>
                  <div className="col-xs-5 col-md-5 mt-2 mb-3">
                    <label className="d-name"> 12</label>
                  </div>
                  <div className="col-xs-7 col-md-7">
                    <img className="doctor-profile rounded-circle" src="img/profile-photo.jpg" />
                    <label className="d-name">Dr Stewart K.</label>
                  </div>
                  <div className="col-xs-5 col-md-5 mt-2 mb-3">
                    <label className="d-name"> 80</label>
                  </div>
                  <div className="col-xs-7 col-md-7">
                    <img className="doctor-profile rounded-circle" src="img/profile-photo.jpg" />
                    <label className="d-name">Dr Kevin B.</label>
                  </div>
                  <div className="col-xs-5 col-md-5 mt-2 mb-3">
                    <label className="d-name"> 32</label>
                  </div>
                  <div className="col-xs-7 col-md-7">
                    <img className="doctor-profile rounded-circle" src="img/profile-photo.jpg" />
                    <label className="d-name">Dr Raj M.</label>
                  </div>
                  <div className="col-xs-5 col-md-5 mt-2 mb-3">
                    <label className="d-name">12</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Donut Chart */}
          <div className="col-xl-8 col-lg-6 col-md-6">
            <div className="card shadow mb-4">
              {/* Card Header - Dropdown */}
              <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">Cases by Specialty</h6>
              </div>
              {/* Card Body */}
              <div className="card-body">
                <div className="row">
                  <div className="col-md-6">
                    <div className="col-md-12">
                      <div className="card border-left-primary shadow h-100 py-2 mb-3">
                        <div className="card-body">
                          <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                              <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">Aneshesiologist</div>
                              <div className="h5 mb-0 font-weight-bold text-gray-800">40</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="card border-left-success shadow h-100 py-2 mb-3">
                        <div className="card-body">
                          <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                              <div className="text-xs font-weight-bold text-success text-uppercase mb-1">Emergency Medicine</div>
                              <div className="h5 mb-0 font-weight-bold text-gray-800">215</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="card border-left-info shadow h-100 py-2">
                        <div className="card-body">
                          <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                              <div className="text-xs font-weight-bold text-info text-uppercase mb-1">General Surgery</div>
                              <div className="h5 mb-0 font-weight-bold text-gray-800">250</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="chart-pie pt-4">
                      <canvas id="myPieChart" />
                    </div>
                  </div>
                </div>
                <hr />
                Developer can display here any informative data of <code>chart</code>, Thank you.
              </div>
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
              <button className="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
              <button className="btn btn-primary">Export</button>
            </div>
          </div>
        </div>
      </div>

      </div>
  )
}

export default Dashboard
