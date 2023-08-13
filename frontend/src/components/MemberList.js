import React, { useState, useEffect } from 'react';
import axios from 'axios';

function MemberList() {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    fetchMembers();
  }, []);

  const fetchMembers = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:5000/members');
      setMembers(response.data.data); // Access the "data" array in the response
    } catch (error) {
      console.error('Error fetching members:', error);
    }
  };

  return (
    <div>
      <h1>Member List</h1>
      <ul>
        {members.map(member => (
          <li key={member.id}>
            <h3>{member.name}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MemberList;
