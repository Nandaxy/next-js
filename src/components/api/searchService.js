const searchData = [
    { title: 'API - Anime', description: 'Explore a world of free APIs for your projects.', link: '/api/api-reference/anime' },
    { title: 'API - Game', description: 'Explore a world of free APIs for your projects.', link: '/api/api-reference/game' },
    { title: 'Get Started', description: 'Explore a world of free APIs for your projects.', link: '/api/mulai' },
    { title: 'Quickstart', description: 'Explore a world of free APIs for your projects.', link: '/api/quickstart' },
  ];
  
  export const searchPages = (query) => {
    return searchData.filter((page) =>
      page.title.toLowerCase().includes(query.toLowerCase())
    );
  };
  