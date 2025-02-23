/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
import Card from "../Components/Card";
import Footer from "../Components/Footer";
import Nav from "../Components/Nav";

function Home() {
  let [color, setcolor] = useState("dark");
  const off = () => {
    console.log("off");
    setcolor("danger");
  };
  const on = () => {
    console.log("on");
    setcolor("dark");
  };
  let [data, setdata] = useState([]);
  useEffect(()=> {
    const callApi= async ()=> {
      const response=await fetch("https://fakestoreapi.com/products")   
      const jsonresponse=await response.json()
      // console.log(jsonresponse);
      setdata(jsonresponse)
    }
      callApi()
  }, [])
  // console.log(data[0]["title"]);
  // console.log(data[0]["price"]);

  return (
    <>
      <Nav />
      <header className={`bg-${color} py-5`}>
        <div className="container px-5">
          <div className="row gx-5 align-items-center justify-content-center">
            <div className="col-lg-8 col-xl-7 col-xxl-6">
              <div className="my-5 text-center text-xl-start">
                <h1 className="display-5 fw-bolder text-white mb-2">
                  A Bootstrap 5 template for modern businesses
                </h1>
                <p className="lead fw-normal text-white-50 mb-4">
                  Quickly design and customize responsive mobile-first sites
                  with Bootstrap, the worlds most popular front-end open source
                  toolkit!
                </p>
                <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-start">
                  <a
                    className="btn btn-outline-light btn-primary btn-lg px-4 me-sm-3"
                    onClick={on}
                  >
                    Change color to black
                  </a>
                  <a
                    className="btn btn-outline-light btn-danger btn-lg px-4"
                    onClick={off}
                  >
                    Change color to red
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-xxl-6 d-none d-xl-block text-center">
              <img
                className="img-fluid rounded-3 my-5"
                src="https://dummyimage.com/600x400/343a40/6c757d"
                alt="..."
              />
            </div>
          </div>
        </div>
      </header>
      <section className="py-5">
        <div className="container px-5 my-5">
          <div className="row gx-5">
            <div className="col-lg-4 mb-5 mb-lg-0">
              <h2 className="fw-bolder mb-0">
                A better way to start building.
              </h2>
            </div>
            <div className="col-lg-8">
              <div className="row gx-5 row-cols-1 row-cols-md-2">
                <div className="col mb-5 h-100">
                  <div className="bg-primary bg-gradient text-white rounded-3 mb-3"></div>
                  <h2 className="h5">Featured title</h2>
                  <p className="mb-0">
                    Paragraph of text beneath the heading to explain the
                    heading. Here is just a bit more text.
                  </p>
                </div>
                <div className="col mb-5 h-100">
                  <div className="bg-primary bg-gradient text-white rounded-3 mb-3"></div>
                  <h2 className="h5">Featured title</h2>
                  <p className="mb-0">
                    Paragraph of text beneath the heading to explain the
                    heading. Here is just a bit more text.
                  </p>
                </div>
                <div className="col mb-5 mb-md-0 h-100">
                  <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3"></div>
                  <h2 className="h5">Featured title</h2>
                  <p className="mb-0">
                    Paragraph of text beneath the heading to explain the
                    heading. Here is just a bit more text.
                  </p>
                </div>
                <div className="col h-100">
                  <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3"></div>
                  <h2 className="h5">Featured title</h2>
                  <p className="mb-0">
                    Paragraph of text beneath the heading to explain the
                    heading. Here is just a bit more text.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="py-5 bg-light">
        <div className="container px-5 my-5">
          <div className="row gx-5 justify-content-center">
            <div className="col-lg-10 col-xl-7">
              <div className="text-center">
                <div className="fs-4 mb-4 fst-italic">
                  Working with Start Bootstrap templates has saved me tons of
                  development time when building new projects! Starting with a
                  Bootstrap template just makes things easier!
                </div>
                <div className="d-flex align-items-center justify-content-center">
                  <img
                    className="rounded-circle me-3"
                    src="https://dummyimage.com/40x40/ced4da/6c757d"
                    alt="..."
                  />
                  <div className="fw-bold">
                    Tom Ato
                    <span className="fw-bold text-primary mx-1">/</span>
                    CEO, Pomodoro
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="py-5">
        <div className="container px-5 my-5">
          <div className="row gx-5 justify-content-center">
            <div className="col-lg-8 col-xl-6">
              <div className="text-center">
                <h2 className="fw-bolder">From our blog</h2>
                <p className="lead fw-normal text-muted mb-5">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Eaque fugit ratione dicta mollitia. Officiis ad.
                </p>
              </div>
            </div>
          </div>
          <div className="row gx-5">
            {data.map((item, index) => (
              <Card
                img={data[index]["image"]}
                subtitle={data[index]["category"]}
                title={data[index]["title"]}
                desc={data[index]["description"]}
              />
            ))}
            {/* <Card
                img="https://dummyimage.com/600x350/adb5bd/495057"
                subtitle="Media"
                title="Another blog post title"
                desc="This text is a bit longer to illustrate the adaptive height of each card. Some quick example text to build on the card title and make up the bulk of the card content."
              />
              <Card
                img="https://dummyimage.com/600x350/6c757d/343a40"
                subtitle="Media"
                title="The last blog post title is a little bit longer than the others"
                desc="Some more quick example text to build on the card title and make up the bulk of the card content."
              /> */}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Home;
