// pages/index.js
import Link from 'next/link';

const Home = () => {
  return (
    <div>
      <h1>Welcome to My Blog</h1>
      <Link href="/posts">Go to Posts</Link>
    </div>
  );
};

export default Home;
