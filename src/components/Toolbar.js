"use strict";

exports.__esModule = true;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Toolbar = function (_Component) {
    _inherits(Toolbar, _Component);

    Toolbar.prototype.render = function render() {
        var _this3 = this;

        var _state3 = this.state,
            start = _state3.start,
            end = _state3.end;


        return _react2.default.createElement(
            "div",
            {
                className: "container rounded text-white",
                style:{backgroundColor: "#343a40bf"}
            },
        );
    };

    return Toolbar;
}(_react.Component);

exports.default = Toolbar;
module.exports = exports["default"];