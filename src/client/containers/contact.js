import React from 'react'
import { connect } from 'react-redux'
import Nav from '../components/nav'

import { postMessage, updateEmailInput, updateMessageInput, updateNameInput } from '../actions/contact_actions'

class Contact extends React.Component {
  constructor(props){
    super(props)
  }

  handleNameUpdate =(e)=>{
    this.props.updateNameInput(e.target.value)
  }

  handleMessageUpdate =(e)=>{
    this.props.updateMessageInput(e.target.value)
  }

  handleEmailUpdate =(e)=>{
    this.props.updateEmailInput(e.target.value)
  }

  handlePostMessage =()=>{
    const { postMessage, nameInput, messageInput, emailInput } = this.props

    postMessage({
      name: nameInput,
      message: messageInput,
      email: emailInput
    })
  }

  render(){

    const { nameInput, messageInput, emailInput, postResponse } = this.props

    return(
      <div className="contact">
        <Nav location="contact"/>
        { postResponse ? postResponse : null }
        <input placeholder="Name" onChange={ this.handleNameUpdate } value={ nameInput }/>
        <input placeholder="Email" onChange={ this.handleEmailUpdate } value={ emailInput }/>
        <input placeholder="Message" onChange={ this.handleMessageUpdate } value={ messageInput }/>
        <button onClick={ this.handlePostMessage }>
          Submit
        </button>
      </div>
    )
  }
}


function mapStateToProps(state){
  return {
    nameInput: state.contact.nameInput,
    emailInput: state.contact.emailInput,
    messageInput: state.contact.messageInput,
    postResponse: state.contact.postResponse
  }
}

export default connect(mapStateToProps, {
  postMessage,
  updateNameInput,
  updateMessageInput,
  updateEmailInput
})(Contact)
