import { firestore } from "firebase/firebase.utils"

class ShopService {
  async getAllCollections() {
    const collectionRef = firestore.collection("collections")
    const collectionSnapshot = await collectionRef.get()
    return convertToShopCollectionMap(collectionSnapshot)
  }
}

const convertToShopCollectionMap = (collectionsSnapshot) => {
  const convertToShopCollection = (doc) => {
    const { title, items } = doc.data()

    return {
      id: doc.id,
      title,
      items,
      routeName: encodeURI(title.toLowerCase()),
    }
  }

  const createShopCollectionMap = (collectionArray) => {
    return collectionArray.reduce((accumulator, currentCollection) => {
      const currentCollectionKey = currentCollection.title.toLowerCase()
      accumulator[currentCollectionKey] = currentCollection
      return accumulator
    }, {})
  }

  const convertedCollectionArray = collectionsSnapshot.docs.map((doc) => {
    return convertToShopCollection(doc)
  })

  return createShopCollectionMap(convertedCollectionArray)
}

export const shopService = new ShopService()
