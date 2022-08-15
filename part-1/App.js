const App = () => (
    <div>
        <FirstComponent />
        <NamedComponent name="Sadie"/>
    </div>
)

ReactDOM.render(<App/>, document.getElementById("root"))