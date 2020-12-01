import { useSelector, useDispatch } from "react-redux";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getFollowers } from "../../store/actions/followersAction"


const Followers = ({ getFollowers, followers }) => {
    const { id } = useParams();
    const artistId = Number.parseInt(id);
    useEffect(() => {
        getFollowers(artistId)
    }, [artistId])

    if (!followers) return null
    return (
        <div>
            <div className='followers__section'>
                {/* <div>Followers: {followers.followed_id}</div> */}
            </div>
        </div>
    );
}

const FollowersContainer = () => {

    const followers = useSelector((state) => state.followers)
    const dispatch = useDispatch()
    return (
        <Followers
            followers={followers}
            getFollowers={(id) => dispatch(getFollowers(id))}
        />
    );
}

export default FollowersContainer;