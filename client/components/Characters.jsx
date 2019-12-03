import React from 'react'
import {connect} from 'react-redux'
import {link} from 'react-router-dom'
import {getCharacters} from '../api/sf'
import { disCharacters, fetchCharacters, fetchChar, fetchMoves } from '../actions'


class Characters extends React.Component {
constructor(props) {
  super(props)
  this.state = {
    characterList: true
  }
}


componentDidMount() {
  this.props.dispatch(fetchCharacters())
  
}

render() {
  console.log(this.props.characters)
    const characters = this.props.characters
  
  console.log('hi', characters.length)
  return (
    <>

        <h1>Street Fighter 3rd Strike</h1>
      <div className='float-left'>
        <ul>
          {this.state.characterList && (
          characters.map(character => {
              return (
                <li key={character.characterId}>
                  {character.characterName} {character.characterId}
                  <button onClick={() => { 
                    this.props.dispatch(fetchChar(character.characterId))
                    this.props.dispatch(fetchMoves(character.characterId))
                    this.props.func()
                    }}>
                    <img className='pP' src={character.pP} />
                  </button>
                </li>
              )
            })
            )}
        </ul>
      </div>
    </>
  )
}
}

const mapStateToProps = (state) => {
  return { characters: state.characters }
}
export default connect(mapStateToProps)(Characters)