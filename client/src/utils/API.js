import axios from 'axios';

export default {
	findAllWhereUnsaved: () => {
		return axios.get('https://scrapeermanadkfja.herokuapp.com/api/articles');
	},
	findAllWhereSaved: () => {
		return axios.get('https://scrapeermanadkfja.herokuapp.com/api/articles/saved');
	},
	findOneWhereUnsaved: articleId => {
		return axios.get(`https://scrapeermanadkfja.herokuapp.com/api/articles/${articleId}`);
	},
	saveArticle: articleId => {
		return axios.put(`https://scrapeermanadkfja.herokuapp.com/api/articles/${articleId}`);
	},
	scrapeArticles: () => {
		return axios.post('https://scrapeermanadkfja.herokuapp.com/api/articles');
	}
};
