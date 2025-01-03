import React, { useState } from "react";
import Feedback from "./Feedback";
import { FaStar } from "react-icons/fa";

function Card() {
  const [showModal, setShowModal] = useState(false);
  const [movieTitle, setMovieTitle] = useState("");
  const [feedbackList, setFeedbackList] = useState([]);
  const handleModalToggle = (title) => {
    setShowModal(true);
    setMovieTitle(title);
  };

  const addFeedback = (newFeedback) => {
    if (newFeedback) {
      setFeedbackList([...feedbackList, { movie: movieTitle, ...newFeedback }]);
    }
    setShowModal(false);
  };

  return (
    <>
      <div className="mt-4 d-flex flex-wrap p-5">
        <div className="ms-5">
          <div className="card h-100" style={{ width: "18rem" }}>
            <img
              src="src/assets/image/medium-venom-marvel-movie-poster-multicolour-13-x-19-inch-matte-original-imafcwzwnz8zxz8c.webp"
              className="card-img-top h-75 "
              alt="Venom"
            />
            <div className="card-body">
              <h5 className="card-title">Venom</h5>
              <p className="card-text">
                A failed reporter is bonded to an alien entity, one of many
                symbiotes who have invaded Earth. But the being takes a liking.
                more...
              </p>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => handleModalToggle("Venom")}
              >
                Give Feedback
              </button>
            </div>
          </div>
        </div>

        <div className="ms-5">
          <div className="card h-100" style={{ width: "18rem" }}>
            <img
              src="src\assets\image\Spider-Man-No-Way-Home-Movie-Poster-Glossy-Print-Photo-Wall-Art-Zendaya-Cumberbatch-Tom-Holland-Size-11x17-Inches_f524242c-a33a-4f0b-baf7-8f965da8f350.ed75f0c19c9523ed6369389b764c805d.webp"
              className="card-img-top h-75 "
              alt="Spiderman"
            />
            <div className="card-body">
              <h5 className="card-title">Spiderman : No Way Home</h5>
              <p className="card-text">
                A young man gains spider-like abilities and fights crime in his
                city while balancing personal challenges .more...
              </p>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => handleModalToggle("Spiderman")}
              >
                Give Feedback
              </button>
            </div>
          </div>
        </div>

        <div className="ms-5 ">
          <div className="card h-100" style={{ width: "18rem" }}>
            <img
              src="src\assets\image\black-panther-poster.jpg"
              className="card-img-top h-75"
              alt="Deadpool"
            />
            <div className="card-body">
              <h5 className="card-title "> Black Panther</h5>
              <p className="card-text">
                Black Panther is the title held by T'Challa, a member of the
                royal family of the fictional African country of Wakanda.
                more...
              </p>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => handleModalToggle("Black Panther")}
              >
                Give Feedback
              </button>
            </div>
          </div>
        </div>

        <div className="ms-5 ">
          <div className="card h-100" style={{ width: "18rem" }}>
            <img
              src="src\assets\image\iron_man_three_ver2_xlg.webp"
              className="card-img-top h-75"
              alt="Deadpool"
            />
            <div className="card-body">
              <h5 className="card-title ">Iron Mam 3</h5>
              <p className="card-text">
                Iron Man 3 is a 2013 Marvel movie about Tony Stark/Iron Man
                (Robert Downey Jr.) who must use his ingenuity more...
              </p>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => handleModalToggle("Black Panther")}
              >
                Give Feedback
              </button>
            </div>
          </div>
        </div>
        <div className="ms-5 mt-4">
          <div className="card h-100" style={{ width: "18rem" }}>
            <img
              src="https://lh3.googleusercontent.com/proxy/p-p7J8Fvil-T17dyAhuc8uk1Eejh7_HR-wVBNIkNq4mJx49HT56xP8LdvIJRGnSwRZfkHvz37OwmCvi9TY0pVgCdZPX6-ZRv1e9kwP3RIXW-bc2gSuHE07mmo3cl"
              className="card-img-top h-75"
              alt="Deadpool"
            />
            <div className="card-body">
              <h5 className="card-title ">Deadpool 3</h5>
              <p className="card-text">
                {" "}
                Deadpool & Wolverine, is an upcoming Marvel film that Deadpool
                and Wolverine teaming up to save the world. more..
              </p>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => handleModalToggle("Deadpool 3")}
              >
                Give Feedback
              </button>
            </div>
          </div>
        </div>
        <div className="ms-5 mt-4">
          <div className="card h-100" style={{ width: "18rem" }}>
            <img
              src="src\assets\image\Movie_Poster_Fan-Art_-_Doctor_Strange_-_Tallenge_Hollywood_Superhero_Poster_Collection_21a91e37-d840-41f3-bb18-3ee4da12d221.jpg"
              className="card-img-top h-75"
              alt="Doctor"
            />
            <div className="card-body">
              <h5 className="card-title ">Doctor Strange</h5>
              <p className="card-text">
                Doctor Strange, also known as Stephen Strange, is a Marvel
                Comics character and Marvel Cinematic Universe film. more...
              </p>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => handleModalToggle("Doctor Strange")}
              >
                Give Feedback
              </button>
            </div>
          </div>
        </div>
        <div className="ms-5 mt-4">
          <div className="card h-100" style={{ width: "18rem" }}>
            <img
              src="src\assets\image\large-marvel-s-moon-knight-poster-for-wall-and-home-decoration-original-imagebktrqdetwhv.webp"
              className="card-img-top h-75"
              alt="Doctor"
            />
            <div className="card-body">
              <h5 className="card-title ">Moon Knight</h5>
              <p className="card-text">
                Moon Knight is a fictional character with superhuman strength,
                and combat strategy. He's the avatar of the Egyptian moon god.
                more..
              </p>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => handleModalToggle("Moon Knight")}
              >
                Give Feedback
              </button>
            </div>
          </div>
        </div>

        <div className="ms-5 mt-4">
          <div className="card h-100" style={{ width: "18rem" }}>
            <img
              src="src/assets/image/47c2bf6db5c28d8fd986bb7ff20614e9.jpg"
              className="card-img-top h-75"
              alt="Doctor"
            />
            <div className="card-body">
              <h5 className="card-title ">Shang-Chi</h5>
              <p className="card-text">
                Shang-Chi is a Marvel character and the star of the 2021 movie
                Shang-Chi and the Legend of the Ten Rings. more...
              </p>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => handleModalToggle("Shang-Chi")}
              >
                Give Feedback
              </button>
            </div>
          </div>
        </div>
      </div>

      {showModal && (
        <Feedback movieTitle={movieTitle} addFeedback={addFeedback} />
      )}

      {feedbackList.length > 0 && (
        <div className="mt-4 ms-5 w-25 mb-5 pb-5">
          <h2 className="text-white">Feedbacks:</h2>

          {feedbackList.map((feedback, index) => (
            <div key={index} className="feedback-item mb-4">
              <h5>Movie: {feedback.movie}</h5>

              <div className="d-flex align-items-center">
                <h5 className="me-2">Rating:</h5>
                <div className="star-rating">
                  {[...Array(5)].map((_, starIndex) => (
                    <FaStar
                      key={starIndex}
                      className={`star ${
                        starIndex < feedback.rating ? "gold" : "gray"
                      }`}
                    />
                  ))}
                </div>
              </div>

              <p>Description: {feedback.description}</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default Card;
