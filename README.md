# React useEffect Infinite Loop Bug

This repository demonstrates a common error in React's `useEffect` hook: creating an infinite loop by modifying state within the effect's dependency array.  The `bug.js` file contains the erroneous code, while `bugSolution.js` provides the corrected implementation. 

## Problem
The provided `useEffect` attempts to increment the `count` state variable on every render.  Because the `setCount` function is called inside the effect, it causes a re-render, which triggers the effect again, creating an infinite loop. This will usually crash your application.

## Solution
The solution lies in understanding how `useEffect`'s dependency array works.  The dependencies array determines when the effect is executed.  By removing the dependency on `count`, the effect runs only once after the component mounts, and thus avoids the infinite loop.  Furthermore, the correct usage would include some sort of conditional statement to stop the execution after certain counts or after an API call.