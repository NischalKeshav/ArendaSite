import * as Sentry from '@sentry/react';

import Navbar from './components/Navbar';


const App = () => {
  return (
    <main className="bg-black">
      <><Navbar /></>
    </main>
  )
}

export default Sentry.withProfiler(App);
