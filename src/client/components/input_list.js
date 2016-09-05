import React, { PropTypes } from 'react'
import _ from 'lodash'

const ENTER_KEY = 13;

class InputList extends React.Component {
  constructor(props){
    super(props)
  }

  static propTypes = {
    onChange: PropTypes.func,
    height: PropTypes.number,
    style: PropTypes.object
  }

  static defaultProps = {
    height: 26,
    style: {
      container: {
        base: {
          display: 'flex',
          flexDirection: 'row'
        },
        input: {
          width: '100%'
        },
        button: {
          width: 60
        }
      },
      input: {
        verticalAlign: 'top',
        width: '100%',
        height: 26,
        margin:0,
        WebkitBoxSizing: 'border-box',
        boxSizing: 'border-box',
        outline: 'none',
      },
      addButton: {
        //display: 'inline-block',
        borderRadius: '0 2px 2px 0',
        border: 0,
        height: 26,
        width: 60,
        cursor: 'pointer',
        backgroundColor: 'green',
        color: 'white',
        outline: 'none'
      },
      removeButton: {
        //display: 'inline-block',
        borderRadius: '0 2px 2px 0',
        border: 0,
        height: 26,
        width: 60,
        cursor: 'pointer',
        backgroundColor: 'red',
        color: 'white',
        outline: 'none'
      }
    }
  }

  state = {
    items: [],
    newItem: ''
  }

  componentDidUpdate(prevProps, prevState){
    if(!_.isEqual(this.state.items, prevState.items))
      this.props.onChange(this.state.items)
  }

  addItem =()=>{
    if(this.state.newItem) {
      this.setState({
        items: [...this.state.items, this.state.newItem],
        newItem: ''
      })
    }
  }

  removeItem =(i)=>{
    const { items } = this.state
    const list = [...items.slice(0, i), ...items.slice(i + 1)]
    this.setState({ items: list })
  }

  onKeyDown =(e)=>{
    if(e.keyCode === ENTER_KEY)
      this.setState({
        items: [...this.state.items, this.state.newItem],
        newItem: ''
      })
  }

  onInputChange =(e)=>{
    this.setState({newItem: e.target.value})
  }

  handleListEdit =(e, i)=>{
    const { items } = this.state
    const input = e.target.value
    const list = [...items.slice(0, i), input, ...items.slice(i + 1)]
    this.setState({ items: list })
  }

  render(){
    const { style } = this.props
    const { items, newItem } = this.state

    return(
      <div style={ style.base }>
        { items.map((item, i) =>
          <div style={ style.container.base } key={ i }>

            <div style={ style.container.input }>
              <input
                style={ Object.assign({}, style.input, { marginBottom: 3}) }
                type="text"
                value={ item }
                onChange={ (e) => this.handleListEdit(e, i) }/>
            </div>

            <div style={ style.container.button }>
              <button
                style={ style.removeButton }
                onClick={ ()=> this.removeItem(i) }>
                <i className="icon-trash" />
              </button>
            </div>
          </div>
        )}
        <div style={ style.container.base }>
          <div style={ style.container.input }>
            <input
              style={ style.input }
              type="text"
              value={ newItem }
              autoFocus={ true }
              onChange={ this.onInputChange }
              onKeyDown={ this.onKeyDown }/>
          </div>
          <div style={ style.container.button }>
            <button
              style={ style.addButton }
              onClick={ this.addItem }>
              <i className="icon-plus" />
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default InputList
