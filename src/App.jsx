// App.jsx
import Header from './components/Header';
import Section from './components/Section';
import HelpfulResource from './components/HelpfulResource';
import AboutMe from './components/AboutMe';

function App() {
	return (
		<div className="app">
			<Header /> 
			<Section title="What is React?">
				<p>
					React is a popular JavaScript library for building user interfaces. It allows developers to create reusable UI components
and efficiently manage the state of their 
applications. React has a declarative approach and virtual DOM that make it easier to build complex and interactive web applications.
				</p>
			</Section>
			<Section title="Benefits of React">
				<ul>
					<li>Component-Based Architecture: React promotes building applications with reusable components, making code more organized, maintainable, and scalable.</li>
					<li>Virtual DOM: Reacts virtual DOM efficiently updates only the necessary parts of the actual DOM, leading to improved performance.</li>
					<li>Declarative Syntax: Reacts declarative style makes it easier to reason about the UI and how it changes in response to data updates.</li>
					<li>Large Community and Ecosystem: React has a vast community and a rich ecosystem of libraries and tools, providing extensive support and resources.</li>
					<li>Flexibility: React can be used for building web applications, mobile apps (with React Native), and even server-side rendering (with Next.js or similar frameworks).</li>
				</ul>
			</Section>
			<Section title="Helpful Resources">
				<HelpfulResource 
					link="https://reactjs.org/tutorial/tutorial.html" 
					label="Official React Tutorial" 
				/>
				<HelpfulResource 
					link="https://www.youtube.com/watch?v=LDB4uaJ87e0" 
					label="React Crash Course for Beginners" 
				/>
				<HelpfulResource 
				link="https://www.w3schools.com/REACT/DEFAULT.ASP" 
				label="W3Schools React Tutorial" 
				/>
			</Section>
			<AboutMe />
		</div>
	);
}

export default App;