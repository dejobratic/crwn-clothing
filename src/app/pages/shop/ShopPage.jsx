import React, { useState, useEffect } from "react"

import CollectionPreview from "app/components/collection-preview/CollectionPreview"

import { shopService } from "app/services/ShopService"

const ShopPage = () => {
  const [collections, setCollections] = useState([])

  useEffect(() => {
    const getData = async () => {
      const collections = await shopService.getAllCollections()
      setCollections(collections)
    }

    getData()
  }, [])

  return (
    <div className="shop-page">
      {collections.map(({ id, ...collectionProps }) => (
        <CollectionPreview key={id} {...collectionProps} />
      ))}
    </div>
  )
}

export default ShopPage
