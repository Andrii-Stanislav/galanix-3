import axios from 'axios';

axios.defaults.baseURL = 'http://universities.hipolabs.com';

const fetchUniversities = country => {
  return axios
    .get(`search?country=${country}`)
    .then(({ data }) => {
      return data;
    })
    .catch(error => console.log(error));
};

export default fetchUniversities;
