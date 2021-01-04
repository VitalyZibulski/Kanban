import React, { Fragment, useEffect } from 'react';
import { View, Panel } from '@vkontakte/vkui';
import { useRoute } from 'react-router5';
import { useSelector, useDispatch } from 'react-redux';
import { changeRoute } from "../../actions";
import Desks from "../../../features/desks/panels/Desks/Desks";
import Columns from "../../../features/columns/panels/Columns/Columns";
import { pages } from "../../../router";
import { getActivePanel, getPopout } from "../../selectors";

const App = () => {
	const dispatch = useDispatch();
	const activePanel = useSelector(getActivePanel);
	const popout = useSelector(getPopout);
	const { router, route } = useRoute();

	useEffect(() => {
		router.subscribe((...args) => dispatch(changeRoute(...args)));

		dispatch(changeRoute({ route }));
	}, [dispatch]);

	if (!activePanel) {
		return null;
	}

	return (
				<Fragment>
					<View activePanel={activePanel} header={false} popout={popout}>
						<Panel id={pages.DESKS} separator={false}>
							<Desks />
						</Panel>
						<Panel id={pages.COLUMNS} separator={false} className="Columns">
							<Columns />
						</Panel>
					</View>
				</Fragment>
	);
};

export default App;

