import ReactDOM from 'react-dom'

function Subtitle() {
    return <h2>Componente Subtítulo</h2>;
}

function App() {
    return <Subtitle />;
}

ReactDOM.render(
    <App />,
    document.getElementById('root'),
);
