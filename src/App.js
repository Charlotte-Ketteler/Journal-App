
import './components/CSS/Button.css';
import './App.css';
import Form from './components/JS/Form';
import Head from './components/JS/Head';
import Entry from './components/JS/Entry';
import Footer from './components/JS/Footer';
import {useState} from "react";


const entries = [
   
  {
    id: 125,
    date: "03.06.2023",
    motto: "My favourite drink",
    notes: "Moscow Mule"
  },
  {
    id: 124,
    date:"02.06.2023",
    motto: "Festivals I want to go to",
    notes:"Cochella, Parookaville and Tomorrowland"
  },
  {
    id: 123,
    date:"01.06.2023",
    motto: "Colognes constitutional law",
    notes:"§ 1 - Et es wie et es § 2 - Et kütt wie et kütt § 3 - Et hätt noch immer jot jejange"
  }
]


function App() {
  const [entry, setEntry] = useState(entries);
  
  function handleAddEntries(newEntry){
  
    setEntry([...entry, {...newEntry}]);
  }
  return (
    <>
     
      <main className='typo__wholePage'>
      <Head/>
      <Form onAddEntry={handleAddEntries}></Form>
      <Entry entryProp={entry}></Entry>
      </main>
      <Footer></Footer>

  
    </>
  );
}

export default App;
