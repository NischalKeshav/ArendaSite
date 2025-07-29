import * as Sentry from '@sentry/react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';


const App = () => {
  return (
    <main className="bg-black">
      
      <Navbar />
      <Hero />
    </main>
  )
}

export default Sentry.withProfiler(App);
