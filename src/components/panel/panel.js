import React, { Component } from 'react';

import PropTypes from 'prop-types';
import classnames from 'classnames';
import TypeCard from '../typecard/typecard';

class Panel extends Component {

  static propTypes = {};

  static defaultProps = {
    creditCardNumber: ''
  }

  constructor(props) {
    super(props);
    this.state = {
      creditCardNumber: ''
    }
  }

  componentDidMount() {}

  componentWillReceiveProps(nextProps) {}

  render() {
    return (
      <div className="panel">
        <div className="panel-body">
          <form>
            <div className="form-group">
              <label>Credit card number:</label>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  id="card"
                  onChange={
                    event => this.setState({
                      creditCardNumber: event.target.value
                    })
                  }
                />
                <TypeCard
                  creditCardNumber={this.state.creditCardNumber}
                />
              </div>
            </div>
            <div className="form-group">
              <label>Name on card:</label>
              <input type="text" className="form-control" />
            </div>
            <div className="clearfix">
              <div className={classnames("form-group", "form-group-mini")}>
                <label>Expiry date:</label>
                <input type="text" className="form-control" />
              </div>
              <div className={classnames("form-group", "form-group-mini")}>
                <label>CVV:</label>
                <input type="text" className="form-control" />
              </div>
            </div>
            <br/>
            <p>
              <button className={classnames("btn", "btn-primary")}>Submit</button>
            </p>
          </form>
        </div>
      </div>
    );
  }
}

export default Panel;
