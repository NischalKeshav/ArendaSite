import * as Sentry from '@sentry/react';

const App = () => {
  return (
    <main className="bg-black">
      <h1 class="text-white flex justify-center items-center h-screen">Hello world</h1>
    </main>
  )
}

export default Sentry.withProfiler(App);
