$(document).ready(function (){




});

 this.timeout(500);
  setTimeout(done, 300);

function searchRepositories(){
  let searchTerms = $('#search-terms').val()
  let baseURL = 'https://api.github.com'
  $.get(`${baseURL}/search/repositories?q=${searchTerms}`).done(function(response) {
        // debugger
        displayRepostory(response.items)
    });
}

function displayRepostory(arr) {
  let divResults = $('#results')

  arr.forEach(function(el){
    // debugger
    let ul = `
    <ul>
      <li>Repo Name: ${el.name}</li>
      <li>Description: ${el.description}</li>
      <li>Repo Link: <a href=${el.html_url}>Link</a></li>
      <h3>Owner Information</h3>
        <li>Login Name: ${el.owner.login}</li>
        <li>Owner's Profile Link: <a href=${el.owner.html_url}>Link</a></li>
        <li><img src=${el.owner.avatar_url} height="35" width="35" ></li>
    </ul>
    `
    divResults.append(ul);
  })
//repository owner login, repository owner avatar as an image, and a link to the owner's profile page.

//epository name, description, and a link to the HTML URL.
  // $('#results').append('<h1>this is a test</h1>')
}
