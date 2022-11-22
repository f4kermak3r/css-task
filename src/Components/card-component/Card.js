import "./Card.css";
import CardScroll from "../card-scroll-component/CardScroll";

export default function Card({ title, body }) {
  return (
    <div className="card-container">
      <div className="md-card-container">
        <div className="image-container">
          <div className="image"></div>
        </div>
        <div className="card-title">{title}</div>
        <div className="card-body">{body}</div>
      </div>
      <div className="card-search">
        <div className="card-input">
          <form>
            <input type="text" placeholder="Placeholder" />
            <input type="submit" value="Search" />
          </form>
        </div>
        <div className="card-article">
          <div className="card-scroll">
            <CardScroll></CardScroll>
            <CardScroll></CardScroll>
            <CardScroll></CardScroll>
            <CardScroll></CardScroll>
            <CardScroll></CardScroll>
            <CardScroll></CardScroll>
            <CardScroll></CardScroll>
          </div>
        </div>
      </div>
    </div>
  );
}
