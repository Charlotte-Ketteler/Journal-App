
import {Fragment} from "react";
import '../CSS/Entry.css';
import Tabs from "./Tabs";
import EntrySection from "./EntrySection";
import Divider from "./Divider";

export default function Entry(){
  console.log("Show me");
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
    
    return <section>
         <button className="create__button" type="submit"><p>Create</p></button>
         <Tabs/>
       <article className="article__style">
  {entries.map((entry) => (
    <Fragment key={entry.id}>
      <EntrySection 
      
      date={entry.date}
      motto={entry.motto}
      notes={entry.notes}/>
      {entry.id <= 123 ? null : <Divider/>}
      </Fragment>
  ))}
        
        </article>
    </section>
}