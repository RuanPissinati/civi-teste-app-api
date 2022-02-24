export function actionSaveItemList(item) {
    return {
        type: "NEW_ITEM",
        item,
    }
}
export function actionMarkAsRead(index) {
    return {
        type: "READ_ITEM",
        index,
    }
}