import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getCharacters, getCharMoves } from '../api/sf'
import { disCharacters, fetchCharacters, fetchChar, fetchMoves } from '../actions'

class CharacterBio extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  componentDidMount () {
  }


  render() {
    console.log(this.props.character)
    const character = this.props.character
    console.log(this.props.moves)
    const moves = this.props.moves
    return (

      <div>
        <ul>
          {character.characterName && (
            <>
            <button onClick={() => this.props.func()}>X</button>
              <div >
                <p>{character.characterName}</p>
                <img src={character.gif} />
                <p>Origin: {character.origin}</p>
                <p>Height: {character.height}cm</p>
                <p>Weight: {character.weight}kg</p>
                <p>Likes: {character.likes}</p>
                <p>Dislikes: {character.dislikes}</p>
                <p>Fighting Style: {character.fightingStyle}</p>
              </div>
              <div className="container" className='bigTexts' className="text-center">
                <h3>Story</h3>
                <p>{character.story}</p>
                <h3>Personality</h3>
                <p>{character.personality}</p>
                <h3>Moves</h3>
                <ul>
                {moves.map(move => {
                  return (
                    <li key={move.moveId}>
                      <h4>{move.name} {move.input}</h4>
                    </li>
                  )
                })


                }
                </ul>

                <p></p>

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
  return { character: state.characterBio, moves: state.moves }
}
export default connect(mapStateToProps)(CharacterBio)