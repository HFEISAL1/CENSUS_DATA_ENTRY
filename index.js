async function login (email, password) {
    const response = await zlFetch.post(loginEndpoint, {
      auth: {
        username: email,
        password: password
      },
      body: { /*...*/ }
    })
  }
  
 
  async function isLoggedIn () {
    const token = store.get('token')
    if (!token) return false
  }
  async function isLoggedIn () {
    // ...
    // Checks validity of token
    const response = await zlFetch.post(loginEndpoint, {
      auth: token,
      body: { course: 'learn-javascript' }
    })
  }
  async function isLoggedIn () {
    // ...
    // Saves token into localStorage again
    const { token } = response.body
    localStorage.setItem('token', token)
  
    return true
  }
  function isLoggedIn () {
    // ...
    const { token, user } = response.body
    localStorage.setItem('user', user)
  }
  function logout () {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
  } 
  function getinfo(){

    fetch(BASE_URL)
    .then(resp => resp.json())
    .then(data => {console.log(data);

        })
}
function submit(){
    console.log("hello")
}
