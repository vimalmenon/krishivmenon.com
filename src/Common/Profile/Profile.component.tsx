import { Skeleton } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

import { AuthStatus } from '@constant';
import { useAuthHelper, useCommonContext } from '@context';

import { ProfileRoot } from './Profile.style';

export const Profile: React.FC = () => {
  const { profile } = useCommonContext();
  const { authStatus } = useAuthHelper();
  if (authStatus === AuthStatus.Authenticating) {
    return (
      <ProfileRoot>
        <div className="profile">
          <Skeleton variant="circular" height={50} width={50} />
        </div>
        <div className="profile-detail">
          <Skeleton variant="text" width={120} />
        </div>
      </ProfileRoot>
    );
  }
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
