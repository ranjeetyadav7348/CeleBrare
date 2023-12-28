import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { undo, redo, setText, setSize, setColor } from '../Redux/reducer';
import './Home.css'
const Home = () => {

  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [initialMousePosition, setInitialMousePosition] = useState({
    x: 0,
    y: 0,
  });

  const handleMouseDown = (event) => {
    setIsDragging(true);
    setInitialMousePosition({ x: event.clientX, y: event.clientY });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (event) => {
    if (isDragging) {
      const deltaX = event.clientX - initialMousePosition.x;
      const deltaY = event.clientY - initialMousePosition.y;

      setPosition((prevPosition) => ({
        x: prevPosition.x + deltaX,
        y: prevPosition.y + deltaY,
      }));

      setInitialMousePosition({ x: event.clientX, y: event.clientY });
    }
  };



  const dispatch = useDispatch();
  const { text, size, color } = useSelector((state) => state);

  const handleTextChange = (e) => {
    dispatch(setText(e.target.value));
  };

  const handleSizeChange = (e) => {
    dispatch(setSize(e.target.value));
  };

  const handleColorChange = (e) => {
    dispatch(setColor(e.target.value));
  }

  return (
    <>

      <div className="App">
        <div style={{ display: 'flex' }}>
          <button onClick={() => dispatch(undo())}>Undo</button>
          <button onClick={() => dispatch(redo())}>Redo</button>
        </div>
        <div >

          <div style={{ width: '20%', float: 'right', paddingTop: '15%', paddingRight: '5%' }}>
            <div>
              <label>

                <bold style={{ fontFamily: 'cursive', margin: '10px' }}>Text Edit</bold>

                <input
                  type="text"
                  value={text}
                  onChange={handleTextChange}


                />
              </label>
            </div>
            <div>
              <label>

                <bold style={{ fontFamily: 'cursive', margin: '10px' }}>Size</bold>

                <input
                  type="text"
                  value={size}
                  onChange={handleSizeChange}

                />
              </label>
            </div>
            <div>
              <label>

                <bold style={{ fontFamily: 'cursive', margin: '10px' }}>Color</bold>

                <input
                  type="color"
                  value={color}
                  onChange={handleColorChange}

                />
              </label>

            </div>

          </div>



          <div
            className={`draggable-div ${isDragging ? "dragging" : ""}`}
            style={{ paddingTop: '9rem', left: position.x, top: position.y }}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
          >
            <h1 style={{ fontSize: size, color: color }}>
              {text}
            </h1>
          </div>





        </div>
      </div>
    </>
  );
};

export default Home;
