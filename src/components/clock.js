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
      breakTimeMinsShort: 5,
      breakTimeMinsLong: 5
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
      if (!isNaN(Number(minutes))) {
        minutes = Number(minutes.slice(-2));

        this.setState({
          minutes,
          time: minutes * 60 + this.state.seconds
        });
      }
    }

    setSeconds(seconds) {
      if (!isNaN(Number(seconds))) {
        seconds = Number(seconds.slice(-2));
        seconds = seconds > 60 ? 59 : seconds

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

    setBreakTimeShort(minutes) {
      this.setState({breakTimeMinsShort: minutes});
      if (this.state.onBreak && !this.state.on && this.state.pomodoroCount % 3 !== 0) {
        this.setState({time: minutes * 60});
      }
    }

    setBreakTimeLong(minutes) {
      this.setState({breakTimeMinsLong: minutes});
      if (this.state.onBreak && !this.state.on && this.state.pomodoroCount % 3 === 0) {
        this.setState({time: minutes * 60});
      }
    }

    startBreak() {
      this.stopTimer();
      this.setState({
        on: false,
        onBreak: true,
        pomodoroCount: this.state.pomodoroCount + 1,
        time: (this.state.pomodoroCount + 1) % 3 === 0 ? this.state.breakTimeMinsLong * 60 : this.state.breakTimeMinsShort * 60
      })
    }

    endBreak() {
      this.restartTimer();
    }

    render() {
      const minutes = Math.floor(this.state.time / 60);
      const seconds = this.state.time % 60;

      if (this.state.on) {
        var startStopBtn = <button className="btn grey center--horizontal" onClick={this.stopTimer.bind(this)}>Stop</button>;
      } else {
        var startStopBtn = <button className="btn green center--horizontal" onClick={this.startTimer.bind(this)}>Start</button>;
      }

      if (this.state.onBreak) {
        var message = <p className="green--text">{this.state.pomodoroCount % 3 === 0 ? "Long Break!" : "Break!"}</p>
      } else {
        var message = <p className="yellow--text">Get Cracking!</p>
      }

      var endBreakBtn = this.state.onBreak ? <button className="btn red center--horizontal" onClick={this.endBreak.bind(this)}> End Break</button> : null;

      return (
        <div className="container center--text red--orange">
          <div className="center--vertical">
            <div>Tomatoes Smashed: {this.state.pomodoroCount}</div>
            {message}
            <div className="timer">
            <input className="timer__display" onChange={event => this.setMinutes(event.target.value)} value={`00${minutes}`.slice(-2)} disabled={this.state.on || this.state.onBreak}/>
            <span className="timer__colon">:</span>
            <input className="timer__display" onChange={event => this.setSeconds(event.target.value)} value={`00${seconds}`.slice(-2)} disabled={this.state.on || this.state.onBreak}/>
            </div>
            {startStopBtn}
            <button className="btn yellow center--horizontal" onClick={this.resetTimer.bind(this)}>Reset</button>
            {endBreakBtn}
            <div className="timer__break-options margin--two-rem-right">
              <p>Short Break (Mins)</p>
              <label className="timer__break-options__choices">
              <input type="radio" name="breakTimeShort" value="5" onClick={event => this.setBreakTimeShort(event.target.value)} defaultChecked/> 5</label>
              <label className="timer__break-options__choices">
              <input type="radio" name="breakTimeShort" value="10" onClick={event => this.setBreakTimeShort(event.target.value)}/> 10</label>
              <label className="timer__break-options__choices">
              <input type="radio" name="breakTimeShort" value="15" onClick={event => this.setBreakTimeShort(event.target.value)}/> 15</label>
              <label className="timer__break-options__choices">
              <input type="radio" name="breakTimeShort" value="20" onClick={event => this.setBreakTimeShort(event.target.value)}/> 20</label>
            </div>
            <div className="timer__break-options">
              <p>Long Break (Mins)</p>
              <label className="timer__break-options__choices">
              <input type="radio" name="breakTimeLong" value="5" onClick={event => this.setBreakTimeLong(event.target.value)} defaultChecked/> 5</label>
              <label className="timer__break-options__choices">
              <input type="radio" name="breakTimeLong" value="10" onClick={event => this.setBreakTimeLong(event.target.value)}/> 10</label>
              <label className="timer__break-options__choices">
              <input type="radio" name="breakTimeLong" value="15" onClick={event => this.setBreakTimeLong(event.target.value)}/> 15</label>
              <label className="timer__break-options__choices">
              <input type="radio" name="breakTimeLong" value="20" onClick={event => this.setBreakTimeLong(event.target.value)}/> 20</label>
            </div>
          </div>
        </div>
      )
    }
  }

  export default Clock;
