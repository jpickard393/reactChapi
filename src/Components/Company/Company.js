import React, { useState, useEffect,useCallback } from "react";
import getCompanyByNumber from '../../API/companyRequest';

const Company = () => {
    const [companyDetails, setCompanyDetails] = useState();

    const fetchData = useCallback(async (companyNumber) => {
        const company = await getCompanyByNumber(companyNumber);
        setCompanyDetails(company);
    },[])
    
    useEffect (() =>{
        fetchData('02312934');
    },[fetchData]);

    return (
        <div>
            {companyDetails?.companyNumber}
        </div>
    )
}

export default Company;