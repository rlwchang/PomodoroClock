webpackJsonp([1],{

/***/ 15:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(8);

var _reactDom2 = _interopRequireDefault(_reactDom);

__webpack_require__(27);

__webpack_require__(28);

var _clock = __webpack_require__(29);

var _clock2 = _interopRequireDefault(_clock);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(_clock2.default, null)
      );
    }
  }]);

  return App;
}(_react.Component);

_reactDom2.default.render(_react2.default.createElement(App, null), document.querySelector("#app"));

/***/ }),

/***/ 27:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 28:
/***/ (function(module, exports) {

throw new Error("Module build failed: ModuleBuildError: Module build failed: \r\n  @mixin at#{$size}{\r\n        ^\r\n      Invalid CSS after \"  @mixin at\": expected \"{\", was \"#{$size}{\"\r\n      in C:\\Users\\Chang\\Desktop\\Projects\\PomodoroClock\\src\\styles\\base\\_mixins.scss (line 8, column 10)\n    at runLoaders (C:\\Users\\Chang\\Desktop\\Projects\\PomodoroClock\\node_modules\\webpack\\lib\\NormalModule.js:195:19)\n    at C:\\Users\\Chang\\Desktop\\Projects\\PomodoroClock\\node_modules\\loader-runner\\lib\\LoaderRunner.js:364:11\n    at C:\\Users\\Chang\\Desktop\\Projects\\PomodoroClock\\node_modules\\loader-runner\\lib\\LoaderRunner.js:230:18\n    at context.callback (C:\\Users\\Chang\\Desktop\\Projects\\PomodoroClock\\node_modules\\loader-runner\\lib\\LoaderRunner.js:111:13)\n    at Object.asyncSassJobQueue.push [as callback] (C:\\Users\\Chang\\Desktop\\Projects\\PomodoroClock\\node_modules\\sass-loader\\lib\\loader.js:55:13)\n    at Object.<anonymous> (C:\\Users\\Chang\\Desktop\\Projects\\PomodoroClock\\node_modules\\async\\dist\\async.js:2257:31)\n    at Object.callback (C:\\Users\\Chang\\Desktop\\Projects\\PomodoroClock\\node_modules\\async\\dist\\async.js:958:16)\n    at options.error (C:\\Users\\Chang\\Desktop\\Projects\\PomodoroClock\\node_modules\\node-sass\\lib\\index.js:294:32)");

/***/ }),

/***/ 29:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Clock = function (_Component) {
  _inherits(Clock, _Component);

  function Clock(props) {
    _classCallCheck(this, Clock);

    var _this = _possibleConstructorReturn(this, (Clock.__proto__ || Object.getPrototypeOf(Clock)).call(this, props));

    _this.state = {
      timerId: "",
      on: false,
      onBreak: false,
      pomodoroCount: 0,
      time: 0,
      minutes: 0,
      seconds: 0,
      breakTimeMinsShort: 5,
      breakTimeMinsLong: 5
    };
    return _this;
  }

  _createClass(Clock, [{
    key: "startTimer",
    value: function startTimer() {
      var _this2 = this;

      var timerId = setInterval(function () {
        if (_this2.state.time <= 0 && !_this2.state.onBreak) {
          _this2.startBreak();
        } else if (_this2.state.time <= 0 && _this2.state.onBreak) {
          _this2.restartTimer();
        } else {
          _this2.setState({
            time: _this2.state.time -= 1
          });
        }
      }, 1000);
      this.setState({ timerId: timerId, on: true });
    }
  }, {
    key: "stopTimer",
    value: function stopTimer() {
      clearInterval(this.state.timerId);
      this.setState({ on: false });
    }
  }, {
    key: "restartTimer",
    value: function restartTimer() {
      this.stopTimer();
      this.setState({
        onBreak: false,
        time: this.state.minutes * 60 + this.state.seconds
      });
    }
  }, {
    key: "setMinutes",
    value: function setMinutes(minutes) {
      if (!isNaN(Number(minutes))) {
        minutes = Number(minutes.slice(-2));

        this.setState({
          minutes: minutes,
          time: minutes * 60 + this.state.seconds
        });
      }
    }
  }, {
    key: "setSeconds",
    value: function setSeconds(seconds) {
      if (!isNaN(Number(seconds))) {
        seconds = Number(seconds.slice(-2));
        seconds = seconds > 60 ? 59 : seconds;

        this.setState({
          seconds: seconds,
          time: this.state.minutes * 60 + seconds
        });
      }
    }
  }, {
    key: "resetTimer",
    value: function resetTimer() {
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
  }, {
    key: "setBreakTime",
    value: function setBreakTime(minutes) {
      if (this.state.onBreak && !this.state.on) {
        this.setState({ breakTimeMins: minutes, time: minutes * 60 });
      } else {
        this.setState({ breakTimeMins: minutes });
      }
    }
  }, {
    key: "setBreakTimeShort",
    value: function setBreakTimeShort(minutes) {
      this.setState({ breakTimeMinsShort: minutes });
      if (this.state.onBreak && !this.state.on && this.state.pomodoroCount % 3 !== 0) {
        this.setState({ time: minutes * 60 });
      }
    }
  }, {
    key: "setBreakTimeLong",
    value: function setBreakTimeLong(minutes) {
      this.setState({ breakTimeMinsLong: minutes });
      if (this.state.onBreak && !this.state.on && this.state.pomodoroCount % 3 === 0) {
        this.setState({ time: minutes * 60 });
      }
    }
  }, {
    key: "startBreak",
    value: function startBreak() {
      this.stopTimer();
      this.setState({
        on: false,
        onBreak: true,
        pomodoroCount: this.state.pomodoroCount + 1,
        time: (this.state.pomodoroCount + 1) % 3 === 0 ? this.state.breakTimeMinsLong * 60 : this.state.breakTimeMinsShort * 60
      });
    }
  }, {
    key: "endBreak",
    value: function endBreak() {
      this.restartTimer();
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var minutes = Math.floor(this.state.time / 60);
      var seconds = this.state.time % 60;

      if (this.state.on) {
        var startStopBtn = _react2.default.createElement(
          "button",
          { className: "btn grey center--horizontal", onClick: this.stopTimer.bind(this) },
          "Stop"
        );
      } else {
        var startStopBtn = _react2.default.createElement(
          "button",
          { className: "btn green center--horizontal", onClick: this.startTimer.bind(this) },
          "Start"
        );
      }

      if (this.state.onBreak) {
        var message = _react2.default.createElement(
          "p",
          { className: "green--text" },
          this.state.pomodoroCount % 3 === 0 ? "Long Break!" : "Break!"
        );
      } else {
        var message = _react2.default.createElement(
          "p",
          { className: "yellow--text" },
          "Get Cracking!"
        );
      }

      var endBreakBtn = this.state.onBreak ? _react2.default.createElement(
        "button",
        { className: "btn red center--horizontal", onClick: this.endBreak.bind(this) },
        " End Break"
      ) : null;

      return _react2.default.createElement(
        "div",
        { className: "container center--text red--orange" },
        _react2.default.createElement(
          "div",
          { className: "center--vertical" },
          _react2.default.createElement(
            "div",
            null,
            "Tomatoes Smashed: ",
            this.state.pomodoroCount
          ),
          message,
          _react2.default.createElement(
            "div",
            { className: "timer" },
            _react2.default.createElement("input", { className: "timer__display", onChange: function onChange(event) {
                return _this3.setMinutes(event.target.value);
              }, value: ("00" + minutes).slice(-2), disabled: this.state.on || this.state.onBreak }),
            _react2.default.createElement(
              "span",
              { className: "timer__colon" },
              ":"
            ),
            _react2.default.createElement("input", { className: "timer__display", onChange: function onChange(event) {
                return _this3.setSeconds(event.target.value);
              }, value: ("00" + seconds).slice(-2), disabled: this.state.on || this.state.onBreak })
          ),
          startStopBtn,
          _react2.default.createElement(
            "button",
            { className: "btn yellow center--horizontal", onClick: this.resetTimer.bind(this) },
            "Reset"
          ),
          endBreakBtn,
          _react2.default.createElement(
            "div",
            { className: "timer__break-options margin--two-rem-right" },
            _react2.default.createElement(
              "p",
              null,
              "Short Break (Mins)"
            ),
            _react2.default.createElement(
              "label",
              { className: "timer__break-options__choices" },
              _react2.default.createElement("input", { type: "radio", name: "breakTimeShort", value: "5", onClick: function onClick(event) {
                  return _this3.setBreakTimeShort(event.target.value);
                }, defaultChecked: true }),
              " 5"
            ),
            _react2.default.createElement(
              "label",
              { className: "timer__break-options__choices" },
              _react2.default.createElement("input", { type: "radio", name: "breakTimeShort", value: "10", onClick: function onClick(event) {
                  return _this3.setBreakTimeShort(event.target.value);
                } }),
              " 10"
            ),
            _react2.default.createElement(
              "label",
              { className: "timer__break-options__choices" },
              _react2.default.createElement("input", { type: "radio", name: "breakTimeShort", value: "15", onClick: function onClick(event) {
                  return _this3.setBreakTimeShort(event.target.value);
                } }),
              " 15"
            ),
            _react2.default.createElement(
              "label",
              { className: "timer__break-options__choices" },
              _react2.default.createElement("input", { type: "radio", name: "breakTimeShort", value: "20", onClick: function onClick(event) {
                  return _this3.setBreakTimeShort(event.target.value);
                } }),
              " 20"
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "timer__break-options" },
            _react2.default.createElement(
              "p",
              null,
              "Long Break (Mins)"
            ),
            _react2.default.createElement(
              "label",
              { className: "timer__break-options__choices" },
              _react2.default.createElement("input", { type: "radio", name: "breakTimeLong", value: "5", onClick: function onClick(event) {
                  return _this3.setBreakTimeLong(event.target.value);
                }, defaultChecked: true }),
              " 5"
            ),
            _react2.default.createElement(
              "label",
              { className: "timer__break-options__choices" },
              _react2.default.createElement("input", { type: "radio", name: "breakTimeLong", value: "10", onClick: function onClick(event) {
                  return _this3.setBreakTimeLong(event.target.value);
                } }),
              " 10"
            ),
            _react2.default.createElement(
              "label",
              { className: "timer__break-options__choices" },
              _react2.default.createElement("input", { type: "radio", name: "breakTimeLong", value: "15", onClick: function onClick(event) {
                  return _this3.setBreakTimeLong(event.target.value);
                } }),
              " 15"
            ),
            _react2.default.createElement(
              "label",
              { className: "timer__break-options__choices" },
              _react2.default.createElement("input", { type: "radio", name: "breakTimeLong", value: "20", onClick: function onClick(event) {
                  return _this3.setBreakTimeLong(event.target.value);
                } }),
              " 20"
            )
          )
        )
      );
    }
  }]);

  return Clock;
}(_react.Component);

exports.default = Clock;

/***/ })

},[15]);