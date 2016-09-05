import React, { PropTypes } from 'react'

// ** usage **
//
//  <Button
//    text={
//      <div style={{ whiteSpace:'nowrap'}}>
//        <i
//          className="icon-plus"
//          style={{ fontSize: 14 }}/> New Campaign
//      </div>}
//    backgroundColor={ 'green' }
//    textColor={ 'white' }
//    onClick={ this.handleNewCampaignClick }/>

class Button extends React.Component {
  static propTypes = {
    text: PropTypes.node,
    textColor: PropTypes.string,
    backgroundColor: PropTypes.string,
    width: PropTypes.number,
    border: PropTypes.string,
    isHoverable: PropTypes.bool,
    margin: PropTypes.string,
    onClick: PropTypes.func
  }

  static defaultProps = {
    text: 'Button',
    textColor: '#000000',
    backgroundColor: '#f9f9f9',
    border: 'none',
    isHoverable: false
  }

  state = {isHovered: false}

  constructor(props){
    super(props)
  }

  handleClick = () =>{
    this.props.onClick()
  }

  handleMouseEnter = () =>{
    this.setState({isHovered: true})
  }

  handleMouseLeave = () =>{
    this.setState({isHovered: false})
  }

  handleFocus = (e) =>{
    e.target.blur()
  }

  render(){
    const { text, textColor, backgroundColor, border, width, margin } = this.props

    let style = {
      padding: '10px 15px',
      width: width,
      borderRadius: 3,
      border: border,
      color: textColor,
      backgroundColor: backgroundColor,
      margin: margin,
      cursor: 'pointer',
      fontSize: 16,
      fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
      fontWeight: 200,
      transition: 'box-shadow 0.5s ease',
      boxShadow: this.state.isHovered ? '0px 2px 4px 0px rgba(0,0,0, 0.35)' : null
    }

    return(
      <button
        style={ style }
        onClick={ this.handleClick }
        onMouseEnter={ this.handleMouseEnter }
        onMouseLeave={ this.handleMouseLeave }
        onFocus={ this.handleFocus }>
        { text }
      </button>
    )
  }
}

export default Button
