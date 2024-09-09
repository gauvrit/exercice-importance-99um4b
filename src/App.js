import React from 'react';
import './style.css';

function Item({ name, importance }) {
  return (
    <li className="item">
      {name} {importance>0 ? "(Importance):" + importance:null}
    </li>
  );
}

const items = [{
  name: "Combinaison spatiale",
  importance: 9
},{
  name: "Casque à feuille d’or",
  importance: 0
},{
  name: "Photo de Tam",
  importance: 6
},];


export default function PackingList() {
  return (
    <section>
      <h1>Liste d’affaires de Sally Ride</h1>
      <ul>
        <Item
          importance={9}
          name="Combinaison spatiale"
        />
        <Item
          importance={0}
          name="Casque à feuille d’or"
        />
        <Item
          importance={6}
          name="Photo de Tam"
        />
      </ul>
    </section>
  );
}

function PackingList2(props) {
  return (
    <div>
      <h1>Liste d’affaires de Sally Ride</h1>
      <ul>
        {props.items.sort((a,b) => a.importance - b.importance).map (
          item => ( 
          <Item
          importance={item.importance}
          name={item.name} />
          ))  
        }
      </ul>
    </div>
  )
}  

export default function App() {
  return <PackingList2 items = {items}/>;
}
