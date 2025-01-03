import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

function Feedback({ movieTitle, addFeedback }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(null);
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (rating === 0) {
      alert("Please select a rating");
      return;
    }

    if (!description.trim()) {
      alert("Please enter a description");
      return;
    }

    const newFeedback = { rating, description };
    addFeedback(newFeedback);
  };

  return (
    <div
      className="modal show d-block"
      tabIndex="-1"
      role="dialog"
      style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
    >
      <div className="modal-dialog mt-5" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Feedback for {movieTitle}</h5>
            <button
              type="button"
              className="btn-close"
              aria-label="Close"
              onClick={() => addFeedback(null)}
            ></button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              <div className="rating-section">
                <label>Rating</label>
                {[...Array(5)].map((_, index) => {
                  const starValue = index + 1;
                  return (
                    <FaStar
                      key={index}
                      style={{
                        color: starValue <= (hover || rating) ? "gold" : "gray",
                        cursor: "pointer",
                        fontSize: "24px", // Adjust size as needed
                      }}
                      onClick={() => setRating(starValue)}
                      onMouseEnter={() => setHover(starValue)}
                      onMouseLeave={() => setHover(null)}
                    />
                  );
                })}
              </div>

              <div className="description-section mt-3">
                <label>Description</label>
                <textarea
                  cols={25}
                  rows={3}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>

              <button type="submit" className="btn btn-primary mt-3">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feedback;
