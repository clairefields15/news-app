export const fetchTopStories = async section => {
  let key = process.env.REACT_APP_API_KEY;

  let response = await fetch(
    `https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${key}`
  );
  let data = await checkForErrors(response);
  return await cleanData(data);
};

const checkForErrors = response => {
  if (response.status === 200) {
    return response.json();
  } else if (response.status === 404) {
    throw new Error('Error 404: Resource not found');
  } else if (response.status === 500) {
    throw new Error('Internal server error, try again later');
  } else {
    throw new Error('Something went wrong');
  }
};

const cleanData = data => {
  return data.results.map(result => {
    let path = result.url.split('/');
    let index = result.url.split('/').length - 1;
    let id = path[index].split('.html')[0];
    return {
      abstract: result.abstract,
      byline: result.byline,
      publishedOn: result['published_date'],
      imageUrl: result.multimedia ? result.multimedia[0].url : null,
      section: result.section,
      url: result.url,
      title: result.title,
      id: id
    };
  });
};
