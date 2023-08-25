import { ChildrenProps } from '@/types/ChildrenProps'


const PostTitle = ({ children }: ChildrenProps) => {
  return (
    <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold tracking-tighter uppercase leading-tight md:leading-none mb-12 text-center md:text-left">
      {children}
    </h1>
  )
}

export default PostTitle