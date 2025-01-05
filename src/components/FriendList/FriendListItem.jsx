import PropTypes from 'prop-types';

import { FriendLi } from './FriendList.styles';

export const FriendListItem = ({id, isOnline, avatar, name}) => {
    return (
    <FriendLi className ="item" key={id} isOnline={isOnline}>
        <span className='status'></span>
        <img className ="avatar" src={avatar} alt="User avatar" width="48" />
        <p className ="name">{name}</p>
    </FriendLi>
)
}

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
};
