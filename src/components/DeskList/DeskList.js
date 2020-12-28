import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import DeskItem from "../DeskItem/DeskItem";
import { CardGrid } from "@vkontakte/vkui";
import { fetchDesks } from "../../actions/actions";
import { getDesks } from "../../selectors/selectors";

const DeskList = () => {
  const dispatch = useDispatch();
  const desks = useSelector(getDesks());

  useEffect(() => {
      dispatch(fetchDesks());
  }, [dispatch]);


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
