import axios from "axios";

export const categoryMovies = async (API_URL) => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.log("error in category calling api ", error);
        return error.response.data;
    }
}