import React, { useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import DeskItem from "../DeskItem/DeskItem";
import {CardGrid} from "@vkontakte/vkui";
import { getDesks } from '../../actions';
import Context from "../App/context";

const DeskList = () => {
  const { setDesks, desks } = useContext(Context);

  useEffect(() => {
      // getDesks().then(desks => onLoadDesks(desks))
      getDesks().then(setDesks)
    }, []);

    if (!desks.length) {
      return null;
    }

    return (
        <CardGrid>
          {desks.map(({id, name}) => <DeskItem key={id} id={id}>{name}</DeskItem>)}
        </CardGrid>
    );
}

export default DeskList;
