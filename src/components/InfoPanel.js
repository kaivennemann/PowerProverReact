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

function InfoPanelContents({ className }) {
    return (
        <div className='info-panel-contents'>
            <div className={className}>
                <p>Panel Contents</p>
            </div>
        </div>
    )
}


function InfoPanel({ className, panelName }) {
    return (
        <div className="info-panel">
            <div className={className}>
                <InfoPanelHeader panelName={panelName}/>
                <InfoPanelContents className={`${className}-contents`} />
            </div>
        </div>
    )
}

export default InfoPanel;
