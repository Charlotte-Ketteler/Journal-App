import "../CSS/Form.css";
import "../CSS/Button.css";

export default function Form({ onAddEntry}){
    
    function handleSubmit(event){
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData);
        onAddEntry(data);
        console.log("hi");
    }
    return (
    <div>
    <h2 className="position__H2--Form">NEW ENTRY</h2>
    <form className="position__Form" onSubmit={handleSubmit}>
        <p>Motto</p>
        <label htmlFor="Motto"></label>
        <input className="form__Style--Motto" id="Motto"  type="text" name="motto" placeholder="motto"/>
        <br/>
        <p>Notes</p>
        <label htmlFor="text"></label>
        <textarea name="notes" className="form__Style--Notes" id="text"/>
        <br/>
        <button className="create__button" type="submit"  ><p>Create</p></button>
        </form>
        
         </div>
        )
       
}
 