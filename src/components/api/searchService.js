const searchData = [
    { title: 'API - Anime', description: 'Explore a world of free APIs for your projects.', link: '/api/api-reference/anime' },
    { title: 'API - Anime', description: 'Explore a world of free APIs for your projects.', link: '/api/api-reference/anime' },
  ];
  
  export const searchPages = (query) => {
    return searchData.filter((page) =>
      page.title.toLowerCase().includes(query.toLowerCase())
    );
  };
  