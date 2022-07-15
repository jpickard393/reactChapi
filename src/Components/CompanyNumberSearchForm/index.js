import React, { useState, useCallback } from "react";
import CompanyResultsView from "../CompanyResultsView";
import getCompanyByNumber from '../../API/companyRequest';
import './style.css';

const CompanyNumberSearchForm = () => {
  const [companyData, setCompanyData] = useState();
  const [companyNumber, setCompanyNumber] = useState();

  const fetchData = useCallback(async (companyNumber) => {
    if(companyNumber){
      const company = await getCompanyByNumber(companyNumber);
      setCompanyData(company);
    }
  },[])

  const handleInputChange = (e) => {
    setCompanyNumber(e.target.value);
  }

  const clearInput = () =>{
    setCompanyNumber('');
    setCompanyData('');
  }

  const fetchCompanyData = () => {
    if(companyNumber) fetchData(companyNumber);
  }
    return (
      <div>
        <div className="row companyNumberSearch">
          <div className="col-md-3">
            <input type="text" className="form-control" placeholder="Company Number" aria-label="Company Number" onChange={handleInputChange} value={companyNumber}></input>
          </div>
          <div className="col-sm-1">
            <button className="btn btn-success" onClick={fetchCompanyData}>Search</button>
          </div>
          { companyNumber && <div className="col-sm-1">
            <button className="btn btn-info" onClick={clearInput}>Clear</button>
          </div>}
        </div>
        {companyData && <CompanyResultsView companyData = {companyData}></CompanyResultsView>}
        </div>
        
    )
}
export default CompanyNumberSearchForm;