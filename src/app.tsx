import React from 'react';

interface Props {
	greeting?: string;
}

const App = ({ greeting }: Props) => (
	<div className="App">
		<h1>Hello {greeting}</h1>
		<h2>Start editing to see some magic happen!</h2>
	</div>
);

export default App;
