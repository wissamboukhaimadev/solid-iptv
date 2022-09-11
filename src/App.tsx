import type { Component } from 'solid-js';
import { Home } from './components';


const App: Component = () => {
  return (
    <div class='flex justify-center min-h-screen' data-theme="night" >
      <Home />
    </div>
  );
};

export default App;
