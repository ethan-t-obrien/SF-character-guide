import React from 'react'
import {connect} from 'react-redux'
import {link} from 'react-router-dom'
import {getCharacters} from '../api/sf'
import { disCharacters, fetchCharacters } from '../actions'

class Characters extends React.Component {
constructor(props) {
  super(props)
  this.state = {

  }
}


componentDidMount() {
  this.props.dispatch(fetchCharacters())
  
}

render() {
  console.log(this.props.characters)
    const characters = this.props.characters
  
  
  return (
    <>
      <div className='float-left'>

        <h1>Street Fighter 3rd Strike</h1>
        <ul>
          {!characters.characterName &&
            characters.map(character => {
              return (
                <li key={character.characterId}>
                  {character.characterName} {character.characterId}{' '}
                  <button onClick={() => this.getChar(character.characterId)}>
                    <img className='pP' src={character.pP} />
                  </button>
                </li>
              )
            })}
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