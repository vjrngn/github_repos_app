import React, { Component } from "react";
import { Route } from "react-router-dom";
import RepoList from "./components/local-state/RepoList";
import RepoDetails from "./components/local-state/RepoDetails";

class App extends Component {
  state = {
    username: "vjrngn",
    repos: [],
  };

  componentDidMount() {
    fetch(`http://api.github.com/users/${this.state.username}/repos`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          repos: data || [],
        });
      });
  }

  _fetchRepos = () => {
    this.setState(
      {
        repos: [],
      },
      () => {
        fetch(`http://api.github.com/users/${this.state.username}/repos`)
          .then(response => response.json())
          .then(data => {
            this.setState({
              repos: data || [],
            });
          });
      }
    );
  };

  render() {
    return (
      <div className="row">
        <div
          style={{ background: "#e6e6e6", height: "100vh", overflow: "auto" }}
        >
          <RepoList listType="list" repos={this.state.repos} />
        </div>
        <div style={{ padding: 100 }}>
          <Route
            exact
            path="/repos/:repoName"
            component={({ match }) => {
              const repo = this.state.repos.find(
                repository => repository.name === match.params.repoName
              );

              return (
                <div className="col-sm-6">
                  <RepoDetails repo={repo} />
                </div>
              );
            }}
          />
        </div>
      </div>
    );
  }
}

export default App;
