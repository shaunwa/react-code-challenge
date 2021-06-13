import './General.css';

import Grid from '../Grid';

function General({header,data,actions}) {
	
	return (
		<div className="App">
			<Grid data={data} actions={actions} header={header} />
		</div>
	);
}

export default General;
