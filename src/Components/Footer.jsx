function Footer() {
  return (
    <>
    <footer className="bg-dark py-4 mt-auto">
    <div className="container px-5">
      <div className="row align-items-center justify-content-between flex-column flex-sm-row">
        <div className="col-auto">
          <div className="text-white">Copyright Your Website 2023</div>
        </div>
        <div className="col-auto">
          <a className="link-light small" href="">
            Privacy
          </a>
          <span className="text-white mx-1">·</span>
          <a className="link-light small">Terms</a>
          <span className="text-white mx-1" href="">
            ·
          </span>
          <a className="link-light small" href="">
            Contact
          </a>
        </div>
      </div>
    </div>
  </footer>
    </>
  )
}

export default Footer