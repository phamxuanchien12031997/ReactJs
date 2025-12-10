import './App.css';

function App() {
  const username = "Phạm Chiến";
  const age = "28";
  const address = "Hải Phòng";

  return (
    <div className="App">
      <div className='title'>PERSONAL INFORMATION</div>
      <div className='information'>
      <div>I'm {username} </div>
      <div>I'm {age} years old</div>
      <div>I'm from {address}</div>
      <div>I like sports and read book</div>
      </div>
      <div className='lastword'>Thanks for reading !!!</div>
    </div>
  );
}

export default App;