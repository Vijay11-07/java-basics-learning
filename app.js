import React, { useState, useEffect } from 'react';

// 1. Child Component (Example of Props)
// 'name' is a prop passed down from the Parent component
const WelcomeMessage = ({ name }) => {
  return (
    <div style={{ border: '2px solid #61dafb', padding: '15px', borderRadius: '8px', margin: '10px 0' }}>
      <h2>Hello, {name}!</h2>
      <p>This message is rendered using <b>Props</b>.</p>
    </div>
  );
};

function App() {
  // 2. Example of useState
  // 'count' holds the current value, 'setCount' is the function to update it
  const [count, setCount] = useState(0);
  const [userName, setUserName] = useState("Anshul"); //

  // 3. Example of useEffect
  useEffect(() => {
    // This code runs every time 'count' changes
    document.title = `Clicks: ${count}`;
    console.log(`The count is now: ${count}`);
    
    // Optional: Cleanup function
    return () => console.log("Cleaning up effect...");
  }, [count]); // Dependency array: only re-run if count changes

  return (
    <div style={{ padding: '40px', fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif', maxWidth: '600px', margin: '0 auto' }}>
      <h1 style={{ color: '#20232a' }}>React Fundamentals</h1>
      <hr />

      {/* Passing the 'userName' state as a Prop */}
      <WelcomeMessage name={userName} />

      <div style={{ marginTop: '30px', backgroundColor: '#f0f2f5', padding: '20px', borderRadius: '10px' }}>
        <h3>State & useState Hook</h3>
        <p>You have clicked the button <b>{count}</b> times.</p>
        
        <button 
          onClick={() => setCount(count + 1)}
          style={{ 
            padding: '10px 25px', 
            fontSize: '16px', 
            backgroundColor: '#61dafb', 
            border: 'none', 
            borderRadius: '5px', 
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
        >
          Increment Counter
        </button>
      </div>

      <div style={{ marginTop: '20px', fontStyle: 'italic', color: '#555' }}>
        <p>Note: Check the browser tab title—it updates via <b>useEffect</b>!</p>
      </div>
    </div>
  );
}

export default App;
