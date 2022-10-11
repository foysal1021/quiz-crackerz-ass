import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layout/Main';


function App() {
  const routs = createBrowserRouter([

    {path:'/',element: <Main></Main>,children:[
      {path:'/home',element:<h1> ok</h1>}
    ]}

  ])
  return (
    <div className="App">
      <RouterProvider router={routs}></RouterProvider>
    </div>
  );
}

export default App;
