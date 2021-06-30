import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState([]);
  const [doneItems, setDoneItems] = useState([]);
  const [showDoneList, changeDoneList] = useState(false);

  const eventItems = (event) => {
    setInputList(event.target.value)

  }



  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    })
    setInputList('');
  }

  const doneClickHandler = (idx) => {
    console.log('done button clicked', idx);
    const currentValue = items[idx];

    setDoneItems((oldValue) => [...oldValue, currentValue]);

    const currentResult = items.filter((item, index) => idx !== index);

    console.log(
      'currentvalue ===>', currentValue,
      'items ====>', items,
      "currentResult ===>", currentResult
    );

    setItems(currentResult);
  }

  const clearAll = () => {
    console.log("hello");
    setItems([]);
  }


  return (
    <div className="main_div">

      <div className="center_div" >

        <input value={inputList} type="text" placeholder="enter text" onChange={eventItems}
        />
        <button type="button" onClick={listOfItems}>Add</button>
        <ol className="main_list">
          {

            items.map((itemval, index) => {
              return <li className="list" key={index}>
                <li> <p>{itemval}</p></li>
                <button onClick={() => { doneClickHandler(index) }}>Done</button>
              </li>;
            })
          }
        </ol>

        <ol className="main_list" >
          <button onClick={() => { changeDoneList(!showDoneList) }} style={{ color: 'white' }}>Done({doneItems.length})</button>
          {
            showDoneList ? doneItems.map((itemval, index) => {
              return <li className="list" key={index} style={{ background: 'red' }}>
                <li> <p>{itemval}</p></li>
                <button onClick={() => { doneClickHandler(index) }}>Undo</button>
              </li>;
            }) : null
          }
        </ol>
        <div className="btm_div">
          <button onClick={() => clearAll()}>clrAll</button>
        </div>


      </div>


    </div>


  );
}


export default App;
