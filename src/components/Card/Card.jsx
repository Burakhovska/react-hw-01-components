import { Profile } from './Card.styled'
import { Photo } from './Card.styled';
import { UserDescription } from './Card.styled';
import { UserName } from './Card.styled';
import { StatsList } from './Card.styled'
import { StatsLi } from './Card.styled';
import PropTypes from 'prop-types';
import user from '../../user.json'

export const Card = ({username = user.username, 
  avatar = user.avatar, 
  location = user.location, 
  tag = user.tag, 
  followers = user.stats.followers, 
  views = user.stats.views, 
  likes = user.stats.likes}) => {
return (
<Profile className="profile">
  <div className="description">
    <Photo
      src={avatar}
      alt="User avatar"
      className="avatar"
    />
    <UserName className="name">{username}</UserName>
    <UserDescription className="tag">@{tag}</UserDescription>
    <UserDescription className="location">{location}</UserDescription>
  </div>

  <StatsList className="stats">
    <StatsLi>
      <span className="label">Followers</span>
      <span className="quantity">{followers}</span>
    </StatsLi>
    <StatsLi>
      <span className="label">Views</span>
      <span className="quantity">{views}</span>
    </StatsLi>
    <StatsLi>
      <span className="label">Likes</span>
      <span className="quantity">{likes}</span>
    </StatsLi>
  </StatsList>
 </Profile>
 )
}

Card.propTypes = {
  username: PropTypes.string.isRequired,
  avatar: PropTypes.element,
  location: PropTypes.string.isRequired,
  tag:PropTypes.string.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
  followers: PropTypes.number.isRequired
}