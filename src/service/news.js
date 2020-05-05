import {articles_url, api_key, country_code} from '../config/rest_config';

export async function getArticles(cat) {
  try {
    let articles = await fetch(
      `${articles_url}?country=${country_code}&category=${cat}&api_key=${api_key}`,
      {
        headers: {
          'X-API-KEY': api_key,
        },
      },
    );
    let result = await articles.json();
    articles = null;
    return result.articles;
  } catch (err) {
    throw err;
  }
}
