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
      <section className='xl:padding-l wide:padding-r padding-b'>
        <Hero />
      </section>
      <section className='padding'>
        <AboutEvent />
      </section>
      <section className='padding'>
        <Prizes />
      </section>
      <section className='padding-x py-10'>
        <OurSponsors />
      </section>
      <section className='padding'>
        <Register />
      </section>
      <section className=' bg-black padding-x padding-t pb-8'>
        <Footer />
      </section>
    </main>
  )
}
export default App;