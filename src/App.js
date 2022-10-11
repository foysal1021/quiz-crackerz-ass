import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Blog from './Component/Blog/Blog';
import Home from './Component/Home/Home';
import Statistics from './Component/Statistics/Statistics';
import Topics from './Component/Topics/Topics';
import Main from './Layout/Main';

const App = () => {
  const routs = createBrowserRouter([
    {path:'/',element: <Main></Main>,children:[

      {
        path:'/',
        loader: ()=>{ return fetch('https://openapi.programming-hero.com/api/quiz')},
        element: <Home></Home>
      },

      {
        path:'/topics',
        loader: ()=>{ return fetch('https://openapi.programming-hero.com/api/quiz')},
        element: <Topics></Topics>
      },

      {
        path:'/Statistics',
        element: <Statistics></Statistics>
      },
      {
        path:'/blog',
        element: <Blog></Blog>
      }



    ] }
  ]);
  return (

    <div>
      <RouterProvider router={routs}></RouterProvider>
    </div>

  );
};

export default App;