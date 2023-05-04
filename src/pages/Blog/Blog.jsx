import React from 'react';
import './Blog.css';

const Blog = () => {
    return (
        <div className='mt-5 mx-3'>
            <div>
                <h2 className='fw-bold'> 1. The differences between uncontrolled and controlled components. </h2>
                <h5> <span className='text-danger'>Answer:   </span>

                    The difference between controlled and uncontrolled components:

                    <table className='table table-bordered border-dark mt-3'>
                        <thead className='fs-2 text-danger'>
                            <tr>
                                <th scope="col">Controlled component</th>
                                <th scope="col">Uncontrolled component</th>
                            </tr>
                        </thead>

                        <tbody className='fs-5'>
                            <tr>
                                <th scope="row">The parent component has held over the form data.</th>
                                <td>The DOM itself holds control over the data.</td>

                            </tr>
                            <tr>
                                <th scope="row">It does not maintain its internal state.</th>
                                <td>It maintains its internal state.</td>
                            </tr>
                            <tr>
                                <th scope="row">It allows validation control. </th>
                                <td>It does not allow validation control.</td>
                            </tr>
                            <tr>
                                <th scope="row">It stores the current value in the form of props.  </th>
                                <td>It stores the current value using react ref.</td>
                            </tr>
                            <tr>
                                <th scope="row">It has better control over the form data.   </th>
                                <td>It has limited control over the form data.</td>
                            </tr>



                        </tbody>
                    </table>



                </h5>
            </div>

            <div className='mt-5'>
                <h2 className='fw-bold'> 2. How to validate React props using PropTypes ?  </h2>
                <h5> <span className='text-danger'>Answer:   </span>
                    To validate React props using PropTypes, you can import the PropTypes library and define the expected type and shape of the props in the component's propTypes object. For example, if you want to ensure that a prop called "name" is a string, you can write:

                    <br /> In this example, the name prop is defined as a required string using the isRequired method. If a prop of a different type or shape is passed to the component, a warning will be logged in the console. This can help catch errors early in the development process and make it easier to debug your code.




                </h5>
            </div>
            <div className='mt-5'>
                <h2 className='fw-bold'> 3. The difference between nodejs and express js.  </h2>
                <h5> <span className='text-danger'>Answer:   </span>
                    Difference between Node.js and Express.js:

                    <br />Node.js is a platform for building the i/o applications which are server-side event-driven and made using JavaScript.
                    Express. js is a framework based on Node.js which is used for building web-application using approaches and principles of Node.js event-driven architecture.

                    <table className='table table-bordered border-dark mt-3'>

                        <thead className='fs-2 text-danger'>
                            <tr>
                                <th scope="col">Feature	  </th>
                                <th scope="col"> Express.js     </th>
                                <th scope="col">Node.js</th>
                            </tr>
                        </thead>

                        <tbody className='fs-5'>
                            <tr>
                                <th scope="row">Usage	</th>
                                <td> It is used to build web-apps using approaches and principles of Node.js. </td>
                                <td> It is used to build server-side, input-output, event-driven apps. </td>

                            </tr>
                            <tr>
                                <th scope="row">Level of features </th>
                                <td>More features than Node.js. </td>
                                <td> Fewer features.</td>
                            </tr>
                            <tr>
                                <th scope="row">Building Block  </th>
                                <td>It is built on Node.js.	 </td>
                                <td> It is built on Google’s V8 engine.</td>
                            </tr>
                            <tr>
                                <th scope="row">Written in</th>
                                <td>	JavaScript	       </td>
                                <td>	   C, C++, JavaScript	       </td>
                            </tr>
                            <tr>
                                <th scope="row">Controllers	</th>
                                <td>	Controllers are provided.     </td>
                                <td>Controllers are not provided.     </td>
                            </tr>
                            <tr>
                                <th scope="row">Routing    	</th>
                                <td>	Routing is provided.             </td>
                                <td>Routing is not provided.   </td>
                            </tr>
                            <tr>
                                <th scope="row">Coding time   	</th>
                                <td>	It requires less coding time.	     </td>
                                <td> It requires more coding time.     </td>
                            </tr>



                        </tbody>
                    </table>


                </h5>
            </div>



            <div className='mt-5'>
                <h2 className='fw-bold'> 4. What is a custom hook, and why will you create a custom hook?  </h2>
                <h5> <span className='text-danger'>Answer:   </span>
                    In React, a custom hook is a function that uses other built-in hooks and allows you to extract and reuse logic in functional components. Custom hooks follow the naming convention of starting with the word "use" and can be shared across components, reducing code duplication and improving reusability.

                    You might create a custom hook to encapsulate some common logic or behavior that can be shared across different components. This can help to make your code more modular, reusable, and easier to maintain. For example, if you find yourself using a similar set of hooks and logic in multiple components, you could create a custom hook to abstract away that logic and make it easier to reuse in different parts of your application.





                </h5>
            </div>




        </div>
    );
};

export default Blog;