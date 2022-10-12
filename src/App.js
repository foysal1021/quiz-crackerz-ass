import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Alert404 from './Component/Alert404/Alert404';
import Blog from './Component/Blog/Blog';
import Home from './Component/Home/Home';
import ShowQuiz from './Component/ShowQuiz/ShowQuiz';
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
        loader: ()=> { return fetch('https://openapi.programming-hero.com/api/quiz')},
        element: <Statistics></Statistics>
      },
      {
        path:'/blog',
        element: <Blog></Blog>
      },
      {
        path:'/quiz/:quizID',
        loader: async({ params })=>{
          // console.log('kk',params.quizID)
          return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizID}`)
        },
        element: <ShowQuiz></ShowQuiz>
      },
      {
        path:'*',
        element: <Alert404></Alert404>
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