import { fetchData } from "./fetchData";
import { baseUrl } from "../globalConstants";

const getCompanyByNumber = async (companyNumber) => {
    const path = "company/";
    const url = `${baseUrl}${path}${companyNumber}`; 
    return await fetchData(url);
}

const getAdvancedSearch = async(searchParam) => {
    const path= "advanced-search/companies/";
    const url = `${baseUrl}${path}${searchParam}`; 
    return await fetchData(url);
}

export { getCompanyByNumber, getAdvancedSearch};