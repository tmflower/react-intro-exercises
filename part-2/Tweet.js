const Tweet = ( props ) => {
    console.log(props);
    return (
    <div>
        <h3>Tweets</h3>
        <ul>
            <li>{props.username}</li>
            <li>{props.user}</li>
            <li>{props.date}</li>
            <li>{props.message}</li>
        </ul>
    </div>
)
}