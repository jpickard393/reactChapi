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
                <tr>
                    <td>Has Been Liquidated</td>
                    <td>{companyData?.hasBeenLiquidated?'Yes':'No'}</td>
                </tr>
                <tr>
                    <td>Status</td>
                    <td>{companyData?.companyStatus}</td>
                </tr>
                <tr>
                    <td>Registered Office Address</td>
                    <td>
                        <div className='row addressRow'>{companyData?.registeredOfficeAddress.addressLine1}</div>
                        <div className='row addressRow'>{companyData?.registeredOfficeAddress.addressLine2}</div>
                        <div className='row addressRow'>{companyData?.registeredOfficeAddress.locality}</div>
                        <div className='row addressRow'>{companyData?.registeredOfficeAddress.region}</div>
                        <div className='row addressRow'>{companyData?.registeredOfficeAddress.postalCode}</div>
                        <div className='row addressRow'>{companyData?.registeredOfficeAddress.country}</div>
                    </td>
                </tr>
                <tr>
                    <td>Date of Creation</td>
                    <td>{companyData?.dateOfCreation}</td>
                </tr>
                <tr>
                    <td>History of Insolvancy</td>
                    <td>{companyData?.hasInsolvencyHistory?'Yes':'No'}</td>
                </tr>
                <tr>
                    <td>ETAG</td>
                    <td>{companyData?.etag}</td>
                </tr>
            </tbody>
        </table>
    )
}
export default CompanyResultsView;