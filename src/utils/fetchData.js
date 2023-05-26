export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'ae13c4da55msh87690acafad5044p115e9cjsne8d7eb0658b3',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

 export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'ae13c4da55msh87690acafad5044p115e9cjsne8d7eb0658b3',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};

export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();
    
    return data;
}