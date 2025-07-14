import React from 'react';

function Card({ name, age, bio }) {
  return (
    <div style={styles.card}>
      <h2>{name}</h2>
      <p><strong>Age:</strong> {age}</p>
      <p><strong>Bio:</strong> {bio}</p>
    </div>
  );
}

const styles = {
  card: {
    border: '1px solid #ccc',
    borderRadius: '10px',
    padding: '1rem',
    marginBottom: '1rem',
    maxWidth: '300px',
    backgroundColor: '#f9f9f9'
  }
};

export default Card;
