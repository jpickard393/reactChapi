import React, { useState, useEffect } from "react";
import SearchByCompanyId from "../CompanyNumberSearchForm";

const Home = () => {
    return (
        <div className="container">
        <div>Home
            <SearchByCompanyId />
        </div>
        </div>
    )
}

export default Home;