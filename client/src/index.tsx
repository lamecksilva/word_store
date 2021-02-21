import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@material-ui/core';
import ScopedCssBaseline from '@material-ui/core/ScopedCssBaseline';
import App from './App';
import reportWebVitals from './reportWebVitals';

import theme from './theme';

ReactDOM.render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<ScopedCssBaseline>
				<App />
			</ScopedCssBaseline>
		</ThemeProvider>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
