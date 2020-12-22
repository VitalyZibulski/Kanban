import { useState, useEffect } from "react";
import { getDesks } from "../../actions";

export const useAppState = () =>  {
  const desksState = useDesksState();
  const columnsState = useColumnsState();
  const navState = useNavState();
  const cardsState = useCardsState();
  const popoutState = usePopoutSatate();

  return {
    ...desksState,
    ...columnsState,
    ...navState,
    ...cardsState,
    ...popoutState,
  }
}