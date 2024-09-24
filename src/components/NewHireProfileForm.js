import React, { useState } from 'react';

const NewHireProfileForm = () => {
  const [profile, setProfile] = useState({ name: '', role: '', department: '' });

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Profile Submitted:', profile);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>New Hire Profile Creation</h2>
      <input name="name" placeholder="Name" onChange={handleChange} />
      <input name="role" placeholder="Role" onChange={handleChange} />
      <input name="department" placeholder="Department" onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default NewHireProfileForm;
