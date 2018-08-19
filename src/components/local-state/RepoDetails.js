import React from "react";

class RepoDetails extends React.Component {
  // state = {
  //   repo: {},
  // };

  // componentDidMount() {
  //   console.log(
  //     "sending request to githuh for repository " +
  //       this.props.match.params.repoName
  //   );

  //   fetch(
  //     `https://api.github.com/repos/vjrngn/${this.props.match.params.repoName}`
  //   )
  //     .then(response => response.json())
  //     .then(data => {
  //       console.log(
  //         "got response from github for repository " +
  //           this.props.match.params.repoName
  //       );

  //       console.log("here are the repo details", data);

  //       this.setState({
  //         repo: data,
  //       });
  //     });
  // }

  render() {
    return (
      <div>
        <h2>{this.props.repo.name}</h2>
        <p>{this.props.repo.description}</p>

        <div>
          <p># Forks: {this.props.repo.forks_count}</p>
          <p>Language: {this.props.repo.language}</p>
        </div>

        <div>
          You clone this repository using this link: {this.props.repo.clone_url}
        </div>
      </div>
    );
  }
}

export default RepoDetails;
