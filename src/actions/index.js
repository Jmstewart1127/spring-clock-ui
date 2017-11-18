export const loginUser = text => {
  return {
    type: 'LOGIN',
    id: text,
    user: '',
    loggedIn: false
  }
}

export default loginUser