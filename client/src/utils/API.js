import axios from 'axios';
const HOST = process.env.REACT_APP_HOST || '';

export default {
	findAllWhereUnsaved: () => {
		return axios.get(`${HOST}/api/articles`);
	},
	findAllWhereSaved: () => {
		return axios.get(`${HOST}/api/articles/saved`);
	},
	findOneWhereUnsaved: articleId => {
		return axios.get(`${HOST}/api/articles/${articleId}`);
	},
	saveArticle: articleId => {
		return axios.put(`${HOST}/api/articles/${articleId}`);
	},
	scrapeArticles: () => {
		return axios.post(`${HOST}/api/articles`);
	}
};
