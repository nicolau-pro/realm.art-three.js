import React, { Component } from 'react';
import * as cx from 'classnames';
import { myHelper } from '../../utilities/helpers';

class Display extends Component {
  render() {
    return <section className={cx('row', 'display')}>{myHelper(2, '13')}</section>;
  }
}

export default Display;
