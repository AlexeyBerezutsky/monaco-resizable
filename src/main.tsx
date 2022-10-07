import React from 'react';
import ReactDOM from 'react-dom';
import { EditorWrapper } from './components/Editor';
import './userWorker';

ReactDOM.render(
	<React.StrictMode>
		<EditorWrapper />
	</React.StrictMode>,
	document.getElementById('root')
);
