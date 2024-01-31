/*
State object for the page will contain an internal
collection and methods to add, remove, and update
the collection. The state object will also contain
any other data that needs to be shown in the UI.
*/

const getState = (options) => {
    return {
        collection: [],
        add: (item) => {
            // Add item to collection
        },
        remove: (item) => {
            // Remove item from collection
        },
        update: (item) => {
            // Update item in collection
        }
    }
}