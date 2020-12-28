import * as actionType from '../actions/types';

const initialState = {
  cards: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionType.ADD_CARD: {
      const { card } = payload;
      const cards = [...state.columns, card];

      return {
        ...state,
        cards,
      }
    }

    case actionType.REMOVE_CARD: {
      const { cards } = payload;

      return {
        ...state,
        cards,
      }
    }

    case actionType.SET_CARDS: {
      const { removeId } = payload;
      const cards = state.columns.filter(({id}) => id !== removeId)

      return {
        ...state,
        cards,
      }
    }

    default: {
      return state;
    }
  }
}

export default reducer;