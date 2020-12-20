import React, { Fragment, useEffect } from 'react';
import { View, Panel } from '@vkontakte/vkui';
import { useRoute } from 'react-router5';
import Desks from "../../panels/Desks/Desks";
import Columns from "../../panels/Columns/Columns";
import { useAppState } from "./hooks";
import { pages } from "../../router";

const App = () => {
	const { activePanel, popout, activeDesk, changeRoute } = useAppState();
	const { router, route } = useRoute();

	useEffect(() => {
		console.log(route);
		router.subscribe(changeRoute);

		changeRoute({ route });
	}, [router]);

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
							{ activeDesk && <Columns />}
						</Panel>
					</View>
				</Fragment>
	);
};

export default App;

