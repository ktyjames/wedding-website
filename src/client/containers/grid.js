import React from 'react'
import { connect } from 'react-redux'
import * as indexActions from '../actions/index_actions'
import { StaggeredMotion, Motion, spring } from 'react-motion'

class Grid extends React.Component {
  constructor(props){
    super(props)
  }
  
  handleAddButtonPress = () =>{
    this.props.addData()
  }
  
  handleDeleteButtonPress = (i) =>{
    this.props.deleteData(i)
  }

  render(){
    const { data } = this.props
    
    let style = {
      base: {
        display: 'flex',
        backgroundColor: 'blue'
      },
      sidebar: {
        base: {
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          backgroundColor: 'yellow',
          width: 150,
          height: '100%'
        }
      },
      grid: {
        base: {
          display: 'flex',
          flexFlow: 'row wrap',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: '100%',
          color: 'white'
        },
        item: {
          flexShrink: 0,
          width: 400,
          height: 200,
          margin: 10,
          border: '1px solid black',
          backgroundColor: 'green'
        }
      }
    }
    
    return(
      <div style={ style.base }>
        
        <div style={ style.sidebar.base }>
          <button onClick={ this.handleAddButtonPress }>Add</button>
        </div>

        <div style={ style.grid.base }>


          <StaggeredMotion
            defaultStyles={[{h: 0}, {h: 0}, {h: 0}]}
            styles={prevInterpolatedStyles => prevInterpolatedStyles.map((_, i) => {
              return i === 0
                ? {h: spring(100)}
                : {h: spring(prevInterpolatedStyles[i - 1].h)}
            })}>
            {interpolatingStyles =>
              <div>
                {interpolatingStyles.map((style, i) =>
                  <div key={i} style={{backgroundColor: 'green', border: '1px solid black', height: style.h}}>1</div>)
                }
              </div>
            }
          </StaggeredMotion>
          
          
        </div>
          {/* data.map((item, i) => <div key={ i } style={ style.grid.item }>{ item }</div>) */}
      
        
        <div style={ style.sidebar.base }>
          <button onClick={ ()=> this.handleDeleteButtonPress(3) }>Delete</button>
        </div>
      </div>

    )
  }
}

function mapStateToProps(state){
  return {
    data: state.index.data
  }
}

export default connect(mapStateToProps, {
  addData: indexActions.addData,
  deleteData: indexActions.deleteData
})(Grid)

