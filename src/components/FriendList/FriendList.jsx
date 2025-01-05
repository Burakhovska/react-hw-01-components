import PropTypes from 'prop-types';
import friends from '../../friends.json'
import { FriendListSection } from './FriendList.styles';
import { FriendListItem } from './FriendListItem';

export const FriendList = ({friendsList = friends}) => {
    return (
        <FriendListSection className ="friend-list">
            {friendsList.map(({ avatar, name, isOnline, id }) => (
                <FriendListItem 
                    key={id} 
                    avatar={avatar} 
                    name={name} 
                    isOnline={isOnline} 
                />
               
))}
        </FriendListSection>);
}

FriendList.propTypes = {
    friendsList: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
        })
    ).isRequired
};