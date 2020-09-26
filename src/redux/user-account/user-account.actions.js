export const userAccountAction = {
  SET_CURRENT_USER: "SET_CURRENT_USER",
}

export const setCurrentUser = (currentUser) => ({
  type: userAccountAction.SET_CURRENT_USER,
  payload: currentUser,
})
