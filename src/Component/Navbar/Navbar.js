import './Navbar.css';
document.addEventListener("DOMContentLoaded", function() {
  const menuItems = document.querySelectorAll(".menu li");

  menuItems.forEach(item => {
    item.addEventListener("click", () => {
      const checkbox = document.getElementById("checkbox_toggle");
      checkbox.checked = false;
    });
  });
});


const Navbar = () => {
  return (
      <div id="Navbar" className="Navbar-container">
            <div class="logo">
                <img src="./logo.png" alt="logo"/>
            </div>
            <ul class="nav-links">
                <input type="checkbox" id="checkbox_toggle" />
                <label for="checkbox_toggle" class="hamburger">&#9776;</label>
                <div class="menu">
                <li><a href="/">Home</a></li>
                <li><a href="/About">About</a></li>
                <li class="services"><a href="/service">Services</a>
                    <ul class="dropdown">
                      <li><a href="/service-logoandbranding">Logo & Brand Identity</a></li>
                      <li><a href="/service-print">Print Design</a></li>
                      <li><a href="/service-marketing">Marketing Design</a></li>
                    </ul>
                </li>
                <li><a href="/Portfolio">Portfolio</a></li>
                <li><a href="/contact">Contact</a></li>
                </div>
              </ul>
      </div>
  );
}
export default Navbar;