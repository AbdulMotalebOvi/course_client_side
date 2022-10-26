import './App.css';
import { RouterProvider } from 'react-router-dom';
import { routes } from './Shared/Routes/Routes';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="App">
      <RouterProvider router={routes}></RouterProvider>
      <Toaster position="top-right"
        reverseOrder={false}></Toaster>
    </div>
  );
}

export default App;
