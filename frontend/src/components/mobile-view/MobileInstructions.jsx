import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "../mobile-view/mobileinstruction.css";
function MobileInstructions() {
  return (
    <div className="instruction-carousel1">
      <Carousel>
        <Carousel.Item>
          <h4 className="instruction-title">#1 Step</h4>
          <h6 className="instruction-desc">
            Go to the main page. Select a category of your choice.
          </h6>

          {/* <Carousel.Caption>
            <h4>#1 Step</h4>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <h4 className="instruction-title">#2 Step</h4>
          <h6 className="instruction-desc">
            Answer the following questions. Set the tone.
          </h6>
        </Carousel.Item>
        <Carousel.Item>
          <h4 className="instruction-title">#3 Step</h4>
          <h6 className="instruction-desc">
            Hit the Create Content button. Boom!!
          </h6>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default MobileInstructions;
