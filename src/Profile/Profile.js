import PropTypes from 'prop-types';
import {
  ProfileDescription,
  ProfileImg,
  ProfileWrap,
  TextName,
  TextTag,
  TextLocation,
  ListWrap,
  Label,
  Quantity,
  List,
} from './Profile.styled';

export const Profile = ({ user }) => {
  const {
    username,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  } = user;
  // console.log(followers);
  // return <ul>{user.map((item,idx) =>(<li key={idx}>{item}</li>)) }</ul>
  return (
    <ProfileWrap>
      <ProfileDescription className="description">
        <ProfileImg src={avatar} alt="User avatar" />
        <TextName>{username}</TextName>
        <TextTag>{tag}</TextTag>
        <TextLocation>{location}</TextLocation>
      </ProfileDescription>

      <ListWrap>
        <List>
          <Label>Followers</Label>
          <Quantity>{followers}</Quantity>
        </List>
        <List>
          <Label>Views</Label>
          <Quantity>{views}</Quantity>
        </List>
        <List>
          <Label>Likes</Label>
          <Quantity>{likes}</Quantity>
        </List>
      </ListWrap>
    </ProfileWrap>
  );
};

Profile.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};
