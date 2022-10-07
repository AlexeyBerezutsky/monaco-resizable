import React from 'react';
import ReactDOM from 'react-dom';
import './userWorker';
import { EditorWrapper } from "./components/EditorWrapper";

ReactDOM.render(
	<React.StrictMode>
		<EditorWrapper />
	</React.StrictMode>,
	document.getElementById('root')
);
