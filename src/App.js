
import './components/CSS/Button.css';
import './App.css';
import Form from './components/JS/Form';
import Head from './components/JS/Head';
import Entry from './components/JS/Entry';
import Footer from './components/JS/Footer';
function App() {
  return (
    <>
     
      <main className='typo__wholePage'>
      <Head/>
      <Form name="Motto" value=""></Form>
      <Entry></Entry>
      </main>
      <Footer></Footer>

  
    </>
  );
}

export default App;
