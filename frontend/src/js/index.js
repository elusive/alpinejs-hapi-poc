/*
State object for the page will contain an internal
collection and methods to add, remove, and update
the collection. The state object will also contain
any other data that needs to be shown in the UI.

https://alpinejs.dev
*/

const getState = () => {
    // fetch hlt records from api
    // return them as part of state object below
    // fill in methods needed for clicks to update and create
    return {
        records: [],
        add: (item) => {
            // Add item to collection
        },
        update: (item) => {
            // Update item in collection
            $("#tag").val();
        }
    }
}