const login = (state = [], action) => {
  switch(action.type) {
    case 'LOGIN': 
      return [
        ...state,
        {
          id: action.id,
          user: action.user,
          loggedIn: false
        }
      ]
  }
}

export default login