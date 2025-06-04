const Navbar = () => {
  async function getArticles(type) {
    let articles;
    switch (type) {
      case "business":
        articles = await fetch(
          `https://newsapi.org/v2/top-headlines?category=business&apiKey=${
            import.meta.env.VITE_API_KEY
          }`
        );
        break;
      case "technology":
        articles = await fetch(
          `https://newsapi.org/v2/top-headlines?category=technology&apiKey=${
            import.meta.env.VITE_API_KEY
          }`
        );
        break;
      case "health":
        articles = await fetch(
          `https://newsapi.org/v2/top-headlines?category=health&apiKey=${
            import.meta.env.VITE_API_KEY
          }`
        );
        break;
      case "sports":
        articles = await fetch(
          `https://newsapi.org/v2/top-headlines?category=sports&apiKey=${
            import.meta.env.VITE_API_KEY
          }`
        );
        break;
      case "entertainment":
        articles = await fetch(
          `https://newsapi.org/v2/top-headlines?category=entertainment&apiKey=${
            import.meta.env.VITE_API_KEY
          }`
        );
        break;
      case "science":
        articles = await fetch(
          `https://newsapi.org/v2/top-headlines?category=science&apiKey=${
            import.meta.env.VITE_API_KEY
          }`
        );
        break;
      default:
        articles = await fetch(
          `https://newsapi.org/v2/top-headlines&apiKey=${
            import.meta.env.VITE_API_KEY
          }`
        );
    }

    console.log(articles);
  }

  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <span className="badge bg-light text-dark fs-4">NewsMaz</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Categories
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={() => getArticles("business")}
                  >
                    Business
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={() => getArticles("technology")}
                  >
                    Technology
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={() => getArticles("health")}
                  >
                    Health
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={() => getArticles("sports")}
                  >
                    Sports
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={() => getArticles("entertainment")}
                  >
                    Entertainment
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={() => getArticles("science")}
                  >
                    Science
                  </a>
                </li>
              </ul>
            </li>{" "}
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={() => getArticles("")}>
                Articles
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
