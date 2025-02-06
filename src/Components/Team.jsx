

function Team(props) {
    // console.log();
    
    let name=props["name"]
    let img=props["img"]
    let pos=props["pos"]
  return (
    <>
    <div className="col mb-5 mb-5 mb-xl-0">
              <div className="text-center">
                <img
                  className="img-fluid rounded-circle mb-4 px-4"
                  src={img}
                  alt="..."
                />
                <h5 className="fw-bolder">{name}</h5>
                <div className="fst-italic text-muted">{pos}</div>
              </div>
            </div>
    </>
  )
}

export default Team