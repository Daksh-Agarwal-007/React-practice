/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */

function OurSection(props) {
  // console.log();

  let title = props["title"];
  let desc = props["desc"];
  let img = props["img"];
  let price = props["price"];
  let images = props["images"];
  return (
    <>
      <section className="py-5 bg-light" id="scroll-target">
        <div className="container px-5 my-5">
          <div className="row gx-5 align-items-center">
            <div className="col-lg-6">
              <img
                className="img-fluid rounded mb-5 mb-lg-0"
                src={img}
                alt="..."
              />
            </div>
            <div className="col-lg-6">
              <h2 className="fw-bolder">{title}</h2>
              <p>${price}</p>
              <p className="lead fw-normal text-muted mb-0">{desc}</p>
            </div>
          </div>
          <div className="row gx-5">
            <div className="col-lg-4">
              {images.map((item, index) => (
                <img src={images[index]} width="100px" />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default OurSection;
