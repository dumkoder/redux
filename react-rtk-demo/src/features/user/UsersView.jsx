import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from './userSlice';

export const UsersView = () => {
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector((state) => state.user);
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div>
      <h2>List of Users</h2>
      {loading && <h4>Loading...</h4>}
      {!loading && error && <p>Error: {error}</p>}
      {!loading && (
        <ul>
          {users.map((user) => (
            <li key={user.id}>🤖 {user.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};
