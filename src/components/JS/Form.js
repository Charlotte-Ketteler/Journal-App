export default function Form({ name, value, name1}){
    return (
    <div>
    <h2 className="position__H2--Form">NEW ENTRY</h2>
    <form className="position__Form">
        <p>Motto</p>
        <label htmlFor="Motto"></label>
        <input className="form__Style--Motto" id="Motto" name={name} defaultValue={value}/>
        <br/>
        <p>Notes</p>
        <label htmlFor="text"></label>
        <textarea className="form__Style--Notes" id="text"/>
        <br/>
        </form>
        
         </div>
        )
       
}
