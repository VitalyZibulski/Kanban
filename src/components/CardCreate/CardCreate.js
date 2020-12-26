import React from 'react';
import { useDispatch } from "react-redux";
import PropTypes from 'prop-types';
import CardCreateForm from "./CardCreateForm";
import { createCard } from "../../actions";
import { addCard } from "../../actions/actions";

const CardCreate = ({ columnId }) => {
    const dispatch = useDispatch();

    const createItem = (name) => {
        return createCard(name, columnId)
          .then((doc) => dispatch(addCard({id: doc.id, ...doc.data() })))
          .catch(console.error);
    };

    return (
      <CardCreateForm onSubmit={createItem} />
    );
}

CardCreate.propTypes = {
  columnId: PropTypes.string.isRequired,
}

export default CardCreate;
