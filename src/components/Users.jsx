import { Component, useState } from 'react';
import User from './User';

import classes from './Users.module.css';

// const Users = () => {
//   const [showUsers, setShowUsers] = useState(true);

//   const toggleUsersHandler = () => {
//     setShowUsers((curState) => !curState);
//   };

//   const usersList = (
//     <ul>
//       {DUMMY_USERS.map((user) => (
//         <User key={user.id} name={user.name} />
//       ))}
//     </ul>
//   );

//   return (
//     <div className={classes.users}>
//       <button onClick={toggleUsersHandler}>
//         {showUsers ? 'Hide' : 'Show'} Users
//       </button>
//       {showUsers && usersList}
//     </div>
//   );
// };

class Users extends Component {
  constructor() {
    super()
    this.state = {
      showUsers: true,
      test: 'test is success'
    }
  }

  toggleUsersHandler() {
    this.setState(prev => {
      return { showUsers: !prev.showUsers }
    })
  }
  render() {
    const { showUsers } = this.state
    const { users } = this.props
    const usersList = (
      <ul>
        {users.map((user) => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    );
    return (
      <div className={classes.users}>
        <button onClick={this.toggleUsersHandler.bind(this)}>
          {showUsers ? 'Hide' : 'Show'} Users
        </button>
        {showUsers && usersList}
      </div>
    )
  }
}

export default Users;
