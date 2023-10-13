// Write your code here
import './index.css'
import {Component} from 'react'

const HeadImg = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const TailImg = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {tossResult: HeadImg, headsCount: 0, tailsCount: 0}

  onClickTossCoin = () => {
    const {headsCount, tailsCount} = this.state
    const toss = Math.floor(Math.random() * 2)
    let tossImage = ''
    let latestHeadCount = headsCount
    let latestTailsCount = tailsCount

    if (toss === 0) {
      tossImage = HeadImg
      latestHeadCount += 1
    } else {
      tossImage = TailImg
      latestTailsCount += 1
    }

    this.setState({
      tossResult: tossImage,
      headsCount: latestHeadCount,
      tailsCount: latestTailsCount,
    })
  }

  render() {
    const {tossResult, headsCount, tailsCount} = this.state
    return (
      <div className="main-container">
        <div className="app-container">
          <h1 className="main-heading">Coin Toss Game</h1>
          <p className="tag-line">Heads (or) Tails</p>
          <img src={tossResult} alt="toss result" className="image" />
          <button
            className="toss-coin-button"
            type="button"
            onClick={this.onClickTossCoin}
          >
            Toss Coin
          </button>
          <div className="down-container">
            <p className="TotalCoinsCount">Total:{headsCount + tailsCount}</p>
            <p className="HeadCount">Heads:{headsCount}</p>
            <p className="TailsCount">Tails:{tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
