import { useState } from "react";
import "./App.css";

function App() {
  let [제목, set제목] = useState([
    "안녕하세요",
    "프론트엔드",
    "멋사화이팅굿굿",
  ]);
  let [like, setLike] = useState([0,0,0]);
  let [detail, setDetail] = useState(false);
  let [title, setTitle] = useState(0);
  let [입력값, set입력값] = useState();
  return (
    <div className="App">
      <div className="myNav">
        <h4>blog</h4>
      </div>

      {제목.map(function (a, i) {
        return (
          <div className="list">
            <h4
              onClick={() => {
                setDetail(!detail);
                setTitle(i);
              }}
            >
              {제목[i]}
              <span
                onClick={() => {
                  let copy=[...like];
                  copy[i] = copy[i]+1;
                  setLike(copy)
                }}
              >👍{like[i]}</span>
            </h4>
            <p>2022/5/31</p>
          </div>
        );
      })}
      <input
        onChange={(e) => {
          set입력값(e.target.value);
        }}
      ></input>
      <button onClick={()=>{
        let copy = [...제목]; //array를 만질 때는 copy본부터 만들기
        copy.unshift(입력값);
        set제목(copy)
      }}>추가</button>
    </div>
  );
}

function Detail(props) {
  return (
    <div className="detail">
      <h4>{props.제목[props.title]}</h4>
      <p>2022/5/1</p>
    </div>
  );
}
export default App;
