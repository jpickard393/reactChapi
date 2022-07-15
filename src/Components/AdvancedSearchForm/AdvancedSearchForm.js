import React, { useState, useCallback } from "react";
import AdvancedSearchResultsView from "../AdvancedSearchResultsView";
import { getAdvancedSearch } from '../../API/companyRequest';
import './style.css';

const AdvancedSearchForm = () => {
  const [companyData, setCompanyData] = useState();
  const [searchParam, setSearchParam] = useState('location=leeds');

  const fetchData = useCallback(async (params) => {
    if(params){
      const data = await getAdvancedSearch(params);
      setCompanyData(data);
    }
  },[])

  const handleInputChange = (e) => {
    setSearchParam(e.target.value);
  }

  const clearInput = () =>{
    setSearchParam('');
    setCompanyData('');
  }

  const fetchCompanyData = () => {
        if(searchParam) fetchData(searchParam);
}
    return (
      <div className="container">
        <h1>Advanced Search</h1>
      <div className="form-control form-container">
        <div className="row companyNumberSearch">
          <div className="col-md-3">
            <input type="text" className="form-control" placeholder="Company Number" aria-label="Company Number" onChange={handleInputChange} value={searchParam}></input>
          </div>
          <div className="col-sm-1">
            <button className="btn btn-primary" disabled={!searchParam} onClick={fetchCompanyData}>Search</button>
          </div>
          { searchParam && <div className="col-sm-1">
            <button className="btn btn-warning" onClick={clearInput}>Clear</button>
          </div>}
        </div>
        
        </div>
        {companyData && <AdvancedSearchResultsView companyData = {companyData}></AdvancedSearchResultsView>}
        </div>
    )
}
export default AdvancedSearchForm;