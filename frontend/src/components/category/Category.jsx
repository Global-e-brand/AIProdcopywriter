import React from "react";
import "./category.css";
import { Link } from "react-router-dom";

function Category() {
  return (
    <div>
      <div class="myDIV">Categories</div>
      <div class="hide">
        <div className="parentCategory">
          <ul title="Parent Category" name="Parent Category">
            <div className="categories_listItems">
              <li className="Parent">
                <Link to="/productdescription">Product Description</Link>
                <ul>
                  <li>
                    <Link to="/productdescription">Product Description</Link>
                  </li>
                </ul>
              </li>
              <li className="Parent">
                Digital Ad Copy
                <ul>
                  <li>
                    <Link to="/adcopyvarients"> Ad Copy Varients</Link>
                  </li>
                  <li>
                    <Link to="/facebookheadlines"> Facebook Headlines</Link>
                  </li>
                  <li>
                    <Link to="/facebooklinkdescription">
                      Facebook Link Description
                    </Link>
                  </li>
                  <li>
                    <Link to="/facebooklisticle"> Facebook Listicle</Link>
                  </li>
                  <li>
                    <Link to="/facebookprimarytext">Facebook Primary Text</Link>
                  </li>
                  <li>
                    <Link to="/generaladcopy"> General Ad Copy</Link>
                  </li>
                  <li>
                    <Link to="/googledescriptions"> Google Descriptions</Link>
                  </li>
                  <li>
                    <Link to="/googleheadlines"> Google Headlines</Link>
                  </li>
                  <li>
                    <Link to="/linkedinadcopy">LinkedIn Ad Copy</Link>
                  </li>
                </ul>
              </li>
              <li className="Parent">
                Startup Tools
                <ul>
                  <li>
                    <Link to="/audiencerefiner">Audience Refiner</Link>
                  </li>
                  <li>
                    <Link to="/brandmission">Brand Mission</Link>
                  </li>
                  <li>
                    <Link to="/brandvoice">Brand Voice</Link>
                  </li>
                  <li>
                    <Link to="/mottogenerator">Motto Generator</Link>
                  </li>
                  <li>
                    <Link to="/valueproposition">Value Proposition</Link>
                  </li>
                </ul>
              </li>
              <li className="Parent">
                Website Copy
                <ul>
                  <li>
                    <Link to="/calltoaction">Call To Action</Link>
                  </li>
                  <li>
                    <Link to="/eventcopy">Event Copy</Link>
                  </li>
                  <li>
                    <Link to="/landingpageherotext">
                      Landing Page Hero Text
                    </Link>
                  </li>
                  <li>
                    <Link to="/calltoaction">Listicle</Link>
                  </li>
                  <li>
                    <Link to="/listicle">Meta Descriptions</Link>
                  </li>
                  <li>
                    <Link to="/microcopy">Microcopy</Link>
                  </li>
                  <li>
                    <Link to="/questiongenerator">Question Generator</Link>
                  </li>
                  <li>
                    <Link to="/socialprooftext">Social Proof Text</Link>
                  </li>
                  <li>
                    <Link to="/subheader">Subheader</Link>
                  </li>
                  <li>
                    <Link to="/testimonialrewriter">Testimonial Rewriter</Link>
                  </li>
                </ul>
              </li>
              <li className="Parent">
                Category3
                <ul>
                  <li>Child Category1</li>
                  <li>Child Category1</li>
                </ul>
              </li>
              <li className="Parent">
                Category4
                <ul>
                  <li>Child Category1</li>
                  <li>Child Category2</li>
                </ul>
              </li>
            </div>
            <div className="categories_listItems2">
              <li className="Parent">
                Category1
                <ul>
                  <li>Child Category1</li>
                  <li>Child Category1</li>
                </ul>
              </li>
              <li className="Parent">
                Category2
                <ul>
                  <li>Child Category1</li>
                  <li>Child Category2</li>
                </ul>
              </li>
              <li className="Parent">
                Category3
                <ul>
                  <li>Child Category1</li>
                  <li>Child Category1</li>
                </ul>
              </li>
              <li className="Parent">
                Category4
                <ul>
                  <li>Child Category1</li>
                  <li>Child Category2</li>
                </ul>
              </li>
            </div>
          </ul>
        </div>
        <div className="parentCategory"></div>
        <div className="parentCategory"></div>
      </div>
    </div>
  );
}

export default Category;
