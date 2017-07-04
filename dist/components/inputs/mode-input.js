'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactThemeable = require('react-themeable');

var _reactThemeable2 = _interopRequireDefault(_reactThemeable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ModeInput = function (_React$Component) {
  _inherits(ModeInput, _React$Component);

  function ModeInput() {
    _classCallCheck(this, ModeInput);

    return _possibleConstructorReturn(this, (ModeInput.__proto__ || Object.getPrototypeOf(ModeInput)).apply(this, arguments));
  }

  _createClass(ModeInput, [{
    key: 'render',
    value: function render() {
      var theme = (0, _reactThemeable2.default)(this.props.theme);
      var _props = this.props,
          name = _props.name,
          checked = _props.checked,
          onChange = _props.onChange;

      return _react2.default.createElement(
        'div',
        theme(1, 'modeInputContainer'),
        _react2.default.createElement('input', _extends({}, theme(2, 'modeInput'), {
          type: 'radio',
          name: !process.env.TESTING ? name : '',
          checked: checked,
          onChange: onChange
        }))
      );
    }
  }]);

  return ModeInput;
}(_react2.default.Component);

ModeInput.propTypes = {
  name: _propTypes2.default.string.isRequired,
  theme: _propTypes2.default.object.isRequired,
  checked: _propTypes2.default.bool.isRequired,
  onChange: _propTypes2.default.func.isRequired
};
exports.default = ModeInput;