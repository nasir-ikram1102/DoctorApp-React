import React from "react";
import ReactExport from "react-data-export";
import axios from 'axios'
const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;


const api = axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}cases/`
});

class ExportExcel extends React.Component {

    state = {weeklyCases : []}

    constructor()
    {
        super();
    //     api.get('/getCases').then(res => {
    //         this.setState({weeklyCases: res.data.results })
    //    });
    }


    render() {
        return (
            <ExcelFile element={<button type="button" className="btn btn-primary btn-user br-50 min-width-130 ml">Export</button>}>
                <ExcelSheet data={this.state.weeklyCases} name="Employees">
                    <ExcelColumn label="First Name" value="firstName"/>
                    <ExcelColumn label="Last Name" value="lastName"/>
                    <ExcelColumn label="Institution" value="institution"/>
                    <ExcelColumn label="Hospitalization" value="hospitalization"/>
                    <ExcelColumn label="Findings" value="findings"/>
                    <ExcelColumn label="FollowUp" value="followUp"/>
                </ExcelSheet>
            </ExcelFile>
        );
    }
}
export default ExportExcel