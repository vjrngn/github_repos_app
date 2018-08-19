// 1 - Routing
// 2 - State management

import React from "react";
import { Link } from "react-router-dom";

class RepoList extends React.Component {
  // state = {
  //   repos: [],
  // };

  // componentDidMount() {
  //   fetch("http://api.github.com/users/vjrngn/repos")
  //     .then(response => response.json())
  //     .then(response => {
  //       this.setState({
  //         repos: response,
  //       });
  //     });
  // }

  render() {
    if (this.props.listType == "list") {
      return (
        <ul className="list-group">
          {this.props.repos.map(repo => {
            return (
              <Link to={`/repos/${repo.name}`}>
                <li className="list-group-item">{repo.name}</li>
              </Link>
            );
          })}
        </ul>
      );
    }

    return (
      <div>
        <table className="table table-condensed table-bordered table-sm">
          <thead>
            <tr>
              <th>#</th>
              <th>Repo Name</th>
              <th>Repo URL</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {this.props.repos.map((repo, index) => {
              return (
                <tr key={repo.id}>
                  <td>{index + 1}</td>
                  <td>
                    <Link to={`/repos/${repo.name}`}>{repo.name}</Link>
                  </td>
                  <td>{repo.html_url}</td>
                  <td>{repo.description}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default RepoList;
