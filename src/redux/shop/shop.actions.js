import ShopActionTypes from "./shop.types";

export const UpdateCollections = (collectionMap) => ({
    type:ShopActionTypes.UPDATE_COLLECTIONS,
    payload: collectionMap
})