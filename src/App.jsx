// src/App.jsx
import Header from './components/Header';
import Section from './components/Section';

function App() {
	return (
		<div id="container">
			<Header />
			<Section title="What is react?">
				<p>
					React is a JavaScript library for building user interfaces. It allows developers to create reusable UI components and efficiently update the user interface when data changes. React uses a declarative approach, where you describe what you want the UI to look like, and React takes care of updating it.
				</p>
			</Section>

			<Section title="Benefits of react">
				<ul>
					<li>Component-based architecture: Build modular and reusable UI components.</li>
					<li>Virtual DOM: Efficiently updates only the necessary parts of the UI.</li>
					<li>Declarative programming: Describe the desired UI state, and React handles the updates.</li>
					<li>Large community and ecosystem: Extensive resources, libraries, and support available.</li>
					<li>Improved performance: React's efficient rendering and update mechanisms lead to faster web applications.</li>
				</ul>
			</Section>
		</div>
	);
}

export default App;
