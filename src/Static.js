import React from 'react';

function Header() {
    return (
        <header>
            <nav className='nav'>
                <h1>Idris's React App</h1>
                <ul className='nav-items'>
                    <li>fuctions</li>
                    <li>data</li>
                    <li>objects</li>
                </ul>
            </nav>
        </header>
    )
}

function Body() {
    return (
        <div>
            <h2>This is a simple web page written in JSX.</h2>
            <p>
                Remember that JSX only accepts one parent element.
            </p>
            <p>
                So all of this content should be placed inside a single div.
            </p>
        </div>
    )
}

function Footer() {
    return (
        <div>
            <footer>
                <small> &copy; 2022 Idris Westbrook. All Rights Reserved.</small>
            </footer>
        </div>
    )
}

function Page() {
    return (
        <div>
            <Header />
            <Body />
            <Footer />
        </div>
    )
}

/* ReactDOM.render(<Page />, document.getElementById('root')) */

export default Page;