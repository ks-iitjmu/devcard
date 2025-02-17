
import React, { useState, useEffect } from 'react';

interface GitHubUserProps {
  username: string | null;
}

const GitHubProfile: React.FC<GitHubUserProps> = ({ username }) => {
  const [profilePic, setProfilePic] = useState<string | null>(null);
  const [error, setError] = useState<string | null>("");

  useEffect(() => {
    const fetchProfilePic = async () => {
      try {
        setProfilePic(`https://avatars.githubusercontent.com/${username}`)
      } catch (err) {
        setError('Failed to fetch profile picture');
      }
    };

    fetchProfilePic();
  }, [username]);

  if (error) {
    return <p className='text-white'>{error}</p>
}

  else {
    return (
        <div className="flex items-center">
          <img src={profilePic || ''} alt={`${username}'s profile`} className="w-20 sm:w-32 h-20 sm:h-32 rounded-full" />
        </div>
      );
  }
};

export default GitHubProfile;