import './components/CSS/Footer.css';
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
      <Entry>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</Entry>
      </main>
      <Footer></Footer>

  
    </>
  );
}

export default App;
