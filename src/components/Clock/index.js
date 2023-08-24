import {Component} from 'react'
import './index.css'

class Clock extends Component {
  state = {date: new Date()}

  //   constructor(props) {
  //     super(props)
  //     this.state = {date: new Date()}
  //     console.log('constructor called')
  //   }

  componentDidMount() {
    console.log('component did mount called')
    this.timerID = setInterval(this.tick, 1000)
  }

  // this is used to stop api calls and clears intervals
  componentWillUnmount() {
    console.log('component will umount called')
    clearInterval(this.timerID)
  }

  tick = () => {
    this.setState({date: new Date()})
  }

  render() {
    const {date} = this.state
    console.log(date)
    console.log('render called', date)
    return (
      <div className="clock-container">
        <h1 className="heading">Clock</h1>
        <p className="time"> {date.toLocaleTimeString()}</p>
      </div>
    )
  }
}
export default Clock
