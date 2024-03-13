const Tweet = (props) => (
    <div>
        <ul>
            <li>username: { props.username }</li>
            <li>name: { props.name }</li>
            <li>date: { props.date }</li>
            <li>message: { props.message }</li>
        </ul>
    </div>
)