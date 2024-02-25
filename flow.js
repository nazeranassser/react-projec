import React, { useState } from 'react';
import './flow.css';

function Flow() {
  const [boxes, setBoxes] = useState([]);
  const [input, setInput] = useState('');

  const handleSave = () => {
    if (input.trim() === '') return; // Don't add empty boxes
    setBoxes([...boxes, { content: input, submitted: false }]);
    setInput('');
  };

  const handleSubmit = (index) => {
    const updatedBoxes = [...boxes];
    updatedBoxes[index].submitted = true;
    setBoxes(updatedBoxes);
  };

  return (
    <div className="flow">
      <h2>Flowchart</h2>
      <div className="input-box">
        <textarea value={input} onChange={(e) => setInput(e.target.value)} placeholder="Enter text for the box" />
        <button onClick={handleSave}>Add Box</button>
      </div>
      <div className="box-container">
        {boxes.map((box, index) => (
          <div key={index} className={`box ${box.submitted ? 'submitted' : ''}`}>
            <p>{box.content}</p>
            {!box.submitted && (
              <button onClick={() => handleSubmit(index)}>Submit</button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Flow;
