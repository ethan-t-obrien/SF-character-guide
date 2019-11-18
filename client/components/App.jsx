import React from 'react'
import request from 'superagent'
import {getCharacters} from '../api/sf'

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
    return (
      <React.Fragment>
        <div>
          {console.log(characters)}
          <h1>React develophuehfhsvoment has begun!</h1>
          <ul>{characters.map(character => character.characterName)}</ul>
        </div>
      </React.Fragment>
    )
  }
}

export default App
