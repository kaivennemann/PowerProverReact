import React from 'react'
import '../styles/InfoPanel.css';

function InfoPanelHeader({ className, panelName }) {
    return (
        <div className='info-panel-header'>
            <div className={className}>
                <p>{panelName}</p>
            </div>
        </div>
    )
}

function InfoPanelContents({ className, children }) {
    return (
        <div className='info-panel-contents'>
            <div className={className}>
                {children ? children : <p>Panel Contents</p>}
            </div>
        </div>
    )
}


function InfoPanel({ className, panelName, children }) {
    return (
        <div className="info-panel">
            <div className={className}>
                <InfoPanelHeader panelName={panelName}/>
                <InfoPanelContents className={`${className}-contents`} children={children} />
            </div>
        </div>
    )
}

export default InfoPanel;
