import React from 'react';
import Card from './components/Card';

function App() {
  return (
    <div style={styles.app}>
      <h1>Personal Info Cards</h1>
      
      <Card 
        name="Rushikesh Gadhe" 
        age={22} 
        bio="A passionate developer who loves building cool stuff with React." 
      />

      <Card 
        name="Sneha Patil" 
        age={25} 
        bio="UI/UX designer with a knack for user-friendly interfaces." 
      />

      <Card 
        name="Amit Sharma" 
        age={28} 
        bio="Full-stack developer and tech blogger." 
      />
    </div>
  );
}

const styles = {
  app: {
    fontFamily: 'Arial, sans-serif',
    padding: '2rem'
  }
};

export default App;
