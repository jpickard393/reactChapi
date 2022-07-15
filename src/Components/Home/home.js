import React, { useState, useEffect } from "react";
import SearchByCompanyId from "../CompanyNumberSearchForm";

const Home = () => {
    return (
        <div className="container">
        <div className='pageTitle'>
            <h1>Search By Company ID</h1>
        </div>
        <SearchByCompanyId />
        </div>
    )
}

export default Home;