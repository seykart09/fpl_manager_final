import React, { Component } from 'react'
import '../css/styles.css'


class HandleMangers extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             teamName: '',
             managerName:'',
             teamNickname:''
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

    handleSubmit = event => {
        const teamId = this.generateID()
        const formData = {"teamId":teamId,"teamName":this.state.teamName,"managerName":this.state.managerName,"teamNickname":this.state.teamNickname,"points":[]}
        let initData = JSON.parse(window.localStorage.getItem('data'))
        initData.push(formData)

        window.localStorage.setItem('data', JSON.stringify(initData))
    }

    generateID = () => {
        const min = 1
        const max = 10000000
        const rand = Math.floor(Math.random()*(max-min+1)+min)

        return rand
    }

    
    render() {
        const {teamName, managerName, teamNickname} = this.state
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    {/* <label></label> */}
                    <input 
                        type='text' 
                        placeholder="Team Name" 
                        value={teamName}
                        onChange={this.handleTeamNameChange}
                    />
                </div>
                <div>
                    {/* <label></label> */}
                    <input 
                        type='text' 
                        placeholder="Manager Name"
                        value={managerName}
                        onChange={this.handleManagerNameChange}    
                    />
                </div>
                <div>
                    {/* <label>Team Nickname</label> */}
                    <input 
                        type='text' 
                        placeholder="Team Nickname"
                        value={teamNickname}
                        onChange={this.handleNicknameChange}
                    />
                </div>
                <div>
                    <button type='submit' id="saveBtn">
                        Save
                    </button>
                </div>
            </form>
        )
    }
}

export default HandleMangers
