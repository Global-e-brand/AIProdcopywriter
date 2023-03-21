import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "../mobile-view/mobileinstruction.css";
function MobileInstructions() {
  return (
    <div className="instruction-carousel1">
      <Carousel variant="dark" interval={null}>
        <Carousel.Item>
          <h4 className="instruction-title-mobile">Step #1</h4>
          <h6 className="instruction-desc-mobile">
            Go to the main page and select a category.
          </h6>

          {/* <Carousel.Caption>
            <h4>#1 Step</h4>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <h4 className="instruction-title-mobile">Step #2</h4>
          <h6 className="instruction-desc-mobile">
            Answer the questions. Set the Tone.
          </h6>
        </Carousel.Item>
        <Carousel.Item className="test">
          <h4 className="instruction-title-mobile">Step #3</h4>
          <h6 className="instruction-desc-mobile">
            Hit the SUBMIT button. Boom!!
          </h6>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default MobileInstructions;
