import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layout/Main';
import Topics from './Component/Topics/Topics';
import Statistics from './Component/Statistics/Statistics';
import Blog from './Component/Blog/Blog';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';



function App() {
  const routs = createBrowserRouter([

    {path:'/',element: <Main></Main>,children:[

    {
      path:'/',
      loader: ()=> {return fetch('https://openapi.programming-hero.com/api/quiz')},
      element:  <Home></Home>
    },
      {path:'/topics',element: <Topics></Topics>},
      {path:'/statistics',element: <Statistics></Statistics>},
      {path:'/blog',element: <Blog></Blog>}
    ]}

  ])
  return (
    <div className="App">
      <RouterProvider router={routs}></RouterProvider>
    </div>
  );
}

export default App;
