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
                    <Link to="/adcopyvariants"> Ad Copy Variants</Link>
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
                    <Link to="/listicle">Listicle</Link>
                  </li>
                  <li>
                    <Link to="/metadescription">Meta Descriptions</Link>
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
                Blog Tools
                <ul>
                  <li>
                    <Link to="/blogconclusion">Blog Conclusion</Link>
                  </li>
                  <li>
                    <Link to="/blogideas">Blog Ideas</Link>
                  </li>
                  <li>
                    <Link to="/blogintro">Blog Intro</Link>
                  </li>
                  <li>
                    <Link to="/blogoutline">Blog Outline</Link>
                  </li>
                  <li>
                    <Link to="/blogtitle">Blog Title</Link>
                  </li>
                  <li>
                    <Link to="/blogtitlelisticle">Blog Title Listicle</Link>
                  </li>
                  <li>
                    <Link to="/bulletpointtoblogsection">
                      Bullet Point To Blog Section
                    </Link>
                  </li>
                  <li>
                    <Link to="/keywordgenerator">Keyword Generator</Link>
                  </li>
                </ul>
              </li>
              <li className="Parent">
                Emails & Letters
                <ul>
                  <li>
                    <Link to="/cancellationemail">Cancellation Email</Link>
                  </li>
                  <li>
                    <Link to="/emailsubjectlines">Email Subject Lines</Link>
                  </li>
                  <li>
                    <Link to="/confirmationemails">Confirmation Emails</Link>
                  </li>
                  <li>
                    <Link to="/followupemail">Follow Up Mail</Link>
                  </li>
                  <li>
                    <Link to="/thankyounote">Thank You Note</Link>
                  </li>
                  <li>
                    <Link to="/welcomeemail">Welcome Email</Link>
                  </li>
                </ul>
              </li>
            </div>
<<<<<<< HEAD
            <div className="categories_listItems2">          
=======
            <div className="categories_listItems2">
              <li className="Parent">
                Social Media Tools
                <ul>
                  <li>
                    <Link to="/add-emoji">Add Emoji To List</Link>
                  </li>
                  <li>
                    <Link to="/bullet-points">Bullet Points</Link>
                  </li>
                  <li>
                    <Link to="/carousel-post">Carousel Post</Link>
                  </li>
                  <li>
                    <Link to="/youtube-ideas">YouTube Ideas</Link>
                  </li>
                  <li>
                    <Link to="/hashtag-generator">Hashtag Generator</Link>
                  </li>
                  <li>
                    <Link to="/hook-generator">Hook Generator</Link>
                  </li>
                  <li>
                    <Link to="/instagram-caption">Instagram Caption</Link>
                  </li>
                  <li>
                    <Link to="/instagram-products">
                      Instagram Product Showcase
                    </Link>
                  </li>
                  <li>
                    <Link to="/launchyourproduct">Launch Your Product</Link>
                  </li>
                  <li>
                    <Link to="/relatable-experiences">
                      Relatable Experiences
                    </Link>
                  </li>
                  <li>
                    <Link to="/short-texthook">Short Text Hook</Link>
                  </li>
                  <li>
                    <Link to="/tiktok-brainstorm-topics">
                      TikTok Brainstorm Topics
                    </Link>
                  </li>
                  <li>
                    <Link to="/videocalltoaction">Video Call To Action</Link>
                  </li>
                  <li>
                    <Link to="/youtubedescriptionintro">
                      YouTube Description Intro
                    </Link>
                  </li>
                  <li>
                    <Link to="/youtubevideotitle">YouTube Video Title</Link>
                  </li>
                </ul>
              </li>
>>>>>>> feature/jason
              <li className="Parent">
                Sales Tools
                <ul>
                  <li>
                    <Link to="/aida">Attention-Interest-Desire-Action</Link>
                  </li>
                  <li>
                    <Link to="/bab">Before-After-Bridge</Link>
                  </li>
                  <li>
                    <Link to="/features-to-benefits">Features To Benefits</Link>
                  </li>
                  <li>
                    <Link to="/fab">Features Advantages Benefits</Link>
                  </li>
                  <li>
                    <Link to="/marketing-angles">Marketing Angles</Link>
                  </li>
                  <li>
                    <Link to="/pas">Pain-Agitate-Solution</Link>
                  </li>
                  <li>
                    <Link to="/pppp">Problem-Promise-Proof-Proposal</Link>
                  </li>
                  <li>
                    <Link to="/quest-copywriting">QUEST Copywriting</Link>
                  </li>
                </ul>
              </li>
              <li className="Parent">
                Writing Tools
                <ul>
                  <li>
                    <Link to="/adjectiveaccelerator">
                      Adjective Accelerator
                    </Link>
                  </li>
                  <li>
                    <Link to="/analogygenerator">Analogy Generator</Link>
                  </li>
                  <li>
                    <Link to="/bulletpointtoblogsection">
                      Bullet Point To Blog Section
                    </Link>
                  </li>
                  <li>
                    <Link to="/bulletpointtoparagraph">
                      Bullet Point To Paragraph
                    </Link>
                  </li>
                  <li>
                    <Link to="/cliffhanger">Cliffhanger</Link>
                  </li>
                  <li>
                    <Link to="/essayintro">Essay Intro</Link>
                  </li>
                  <li>
                    <Link to="/essayoutline">Essay Outline</Link>
                  </li>
                  <li>
                    <Link to="/herostoryintro">Hero Story Intro</Link>
                  </li>
                  <li>
                    <Link to="/herostoryvillain">Hero Story Villain</Link>
                  </li>
                  <li>
                    <Link to="/passivetoactivevoice">
                      Passive To Active Voice
                    </Link>
                  </li>
                  <li>
                    <Link to="/pressreleaseintros">Press Release Intros</Link>
                  </li>
                  <li>
                    <Link to="/rewritewithkeywords">Rewrite With Keywords</Link>
                  </li>
                  <li>
                    <Link to="/sentencerewriter">Sentence Rewriter</Link>
                  </li>
                  <li>
                    <Link to="/simplifysentences">Simplify Sentences</Link>
                  </li>
                  <li>
                    <Link to="/tonechanger">Tone Changer</Link>
                  </li>
                  <li>
                    <Link to="/twosentencestories">Two Sentence Stories</Link>
                  </li>
                  <li>
                    <Link to="/verbbooster">Verb Booster</Link>
                  </li>
                </ul>
              </li>
              <li className="Parent">
                Brainstorming Tools
                <ul>
                  <li>
                    <Link to="/growthideas">Growth Ideas</Link>
                  </li>
                  <li>
                    <Link to="/namegenerator">Name Generator</Link>
                  </li>
                  <li>
                    <Link to="/nextproduct">Next Product</Link>
                  </li>
                  <li>
                    <Link to="/startupideas">Start Up Ideas</Link>
                  </li>
                  <li>
                    <Link to="/viralideas">Viral Ideas</Link>
                  </li>
                </ul>
              </li>
              <li className="Parent">
                Personal Tools
                <ul>
                  <li>
                    <Link to="/birthdaycard">Birthday Card</Link>
                  </li>
                  <li>
                    <Link to="/clubhousebio">Clubhouse Bio</Link>
                  </li>
                  <li>
                    <Link to="/coverletter">Cover Letter</Link>
                  </li>
                  <li>
                    <Link to="/loveletter">Love Letter</Link>
                  </li>
                  <li>
                    <Link to="/resumebulletpoints">Resume Bullet Points</Link>
                  </li>
                  <li>
                    <Link to="/showerthoughts">Shower Thoughts</Link>
                  </li>
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
