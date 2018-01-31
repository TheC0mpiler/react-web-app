import { createSelector } from "reselect";

export default function books(state = {}, action = {}) {
	switch (action.type) {
		default:
			return state;
	}
}

/* SELCTORS */

export const booksSelector = state => state.books;

export const allBookSelector = createSelector(booksSelector, booksHash =>
	Object.values(booksHash)
);
