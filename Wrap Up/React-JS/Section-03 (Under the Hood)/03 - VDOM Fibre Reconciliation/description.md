# What is "Virtual DOM"?

Virtual DOM is a Programming concept that is used to improve the performance and efficiency of updating the user interface. But,Before going to Understanding the concept of Virtual DOM, first of all we have to understand about what is "Real DOM". 

# What is Real DOM?

Browser Provide an API which is commonly known as "DOM API". With the help of this API, browser creates a tree like structure called "Document Object Model(DOM)". To be more precise, the DOM which is created by Browser called "Real DOM".

- Each element in the Document is represented as a Node in the DOM tree.

# How Virtual DOM works?

- Instead of directly manipulating the real DOM, frameworks like React introduce a virtual representation of the DOM.
- The Virtual DOM is a lightweight copy of the real DOM created and maintained by the framework like React.
- It's a JavaScript object that mimics the structure of the real DOM.

- When changes occur in the application, such as user interactions or data updates, the React first updates the Virtual DOM rather than the real DOM.
- The entire Virtual DOM is then re-rendered based on the changes.
- After re-rendering, React performs a process called "reconciliation" to identify the difference (diff) between the new Virtual DOM and the previous one.

# What is Reconciliation?

The algorithm React uses to differentiate one tree with another to determine which parts need to be changed, called Reconciliation.

- React determines the minimal set of changes needed to update the real DOM to match the new Virtual DOM.
- This set of changes is then applied to the real DOM, reducing the number of direct manipulations and improving overall performance.

# Benefits of Virtual DOM?
 
- Updating the real DOM can be a costly operation, especially when dealing with complex user interfaces.
- The Virtual DOM helps minimize the number of updates to the real DOM, making the process more efficient and improving the application's performance.

# What is Fibre?

Fibre is the heart code structure of React. "Fiber" refers to a set of internal algorithms and data structures introduced to the React core to improve the performance and responsiveness of React applications. The introduction of React Fiber was a significant update to the React library.

- React Fiber is a reimplementation of the core algorithm used by React to reconcile and render components.
- React Fiber introduces the concept of priorities for different types of updates. It allows React to prioritize and schedule updates based on their importance.
- Higher-priority updates, such as user interactions, can be processed with higher priority, ensuring a more responsive user experience.

To be more precise, React Fiber is an internal reimplementation of React's core reconciliation and rendering algorithm. It introduces a concurrency model for incremental rendering, enabling interruption and prioritization of tasks. This enhances responsiveness by breaking down work into smaller units, implementing priority scheduling, error boundaries, and improving developer tools, ultimately optimizing the user interface performance in React applications.
