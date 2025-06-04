const NewsItem = ({ title, description, src, url }) => {
  return (
    <div className="card-main d-inline-block my-3 mx-3">
      <div
        className="card bg-dark text-light mb-3 px-2 py-2"
        style={{ maxWidth: "345px", height: "500px" }}
      >
        <img
          src={src}
          alt="news"
          className="card-img-top"
          style={{ height: "200px", width: "100%", objectFit: "cover" }}
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p
            className="card-text"
            style={{ height: "80px", textWrap: "wrap", overflow: "hidden" }}
          >
            {description
              ? description.slice(0, 90) + "..."
              : "No description available."}
          </p>
        </div>
        <a
          href={url}
          className="btn btn-outline-primary"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            position: "relative",
            boxSizing: "border-box",
            marginTop: "5px",
          }}
        >
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
