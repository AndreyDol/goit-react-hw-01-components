
import PropTypes from 'prop-types';
import { List, Status, Name } from '../FriendList/FriendListItem.styled';
export const FriendListItem = ({ avatar, name, isOnline}) => {
    return (
      <List>
        <Status isOnline={isOnline}></Status>
        <img src={avatar} alt="User avatar" width="48" />
        <Name>{name}</Name>
      </List>
    );

}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};