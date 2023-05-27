import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const KEY = '36764323-0d84548404e2da8cd858ae667';
//searchValue - то, что ввел пользователь, page - страничка, на которую выводится результат с 40ка карточками
async function fetchPictures(searchValue, page) {
  //data - объект из бэкэнда. Достань инфо по этому запросу
  const { data } = await axios.get(
    `${BASE_URL}?key=${KEY}&q=${searchValue}&image_type=photo&orientation=horizontal&safe_search=true&page=${page}&per_page=40`
  );

  //из этой  data берется totalHits и hits
  const { totalHits, hits } = data;
  return { totalHits, hits };
}

export { fetchPictures };
