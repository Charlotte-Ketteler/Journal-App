
import StarFilledFunction from './StarFilledFunction';
import '../CSS/Entry.css';
import Tabs from "./Tabs";
export default function Entry(){
    return <section>
         <button className="create__button" type="submit"><p>Create</p></button>
         <Tabs/>
        <article className="article__style">
        
        <h2 className="date__style">FEB 27, 2028 </h2>
        <h3>"My favourite drink"</h3>
        <StarFilledFunction/>
        <p>Moscow Mule:
            <ul>
            <li> 320 ml Ginger Beer,</li> <li>5cl Wodka,</li><li>ice cubes,</li>  <li>three slices of Cucumber and</li>  <li>half a lime. </li>
            </ul>
        </p>
       
        <hr className="hr__style"/>
        <h2 className="date__style">FEB 26, 2028 </h2>
        <h3>"Festivals I want to go to"</h3>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
            fill="#FF4A11"
            stroke="#FF4A11"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <p>Cochella, Parookaville and Tomorrowland</p>
        <hr className="hr__style"/>
        <h2 className="date__style">FEB 25, 2028</h2>
        <h3>"Colognes constitutional law"</h3>
        <svg 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" 
        stroke="#252629" 
        stroke-width="2" 
        stroke-linecap="round" 
        stroke-linejoin="round"/>
        </svg>
        <p>

§ 1 - Et es wie et es
<br/>
§ 2 - Et kütt wie et kütt
<br/>
§ 3 - Et hätt noch immer jot jejange
<br/>
§ 4 - Wat fott es es fott
<br/>
§ 5 - Nix bliev wie et wor
<br/>
§ 6 - Kenne mer nit, bruche mer nit, fott domet
<br/>
§ 7 - Wat wellste maache
<br/>
§ 8 - Mach et jot ävver nit ze off
<br/>
§ 9 - Wat soll dä Quatsch?
<br/>
§ 10 - Drinkste ene met?
<br/>
§ 11 - Do laachste dech kapott</p>
        
        </article>
    </section>
}