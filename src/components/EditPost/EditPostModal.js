import React from "react";

export const EditPostModal = ({ setAnchorEl }) => {
  return (
    <div>
      <button
        type="button"
        className="btn default-button"
        data-bs-toggle="modal"
        data-bs-target={`#exampleModal1`}
        onClick={() => {
          console.log("Hello neog");
        }}
      >
        View Details NEOG
      </button>
      <div
        className="modal fade"
        id={`exampleModal1`}
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Edit Post
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              Post Details
              <button onClick={() => console.log("In here jagrut")}>
                {" "}
                click me
              </button>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                data-bs-dismiss="modal"
                className="btn btn-primary"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
