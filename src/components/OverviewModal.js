import React, {useState} from 'react'
import Modal from 'react-modal'
import '../css/styles.css'

Modal.setAppElement("#root")
export const OverviewModal = props => {
    console.log(props)
    
    return (
        <div className="modalDiv">
            <Modal isOpen={true} onRequestClose={props.onCloseButtonClick} id="overviewModal" style={{
                content: {
                    textAlign:"center"
                }
                }}>
                <div>
                    <h2>Score Breakdown Weekly</h2>
                    {props.scores.length == 0 ? <p>No points allocated to this Manager</p> : props.scores.map(data => { return (<p key={data.gameWeek}> Gameweek {data.gameWeek} : {data.points} points</p>)})}
                </div>
                <div>
                    <button title="Close" onClick={props.onCloseButtonClick} id="closeModal"><i className="fa fa-close"></i>
                    </button>
                </div>
            </Modal> 
        </div>
    )
}

