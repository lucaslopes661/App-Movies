import Header from "./components/Header";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import Container from "./components/Container";
import Card from "./components/Card";
import videos from "./json/db.json"
import Category from "./components/Category";

const categories = [
  "Copa do Mundo",
  "Libertadores",
  "Champions League",
  "Copa do Mundo de Clubes"
]

function filterCategory(id){
  return videos.filter(video => video.Category === categories[id])
}

function App() {
  return (
    <>
    <Header />
    <Banner image="home" />
    <Container>

      <Category category="Copa do Mundo">
        {
        filterCategory(0).map((video) => <Card id={video.id} key={video.id} />)
        }
        
      </Category>

      <Category category="Libertadores">
        {
        filterCategory(1).map((video) => <Card id={video.id} key={video.id} />)
        }
        
      </Category>

      <Category category="Champions League">
        {
        filterCategory(2).map((video) => <Card id={video.id} key={video.id} />)
        }
        
      </Category>

      <Category category="Copa do Mundo de Clubes">
        {
        filterCategory(3).map((video) => <Card id={video.id} key={video.id} />)
        }
        
      </Category>

    </Container>
    <Footer />
    </>
  );
}

export default App;
