import React from "react";
import './style.css';

const CompanyResultsView = ({companyData}) => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col-ms-3"></th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Company Name</td>
                    <td>{companyData?.companyName}</td>
                </tr>
                <tr>
                    <td>Company Number</td>
                    <td>{companyData?.companyNumber}</td>
                </tr>
            </tbody>
        </table>
    )
}
export default CompanyResultsView;