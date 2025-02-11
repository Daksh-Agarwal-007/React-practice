/* eslint-disable react/jsx-key */
/* eslint-disable no-undef */
import { useEffect, useState } from "react";
import Footer from "../Components/Footer";
import Nav from "../Components/Nav";
import OurSection from "../Components/OurSection";
import Team from "../Components/Team";

function About() {
  let [product, setProduct] = useState({});
  useEffect(() => {
    const callApi = async () => {
      const response = await fetch("https://dummyjson.com/products");
      const jsonresponse = await response.json();
      // console.log(jsonresponse);
      setProduct(jsonresponse);
    };
    callApi();
  }, []);
  // console.log(product["products"] && product["products"][0]["title"]);

  return (
    <>
      <Nav />
      <header className="py-5">
        <div className="container px-5">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-xxl-6">
              <div className="text-center my-5">
                <h1 className="fw-bolder mb-3">
                  Our mission is to make building websites easier for everyone.
                </h1>
                <p className="lead fw-normal text-muted mb-4">
                  Start Bootstrap was built on the idea that quality, functional
                  website templates and themes should be available to everyone.
                  Use our open source, free products, or support us by
                  purchasing one of our premium products or services.
                </p>
                <a className="btn btn-primary btn-lg" href="#scroll-target">
                  Read our story
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
      {product["products"] && product["products"].map((item, index) => (
      <OurSection
      images={product["products"][index]["images"]}
      img={product["products"][index]["thumbnail"]}
      title={product["products"][index]["title"]}
      price={product["products"][index]["price"]}
      desc={product["products"][index]["description"]}
        // foundation="Our founding"
        // lorem="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto est, ut esse a labore aliquam beatae expedita. Blanditiis impedit numquam libero molestiae et fugit cupiditate, quibusdam expedita, maiores eaque quisquam. "
      />
    ))}
      <section className="py-5 bg-light">
        <div className="container px-5 my-5">
          <div className="text-center">
            <h2 className="fw-bolder">Our team</h2>
            <p className="lead fw-normal text-muted mb-5">
              Dedicated to quality and your success
            </p>
          </div>
          <div className="row gx-5 row-cols-1 row-cols-sm-2 row-cols-xl-4 justify-content-center">
            <Team
              name="Ibbie Eckart"
              img="Screenshot (232).png"
              pos="Founder &amp; CEO"
            />
            <Team
              name="Daksh Agarwal"
              img="Screenshot (242).png"
              pos="Founder"
            />
            <Team name="Hello" img="Screenshot (251).png" pos="CEO" />
            <Team name="Poiuy" img="Screenshot (251).png" pos="Backer" />
            <Team name="Qwert" img="Screenshot (251).png" pos="Helper" />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default About;
