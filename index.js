$(document).ready(function (){

});
// const baseURL = 'https://api.github.com'

function searchRepositories(){
  let searchTerms = $('#searchTerms').val()
  let baseURL = 'https://api.github.com'
  $.get(`${baseURL}/search/repositories?q=${searchTerms}`).done(function(response) {
        // debugger
        displayRepostory(response.items)
    }).fail(displayError());
}

function displayRepostory(arr) {
  let divResults = $('#results')

  arr.forEach(function(el){
    //  debugger
    let ul = `
    <ul>
      <li>Repo Name: ${el.name}</li>
      <li>Description: ${el.description}</li>
      <li>Repo Link: <a href=${el.html_url}>Link</a></li>
      <h3>Owner Information</h3>
        <li>Login Name: ${el.owner.login}</li>
        <li>Owner's Profile Link: <a href=${el.owner.html_url}>Link</a></li>
        <li><img src=${el.owner.avatar_url} height="35" width="35" ></li>

      <li><a href='#' data-owner=${el.owner.login} data-repo=${el.name} onclick="showCommits(this)">Show Commits</a></li>
    </ul>
    ----------------------
    `
    divResults.append(ul);
  })

}

function showCommits(el){
  let baseURL = 'https://api.github.com'
  let ownerName = el.dataset.owner;
  let repoName = el.dataset.repo;
     //debugger
  $.get(`${baseURL}/repos/${ownerName}/${repoName}/commits`).done(function(response) {
    //debugger
    displayCommits(response) //no response.items for this one
  }).fail(displayError());
  // GET /repos/:owner/:repo/commits

  //https://api.github.com/manageyp.github.com/commits
}

function displayCommits(commits){
  let divDetails = $('#details')
      //debugger
  commits.forEach(function(commit){
    let ul = `
      <li>SHA: ${commit.sha}</li>
      <li>Author Login: ${commit.author.login}</li>
      <li>Author Avator: <img src=${commit.author.avatar_url} height="25" width="25"></li>
    `
    divDetails.append(ul);
  })
}

function displayError(){

  let divErrors = $("#errors")
  let ul = `
    <li>"I'm sorry, there's been an error. Please try again."</li>
  `
  divErrors.append(ul);
}
