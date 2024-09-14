import Nav from "./components/Nav";
import {
  Hero,
  AboutEvent,
  Prizes,
  OurSponsors,
  Register,
  Footer
} from "./sections";

const App = () => {
  return (
    <main className='relative'>
      <Nav />
      <section className='bg-black xl:padding-l wide:padding-r padding-b'>
        <Hero />
      </section>
      <section className='bg-black padding'>
        <AboutEvent />
      </section>
      <section className='bg-black padding'>
        <Prizes />
      </section>
      <section className='bg-black padding-x py-10'>
        <OurSponsors />
      </section>
      <section className='bg-black padding'>
        <Register />
      </section>
      <section className=' bg-footer-color padding-x padding-t pb-8'>
        <Footer />
      </section>
    </main>
  )
}
export default App;