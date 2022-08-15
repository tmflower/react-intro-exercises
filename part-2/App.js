const App = () => (
    <div>
        <Tweet username="u1" user="user1" date="08/15/2022" message="Message 1"/>
        <Tweet username="u2" user="user2" date="08/15/2022" message="Message 2"/>
        <Tweet username="u3" user="user3" date="08/15/2022" message="Message 3"/>
        <Tweet username="u4" user="user4" date="08/15/2022" message="Message 4"/>
    </div>
)

ReactDOM.render(<App/>, document.getElementById("root"))