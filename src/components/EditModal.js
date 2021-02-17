import React, {useState, Component} from 'react'
import Modal from 'react-modal'
import '../css/styles.css'

class EditModal extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            teamName: this.props.data[0].teamName,
            managerName: this.props.data[0].managerName,
            teamNickname: this.props.data[0].teamNickname
        }
    }
    


    handleTeamNameChange = (event) => {
        this.setState({
            teamName: event.target.value
        })
    }

    handleManagerNameChange = (event) => {
        this.setState({
            managerName: event.target.value
        })
    }

    handleNicknameChange = (event) => {
        this.setState({
            teamNickname: event.target.value
        })
    }

    handleSubmit = (event) => {        
        let initData = JSON.parse(window.localStorage.getItem('data'))
        let id = this.props.data[0].teamId

        const index = initData.findIndex(data => id == data.teamId)

        initData[index].teamName = this.state.teamName
        initData[index].managerName = this.state.managerName
        initData[index].teamNickname = this.state.teamNickname

        window.localStorage.setItem('data', JSON.stringify(initData))
    }


    render(){
        const {teamName, managerName, teamNickname} = this.state
        return (
            <div className="modalDiv">
                <Modal isOpen={true} onRequestClose={this.props.onCloseButtonClick} id="editModal" style={{
                    content: {
                        textAlign:"center"
                    }
                    }}>
                    <div>
                        <h2>Edit</h2>
                        <form onSubmit={this.handleSubmit}>
                            <div>
                                <label>Team ID</label>
                                <input type='text' value={this.props.data[0].teamId} disabled/>
                            </div>
                            <div>
                                <label>Team Name</label>
                                <input 
                                    type='text' 
                                    value={teamName}
                                    onChange={this.handleTeamNameChange} 
                                />
                            </div>
                            <div>
                                <label>Manager Name</label>
                                <input 
                                    type='text'
                                    value={managerName}
                                    onChange={this.handleManagerNameChange}     
                                />
                            </div>
                            <div>
                                <label>Team Nickname</label>
                                <input 
                                    type='text' 
                                    value={teamNickname}
                                    onChange={this.handleNicknameChange}     
                                />
                            </div>
                            <div>
                                <button id="saveBtn">
                                    Save
                                </button>
                            </div>
                        </form>
                    </div>
                    <div>
                        <button title="Close" onClick={this.props.onCloseButtonClick} id="closeModal"><i className="fa fa-close"></i>
                        </button>
                    </div>
                </Modal> 
            </div>
        )
    }
    
}


export default EditModal
