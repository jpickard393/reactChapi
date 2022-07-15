import React from "react";
import './style.css';

const AdvancedSearchResultsView = ({companyData}) => {
    console.log(companyData.items);
    return (
        <div>
        {companyData.items && <h2>I found these companies...</h2>}
          {companyData.items.map((item,index) => (
            <p>{item.companyName}</p>
          ))}
        </div>
    )
}
export default AdvancedSearchResultsView;