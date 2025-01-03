import React from "react";

function Slider() {
  return (
    <>
      <div id="carouselExampleCaptions" className="carousel ">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={0}
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={1}
            aria-label="Slide 2"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={2}
            aria-label="Slide 3"
          />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="src\assets\image\wallpaperflare.com_wallpaper (10).jpg"
              className="d-block w-100 object-fit-cover border rounded "
              alt="..."
              height={"680vh"}
            />
            <div className="carousel-caption d-none d-md-block">
              <h1 className="display-2">Venom:The Last Dance</h1>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="src\assets\image\wallpaperflare.com_wallpaper (11).jpg"
              className="d-block w-100 object-fit-cover border rounded"
              alt="..."
              height={"680vh"}
            />
            <div className="carousel-caption d-none d-md-block">
              <h5 className="display-2">Amazing Spider-Man</h5>
              <p></p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="src\assets\image\wallpaperflare.com_wallpaper (9).jpg"
              className="d-block w-100 object-fit-cover border rounded"
              alt="..."
              height={"680vh"}
            />
            <div className="carousel-caption d-none d-md-block">
              <h5 className="display-2">The Spider Within: A Spider-Verse</h5>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}

export default Slider;
