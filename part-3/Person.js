const Person = (props) => {
  let hobbies = props.hobbies.map(h => <li>{h}</li>);
  
	return (
		<div>
      <p>Learn some information about this person.
      </p>
      <ul>
        <li>
          Name: {props.name.length > 8 ? props.name.slice(0, 6) : props.name}
        </li>
        <li>
          Age: {props.age}
        </li>
      </ul>
			<h3>{props.age > 18 ? "please go vote!" : "you must be 18"}</h3>
			<h3>Hobbies:</h3>
      <ul>{hobbies}</ul>
		</div>
	)
}
