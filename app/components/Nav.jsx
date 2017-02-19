var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
  render: function () {
    return (
        <div className="top-bar">
          <div>
            <div className="top-bar-left">
              <ul className="menu">
                <li className="menu-text">React Timer App</li>
                <li>
                  <IndexLink to="/" activeClassName="active-link">Timer</IndexLink>
                </li>
                <li>
                  <Link to="/countdown" activeClassName="active-link">Countdown</Link>
                </li>
              </ul>
            </div>
            <div className="top-bar-right">
              <ul className="menu">
                <li className="menu-text">
                  <span>Created By</span>
                  <a href="https://github.com/anuj-verma" target="_blank">Anuj Verma</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
    );
  }
});

module.exports = Nav;

