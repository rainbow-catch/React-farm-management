import axios from 'axios';
import { db } from 'app/services/firebaseService/firebase'
export const GET_NOTES = '[NOTES APP] GET NOTES';
export const SET_SEARCH_TEXT = '[NOTES APP] SET SEARCH TEXT';
export const OPEN_NOTE_DIALOG = '[NOTES APP] OPEN NOTE DIALOG';
export const CLOSE_NOTE_DIALOG = '[NOTES APP] CLOSE NOTE DIALOG';
export const CREATE_NOTE = '[NOTES APP] CREATE NOTE';
export const UPDATE_NOTE = '[NOTES APP] UPDATE NOTE';
export const REMOVE_NOTE = '[NOTES APP] REMOVE NOTE';
export const TOGGLE_VARIATE_DESC_SIZE = '[NOTES APP] TOGGLE VARIATE DESC SIZE';

export function getNotes() {
    // const request = axios.get('/api/notes-app/notes');

    return (dispatch) =>
        db.ref("notes").on('value', (snapshot) => {
            const data = snapshot.val()
            console.log("response is ", data)
            dispatch({
                type: GET_NOTES,
                payload: data
            })
        })
}

export function setSearchText(event) {
    return {
        type: SET_SEARCH_TEXT,
        searchText: event.target.value
    }
}

export function resetSearchText() {
    return {
        type: SET_SEARCH_TEXT,
        searchText: ""
    }
}

export function toggleVariateDescSize() {
    return {
        type: TOGGLE_VARIATE_DESC_SIZE
    }
}

export function openNoteDialog(id) {
    console.log("OPEN_NOTE_DIALOG, ", id)
    return {
        type: OPEN_NOTE_DIALOG,
        payload: id
    }
}

export function closeNoteDialog() {
    return {
        type: CLOSE_NOTE_DIALOG
    }
}

export function createNote(note) {
    // const request = axios.post('/api/notes-app/create-note', {
    //     note
    // });

    return (dispatch) => {
        console.log('inside dispatch')
        var newPostKey = db.ref().child('notes').push().key;
        note.id = newPostKey;
        db.ref('notes/' + newPostKey).set(
            note,
            (error) => {
                if (error) {
                    console.log('failed error is', error)
                } else {
                    console.log('response is ', note)
                    dispatch({
                        type: CREATE_NOTE,
                        note: note
                    })
                }
            }
        );
    }
}

export function updateNote(note) {
    console.log(note)
    // const request = axios.post('/api/notes-app/update-note', {
    //     note
    // });

    return (dispatch) => {
        db.ref('notes/' + note.id).set(
            note,
            (error) => {
                if (error) {
                    console.log('failed error is', error)
                } else {
                    console.log('Updated note is ', note, ' and ', note.id)
                    dispatch({
                        type: UPDATE_NOTE,
                        note:note
                    })
                }
            }
        );
    }
}

export function removeNote(noteId) {
    // const request = axios.post('/api/notes-app/remove-note', {
    //     noteId
    // });
    return (dispatch) => {
        db.ref('notes/' + noteId).set(
            null,
            (error) => {
                if (error) {
                    console.log('failed error is', error)
                } else {
                    console.log('deleted id is ', noteId)
                    dispatch({
                        type: REMOVE_NOTE,
                        id: noteId
                    })
                }
            }
        );
    }
}

