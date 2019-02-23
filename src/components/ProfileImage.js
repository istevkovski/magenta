import React from 'react';
import GlobalStyles from '../constants/style';

const ProfileImage = () => {
    return (
        <div className="profile-image">
            <img src="./assets/icons/user.svg" alt="" style={{height: "92px", ...GlobalStyles.svgColorGray}}/>
        </div>
    );
};

export default ProfileImage;