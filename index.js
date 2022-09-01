function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-danger navbar-dark py-3">
            <div className="container">
                <a href="#" className="navbar-brand">React</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navmenu">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a href="#learn" className="nav-link">Syntax</a>
                        </li>
                        <li className="nav-item">
                            <a href="#questions" className="nav-link">JSX</a>
                        </li>
                        <li className="nav-item">
                            <a href="#instructors" className="nav-link">ReactDOM</a>
                        </li>
                        <li className="nav-item">
                            <a href="#contact" className="nav-link">Components</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

function Heading() {
    return (
        <h1>Hey! What's this???</h1>
    )
}
function Text() {
    return (
        <p>I'm just writing components in JSX and styling with Bootstrap.</p>
    )
}

ReactDOM.render(
    <div>
        <Navbar />
        <Heading />
        <Text />
    </div>,
    document.getElementById('heading', 'text')
)

ReactDOM.render(<h2>Hello, React!</h2>, document.getElementById('root'))
ReactDOM.render(
    <ul><h2>A list!</h2><li>An item!</li><li>Another item!</li></ul>,
    document.getElementById('list')
)

// Below is an example of what the render() method does, but using only vanilla JavaScript
// It showcases the distinction between imperative (vanilla JS) and declarative (React/JSX) programming

const h1 = document.createElement('h1')
h1.textContent = 'This is an imperative way to program'
h1.className = 'header'
document.getElementById('root').append(h1)
