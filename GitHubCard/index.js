/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
axios.get('https://api.github.com/users/tinadelli')
.then(res => {
  const myGit = res.data;

  const cards = document.querySelector('.cards')
  const gitInfo = cardMaker(myGit)
  cards.appendChild(gitInfo)
})

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [
`jonsolari`,
`Adhamkalou`,
`Haloking1212`,
`erostribe`,
`stellarLuminant`,
`Tarmstrong95`,
`Roman-Jordan`,
`DanicaKuciak`
];

followersArray.forEach(follow => {
  axios.get(`https://api.github.com/users/${follow}`)
  .then(res => {
    const card = cardMaker(res.data)
    const cards = document.querySelector('.cards')
    cards.appendChild(card)
  })
})
/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

const cards = document.querySelector('.cards');

function cardMaker(e){
const card = document.createElement('div');
const img = document.createElement('img');
const cardInfo = document.createElement('div');
const name = document.createElement('h3');
const userName = document.createElement('p');
const location = document.createElement('p');
const profile = document.createElement('p');
const profileLink = document.createElement('a');
const followers = document.createElement('p');
const following = document.createElement('p');
const bio = document.createElement('p');

card.classList.add('card')
cardInfo.classList.add('card-info')
name.classList.add('name')
userName.classList.add('username')

card.appendChild(img)
card.appendChild(cardInfo)
cardInfo.appendChild(name)
cardInfo.appendChild(userName)
cardInfo.appendChild(location)
cardInfo.appendChild(profile)
cardInfo.appendChild(profileLink)
cardInfo.appendChild(followers)
cardInfo.appendChild(following)
cardInfo.appendChild(bio)

img.src = e.avatar_url
location.textContent = e.location 
name.textContent = e.name
userName.textContent = e.login 
const theProfileLink = e.url
profileLink.innerHTML = theProfileLink.link(e.url)
followers.textContent = `Followers: ${e.followers}`
following.textContent = `Following: ${e.following}`
bio.textContent = e.bio 

return card
}



/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
