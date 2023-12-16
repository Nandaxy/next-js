const searchData = [
  {
    title: "All-Feature",
    description: "Explore a world of free APIs for your projects.",
    link: "/api/api-reference/all",
  },
  {
    title: "OpenAI",
    description: "Explore a world of free APIs for your projects.",
    link: "/api/api-reference/ai",
  },
  {
    title: "Get Started",
    description: "Explore a world of free APIs for your projects.",
    link: "/api/mulai",
  },
  {
    title: "Quickstart",
    description: "Explore a world of free APIs for your projects.",
    link: "/api/quickstart",
  },
  {
    title: "Islami",
    description: "Explore a world of free APIs for your projects.",
    link: "/api/api-reference/islami",
  },
  {
    title: "Downloader",
    description: "Explore a world of free APIs for your projects.",
    link: "/api/api-reference/downloader",
  },
  {
    title: "Random Image",
    description: "Explore a world of free APIs for your projects.",
    link: "/api/api-reference/random-image",
  },
  {
    title: "Entertainment",
    description: "Explore a world of free APIs for your projects.",
    link: "/api/api-reference/entertainment",
  },
  {
    title: "News",
    description: "Explore a world of free APIs for your projects.",
    link: "/api/api-reference/news",
  },
];

export const searchPages = (query) => {
  return searchData.filter((page) =>
    page.title.toLowerCase().includes(query.toLowerCase())
  );
};
