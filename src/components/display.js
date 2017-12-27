import React, {Component} from "react";

class Clock extends Component {
  constructor(props) {
    super(props);

    this.state = {
      timerId: "",
      on: false,
      onBreak: false,
      pomodoroCount: 0,
      time: 0,
      minutes: 0,
      seconds: 0,
      breakTimeMins: 5
    }
  }

  startTimer() {
    const timerId = setInterval(() => {
        if (this.state.time <= 0 && !this.state.onBreak) {
          this.startBreak();
        } else if (this.state.time <= 0 && this.state.onBreak) {
          this.restartTimer();
        } else {
          this.setState({
            time: this.state.time -= 1
          });
        }
      }, 1000);
      this.setState({timerId, on: true});
    }

    stopTimer() {
      clearInterval(this.state.timerId);
      this.setState({on: false});
    }

    restartTimer() {
      this.stopTimer();
      this.setState({
        onBreak: false,
        time: this.state.minutes * 60 + this.state.seconds
      })
    }

    setMinutes(minutes) {
      minutes = Number(minutes);

      if (minutes) {
        this.setState({
          minutes,
          time: minutes * 60 + this.state.seconds
        });
      }
    }

    setSeconds(seconds) {
      if (seconds.length <= 2 && !isNaN(Number(seconds))) {
        seconds = Number(seconds);

        this.setState({
          seconds,
          time: this.state.minutes * 60 + seconds
        });
      }
    }

    resetTimer() {
      this.stopTimer();
      this.setState({
        timerId: "",
        on: false,
        onBreak: false,
        time: 0,
        minutes: 0,
        seconds: 0
      });
    }

    setBreakTime(minutes) {
      if (this.state.onBreak && !this.state.on) {
        this.setState({breakTimeMins: minutes, time: minutes * 60});
      } else {
        this.setState({breakTimeMins: minutes});
      }
    }

    startBreak() {
      this.stopTimer();
      this.setState({
        on: false,
        onBreak: true,
        pomodoroCount: this.state.pomodoroCount + 1,
        time: this.state.breakTimeMins * 60
      })
    }

    endBreak() {
      this.restartTimer();
    }

    render() {
      const minutes = Math.floor(this.state.time / 60);
      const seconds = this.state.time % 60;

      if (this.state.on) {
        var startStopBtn = <button onClick={this.stopTimer.bind(this)}>Stop</button>;
      } else {
        var startStopBtn = <button onClick={this.startTimer.bind(this)}>Start</button>;
      }

      var endBreakBtn = this.state.onBreak ? <button onClick={this.endBreak.bind(this)}> End Break</button> : null;

      return (
        <div>
          <div>Tomatoes Smashed: {this.state.pomodoroCount}</div>
          <div>{this.state.onBreak
              ? "Break!"
              : "Get Cracking!"}</div>
          <input onChange={event => this.setMinutes(event.target.value)} value={minutes} disabled={this.state.on || this.state.onBreak}/>
          :
          <input onChange={event => this.setSeconds(event.target.value)} value={seconds} disabled={this.state.on || this.state.onBreak}/> {startStopBtn}
          <button onClick={this.resetTimer.bind(this)}>Reset</button>
          {endBreakBtn}
          <label>5
            <input type="radio" name="breakTime" value="5" onClick={event => this.setBreakTime(event.target.value)} defaultChecked/></label>
          <label>10
            <input type="radio" name="breakTime" value="10" onClick={event => this.setBreakTime(event.target.value)}/></label>
          <label>15
            <input type="radio" name="breakTime" value="15" onClick={event => this.setBreakTime(event.target.value)}/></label>
          <label>20
            <input type="radio" name="breakTime" value="20" onClick={event => this.setBreakTime(event.target.value)}/></label>
        </div>
      )
    }
  }

  export default Clock;
