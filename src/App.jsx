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
      <section className='bg-black'>
        <Hero />
      </section>
      <section className='bg-black' id="about-event">
        <AboutEvent />
      </section>
      <section className='bg-black padding' id="prizes">
        <Prizes />
      </section>
      <section className='bg-black padding-x' id="sponsors">
        <OurSponsors />
      </section>
      <section className='bg-black padding' id="Register">
        <Register />
      </section>
      <section className=' bg-footer-color padding-x padding-t pb-8'>
        <Footer />
      </section>
    </main>
  )
}
export default App;