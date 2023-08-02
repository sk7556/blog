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

function App_repeat() {

  let[modal, setModal] = useState(false);
  let[결속밴드, setSub] = useState(['봇치', '니지카', '료', '키타']);
  let[like, setLike] = useState([0,0,0]);
  
  return (
    <div className="App">
      <div>
      {
      결속밴드.map(function(a, i){ // a는 array의 리스트, i 는 순차적으로 숫자가 들어감
        return(
          <div className = "list" key = {i}> 
          <h4> {결속밴드[i]}  </h4>
          <button onClick = {() => {
            let copy = [...like];
            copy[i] = copy[i] + 1;
            setLike(copy) 
            }}> like 도네이션 {like[i]}</button>
          <Modal 결속밴드 = {결속밴드[i]} color = {'skyblue'} ></ Modal>

            
       </div>
       )
      })
      
      }
      <span>  모달 창 띄우기 </span>
      

      </div>

      {
        modal === true ? <Modal 결속밴드 = {결속밴드} > </Modal> : null
      }

    </div>
    

  );
  
}

export default App;
