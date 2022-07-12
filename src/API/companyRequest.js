import { fetchData } from "./fetchData";
import { baseUrl } from "../globalConstants";

const getCompanyByNumber = async (companyNumber) => {
    const path = "company/";
    const url = `${baseUrl}${path}${companyNumber}`; 
    return await fetchData(url);
}

export default getCompanyByNumber;