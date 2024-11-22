# react-state-prop-lifecycle

Created with CodeSandbox

## Exercise 1: Counter with State

Create a component named Counter that:

- Initializes a count state with a value of 0.

- Displays the current count.

- Provides buttons to increment, decrement, and reset the count.

## Exercise 2: Passing Props

1. Create a `UserCard` component that:

- Accepts `name`, `age`, and `email` as props.
- Displays the user details in a styled card format.

2. In a parent component (`UserList`):

- Create an array of user objects (e.g., `{ name, age, email }`).

- Render multiple UserCard components by passing data to them as props.

## Exercise 3: Lifecycle and API Call

1. Create a class component named RandomJoke that:

- Fetches a random joke from an API (e.g., Official Joke API) when the component is mounted.
- Displays the joke (both the setup and punchline).
- Includes a button to fetch a new joke by triggering an update.

2. Add a componentWillUnmount method to log a message when the component is removed from the DOM.
