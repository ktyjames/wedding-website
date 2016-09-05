import React, { PropTypes } from 'react'

// ** usage **
//
//  <Select
//    placeholderText="Some Text"
//    onSelect={ this.handleSortChange }>
//    <option value="name">Name</option>
//  </Select>


class Select extends React.Component {
  static propTypes = {
    placeholderText: PropTypes.string,
    onSelect: PropTypes.func.isRequired,
    height: PropTypes.number,
    width: PropTypes.number
  }

  static defaultProps = {
    placeholderText: 'Select an option...',
    height: 37,
    width: '100%'
  }

  handleOptionChange =(e)=>{
    const value = e.target.value

    if(value === '__placeholder')
      return this.props.onSelect(null)

    this.props.onSelect(value)
  }

  constructor(props){
    super(props)
  }

  render(){
    const { placeholderText, height, width } = this.props

    let style = {
      base: {
        height: height,
        width: width,
        paddingLeft: 5,
        fontSize: 14,
        textAlign: 'center',
        border: '1px solid #878686',
        borderRadius: 2
        //WebkitAppearance: 'none'
      }
    }

    return(
      <select
        style={ style.base }
        defaultValue={ '__placeholder' }
        onChange={ this.handleOptionChange }>
        <option value="__placeholder">
          { placeholderText }
        </option>
        { this.props.children }
      </select>
    )
  }
}

export default Select
