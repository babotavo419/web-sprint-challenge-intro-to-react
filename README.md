# Intro to React Sprint Challenge

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This challenge allows you to practice the concepts and techniques learned over the past sprint and apply them in a concrete project. This sprint explored **introductory React**. During this sprint, you studied **React components and advanced styling**.

In your challenge you will demonstrate your mastery of these skills by creating **a Star Wars page** using data from an API.

This is an individual assessment. All work must be your own. All projects will be submitted to Codegrade for automated review.

You are not allowed to collaborate during the sprint challenge.

### Project Set Up

- [ ] Create a forked copy of this project
- [ ] Clone your OWN version of the repository (Not BloomTech's by mistake!)
- [ ] Install dependencies and use the "start" script to launch the app
- [ ] Implement the project on the main branch, committing changes regularly
- [ ] Push commits: `git push origin main`

## Project Instructions

### Introduction

In this challenge you will create a web page that presents a styled list of characters obtained from an API. Being able to render out data to a web page is a large part of what JavaScript developers do, this challenge assesses your ability to achieve such a task.

In meeting the minimum viable product (MVP) specifications listed below, your project might look somewhat similar to the solution examples below:

[Example](https://github.com/bloominstituteoftechnology/web-sprint-challenge-intro-to-react/blob/main/Assets/sample-screenshot.png)

[Another example](https://github.com/bloominstituteoftechnology/web-sprint-challenge-intro-to-react/blob/main/Assets/sample-screenshot2.png)

### Instructions

Your finished project must include all of the following requirements:

- [ ] Use the endpoint `[GET] https://swapi.dev/api/people/` (mocked in [msw](https://github.com/mswjs/msw)) to obtain characters.
- [ ] Set the list of characters into state.
- [ ] Render your characters to the DOM:

  1. Build a React component named 'Character' to render an individual character.
  1. Map over the list in state, and for each character render a Character to the page.
  1. Each rendered character must display its name in the DOM (e.g. "Luke Skywalker").
  1. The character's name can't be hard-coded into the HTML. This data must be obtained from the API.
  1. The components must be styled with **styled-components**.

  **Notes:**

- Data obtained from the endpoint using browser-run JavaScript is mocked with [msw](https://github.com/mswjs/msw). It is not necessary to understand all that MSW is doing, it is only necessary to know that when you use axios to send a request to `https://swapi.dev/api/people/` you will get the necessary data back.
- If you test the endpoint using HTTPie or Postman you will obtain different results, as msw won't intercept the request.
- You are welcome to create additional files but **do not move or rename existing files** or folders.
- Do not alter your `package.json` file except to install extra libraries.
- The `start` process can sometimes choke after adding new dependencies and may need to be restarted.
- In your solution, it is essential that you follow best practices and produce clean and professional results.
- Schedule time to review and polish your work, including spell-checking and grammar-checking.
- It is better to submit a challenge that meets MVP than one that attempts too much and does not.

### Stretch Goals

After finishing your required elements, you can push your work further. These goals may or may not be things you have learned in this module but they build on the material you just studied. Time allowing, stretch your limits and see if you can deliver on any of the following optional goals:

- [ ] Make the Character component more complex and break it into several subcomponents.
- [ ] Use the endpoint `[GET] https://swapi.dev/api/films/` (mocked in msw) to obtain movie information to render with the characters.
- [ ] Create a helper function in separate module to remove unneeded information from the API data, before putting it in state.
- [ ] Create transitions or animations with styled-components.
- [ ] Use Promise.all to resolve an array of promises.

## Submission format

- [ ] Submit via Codegrade by committing and pushing any new changes to the main branch.
- [ ] Check Codegrade for automated feedback.

## Stretch Interview Questions

1. What is React JS and what problems does it solve? Support your answer with concepts introduced in class and from your personal research on the web.
React JS is a JavaScript library for building user interfaces. It provides a declarative and efficient way to create reusable UI components that update efficiently in response to changes in data. React solves several problems in web development:

Component-based architecture: React promotes the concept of building applications as a composition of reusable components. Components encapsulate their own state and behavior, allowing for modular and maintainable code.

Virtual DOM: React uses a virtual representation of the DOM, which is a lightweight copy of the actual DOM. By comparing the virtual DOM with the real DOM, React determines the minimal set of updates needed to reflect changes in the application state. This approach improves performance by reducing unnecessary re-renders and DOM manipulations.

Unidirectional data flow: React enforces a one-way data flow, where data is passed down from parent components to child components via props. This simplifies data management and makes it easier to understand how data changes propagate through the application.

Efficient updates: React efficiently updates components by using a reconciliation algorithm that identifies the differences between the previous and current component states. Only the necessary updates are applied to the DOM, resulting in better performance.
2. Describe component state.
Component state refers to the internal data held by a specific component. It represents the values that can change over time and affect the component's behavior and rendering. State allows components to store and manage dynamic data, such as user input, API responses, or toggling UI elements. State is mutable and controlled by the component itself, and any changes to the state trigger a re-render of the component and its child components.

In React, state is typically initialized in the constructor of a class component or using the useState hook in a functional component. To update the state, you use the setState method in class components or the function returned by the useState hook in functional components. State updates are asynchronous and batched for better performance.
3. Describe props.
Props (short for "properties") are a way to pass data from a parent component to its child components. Props are read-only and provide a means for components to receive external data or configuration. They allow parent components to communicate with their children and control their behavior.

Props are passed as attributes to a component when it is used in JSX. The component can access the passed props through its props object. Props can be of any data type, including strings, numbers, booleans, objects, or even functions. They can also include callback functions that child components can invoke to communicate with their parent components.

Unlike state, props are immutable and cannot be modified directly by the component receiving them. They are meant to provide data and configuration to components from the outside, making components more reusable and modular
4. What are side effects, and how do you sync effects in a React component to changes of certain state or props?
Side effects in React components refer to operations or behavior that occur outside the scope of component rendering, such as making API calls, manipulating the DOM, subscribing to events, or setting up timers. Side effects often involve asynchronous operations or interactions with external systems.
