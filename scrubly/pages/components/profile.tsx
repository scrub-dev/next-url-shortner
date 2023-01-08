import React from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';

export default function Profile() : JSX.Element {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  let userStats = (<></>)
  if(user){
    userStats = (
      <div>
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
    )
  }
  return (
    userStats
  );
}