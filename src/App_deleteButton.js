import { useState } from 'react';
import './App.css';

function App() {

  let [글제목, 글제목변경] = useState(['남자코트추천', '강남우동맛집', '파이썬독학']);
  let [입력값, 입력값변경] = useState('');
  return ( 
    <div>
    { 
     글제목.map(function(a, i){
        return (
          <div className="list">
            <h4>{ 글제목[i] }</h4>
            <p>2월 18일 발행</p>
            <button onClick={()=>{ 
              let copy = [...글제목];
              copy.splice(i,1);
              글제목변경(copy);

             }}>삭제</button>
          </div> 
        )
     }) 
    }  
  </div>
  )
  
}

export default App;
