import React from "react";
import CompanyResultsView from "../CompanyResultsView/CompanyResultsView";

const CompanyNumberSearchForm = () => {
    return (
      <div>
        <div class="row">
          <div class="col-md-3">
            <input type="text" class="form-control" placeholder="Company Number" aria-label="First name"></input>
          </div>
          <div class="col-md-1">
            <button class="btn btn-primary">Search</button>
          </div>
        </div>
        <div class="row">
          <div class="col-md-10">
            <CompanyResultsView></CompanyResultsView>
          </div>
        </div>
        </div>
    )
}
export default CompanyNumberSearchForm;