import {async} from "@firebase/util";
import {db} from "../../firebase";
import {collection, doc, getDoc, getDocs, addDoc, deleteDoc} from "firebase/firestore";

const LOAD = 'card/LOAD';
const CREATE = 'card/CREATE';
const DELETE = 'card/DELETE';

const initialState = {
    list: []
};

export function loadWord(word_list) {
    return {type: LOAD, word_list};
};

export function createWord(words) {
    return {type: CREATE, words};
};

export function deleteWord(word_id) {
    console.log(word_id)
    return { type: DELETE, word_id };
};

export const loadWordFB = () => {
    return async function (dispatch) {
        const word_data = await getDocs(collection(db, "dictionary"));

        let word_list = [];

        word_data.forEach((val) => {
            word_list.push({
                id: val.id,
                ...val.data()
            });
        });

        console.log(word_list);
        dispatch(loadWord(word_list));
    };
};

export const createWordFB = (word) => {
    return async function (dispatch) {
        const docRef = await addDoc(collection(db, "dictionary"), word);

        dispatch(createWord(word));
    };
};

export const deleteWordFB = (word_id) => {
    return async function (dispatch, getState) {
      const docRef = doc(db, "dictionary", word_id);
      await deleteDoc(docRef);
  
       const _word_list = getState().card.list;
       const word_index = _word_list.findIndex((b) => {
         return b.id === word_id;
       });
  
       dispatch(deleteWord(word_index));
       dispatch(loadWordFB(word_index));
    };
};

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case "card/LOAD": {
                return {list: action.word_list} 
            }
        case "card/DELETE": {
            const new_word_list = state.list.filter(({ word_id }) => {
                return word_id !== action.id;
            });
            console.log(new_word_list)
            return { list: new_word_list };
        }
        default: return state;
    };
};