import axios from "axios";


export const fetchData = async () => {
    try {
        const response = await axios.get('https://portfolio-react-backend-waw7.onrender.com/projects')
        return response.data
    } catch (err) {
        console.log('Error fetching data', err);
        return null
    }
}