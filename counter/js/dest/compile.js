define(["react", "react-dom"], function (_react, _reactDom) {
    "use strict";

    var React = _interopRequireWildcard(_react);

    function _interopRequireWildcard(obj) {
        if (obj && obj.__esModule) {
            return obj;
        } else {
            var newObj = {};

            if (obj != null) {
                for (var key in obj) {
                    if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
                }
            }

            newObj.default = obj;
            return newObj;
        }
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();

    function _possibleConstructorReturn(self, call) {
        if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }

    function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }

    var Hello = function (_React$Component) {
        _inherits(Hello, _React$Component);

        function Hello() {
            _classCallCheck(this, Hello);

            var _this = _possibleConstructorReturn(this, (Hello.__proto__ || Object.getPrototypeOf(Hello)).call(this));

            _this.state = {
                age: 21
            };
            _this.properties = "props";
            return _this;
        }

        _createClass(Hello, [{
            key: "render",
            value: function render() {
                return React.createElement(
                    "div",
                    { name: "jack" },
                    "Hello world"
                );
            }
        }], [{
            key: "defaultProps",
            value: function defaultProps() {
                return {
                    hobby: "fuck"
                };
            }
        }, {
            key: "staticProps",
            value: function staticProps() {
                return {
                    hobby: "fuck"
                };
            }
        }]);

        return Hello;
    }(React.Component);

    (0, _reactDom.render)(React.createElement(Hello, null), document.getElementById("example"));
});
