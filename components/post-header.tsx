import Avatar from './avatar'

import CoverImage from './cover-image'
import PostTitle from './post-title'



type Props = {
  title: string
  coverImage: string
  author: string
}

const PostHeader = ({ title, coverImage, author }: Props) => {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="hidden md:block md:mb-12">
        <Avatar name={author}/>
      </div>
      <div className='flex justify-center'>
      <div className="mb-8 md:mb-16 sm:mx-0 w-2/3">
        <CoverImage title={title} src={coverImage} />
      </div>
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="block md:hidden mb-6">
          <Avatar name={author} />
        </div>
        
      </div>
    </>
  )
}

export default PostHeader