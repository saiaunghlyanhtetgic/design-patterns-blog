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

const PostPreview = ({
  title,
  image,
  overview,
  author,
  slug,
}: Props) => {
  return (
    <div>
      <div className="mb-5 w-full">
        <CoverImage slug={slug} title={title} src={image} />
      </div>
      <h3 className="text-3xl mb-3 leading-snug">
        <Link
          as={`/posts/${slug}`}
          href="/posts/[slug]"
          className="hover:underline uppercase"
        >
          {title}
        </Link>
      </h3>
      <p className="text-lg leading-relaxed mb-4">{overview}</p>
      <Avatar name={author} />
    </div>
  )
}

export default PostPreview