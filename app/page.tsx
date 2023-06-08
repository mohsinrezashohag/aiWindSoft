import Carousel from "@/components/Carousel"
import Contact from "@/components/Contact"
import Details from "@/components/Details"
import Featured from "@/components/Featured"
import Footer from "@/components/Footer"
import Hero from "@/components/Hero"
import Testimonial from "@/components/Testimonial"

const Home = () => {
  return (

    <section className=" mx-auto ">

      <Hero />
      <Carousel />
      <Details />
      <Testimonial />
      <Featured />
      <Contact />


    </section >

  )
}

export default Home