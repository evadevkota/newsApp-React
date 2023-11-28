import React from "react";

const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, author, date } = props;
  return (
    <div>
      <div>
        <div
          className="card mx-2 my-2"
          style={{
            height: "32rem",
            width: "18rem",
            position: "relative",
            overflow: "hidden",
            borderRadius: "15px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
          }}
        >
          <div style={{ position: "relative", zIndex: 2 }}>
            <img
              src={imageUrl}
              style={{
                height: "200px",
                objectFit: "cover",
                borderTopLeftRadius: "15px",
                borderTopRightRadius: "15px",
              }}
              className="card-img-top"
              alt="..."
            />
          </div>
          <div className="card-body">
            <h5
              className="card-title"
              style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#333" }}
            >
              {title}
            </h5>
            <p
              className="card-text"
              style={{ fontSize: "1rem", color: "#555" }}
            >
              {description}
            </p>
            <p
              style={{ fontSize: "0.9rem", color: "#777" }}
              className="card-text"
            >
              By {author} on {new Date(date).toDateString()}
            </p>
          </div>
          <div className="card-footer bg-transparent border-top-0">
            <a
              href={newsUrl}
              rel="noreferrer"
              target="_blank"
              className="btn btn-sm btn-primary bg-dark"
            >
              More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
