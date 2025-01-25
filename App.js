const heading = React.createElement("div", { className: 'main' }, [
    React.createElement("h1", { className: 'test' }, "hello world from reactCode"),
    React.createElement('div', { className: 'nav-bar' },
        React.createElement('ul', { className: 'ul-list' }, [
            React.createElement('li', { className: 'li-item' }, "Home"),
            React.createElement('li', { className: 'li-item' }, "Projects"),
            React.createElement('li', { className: 'li-item' }, "Contact us"),
            React.createElement('li', { className: 'li-item' }, "Abour Us")]
        ))
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading);
root.render(nav);
