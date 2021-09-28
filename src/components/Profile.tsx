import React, { useEffect, useState } from 'react';
import { SessionContext } from '../utils/Contexts/SessionContext';
import { UserDTO } from '../utils/DTOs/UserDTO';
import { userService } from '../utils/Services/UserService';
import { user as userData } from '../utils/testData/user';
import { Button } from './atoms/Button';

export const Profile = () => {

    const [user, setUser] = useState<UserDTO>();
    const [loading, setLoading] = useState(false);

    const { sessionId } = React.useContext(SessionContext);

    useEffect(() => {
        loadUser();
        // eslint-disable-next-line
	}, [sessionId]);
    
    const loadUser = async () => {
        if (!loading) {
            setLoading(true);
            userService.loadUser(sessionId).then((res) => {
                setUser(res.data);
            }).catch(err => {
                
            }).finally(() => {
                setLoading(false);

                // Testdata
                setUser(userData);
            });
        }
    }

    return(
        <div className="profile">
            <div className="profile-content">
                <div className="profile-header">
                    <img className="profile-img" src={user?.profile_picture_src} alt="Profile" />
                    <div className="profile-username">{user?.username}</div>
                </div>
                <div className="bio">
                    {user?.userBio}
                </div>
                <Button roundedCorners>Change Username</Button>
                <Button roundedCorners>Change Password</Button>
            </div>
        </div>
    )
}