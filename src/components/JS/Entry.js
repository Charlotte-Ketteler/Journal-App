
import {Fragment} from "react";
import '../CSS/Entry.css';
import Tabs from "./Tabs";
import EntrySection from "./EntrySection";
import Divider from "./Divider";

export default function Entry({entryProp}){
  console.log("Show me");
  
    return <section>
        
         <Tabs/>
       <article className="article__style">
  {entryProp.map((entry) => (
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