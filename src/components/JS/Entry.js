import '../CSS/Entry.css';

export default function Entry({children, src}){
    return <section>
         <button className="create__button" type="submit"><p>Create</p></button>
         <section className="tags__Order"><p className="allEntries">All Entries <button className="button__allEntries">3</button></p>
         
         <p>Favorites  <button className="button__Favorites">1</button></p></section>
        <article className="article__style">
        
        <h2 className="date__style">FEB 27, 2028 </h2>
        <h3>"That's life in the city"</h3>
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
        <p>{children}</p>
       
        <hr className="hr__style"/>
        <h2 className="date__style">FEB 26, 2028 </h2>
        <h3>"That's life in the city"</h3>
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
        <p>{children}</p>
        <hr className="hr__style"/>
        <h2 className="date__style">FEB 25, 2028</h2>
        <h3>"That's life in the city"</h3>
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
        <p>{children}</p>
        
        </article>
    </section>
}