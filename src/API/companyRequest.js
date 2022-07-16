import { fetchData } from "./fetchData";
import { baseUrl, proxyUrl } from "../globalConstants";

const getCompanyByNumber = async (companyNumber) => {
    const path = "company/";
    const url = `${baseUrl}${path}${companyNumber}`; 
    return await fetchData(url);
}

const getAdvancedSearch = async(searchParam) => {
    const path= "advanced-search/companies/";
    const url = `${proxyUrl}${path}${searchParam}`; 
    //const url = `${baseUrl}${path}${searchParam}`; 
    return await fetchData(url);
}

export { getCompanyByNumber, getAdvancedSearch};