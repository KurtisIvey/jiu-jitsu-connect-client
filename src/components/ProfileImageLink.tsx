import React from "react";
import { Link } from "react-router-dom";

/*
Reusable element that exists in individual comments, posts
functions via a Link element when profile id is provided

*/

type Props = {
  widthHeight: string;
  profilePicUrl?: string | null;
  profileId?: string;
  profileUsername: string;
};

const ProfileImageLink = (props: Props) => {
  return (
    <Link
      aria-label={`picture link to user ${props.profileUsername} profile`}
      to={`/profile/${props.profileId}`}
    >
      <img
        className={`rounded-full h-${props.widthHeight} w-${props.widthHeight} border-white border-2 hover:scale-110 transition-all duration-100 ease-in-out`}
        src={
          props.profilePicUrl
            ? props.profilePicUrl
            : "https://militaryhealthinstitute.org/wp-content/uploads/sites/37/2019/10/blank-person-icon-9.jpg"
        }
        alt={`user photo from ${props.profileUsername}`}
      />
    </Link>
  );
};

export default ProfileImageLink;
