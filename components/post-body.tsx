type Props = {
    overview: string
    solution: string
    context: string
  }
  
  const PostBody = ({ context, overview, solution }: Props) => {
    return (
      <div className="max-w-2xl mx-auto">
        <div className="">
            <h3 className="text-2xl lg:text-3xl leading-tight mb-4 text-center">
                Overview
            </h3>
            <div className="text-lg lg:text-xl leading-relaxed mb-4 text-left">
                {overview}
            </div>
        </div>

        <div>
            <h3 className="text-2xl lg:text-3xl leading-tight mb-4 text-center">
                Context
            </h3>
            <div className="text-lg lg:text-xl leading-relaxed mb-4 text-left">
                {context}
            </div>
        </div>

        <div>
            <h3 className="text-2xl lg:text-3xl leading-tight mb-4 text-center">
                Solution
            </h3>
            <div className="text-lg lg:text-xl leading-relaxed mb-4 text-left">
                {solution}
            </div>
        </div>
      </div>
    )
  }
  
  export default PostBody