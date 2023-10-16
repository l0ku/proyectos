/* eslint-disable react/prop-types */
function Modal(props) {
  return (
    <>
      <div
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: '#000',
          position: 'absolute',
          opacity: 0.5,
          transition: '0.5s',
        }}
      >
        .
      </div>
      <div
        className="modal fade in"
        tabIndex="-1"
        style={{
          display: 'block',
          opacity: 1,
          transition: 'ease-out',
          transitionDuration: 0.5,
        }}
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Welcome to my PERN stack project!</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={() => {
                  props.onAppStart(true);
                }}
              ></button>
            </div>
            <div className="modal-body">
              <p>
                In this project, I implement PostgreSQL with the &apos;pg&apos;
                libraries, following the RESTful architecture in the backend.
              </p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
                onClick={() => {
                  props.onAppStart(true);
                }}
              >
                Try the app
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="modal fade" tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Welcome to my PERN project!</h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <p>
                  In this project, I implement PostgreSQL with the &apospg&apos
                  libraries, following the RESTful architecture in the backend.
                </p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div> */}
    </>
  );
}

export default Modal;
