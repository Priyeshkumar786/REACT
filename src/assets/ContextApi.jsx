// propse drill it is used to get to inherit the parents data 
// it always inherit parent value not a grandparent value
// iit basically always inherits parents data not grandparents data

// Other functions are used in let UserContext = createContext()
// need to use Provider
// need to import this line "import { createContext } from "react";"



//props drilling

// hooks  are imp 
//useref no re render
//cant update is UI




//todo list get krna search krna
//form validation
//useeffect usestates use memo hooks usereducer propdrilling virtual dom
//to use useref we havr to firstly import


//bebl and es built helps to convert the react code in javascript
// usememo useref HOOKS 
// jsx rule
//ui componants
//function components
//useeffects takes the syntax ----it controlm the sideeffect of any function
// usememo used in every function and publically 
// props is must 










// -----------------------question------------------------

// import { forwardRef } from 'react';

// const MyInput = forwardRef(function MyInput(props, ref) {
//   const { label, ...otherProps } = props;
//   return (
//     <label>
//       {label}
//       <input {...otherProps} />
//     </label>
//   );
// });


// ------------------------

// import { forwardRef } from 'react';

// const MyInput = forwardRef(function MyInput(props, ref) {
//   const { label, ...otherProps } = props;
//   return (
//     <label>
//       {label}
//       <input {...otherProps} ref={ref} />
//     </label>
//   );
// });

// ======================================
function Form() {
  const ref = useRef(null);

  function handleClick() {
    ref.current.focus();
  }

  return (
    <form>
      <MyInput label="Enter your name:" ref={ref} />
      <button type="button" onClick={handleClick}>
        Edit
      </button>
    </form>
  );
}


// -----------------------------------------------

function Form() {
  const ref = useRef(null);

  function handleClick() {
    ref.current.focus();
  }

  return (
    <form>
      <MyInput label="Enter your name:" ref={ref} />
      <button type="button" onClick={handleClick}>
        Edit
      </button>
    </form>
  );
}


// ------------------------------------


import { ErrorBoundary } from 'react-error-boundary';
import { FetchData } from './FetchData';

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}

export function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <FetchData />
    </ErrorBoundary>
  );
}

// ======================================================

export function FetchData() {
  throw new Error('Error fetching data');
  return <p>This will never render</p>;
}
// ----------------------------------------

import { useState } from 'react';
import { Modal } from './modal';

export function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <h1>Modal Title</h1>
        <p>Modal Content</p>
      </Modal>
    </div>
  );
}


// ---------------------------theory question-----------------------------
// The primary purpose of props in React is to provide the following component functionality:

// Pass custom data to your React component.

// Trigger state changes.

// Use via this.props.reactProp inside component's render() method.

// For example, let us create an element with reactProp property,

//  <Element reactProp = "1" />


// ----------------------------------------------------------------------

// // Context lets us pass a value deep into the component tree
// // without explicitly threading it through every component.
// // Create a context for the current theme (with "light" as the default).
// const ThemeContext = React.createContext('light');

// class App extends React.Component {
//   render() {
//     // Use a Provider to pass the current theme to the tree below.
//     // Any component can read it, no matter how deep it is.
//     // In this example, we're passing "dark" as the current value.
//     return (
//       <ThemeContext.Provider value="dark">
//         <Toolbar />
//       </ThemeContext.Provider>
//     );
//   }
// }

// // A component in the middle doesn't have to
// // pass the theme down explicitly anymore.
// function Toolbar() {
//   return (
//     <div>
//       <ThemedButton />
//     </div>
//   );
// }

// class ThemedButton extends React.Component {
//   // Assign a contextType to read the current theme context.
//   // React will find the closest theme Provider above and use its value.
//   // In this example, the current theme is "dark".
//   static contextType = ThemeContext;
//   render() {
//     return <Button theme={this.context} />;
//   }
// }

// -------------------------------------------

// Hooks are a new addition to React 16.8. They let you use state and other React features without writing a class.

// With Hooks, you can extract stateful logic from a component so it can be tested independently and reused. Hooks allow you to reuse stateful logic without changing your component hierarchy. This 


// -------------------------------------------------

🧠 1. Introduction and Basics

What is React?

Who developed React?

What is the difference between React and JavaScript?

What are the advantages of using React?

What is a component in React?

What are functional components and class components?

What is JSX? Why is it used?

Can we write React without JSX?

⚙️ 2. Components and Props

What are props in React?

How do you pass data from parent to child component?

What is the difference between props and state?

Can props be changed inside a component?

What happens if you don’t pass props correctly?


// ------------------------------------------------


💾 3. State and Hooks

What is state in React?

How do you define state in a functional component?

What is the purpose of the useState hook?

What are hooks in React?

Name a few commonly used hooks.

What is the difference between useState and useEffect?

Can we use hooks inside loops or conditions?
// ------------------------------------------------------------



🔄 4. Lifecycle & useEffect

What is the purpose of the useEffect hook?

What are React lifecycle methods (for class components)?

When does useEffect run?

How do you stop useEffect from running continuously?
// -------------------------------------------------------


🧩 5. Events and Forms

How do you handle events in React?

What is the difference between HTML and React event handling?

How can you handle form submissions in React?

What is a controlled component?
// --------------------------------------------

// ------------------------------------------


🌐 6. Routing and Navigation

What is React Router?

How do you create navigation between pages?

What is <Link> in React Router?

What is the difference between <Link> and <a> tag?
// -------------------------------------------------------



🧭 7. Miscellaneous Questions

What is Virtual DOM?

How does React update the UI efficiently?

What are keys in React lists?

Why are keys important?

What is conditional rendering?

How can you render a list of items in React?
// -----------------------------------------------------------


🧱 8. Project / Practical Questions

Explain how your React project works.

What is the role of App.js and index.js?

How do you import and export components?

How do you style components in React?

How do you run a React project (commands)?

// -----------------react routing-------------------------

5. What is browser history in React Router?
In React Router, the browser history represents the user's navigation actions and URL changes within a web browser. React Router provides a history object that allows programmatically manipulating the browser's history that enable features like navigation, back and forward actions, and accessing location information.


import { useHistory } from 'react-router-dom';

function MyComponent() {
    const history = useHistory();

    function handleClick() {
        // Programmatically navigate to a new route
        history.push('/new-route');
    }
}

How does React work?
Entry
React creates a virtual DOM. When state changes in a component it firstly runs a "diffing" algorithm, which identifies what has changed in the virtual DOM. The second step is reconciliation, where it updates the DOM with the re


What is the use of refs?
Entry
Refs provide a way to access DOM nodes or React elements created in the render method. They should be avoided in most cases, however, they can be useful when we need direct access to the DOM element or an instance of a component.

There are a few good use cases for refs:

Managing focus, text selection, or media playback.

Triggering imperative animations.

Integrating with third-party DOM libraries.




What are props in React?
Entry
Props are inputs to a React component. They are single values or objects containing a set of values that are passed to React Components on creation using a naming convention similar to HTML-tag attributes. i.e, They are data passed down from a parent component to a child component.

The primary purpose of props in React is to provide the following component functionality:

Pass custom data to your React component.

Trigger state changes.

Use via this.props.reactProp inside component's render() method.

For example, let us create an element with reactProp property,



What is Context API in ReactJS?
Entry
Context provides a way to pass data through the component tree without having to pass props down manually at every level.

Context is designed to share data that can be considered “global” for a tree of React components, such as the current authenticated user, theme, or preferred language. Using context, we can avoid passing props through intermediate elements.

// -------------------

import { createContext } from "react";
const UserContext = createContext();
`export default UserContext;
// -------------------

// In the above code, we have created a context using createContext() method and exported it to be used in other components.
// To provide a context value to the component tree, we can use the Provider component that comes with the context object.
// Here is an example of how to use the UserContext.Provider to provide a value to the component tree:

import React from "react";
import UserContext from "./UserContext";
import ChildComponent from "./ChildComponent";
function ParentComponent() {  
  const user = { name: "John", age: 30 };
  return (
    <UserContext.Provider value={user}>
      <ChildComponent />
    </UserContext.Provider>
  );
}
export default ParentComponent;

// In the above code, we have wrapped the ChildComponent with UserContext.Provider and provided a value to it.
// Now, any component within the ChildComponent tree can access the user object using the useContext hook or the Consumer component.
import { createContext } from "react";

let UserContext = createContext()
export default UserContext
// In the above code, we have created a context using createContext() method and exported it to be used in other components.
// To provide a context value to the component tree, we can use the Provider component that comes with the context object.
// Here is an example of how to use the UserContext.Provider to provide a value to the component tree:
import React from "react";
import UserContext from "./UserContext";

st name = "Learner";
const element = (
    <h1>
        Hello,
        {name}.Welcome to GeeksforGeeks.
    </h1>
);
