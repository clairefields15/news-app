export const fetchTopStories = async () => {
  let key = 'BD7xtP722e3bxfVAqWGLcA2acYJaEkHL';
  let response = await fetch(
    `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${key}`
  );
  console.log(response);
  let data = checkForErrors(response);
  console.log('data res', data);
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
