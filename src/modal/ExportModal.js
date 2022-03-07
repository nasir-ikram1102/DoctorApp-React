import React from 'react'
class ExportModal extends React.Component {

  render() 
  {
     return (
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
      );
  }
}

export default ExportModal