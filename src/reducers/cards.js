import * as actionType from '../actions/types';

const initialState = {
  list: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionType.ADD_CARD: {
      const { card } = payload;
      const list = [...state.list, card];

      return {
        ...state,
        list,
      }
    }

    case actionType.REMOVE_CARD: {
      const { cards } = payload;

      return {
        ...state,
        list: cards,
      }
    }

    case actionType.SET_CARDS: {
      const { removeId } = payload;
      const list = state.list.filter(({id}) => id !== removeId)

      return {
        ...state,
        list,
      }
    }

    default: {
      return state;
    }
  }
}

export default reducer;