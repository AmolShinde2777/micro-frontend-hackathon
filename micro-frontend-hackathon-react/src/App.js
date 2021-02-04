import React, { useRef } from 'react';
import './App.css';

function App({ title, data = [] }) {
  const ref = useRef(null);
  const onClick = () => {
    ref.current.dispatchEvent(new CustomEvent('myEvent', {
      composed: true,
    }));
  };
  const profile = {
    width: "600px",
    margin: "auto",
    textAlign: "center",
    marginTop: "2em",
    paddingTop: "2em",
    backgroundColor: "#eee",
    border: "1px solid #000",
    borderRadius: "5px"
  };
  const userImageCont = {
    width: "16%",
    height: "95px",
    margin: "auto",
  };
  const userImage = {
    width: "100%",
    height: "100%",
    borderRadius: "50%",
  };
  const propertyDiv = {
    padding: "10px",
    borderBottom: "1px solid #ddd"
  }
  const backButton = {
    margin: "10px 0",
    padding: "5px 10px",
    borderRadius: "5px",
    backgroundColor: "#000",
    color: "#fff"
  }
  return (
    <div ref={ref}>
      <div style={profile}>
        <div style={userImageCont}>
          <img style={userImage} src="http://nicesnippets.com/demo/up-profile.jpg" alt="" />
        </div>
        <h2 >{data.map(data => <span key={data.id}>{data.firstname}</span>)} {data.map(data => <span key={data.id}>{data.lastname}</span>)}</h2>
        <div style={propertyDiv}>DOB: {data.map(data => <span key={data.id}>{data.dob}</span>)}</div>
        <div style={propertyDiv}>Gender: {data.map(data => <span key={data.id}>{data.gender}</span>)}</div>
        <div style={propertyDiv}>Address: {data.map(data => <span key={data.id}>{data.address}</span>)}</div>
        <div>
          <button style={backButton} onClick={onClick}>
            Back
          </button>
        </div>
      </div>
    </div >
  );
}

export default App;
