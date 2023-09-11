import './Home.css';

const Home = () => {
  return (
      <div id="Home" className="Home-container">
            <div class="HomeImage">
                <img src="./slideImage.png" alt="Home-Slider"/>
            </div>
            <div class='HomeContent'>
                <h1><span class="primary-color">Ink</span><span>novative</span></h1> 
                <h2>Putting your thoughts into prints.</h2>
                <div><a href="/register" class="button">Register here!</a></div>
            </div>
      </div>
  );
}
export default Home;