import React from 'react'
import request from 'superagent'
import { getCharacters } from '../api/sf'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      characters: []
    }
  }

  componentDidMount() {
    console.log('did mount')

    getCharacters()
      .then(characters => {
        this.setState({
          characters: characters
        })
      })

  }



  render() {
    const characters = this.state.characters
    const img = this.state.characters.pP
    return (
      <React.Fragment>
        <div>
          {console.log(characters)}

          <h1>React develophuehfhsvoment has begun!</h1>
          <ul>{characters.map(character => {
           return <li key={character.characterId}>{character.characterName} {character.characterId} <img class='pP' src={character.pP}/></li>
          })}</ul>
           {/* <img src="../../server/public/sfImages/akuma-hex.jpg"/> */}
        </div>
      </React.Fragment>
    )
  }
}

export default App
