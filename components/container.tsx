import { ChildrenProps } from "@/types/ChildrenProps"

const Container = ({ children }: ChildrenProps) => {
    return <div className="container mx-auto px-5">{children}</div>
  }
  
  export default Container