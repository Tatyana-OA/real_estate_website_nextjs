import axios from 'axios';
export const baseUrl = 'https://bayut.p.rapidapi.com';


export const fetchApi = async (url) => {
	console.log(`Requesting `, url)
	const { data } = await axios.get((url), {
		headers: {
			'x-rapidapi-host': 'bayut.p.rapidapi.com',
			'x-rapidapi-key': '0d2d77f1acmshbbd55caf3cd8b7fp148c31jsnfb83bec2a715'
		  }
	})
	return data;
}