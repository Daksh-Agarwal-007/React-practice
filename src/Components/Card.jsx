/* eslint-disable react/prop-types */
function Card(props) {
  let title = props["title"];
  let desc = props["desc"];
  let subtitle = props["subtitle"];
  let img= props["img"];
  
  return (
    <>
      <div className="col-lg-4 mb-5">
        <div className="card h-100 shadow border-0">
          <img
            className="card-img-top"
            src={img}
            alt="..."
          />
          <div className="card-body p-4">
            <div className="badge bg-primary bg-gradient rounded-pill mb-2">
              {subtitle}
            </div>
            <a
              className="text-decoration-none link-dark stretched-link"
              href="#!"
            >
              <h5 className="card-title mb-3">{title}</h5>
            </a>
            <p className="card-text mb-0">{desc}</p>
          </div>
          <div className="card-footer p-4 pt-0 bg-transparent border-top-0">
            <div className="d-flex align-items-end justify-content-between">
              <div className="d-flex align-items-center"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
