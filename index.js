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

// JSX accepts only one parent element, so place multiple elements inside a <div> and they become children elements of the <div>

/*
ReactDOM.render(
    <div>
        <Navbar />
        <Heading />
        <Text />
    </div>,
    document.getElementById('heading', 'text')
)
*/

// JSX
const page = (
    <div>
        <Navbar />
        <Heading />
        <Text />
    </div>
)
ReactDOM.render(
    page,
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

const h3 = document.createElement('h3')
h3.textContent = 'Hello Idris'
h3.className = 'title'
console.log(h3);

// <h3 class="title">Hello Idris</h3>

const element = <h3 className='title'>This is JSX</h3>
console.log(element);

// JSX returns a JavaScript object that describes the element for React to render

/* 
{$$typeof: Symbol(react.element), type: 'h3', key: null, ref: null, props: {…}, …}
$$typeof: Symbol(react.element)
key: null
props:
children: "This is JSX"
className: "title"
[[Prototype]]: Object
ref: null
type: "h3"
_owner: null
_store:
validated: false
[[Prototype]]: Object
_self: null
_source: null
[[Prototype]]: Object
*/