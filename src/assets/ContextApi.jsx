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

import { forwardRef } from 'react';

const MyInput = forwardRef(function MyInput(props, ref) {
  const { label, ...otherProps } = props;
  return (
    <label>
      {label}
      <input {...otherProps} />
    </label>
  );
});


// ------------------------

import { forwardRef } from 'react';

const MyInput = forwardRef(function MyInput(props, ref) {
  const { label, ...otherProps } = props;
  return (
    <label>
      {label}
      <input {...otherProps} ref={ref} />
    </label>
  );
});

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
