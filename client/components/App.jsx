import React from 'react'
import request from 'superagent'
import { getCharacters, getChar } from '../api/sf'
import Characters from './Characters'
import CharacterBio from './CharacterBio'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
     characterList: true
    }
  }

  componentDidMount() {
    console.log('did mount')

  
  }

  charToggle = () => {
    this.setState({
      characterList: !this.state.characterList
    })
  }
  

  render() {
    return (
      <React.Fragment>
      {this.state.characterList &&
        <Characters func={this.charToggle}/>
      }
      {!this.state.characterList &&
        <CharacterBio func={this.charToggle}/>
      }
      </React.Fragment>
    )
  }
}

export default App
