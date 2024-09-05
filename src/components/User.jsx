import { Component } from 'react';
import classes from './User.module.css';

// const User = (props) => {
//   return <li className={classes.user}>{props.name}</li>;
// };
class User extends Component {
  render() {
    const { name } = this.props
    return <li className={classes.user}>{name}</li>;
  }
}

export default User;
