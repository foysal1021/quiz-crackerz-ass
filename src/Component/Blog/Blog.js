import React from 'react';

const Blog = () => {
    return (
        <div className='container my-5'>

            <div className=' rounded border p-3'>
            <h4> <span className=' text-success fw-bold'>Question 1</span> What is the purpose of react router?</h4>
                <p>
                    <span className=' text-success fw-bold'> Ans:</span>
                    ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.
                </p>
            </div>

            <div className=' rounded border p-3 my-4'>
                <h4>
                    <span className=' text-success fw-bold'> Question 2 </span>
                    How dose react Context API work?
                </h4>
                <p>
                    <span className=' text-success fw-bold'> Ans :</span>
                    The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.

                </p>
            </div>
            
            <div className=' rounded border p-3'>
                <h4> 
                    <span className=' text-success fw-bold'>  Question 3:</span>
                    What is Context Api work?
                </h4>

                <p>
                    <span className=' text-success fw-bold'> Ans:</span>
                The useHref hook returns a URL that may be used to link to the given to location, even outside of React Router. Tip: You may be interested in taking a look at the source for the Link component in react-router-dom to see how it uses useHref internally to determine its own href value.

                </p>

            </div>


        </div>
    );
};

export default Blog;