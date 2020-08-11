import React from 'react';
import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import  Chatfunc  from "./chat.js";
import "./styles.css";
/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/


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
export default function BasicExample() {
return (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Forms">Forms</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/chat">Chat</Link>
        </li>
      </ul>

      <hr />

      {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/Forms">
          <Forms />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/chat">
          <Chatfunc />
        </Route>
      </Switch>
    </div>
  </Router>
);
}

// You can think of these components as "pages"
// in your app.

function Home() {
  return (
    <div>
      <h2>Home</h2>
         This is Home
    </div>
  );
}

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
