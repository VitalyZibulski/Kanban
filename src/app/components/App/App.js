import React, { Fragment, useEffect, memo, lazy, Suspense } from 'react';
import { View, Panel, PanelSpinner } from '@vkontakte/vkui';
import { useRoute } from 'react-router5';
import { useSelector, useDispatch } from 'react-redux';
import { changeRoute } from "../../actions";
import { pages } from "../../../router";
import { getActivePanel, getPopout } from "../../selectors";

const Desks = lazy(() => import("../../../features/desks/panels/Desks/Desks"));
const Columns = lazy(() => import("../../../features/columns/panels/Columns/Columns"));
const Card = lazy(() => import("../../../features/card/panels/Card/Card"));

const App = () => {
	const dispatch = useDispatch();
	const activePanel = useSelector(getActivePanel);
	const popout = useSelector(getPopout);
	const { router, route } = useRoute();

	useEffect(() => {
		router.subscribe((...args) => dispatch(changeRoute(...args)));

		dispatch(changeRoute({ route }));
	}, [dispatch, route, router]);

	if (!activePanel) {
		return null;
	}

	return (
				<Fragment>
					<View activePanel={activePanel} header={false} popout={popout}>
						<Panel id={pages.DESKS} separator={false}>
							<Suspense fallback={<PanelSpinner />}>
								<Desks />
							</Suspense>
						</Panel>
						<Panel id={pages.COLUMNS} separator={false} className="Columns">
							<Suspense fallback={<PanelSpinner />}>
								<Columns />
							</Suspense>
						</Panel>
						<Panel id={pages.CARD} separator={false}>
							<Suspense fallback={<PanelSpinner />}>
								<Card />
							</Suspense>
						</Panel>
					</View>
				</Fragment>
	);
};

export default memo(App);

