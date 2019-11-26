import React from 'react'
import request from 'superagent'
import { getCharacters, getChar } from '../api/sf'
import Characters from './Characters'
import CharacterBio from './CharacterBio'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
     
    }
    // this.getChar = this.getChar.bind(this)
  }

  componentDidMount() {
    console.log('did mount')

    // getCharacters()
    //   .then(characters => {
    //     this.setState({
    //       characters: characters
    //     })
    //   })

  }

  // getChar(characterId) {
  //   getChar(characterId)
  //   .then(character => {
  //     this.setState({
  //       character: character
  //     })
  //   })
  // }

  render() {
    // const characters = this.prop.characters
  
    return (
      <React.Fragment>

      <Characters />
          
       <CharacterBio />
          
        
      </React.Fragment>
    )
  }
}

export default App
