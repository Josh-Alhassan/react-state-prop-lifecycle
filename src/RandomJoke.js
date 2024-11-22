import { React, Component } from "react";

class RandomJoke extends Component {
  constructor(props) {
    super(props);
    this.state = {
      joke: null,
      loading: true,
    };
  }

  // Fetch a random joke when the component mounts
  componentDidMount() {
    this.fetchJoke();
  }

  // Log a message when the component is removed from the DOM
  componentWillUnmount() {
    console.log("RandomJoke component is being unmounted.");
  }

  // Fetch a random joke from the API
  fetchJoke = async () => {
    this.setState({ loading: true });
    try {
      const response = await fetch(
        "https://official-joke-api.appspot.com/random_joke"
      );
      const joke = await response.json();
      this.setState({ joke, loading: false });
    } catch (error) {
      console.error("Error fetching joke:", error);
      this.setState({ loading: false });
    }
  };

  render() {
    const { joke, loading } = this.state;

    return (
      <div
        style={{
          padding: "20px",
          maxWidth: "400px",
          margin: "0 auto",
          textAlign: "center",
          border: "1px solid #ccc",
          borderRadius: "8px",
        }}
      >
        <h1>Random Joke</h1>
        {loading ? (
          <p>Loading...</p>
        ) : joke ? (
          <div>
            <p>
              <strong>Setup:</strong> {joke.setup}
            </p>
            <p>
              <strong>Punchline:</strong> {joke.punchline}
            </p>
          </div>
        ) : (
          <p>Failed to load a joke. Try again!</p>
        )}
        <button
          onClick={this.fetchJoke}
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Fetch New Joke
        </button>
      </div>
    );
  }
}
export default RandomJoke;
