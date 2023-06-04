import StarFilledFunction from './StarFilledFunction';
        export default function EntrySection({motto, notes, date}){
           return(
            <>
            <article>
            <h2 className="date__style">{date}</h2>
        <h3>{motto}</h3>
        <StarFilledFunction/>
        <p>{notes}</p>  
</article></>)}