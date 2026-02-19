import Footer from "./components/Footer";
import Header from "./components/Header";
import Post from "./components/Post";

function App() {
  return (
    <>
      <Header />
      <main>
        <Post title="Meu primeiro post" readingTime={2}>
          <p>Introdução...</p>
          <p>Desenvolvimento da idéia...</p>
          <p>Conclusão...</p>
        </Post>
        <Post title="Meu segundo post" readingTime={2}>
          <p>
            <em>Texto em itálico</em>
          </p>
        </Post>
        {/* <Post title="Meu segundo post"/> */}
      </main>
      <Footer />
    </>
  );
}
export default App;
