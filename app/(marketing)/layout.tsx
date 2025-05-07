import { PropsWithChildren } from "react"

const HomeLayout = ({ children }:PropsWithChildren) => {
  return (
    <section>
      <h1>Marketing</h1>
      {children}
    </section>
  )
}
export default HomeLayout
