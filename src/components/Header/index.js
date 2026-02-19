import "./styles.css"
import mainImg from "./img/2.jpg"


function Header() {
  return (
    <header>
      <h1>Meu blog!</h1>
      <img src={mainImg} alt='Gato preto sentado na rua'></img>
    </header>
  );
}

export default Header;
