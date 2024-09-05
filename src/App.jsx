import UserFinder from './components/UserFinder';
import UsersContext from './store/user-context';

const DUMMY_USERS = [
  { id: 'u1', name: 'Max' },
  { id: 'u2', name: 'Manuel' },
  { id: 'u3', name: 'Julie' },
];


function App() {
  const usesContext = {
    users: DUMMY_USERS
  }
  return (
    <UsersContext.Provider value={usesContext}>
      <UserFinder />
    </UsersContext.Provider>
  );
}

export default App;
