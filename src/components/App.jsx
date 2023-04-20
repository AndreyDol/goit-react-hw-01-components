import { Profile } from "../Profile/Profile";
import { Statistics } from "../Statistics/Statistics";
import {FriendList} from "../FriendList/FriendList";
import user from "../user.json";
import data from '../data.json';
import friends from "../friends.json"
export const App = () => {
  return (
    <div
    // style={{
    //   height: '100vh',
    //   display: 'flex',
    //   justifyContent: 'center',
    //   alignItems: 'center',
    //   fontSize: 40,
    //   color: '#010101'
    // }}
    >
      <Profile user={user} />
      <br />
      <Statistics title="Upload stats" data={data} />
      <br />
      <FriendList friends = {friends} />
    </div>
  );
};
