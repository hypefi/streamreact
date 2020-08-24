import React from 'react';
import './App.css';
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import "./styles.css";
import Header from './header.js';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./home.js"
import About from "./about.js";
import Users from "./users.js";
import Products from './products';


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Main />
      </Router>
    </div>
  );
}

export default App;


////////
/////

// This site has 3 pages, all of which are rendered
// making sure things like the back button and bookmarks
///
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// work properly.

function Main() {
  return (
    <main id="main">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/users" component={Users} />
        <Route path="/products" component={Products} />
      </Switch>
    </main>
  );
}

// You can think of these components as "pages"
// in your app.

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function Forms() {
                   const {
                     register,
                     control,
                     handleSubmit,
                     errors,
                     formState,
                   } = useForm();

                /*     const {
                       isDirty,
                       isSubmitting,
                       touched,
                       submitCount,
                     } = formState;*/

                   const onSubmit = async (data) => {
                     await sleep(10000);
                     
                       alert(JSON.stringify(data));
                     
                   };

                   console.log(errors);
                   console.log(formState);

                   return (
                     <>
                       <form onSubmit={handleSubmit(onSubmit)}>
                         <h1>Async Submit Validation</h1>
                         <label htmlFor="username">User Name</label>
                         <input
                           name="username"
                           placeholder="Bill"
                           ref={register}
                         />

                         <label htmlFor="lastName">Last Name</label>
                         <input
                           name="lastName"
                           placeholder="Luo"
                           ref={register}
                         />

                         <label htmlFor="email">Email</label>
                         <input
                           name="email"
                           placeholder="bluebill1049@hotmail.com"
                           type="text"
                           ref={register}
                         />

                         <div style={{ color: "red" }}>
                           {Object.keys(errors).length > 0 &&
                             "There are errors, check your console."}
                         </div>
                         <input type="submit" />
                       </form>
                       <DevTool control={control} /> {/* set up the dev tool */}
                     </>
                   );
                 }

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}
