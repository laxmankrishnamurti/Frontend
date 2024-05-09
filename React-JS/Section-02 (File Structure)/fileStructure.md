# File Structure in "REACT"?

We understand that at the end of the day "React" is just a Library and Browser only understand "JS". It must to be add the JavaScript file into HTML file, without doing this our code is not rendered and the Browser cannot able to make "DOM(Document object model)". 

May be, In different-different libraries has it's own method for adding JavaScript file into HTML Document. If we consider "vite" it add the JavaScript file into HTML Document initially. 

The most important point is that we should know and that is React come up with two "Implimentation". These are as follows :-
- React-DOM     ::  {For Web Development}
- React-Native  ::  {For Android Development}

And one more thing that we should know is :- All the exported function is called "Components".

# Four pillers of React?

These are the four pillers of React. These are:- 

- "index.html" file
- "main.jsx" file
- All Components
- All Dependencies

<pre>
    export default componentName
</pre>

# What is "Virtual DOM".

Browser creates DOM(Document object model), just like that React creates it's own DOM and that is called "Virtual DOM". May be the method of creating the "Virtual DOM" by React is differ from Browser but at the end of the day both are same.

# Case-Sensitivity in "React"?

Well, React is not a programming language so it's not to worry about it's case-sensitivity. But, for convenient the naming of all Components should start with Uppercase. And we can only return a single element at once.

# Work flow in React?

Generally most of the time we are working with "main.jsx" and our own Custom Components. We create new components and writing some code in it and import some files from one components to another components and finally we are going to link the components in "main.jsx" folder for rendering.
