import { useState } from 'react';
import './App.css';

function Modal(props){
  return (
    <div className= {props.결속밴드}>
      <h4>{ props.결속밴드 }</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

function App() {

  let[modal, setModal] = useState(false);
  let[결속밴드, setSub] = useState(['봇치', '니지카', '료', '키타']);
  let[like, setLike] = useState([0,0,0]);
  let[title, setTitle] = useState(0);
  return (
    <div className="App">
      <div>
      <button onClick={()=>{
          setTitle(0);
          setModal(true);
          
      }}> {결속밴드[0]} </button>
      <button onClick={()=>{
         setModal(true);
         setTitle(1);
      }}> {결속밴드[1]} </button>
      <button onClick={()=>{
          setTitle(2);
      }}> {결속밴드[2]} </button>
      <button onClick={()=>{
          setTitle(3);
      }}> {결속밴드[3]} </button>

      {
        modal === true ? <Modal 결속밴드 = {결속밴드[title]} > </Modal> : null
      }
      

      </div>

      

    </div>
    

  );
  
}

export default App;
