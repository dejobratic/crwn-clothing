export const shopAction = {
  GET_COLLECTIONS: "GET_COLLECTIONS",
}

export const getShopCollections = (collections) => ({
  type: shopAction.GET_COLLECTIONS,
  payload: collections,
})
