import { Categories } from "@/components";

 const Home = () => {
  return(
    <div>
      <section className="flex-start flex-col paddings mb-16">
        <Categories />
        <h1>Post</h1>
        <h1>Loadmore</h1>
      </section>
    </div>
  )
 }

 export default Home;