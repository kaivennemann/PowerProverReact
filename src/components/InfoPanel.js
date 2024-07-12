import React from 'react'
import '../styles/InfoPanel.css';

function InfoPanelHeader({ panelName }) {
    return (
        <div className='info-panel-header'>
            <p>{panelName}</p>
        </div>
    )
}

function InfoPanelContents() {
    return (
        <div className='info-panel-contents'>
            <p>Panel Contents</p>
        </div>
    )
}


function InfoPanel({ panelName }) {
    return (
        <div className="info-panel">
            <InfoPanelHeader panelName={panelName}/>
            <InfoPanelContents />
        </div>
    )
}

export default InfoPanel;
