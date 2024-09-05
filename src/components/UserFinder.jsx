import { Fragment, useState, useEffect, Component } from 'react';

import Users from './Users';
import classes from './UserFinder.module.css';

const DUMMY_USERS = [
    { id: 'u1', name: 'Max' },
    { id: 'u2', name: 'Manuel' },
    { id: 'u3', name: 'Julie' },
];

// const UserFinderFunc = () => {
//     const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS);
//     const [searchTerm, setSearchTerm] = useState('');

//     useEffect(() => {
//         setFilteredUsers(
//             DUMMY_USERS.filter((user) => user.name.includes(searchTerm))
//         );
//     }, [searchTerm]);

//     const searchChangeHandler = (event) => {
//         setSearchTerm(event.target.value);
//     };

//     return (
//         <Fragment>
//             <div className={classes.finder}>
//                 <input type='search' onChange={searchChangeHandler} />
//             </div>
//             <Users users={filteredUsers} />
//         </Fragment>
//     );
// };

class UserFinder extends Component {
    constructor() {
        super()
        this.state = {
            filteredUsers: DUMMY_USERS,
            searchTerm: ''
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.searchTerm != this.state.searchTerm)
            this.setState({
                filteredUsers: DUMMY_USERS.filter(i => i.name.includes(this.state.searchTerm))
            })
    }
    searchChangeHandler(e) {
        this.setState({
            searchTerm: e.target.value
        })
    }
    render() {
        const { filteredUsers } = this.state

        return (
            <Fragment>
                <div className={classes.finder}>
                    <input type='search' onChange={this.searchChangeHandler.bind(this)} />
                </div>
                <Users users={filteredUsers} />
            </Fragment>
        )
    }
}

export default UserFinder;