import React, { useState } from 'react';
import { View, Panel } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import Desks from "./Desks";
import Columns from "./Columns";

const panel = {
	desks: 'desks',
	columns: 'columns'
}

const App = () => {
	const [activePanel, setActivePanel] = useState(panel.columns);

	return (
		<View activePanel={activePanel} header={false}>
			<Panel id={panel.desks} separator={false}>
				<Desks onChangePanel={() => setActivePanel(panel.columns)} />
			</Panel>
			<Panel id={panel.columns} separator={false} className="columns">
				<Columns />
			</Panel>
		</View>
	);
}

export default App;

