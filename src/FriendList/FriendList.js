import  PropTypes  from "prop-types";
import { FriendListItem } from "../FriendList/FriendListItem"


export const FriendList = ({ friends }) => {

    return (
      <ul>
        {friends.map(item => (
          <FriendListItem
            key={item.id}
            avatar={item.avatar}
            name={item.name}
            isOnline={item.isOnline}
          />
        ))}
      </ul>
    );

}


FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }),
  ).isRequired,
};