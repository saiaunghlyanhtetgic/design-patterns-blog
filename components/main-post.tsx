import Avatar from './avatar'
import CoverImage from './cover-image'
import Link from 'next/link'


type Props = {
  title: string
  image: string
  overview: string
  author: string
  slug: string
}

const MainPost = ({
  title,
  image,
  overview,
  author,
  slug,
}: Props) => {
  return (
    <section className='mt-8'>
      <div className=''>
      <div className="mb-8 md:mb-16 w-full">
        <CoverImage title={title} src={image} slug={slug} />
      </div>
      </div>
      <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
        <div>
          <h3 className="mb-4 text-4xl lg:text-5xl leading-tight">
            <Link
              as={`/posts/${slug}`}
              href="/posts/[slug]"
              className="hover:underline"
            >
              {title}
            </Link>
          </h3>
          
        </div>
        <div>
          <p className="text-lg leading-relaxed mb-4">{overview}</p>
          <Avatar name={author} />
        </div>
      </div>
    </section>
  )
}

export default MainPost