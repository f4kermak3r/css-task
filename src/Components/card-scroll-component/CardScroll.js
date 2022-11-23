import "./CardScroll.css";

export default function CardScroll() {
  return (
    <>
      <div className="card-scroll-object">
        <div className="card-image-container">
          <span class="dot"></span>
          <div className="card-scroll-title">Lorem Ipsum</div>
        </div>
        <div className="card-scroll-body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut
          enim libero. Nam ullamcorper faucibus eleifend.
        </div>
      </div>
      <div className="bottom-border"></div>
    </>
  );
}
