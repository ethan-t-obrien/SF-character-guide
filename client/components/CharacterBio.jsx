import React from 'react'
import { connect } from 'react-redux'
import { link } from 'react-router-dom'
import { getCharacters } from '../api/sf'
import { disCharacters, fetchCharacters, fetchChar } from '../actions'

class CharacterBio extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }



  render() {
    console.log(this.props.character)
    const character = this.props.character
    return (

      <div>

        <ul>
          {character.characterName && (
            <>
              <div class="container">
                <p>{character.characterName}</p>
                <img src={character.gif} />
                <p>Origin: {character.origin}</p>
                <p>Height: {character.height}cm</p>
                <p>Weight: {character.weight}kg</p>
                <p>Likes: {character.likes}</p>
                <p>Dislikes: {character.dislikes}</p>
                <p>Fighting Style: {character.fightingStyle}</p>
              </div>
              <div class="container" class='bigTexts' class="text-center">
                <h3>Story</h3>
                <p>{character.story}</p>
                <h3>Personality</h3>
                <p>{character.personality}</p>
                <h3>Moves</h3>
              </div>
            </>
          )

          }
       
  </ul>
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  console.log(state)
  return { character: state.characterBio }
}
export default connect(mapStateToProps)(CharacterBio)