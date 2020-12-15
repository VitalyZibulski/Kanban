import React, { useState } from 'react';
import { View, Panel } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import Desks from "../../panels/Desks/Desks";
import Columns from "../../panels/Columns/Columns";

const panel = {
	desks: 'desks',
	columns: 'columns'
}

const App = () => {
	const { desks, addDesk, removeDesk, setDesks } = useDesksState();
	const { columns, addColumn, removeColumn, setColumns } = useColumnsState();
	const { activePanel, activeDesk, goToColumns, goToDesks } = useAppState(desks);

	return (
		<View activePanel={activePanel} header={false}>
			<Panel id={panel.desks} separator={false}>
				<Desks
					onChangePanel={goToColumns}
					setDesks={setDesks}
					addDesk={addDesk}
					removeDesk={removeDesk}
					desks={desks}
				/>
			</Panel>
			<Panel id={panel.columns} separator={false} className="columns">
				{activeDesk && (
					<Columns
						desk={activeDesk}
						goBack={goToDesks}
						addColumn={addColumn}
						columns={columns}
						removeColumn={removeColumn}
						setColumns={setColumns}
					/>
				)}
			</Panel>
		</View>
	);
}

const useColumnsState = () => {
	const [columns, setColumns] = useState([]);
	const addColumn = (column) => setColumns([...columns, column]);
	const removeColumn = (removeId) => setColumns(columns.filter(({id}) => id !== removeId));

	return { columns, addColumn, removeColumn, setColumns }
}

const useDesksState = () => {
	const [desks, setDesks] = useState([]);
	const addDesk = (desk) => setDesks([...desks, desk]);
	const removeDesk = (removeId) => setDesks(desks.filter(({id}) => id !== removeId));

	return { desks, addDesk, removeDesk, setDesks };
}

const useAppState = (desks) => {
	const [activePanel, setActivePanel] = useState(panel.desks);
	const [activeDesk, setActiveDesk] = useState(null);
	const goToColumns = (deskId) => {
		setActiveDesk(desks.find(({id}) => id === deskId));
		setActivePanel(panel.columns);
	}

	const goToDesks = () => setActivePanel(panel.desks);

	return { activePanel, activeDesk, goToColumns, goToDesks }
}

export default App;

