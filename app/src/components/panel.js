import '../styles/Panel.css';


function Panel({ children }) {
    return (
        <div className="panel">
            {children}
        </div>
    )
}

export default Panel;
