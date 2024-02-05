import React, { useState, useRef, useEffect } from 'react';

function ValentineMessage() {
  const [response, setResponse] = useState('');
  const [noBtnStyle, setNoBtnStyle] = useState({});
  const [moveCount, setMoveCount] = useState(0);
  const yesAudio = useRef(new Audio('/yes.mp3'));
  const noAudio = useRef(new Audio('/no.mp3'));

  useEffect(() => {
    // Preloading audio files
    yesAudio.current.preload = "auto";
    noAudio.current.preload = "auto";
  }, []);

  const playAudio = (audioRef) => {
    if (yesAudio.current && yesAudio.current !== audioRef.current) {
      yesAudio.current.pause();
      yesAudio.current.currentTime = 0;
    }
    if (noAudio.current && noAudio.current !== audioRef.current) {
      noAudio.current.pause();
      noAudio.current.currentTime = 0;
    }
    audioRef.current.play();
  };

  const handleYes = () => {
    setResponse('Yay! You made my day 💖');
    playAudio(yesAudio);
  };

  const handleNo = () => {
    setResponse("quit breakin' my heart 🌹");
    playAudio(noAudio);
  };

  const handleNoMouseMove = () => {
    if (moveCount < 5) {
      // Define bounds for movement
      const buttonArea = document.querySelector('.button-group').getBoundingClientRect();
      const newTop = Math.random() * (buttonArea.height - 50); // 50 is an estimated button height
      const newLeft = Math.random() * (buttonArea.width - 50); // 50 is an estimated button width
  
      // Set new position within bounds
      setNoBtnStyle({
        position: 'absolute',
        top: `${newTop}px`,
        left: `${newLeft}px`,
      });
  
      setMoveCount(moveCount + 1);
    }
  };
  

  return (
    <div className="valentine-message">
      <h2>Will you be my Valentine? 💌</h2>
      <div className="button-group">
        <button onClick={handleYes} className="yes-btn">Yes</button>
        <button onMouseOver={handleNoMouseMove} onClick={handleNo} style={noBtnStyle} className="no-btn">No</button>
      </div>
      {response && <p className="response">{response}</p>}
    </div>
  );
}

export default ValentineMessage;
