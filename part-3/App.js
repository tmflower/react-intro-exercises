const App = () => (
    <div>
        <Person name="Sadie" age="3" hobbies={['sleeping', 'eating', 'purring', 'shedding']}/>
        <Person name="Lucky" age="24" hobbies={['barking', 'eating', 'digging', 'bone chewing']}/>
        <Person name="Tiny" age="2" hobbies={['meowing', 'scratching', 'wrestling', 'birdwatching']}/>        
    </div>
)

ReactDOM.render(<App/>, document.getElementById("root"))