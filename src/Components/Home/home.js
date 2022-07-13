import React, { useState, useEffect } from "react";
import SearchByCompanyId from "../CompanyNumberSearchForm";

const Home = () => {
    const [companyResult, setCompanyresult] = useState();

    useEffect(() => {

    });

    return (
        <div class="container">
        <div>Home
            <SearchByCompanyId />
        </div>
        </div>
    )
}

export default Home;