import css from '../css/FriendListItem.module.css'
import clsx from "clsx";

const FriendListItem = ({avatar, name, isOnline}) => {
    return (
        <div className={css.container}>
    <img className={css.avatar} src={avatar} alt="Avatar" />
    <div>
        <p className={css.name}>{name}</p>
        <p className={clsx(css.status, isOnline ? css.online : css.offline)}>{isOnline ? 'Online' : 'Offline'}</p>
    </div>
</div>

    )
};

export default FriendListItem;