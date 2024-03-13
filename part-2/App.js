const App = () => (
	<div>
		<Tweet
			username="cshellen"
			name="Chris"
			date="03-13-24"
			message="I love coding!"
		/>
		<Tweet
			username="steph1215"
			name="Stephanie"
			date="03-26-24"
			message="I'm beautiful"
		/>
		<Tweet
			username="hardyboy"
			name="Hardy"
			date="03-15-24"
			message="Woof Woof Woof!"
		/>
	</div>
);

ReactDOM.render(<App />, document.getElementById("root"))
