import React from "react";
import './style.css';

const AdvancedSearchResultsView = ({companyData}) => {
    return (
        <div>
        {companyData.items && <p className='resultsHeader'>I found these companies...</p>}
          {companyData.items.map((item,index) => (
            <div className='shadow p-3 mb-5 bg-body rounded'>
               <table className="table">
                <tbody>
                <tr>
                    <td>Company Name</td>
                    <td className='boldCompanyName'>{item?.company_name}</td>
                </tr>
                <tr>
                    <td>Company Number</td>
                    <td>{item?.company_number}</td>
                </tr>
                <tr>
                    <td>Has Been Liquidated</td>
                    <td>{item?.has_been_liquidated?'Yes':'No'}</td>
                </tr>
                <tr>
                    <td>Status</td>
                    <td>{item?.company_status}</td>
                </tr>
                <tr>
                    <td>Registered Office Address</td>
                    <td>
                        <div className='row addressRow'>{item?.registered_office_address?.address_line_1}</div>
                        <div className='row addressRow'>{item?.registered_office_address?.address_line_2}</div>
                        <div className='row addressRow'>{item?.registered_office_address?.locality}</div>
                        <div className='row addressRow'>{item?.registered_office_address?.region}</div>
                        <div className='row addressRow'>{item?.registered_office_address?.postalCode}</div>
                        <div className='row addressRow'>{item?.registered_office_address?.country}</div>
                    </td>
                </tr>
                <tr>
                    <td>Date of Creation</td>
                    <td>{item?.date_of_creation}</td>
                </tr>
                <tr>
                    <td>Date of Cessation</td>
                    <td>{item?.date_of_cessation}</td>
                </tr>
                <tr>
                    <td>History of Insolvancy</td>
                    <td>{item?.has_insolvency_history?'Yes':'No'}</td>
                </tr>
                
            </tbody>
        </table>
              </div>
          ))}
        </div>
    )
}
export default AdvancedSearchResultsView;