import React from 'react';
import './App.css';
import UserGist from "./components/UserGist";
import RepoList from "./components/RepoList";
import $ from 'jquery' ;   // $  npm install jquery
import repoList from './datas/repoList.json';
import Galaxy from "./components/Galaxy";

function App() {

  return(
    <div>
      <Galaxy />
      <UserGist source="https://api.github.com/users/octocat/gists" />
      <RepoList prm={$.getJSON('https://api.github.com/search/repositories?q=javascript&sort=stars')} />
    </div>
  );
}

export default App;
