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
                <Link to="/category1">Category1</Link>
                <ul>
                  <li>Child Category1</li>
                  <li>Child Category1</li>
                </ul>
              </li>
              <li className="Parent">
                <Link to="/category2"> Category2</Link>
                <ul>
                  <li>Child Category1</li>
                  <li>Child Category2</li>
                </ul>
              </li>
              <li className="Parent">
                <Link to="/category3"> Category3</Link>
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
