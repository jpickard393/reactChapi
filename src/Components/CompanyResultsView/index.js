import React from "react";
import './style.css';

const CompanyResultsView = ({companyData}) => {
    console.log(companyData);
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
                    <td>{companyData?.company_name}</td>
                </tr>
                <tr>
                    <td>Company Number</td>
                    <td>{companyData?.company_number}</td>
                </tr>
                <tr>
                    <td>Company Type</td>
                    <td>{companyData?.type}</td>
                </tr>
                <tr>
                    <td>Has Been Liquidated</td>
                    <td>{companyData?.has_been_liquidated?'Yes':'No'}</td>
                </tr>
                <tr>
                    <td>Status</td>
                    <td>{companyData?.company_status}</td>
                </tr>
                <tr>
                    <td>Registered Office Address</td>
                    <td>
                        <div className='row addressRow'>{companyData?.registered_office_address?.address_line1}</div>
                        <div className='row addressRow'>{companyData?.registered_office_address?.address_line2}</div>
                        <div className='row addressRow'>{companyData?.registered_office_address?.locality}</div>
                        <div className='row addressRow'>{companyData?.registered_office_address?.region}</div>
                        <div className='row addressRow'>{companyData?.registered_office_address?.postalCode}</div>
                        <div className='row addressRow'>{companyData?.registered_office_address?.country}</div>
                    </td>
                </tr>
                <tr>
                    <td>Date of Creation</td>
                    <td>{companyData?.date_of_creation}</td>
                </tr>
                <tr>
                    <td>Date of Cessation</td>
                    <td>{companyData?.date_of_cessation}</td>
                </tr>
                <tr>
                    <td>History of Insolvancy</td>
                    <td>{companyData?.has_insolvency_history?'Yes':'No'}</td>
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