import { getAllPosts } from '@/utils/api'
import Container from '@/components/container';
import MainPost from '@/components/main-post';
import MoreStories from '@/components/more-posts';

export default function Home() {
  const posts = getAllPosts();
  const mainPost = posts[0];
  const morePosts = posts.slice(1);
  return (
    <Container>
      <div className='mt-8'>
        <h1 className="text-5xl md:text-6xl font-bold tracking-tighter leading-tight md:pr-8">
          Cloud Desing Patterns
        </h1>
      </div>
      <MainPost title={mainPost.title} image={mainPost.image} overview={mainPost.overview} author={mainPost.author} slug={mainPost.slug}/>
      {morePosts && <MoreStories posts={morePosts} />}
    </Container>
  )
}
