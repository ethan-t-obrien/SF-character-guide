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
    // console.log(this.props.moves)
    // const moves = this.props.moves
    return (

      <div>
        <ul>
          {character.length && (
            <>
            <button onClick={() => this.props.func()}>X</button>
              <div >
          
                <p>{character[0].characterName}</p>
                <img src={character[0].gif} />
                <p>Origin: {character[0].origin}</p>
                <p>Height: {character[0].height}cm</p>
                <p>Weight: {character[0].weight}kg</p>
                <p>Likes: {character[0].likes}</p>
                <p>Dislikes: {character[0].dislikes}</p>
                <p>Fighting Style: {character[0].fightingStyle}</p>


              </div>
              <div className="container" className='bigTexts' className="text-center">
                <h3>Story</h3>
                <p>{character[0].story}</p>
                <h3>Personality</h3>
                <p>{character[0].personality}</p>
                <h3>Moves</h3>
                <ul>
                {character.map(move => {
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
  return { character: state.characterBio}
}
export default connect(mapStateToProps)(CharacterBio)