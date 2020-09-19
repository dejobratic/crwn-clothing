import { createSelector } from "reselect"

const selectUserAccount = (state) => state.userAccount

export const selectCurrentUser = createSelector(
  [selectUserAccount],
  (userAccount) => userAccount.currentUser
)
