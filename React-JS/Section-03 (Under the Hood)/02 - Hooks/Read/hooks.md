# Why we need Hooks?

This is the answer of the problem from where React was started to built. The problem is that States and the UI are not syncing together. State is a fancy name of Variables. So, the final answer is we need hooks for synching state and UI.

# List of Hooks.

There are lots of hooks are available in React that does a particular task. Below are the list of some important Hooks that we should know at this stage.

- useState
- useReducer
- useRef
- useEffect
- useInsertionEffect
- useLayoutEffect
- useCallback
- useMemo

# Uses of "useState" Hooks.

useState is used to display the updated value on UI. It gives two value in the form of array, these are :-

<pre>
    let [counter, setCount] = useState(pass any default value);
    
    Here, counter is a variable and setCount is a function that track the counter value and display
    it on the UI.
</pre>