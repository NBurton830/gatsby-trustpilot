import axios from 'axios';


const TrustPilotAPI = {
getComments: (sku, businessUnitID, apiKey) => {
return axios.get(`https://api.trustpilot.com/v1/product-reviews/business-units/${businessUnitID}?apikey=${apiKey}&sku=${sku}`);
}
}

export default TrustPilotAPI;




