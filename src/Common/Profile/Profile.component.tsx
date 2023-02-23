import { useCommonContext } from '@context';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

import { ProfileRoot } from './Profile.style';

export const Profile: React.FC = () => {
  const { profile } = useCommonContext();
  if (profile) {
    return (
      <ProfileRoot>
        <div className="profile">
          <Avatar alt={profile.name} src={profile.avatar} />
        </div>
        <div className="profile-detail">
          <Typography component="h2">{profile.name}</Typography>
        </div>
      </ProfileRoot>
    );
  }
  return null;
};
