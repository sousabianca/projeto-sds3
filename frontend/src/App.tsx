import NavBar from "components/NavBar";
import DataTable from "components/NavBar/DataTable";
import Footer from "components/NavBar/Footer";

function App() {
  return (
    <>
      <NavBar />
      <div className = 'container'>
        <h1 className="text-primary"> olá mundo!</h1>
     <DataTable/>
      </div>
      <Footer/>
    </>
        );

}

        export default App;
