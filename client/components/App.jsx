import React from 'react'
import request from 'superagent'
import { getCharacters, getChar } from '../api/sf'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      characters: [],
      character: {}
    }
    this.getChar = this.getChar.bind(this)
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

  getChar(characterId) {
    getChar(characterId)
    .then(character => {
      this.setState({
        character: character
      })
    })
  }

  render() {
    const characters = this.state.characters
  
    return (
      <React.Fragment>

        <div class="float-left">
          {console.log(characters)}

          <h1>Street Fighter 3rd Strike</h1>
          <ul>{!this.state.character.characterName && characters.map(character => {
           return <li key={character.characterId}>{character.characterName} {character.characterId} <button onClick={() => this.getChar(character.characterId)}><img class='pP' src={character.pP}/></button></li>
          })}</ul>
          </div>
          
          <div>

            <ul>
          {this.state.character.characterName && (
            <>
            <div class="container">
            <p>{this.state.character.characterName}</p>
            <img src={this.state.character.gif} />
            <p>Origin: {this.state.character.origin}</p>
            <p>Height: {this.state.character.height}cm</p>
            <p>Weight: {this.state.character.weight}kg</p>
            <p>Likes: {this.state.character.likes}</p>
            <p>Dislikes: {this.state.character.dislikes}</p>
            <p>Fighting Style: {this.state.character.fightingStyle}</p>
            </div>
            <div  class ="container" class='bigTexts' class="text-center">
            <h3>Story</h3>
            <p>{this.state.character.story}</p>
            <h3>Personality</h3>
            <p>{this.state.character.personality}</p>
            <h3>Moves</h3>
            </div>
            </>
          )
          
          }
          </ul>
          </div>
          
        
      </React.Fragment>
    )
  }
}

export default App
