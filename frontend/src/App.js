import "./App.css";
import Grid from "@mui/material/Grid";
import HeaderLogo from "./HeaderLogo";
import ButtonMain from "./ButtonMain";
import { Routes, Route } from "react-router-dom";
import Categories from "./components/categories/Categories";
import Dummy from "./components/Form/Dummy";
function App() {
  return (
    <>
      <div className="App">
        <Grid container spacing={0.5}>
          <Grid item xs={3}>
            <div className="logo-panel">
              <br></br>
              <HeaderLogo />
              <br></br>
              <br></br>
              <ButtonMain />
            </div>
          </Grid>
          <Grid item xs={8}>
            {/* <hr></hr> */}
            <div className="catgory_menu">
              <br></br>
              <Categories />
            </div>
            <div className="comonents_routes">
              <Routes>
                <Route
                  path="/productdescription"
                  element={
                    <Dummy
                      category={"Product Description"}
                      inputOne={true}
                      inputOneTitle={"What is your product called?"}
                      inputTwo={true}
                      inputTwoTitle={"Describe your product"}
                      inputThree={true}
                    />
                  }
                />
                <Route
                  path="/adcopyvariants"
                  element={
                    <Dummy
                      category={"Ad Copy Variants"}
                      inputOne={true}
                      inputOneTitle={"Product/Brand Name"}
                      inputTwo={true}
                      inputTwoTitle={"Describe your product"}
                      inputThree={true}
                    />
                  }
                />
                <Route
                  path="/facebookheadlines"
                  element={
                    <Dummy
                      category={"Facebook Headlines"}
                      inputOne={true}
                      inputOneTitle={"Product/Brand Name"}
                      inputTwo={true}
                      inputTwoTitle={"Describe your products"}
                      inputThree={true}
                    />
                  }
                />
                <Route
                  path="/facebooklinkdescription"
                  element={
                    <Dummy
                      category={"Facebook Link Descriptions"}
                      inputOne={true}
                      inputOneTitle={"Product/Brand Name"}
                      inputTwo={true}
                      inputTwoTitle={"Describe your products"}
                      inputThree={true}
                    />
                  }
                />
                <Route
                  path="/facebooklisticle"
                  element={
                    <Dummy
                      category={"Facebook Listicle"}
                      inputOne={true}
                      inputOneTitle={"Product/Brand Name"}
                      inputTwo={true}
                      inputTwoTitle={"Describe your products"}
                      inputThree={true}
                    />
                  }
                />
                <Route
                  path="/facebookprimarytext"
                  element={
                    <Dummy
                      category={"Facebook Primary Text"}
                      inputOne={true}
                      inputOneTitle={"Product/Brand Name"}
                      inputTwo={true}
                      inputTwoTitle={"Describe your products"}
                      inputThree={true}
                    />
                  }
                />
                <Route
                  path="/generaladcopy"
                  element={
                    <Dummy
                      category={"General Ad Copy"}
                      inputOne={true}
                      inputOneTitle={"Product/Brand Name"}
                      inputTwo={true}
                      inputTwoTitle={"Describe your products"}
                      inputThree={true}
                    />
                  }
                />
                <Route
                  path="/googledescriptions"
                  element={
                    <Dummy
                      category={"Google Descriptions"}
                      inputOne={true}
                      inputOneTitle={"Product/Brand Name"}
                      inputTwo={true}
                      inputTwoTitle={"Describe your products"}
                      inputThree={true}
                    />
                  }
                />
                <Route
                  path="/googleheadlines"
                  element={
                    <Dummy
                      category={"Google Headlines"}
                      inputOne={true}
                      inputOneTitle={"Product/Brand Name"}
                      inputTwo={true}
                      inputTwoTitle={"Describe your products"}
                      inputThree={true}
                    />
                  }
                />
                <Route
                  path="/linkedinadcopy"
                  element={
                    <Dummy
                      category={"LinkedIn Ad Copy"}
                      inputOne={true}
                      inputOneTitle={"Product/Brand Name"}
                      inputTwo={true}
                      inputTwoTitle={"Describe your products"}
                      inputThree={true}
                    />
                  }
                />
                <Route
                  path="/audiencerefiner"
                  element={
                    <Dummy
                      category={"Audience Refiner"}
                      inputOne={true}
                      inputOneTitle={"Describe your audience"}
                      inputTwo={false}
                      inputTwoTitle={"Describe your products"}
                      inputThree={false}
                    />
                  }
                />
                <Route
                  path="/brandmission"
                  element={
                    <Dummy
                      category={"Brand Mission"}
                      inputOne={true}
                      inputOneTitle={"Product/Brand Name"}
                      inputTwo={true}
                      inputTwoTitle={"Describe your products"}
                      inputThree={true}
                    />
                  }
                />
                <Route
                  path="/brandvoice"
                  element={
                    <Dummy
                      category={"Brand Voice"}
                      inputOne={true}
                      inputOneTitle={"Product/Brand Name"}
                      inputTwo={true}
                      inputTwoTitle={"Describe your product"}
                      inputThree={false}
                    />
                  }
                />
                <Route
                  path="/mottogenerator"
                  element={
                    <Dummy
                      category={"Motto Generator"}
                      inputOne={true}
                      inputOneTitle={"Product/Brand Name"}
                      inputTwo={true}
                      inputTwoTitle={"Describe your products"}
                      inputThree={true}
                    />
                  }
                />
                <Route
                  path="/valueproposition"
                  element={
                    <Dummy
                      category={"Value Proposition"}
                      inputOne={true}
                      inputOneTitle={"What is your business name?"}
                      inputTwo={true}
                      inputTwoTitle={"Describe your products"}
                      inputThree={true}
                    />
                  }
                />
                <Route
                  path="/calltoaction"
                  element={
                    <Dummy
                      category={"Call To Action"}
                      inputOne={true}
                      inputOneTitle={"What is your business name?"}
                      inputTwo={true}
                      inputTwoTitle={"Describe your products"}
                      inputThree={true}
                    />
                  }
                />
                <Route
                  path="/eventcopy"
                  element={
                    <Dummy
                      category={"Event Copy"}
                      inputOne={true}
                      inputOneTitle={"What is the event?"}
                      inputTwo={false}
                      inputTwoTitle={"Describe your products"}
                      inputThree={true}
                    />
                  }
                />
                <Route
                  path="/landingpageherotext"
                  element={
                    <Dummy
                      category={"Landing Page Hero Text"}
                      inputOne={true}
                      inputOneTitle={"What is your business name?"}
                      inputTwo={true}
                      inputTwoTitle={"Describe your products"}
                      inputThree={true}
                    />
                  }
                />
                <Route
                  path="/listicle"
                  element={
                    <Dummy
                      category={"Listicle"}
                      inputOne={true}
                      inputOneTitle={"What's the topic?"}
                      inputTwo={true}
                      inputTwoTitle={"What is the list for?"}
                      inputThree={true}
                    />
                  }
                />
                <Route
                  path="/metadescription"
                  element={
                    <Dummy
                      category={"Meta Descriptions"}
                      inputOne={true}
                      inputOneTitle={"What is your business name?"}
                      inputTwo={true}
                      inputTwoTitle={"Describe your products"}
                      inputThree={true}
                    />
                  }
                />
                <Route
                  path="/microcopy"
                  element={
                    <Dummy
                      category={"Microcopy"}
                      inputOne={true}
                      inputOneTitle={"What's the microcopy for?"}
                      inputTwo={false}
                      inputTwoTitle={"Describe your products"}
                      inputThree={true}
                    />
                  }
                />
                <Route
                  path="/questiongenerator"
                  element={
                    <Dummy
                      category={"Question Generator"}
                      inputOne={true}
                      inputOneTitle={"What are you generating questions for?"}
                      inputTwo={false}
                      inputTwoTitle={"Describe your products"}
                      inputThree={true}
                    />
                  }
                />
                <Route
                  path="/socialprooftext"
                  element={
                    <Dummy
                      category={"Social Proof Text"}
                      inputOne={true}
                      inputOneTitle={"What is your business name?"}
                      inputTwo={true}
                      inputTwoTitle={"Describe your products"}
                      inputThree={true}
                    />
                  }
                />
                <Route
                  path="/subheader"
                  element={
                    <Dummy
                      category={"Subheader"}
                      inputOne={true}
                      inputOneTitle={"What is your business name?"}
                      inputTwo={true}
                      inputTwoTitle={"Describe your products"}
                      inputThree={true}
                    />
                  }
                />
                <Route
                  path="/testimonialrewriter"
                  element={
                    <Dummy
                      category={"Testimonial Rewriter"}
                      inputOne={true}
                      inputOneTitle={"What testimonial would you like to rewrite?"}
                      inputTwo={false}
                      inputTwoTitle={"Describe your products"}
                      inputThree={true}
                    />
                  }
                />
                <Route
                  path="/blogconclusion"
                  element={
                    <Dummy
                      category={"Blog Conclusion"}
                      inputOne={true}
                      inputOneTitle={"What is your blog topic?"}
                      inputTwo={true}
                      inputTwoTitle={"What is your blog about?"}
                      inputThree={true}
                    />
                  }
                />
                <Route
                  path="/blogideas"
                  element={
                    <Dummy
                      category={"Blog Ideas"}
                      inputOne={true}
                      inputOneTitle={"What is your business name?"}
                      inputTwo={true}
                      inputTwoTitle={"Describe your products"}
                      inputThree={true}
                    />
                  }
                />
                <Route
                  path="/blogintro"
                  element={
                    <Dummy
                      category={"Blog Intro"}
                      inputOne={true}
                      inputOneTitle={"What is your blog title?"}
                      inputTwo={true}
                      inputTwoTitle={"What is your blog about?"}
                      inputThree={true}
                    />
                  }
                />
                <Route
                  path="/blogoutline"
                  element={
                    <Dummy
                      category={"Blog Outline"}
                      inputOne={true}
                      inputOneTitle={"What is your blog title?"}
                      inputTwo={true}
                      inputTwoTitle={"What is your blog about?"}
                      inputThree={true}
                    />
                  }
                />
                <Route
                  path="/blogtitle"
                  element={
                    <Dummy
                      category={"Blog Title"}
                      inputOne={true}
                      inputOneTitle={"Describe your blog topic"}
                      inputTwo={false}
                      inputTwoTitle={"Describe your products"}
                      inputThree={true}
                    />
                  }
                />
                <Route
                  path="/blogtitlelisticle"
                  element={
                    <Dummy
                      category={"Blog Title Listicle"}
                      inputOne={true}
                      inputOneTitle={"Describe your blog topic"}
                      inputTwo={false}
                      inputTwoTitle={"Describe your products"}
                      inputThree={true}
                    />
                  }
                />
                <Route
                  path="/bulletpointtoblogsection"
                  element={
                    <Dummy
                      category={"Bullet Point To Blog Section"}
                      inputOne={true}
                      inputOneTitle={"Blog Topic"}
                      inputTwo={true}
                      inputTwoTitle={"What is the main point of the paragraph?"}
                      inputThree={true}
                    />
                  }
                />
                <Route
                  path="/keywordgenerator"
                  element={
                    <Dummy
                      category={"Keyword Generator"}
                      inputOne={true}
                      inputOneTitle={"What topics are you posting about?"}
                      inputTwo={false}
                      inputTwoTitle={"Describe your products"}
                      inputThree={false}
                    />
                  }
                />
                <Route
                  path="/cancellationemail"
                  element={
                    <Dummy
                      category={"Cancellation Email"}
                      inputOne={true}
                      inputOneTitle={"What is your business name?"}
                      inputTwo={true}
                      inputTwoTitle={"Describe your products"}
                      inputThree={true}
                    />
                  }
                />
                <Route
                  path="/emailsubjectlines"
                  element={
                    <Dummy
                      category={"Email Subject Lines"}
                      inputOne={true}
                      inputOneTitle={"What is your business name?"}
                      inputTwo={true}
                      inputTwoTitle={"Describe your products"}
                      inputThree={true}
                    />
                  }
                />
                <Route
                  path="/confirmationemails"
                  element={
                    <Dummy
                      category={"Confirmation Emails"}
                      inputOne={true}
                      inputOneTitle={"What is the email for?"}
                      inputTwo={false}
                      inputTwoTitle={"Describe your products"}
                      inputThree={true}
                    />
                  }
                />
                <Route
                  path="followupemail"
                  element={
                    <Dummy
                      category={"Follow Up Email"}
                      inputOne={true}
                      inputOneTitle={"What is the email for?"}
                      inputTwo={false}
                      inputTwoTitle={"Describe your products"}
                      inputThree={true}
                    />
                  }
                />
                <Route
                  path="/thankyounote"
                  element={
                    <Dummy
                      category={"Thank You Note"}
                      inputOne={true}
                      inputOneTitle={"Who is the message for?"}
                      inputTwo={true}
                      inputTwoTitle={"What would you like to thank them for?"}
                      inputThree={true}
                    />
                  }
                />
                <Route
                  path="/welcomeemail"
                  element={
                    <Dummy
                      category={"Welcome Email"}
                      inputOne={true}
                      inputOneTitle={"What is your business name?"}
                      inputTwo={true}
                      inputTwoTitle={"Describe your products"}
                      inputThree={true}
                    />
                  }
                />
                <Route
                  path="/addemojitolist"
                  element={
                    <Dummy
                      category={"Add Emoji To List"}
                      inputOne={true}
                      inputOneTitle={"Write your list below"}
                      inputTwo={false}
                      inputTwoTitle={"Describe your products"}
                      inputThree={false}
                    />
                  }
                />
                <Route
                  path="/bulletpoints"
                  element={
                    <Dummy
                      category={"Bullet Points"}
                      inputOne={true}
                      inputOneTitle={"Describe your product"}
                      inputTwo={false}
                      inputTwoTitle={"Describe your products"}
                      inputThree={true}
                    />
                  }
                />
                <Route
                  path="/carouselpost"
                  element={
                    <Dummy
                      category={"Carousel Post"}
                      inputOne={true}
                      inputOneTitle={"What is your topic?"}
                      inputTwo={false}
                      inputTwoTitle={"Describe your products"}
                      inputThree={true}
                    />
                  }
                />
                <Route
                  path="/youtubeideas"
                  element={
                    <Dummy
                      category={"YouTube Ideas"}
                      inputOne={true}
                      inputOneTitle={"Describe your product"}
                      inputTwo={false}
                      inputTwoTitle={"Describe your products"}
                      inputThree={false}
                    />
                  }
                />
                <Route
                  path="/hashtaggenerator"
                  element={
                    <Dummy
                      category={"Hashtag Generator"}
                      inputOne={true}
                      inputOneTitle={"What is your post about?"}
                      inputTwo={false}
                      inputTwoTitle={"Describe your products"}
                      inputThree={false}
                    />
                  }
                />
                <Route
                  path="/hookgenerator"
                  element={
                    <Dummy
                      category={"Hook Generator"}
                      inputOne={true}
                      inputOneTitle={"What is your topic?"}
                      inputTwo={false}
                      inputTwoTitle={"Describe your products"}
                      inputThree={true}
                    />
                  }
                />
                <Route
                  path="/instagramcaption"
                  element={
                    <Dummy
                      category={"Instagram Caption"}
                      inputOne={true}
                      inputOneTitle={"What is your post about?"}
                      inputTwo={false}
                      inputTwoTitle={"Describe your products"}
                      inputThree={true}
                    />
                  }
                />
                <Route
                  path="/instagramproductshowcase"
                  element={
                    <Dummy
                      category={"Instagram Product Showcase"}
                      inputOne={true}
                      inputOneTitle={"What is your business name?"}
                      inputTwo={true}
                      inputTwoTitle={"Describe your products"}
                      inputThree={true}
                    />
                  }
                />
                <Route
                  path="/launchyourproduct"
                  element={
                    <Dummy
                      category={"Launch Your Product"}
                      inputOne={true}
                      inputOneTitle={"What is your business name?"}
                      inputTwo={true}
                      inputTwoTitle={"Describe your products"}
                      inputThree={true}
                    />
                  }
                />
                <Route
                  path="/relatableexperiences"
                  element={
                    <Dummy
                      category={"Relatable Experiences"}
                      inputOne={true}
                      inputOneTitle={"What is your target niche?"}
                      inputTwo={false}
                      inputTwoTitle={"Describe your products"}
                      inputThree={false}
                    />
                  }
                />
                <Route
                  path="/shorttexthook"
                  element={
                    <Dummy
                      category={"Short Text Hook"}
                      inputOne={true}
                      inputOneTitle={"Describe your product"}
                      inputTwo={false}
                      inputTwoTitle={"Describe your products"}
                      inputThree={true}
                    />
                  }
                />
                <Route
                  path="/tiktokbrainstormtopics"
                  element={
                    <Dummy
                      category={"TikTok Brainstorm Topics"}
                      inputOne={true}
                      inputOneTitle={"What is your topic?"}
                      inputTwo={false}
                      inputTwoTitle={"Describe your products"}
                      inputThree={false}
                    />
                  }
                />
                <Route
                  path="/videocalltoaction"
                  element={
                    <Dummy
                      category={"Video Call To Action"}
                      inputOne={true}
                      inputOneTitle={"What is your video title?"}
                      inputTwo={true}
                      inputTwoTitle={"What is your video about?"}
                      inputThree={true}
                    />
                  }
                />
                <Route
                  path="/youtubedescriptionintro"
                  element={
                    <Dummy
                      category={"YouTube Description Intro"}
                      inputOne={true}
                      inputOneTitle={"What is your video title?"}
                      inputTwo={true}
                      inputTwoTitle={"What is your video about?"}
                      inputThree={true}
                    />
                  }
                />
                <Route
                  path="/youtubevideotitle"
                  element={
                    <Dummy
                      category={"YouTube Video Title"}
                      inputOne={true}
                      inputOneTitle={"What is your video about?"}
                      inputTwo={false}
                      inputTwoTitle={"Describe your products"}
                      inputThree={true}
                    />
                  }
                />
                <Route
                  path="/adjectiveaccelerator"
                  element={
                    <Dummy
                      category={"Adjective Accelerator"}
                      inputOne={true}
                      inputOneTitle={"Describe your adjective"}
                      inputTwo={false}
                      inputTwoTitle={"Describe your products"}
                      inputThree={false}
                    />
                  }
                />
                <Route
                  path="/analogygenerator"
                  element={
                    <Dummy
                      category={"Analogy Generator"}
                      inputOne={true}
                      inputOneTitle={"List your topics"}
                      inputTwo={false}
                      inputTwoTitle={"Describe your products"}
                      inputThree={false}
                    />
                  }
                />
                <Route
                  path="/bulletpointtoblogsection"
                  element={
                    <Dummy
                      category={"Bullet Point To Blog Section"}
                      inputOne={true}
                      inputOneTitle={"Blog Topic"}
                      inputTwo={true}
                      inputTwoTitle={"What is the main point of the paragraph?"}
                      inputThree={true}
                    />
                  }
                />
                <Route
                  path="/bulletpointtoparagraph"
                  element={
                    <Dummy
                      category={"Bullet Point To Paragraph"}
                      inputOne={true}
                      inputOneTitle={"Blog Topic"}
                      inputTwo={true}
                      inputTwoTitle={"Describe your paragraph with bullet points"}
                      inputThree={true}
                    />
                  }
                />
                <Route
                  path="/cliffhanger"
                  element={
                    <Dummy
                      category={"Cliffhanger"}
                      inputOne={true}
                      inputOneTitle={"What is your topic?"}
                      inputTwo={false}
                      inputTwoTitle={"Describe your products"}
                      inputThree={true}
                    />
                  }
                />
                <Route
                  path="/essayintro"
                  element={
                    <Dummy
                      category={"Essay Intro"}
                      inputOne={true}
                      inputOneTitle={"What is your essay title?"}
                      inputTwo={true}
                      inputTwoTitle={"What is your essay about?"}
                      inputThree={true}
                    />
                  }
                />
                <Route
                  path="/essayoutline"
                  element={
                    <Dummy
                      category={"Essay Outline"}
                      inputOne={true}
                      inputOneTitle={"What is your essay title?"}
                      inputTwo={true}
                      inputTwoTitle={"What is your essay about?"}
                      inputThree={true}
                    />
                  }
                />
                <Route
                  path="/herostoryintro"
                  element={
                    <Dummy
                      category={"Hero Story Intro"}
                      inputOne={true}
                      inputOneTitle={"A short background of the hero"}
                      inputTwo={false}
                      inputTwoTitle={"Describe your products"}
                      inputThree={true}
                    />
                  }
                />
                <Route
                  path="/herostoryvillain"
                  element={
                    <Dummy
                      category={"Hero Story Villain"}
                      inputOne={true}
                      inputOneTitle={"Hero Name"}
                      inputTwo={true}
                      inputTwoTitle={"Hero Story Background"}
                      inputThree={true}
                    />
                  }
                />
                <Route
                  path="/passivetoactivevoice"
                  element={
                    <Dummy
                      category={"Passive To Active Voice"}
                      inputOne={true}
                      inputOneTitle={"What would you like to rewrite?"}
                      inputTwo={false}
                      inputTwoTitle={"Describe your products"}
                      inputThree={false}
                    />
                  }
                />
                <Route
                  path="/pressreleaseintros"
                  element={
                    <Dummy
                      category={"Press Release Intros"}
                      inputOne={true}
                      inputOneTitle={"What is your business name?"}
                      inputTwo={true}
                      inputTwoTitle={"What is the press release about?"}
                      inputThree={true}
                    />
                  }
                />
                <Route
                  path="/rewritewithkeywords"
                  element={
                    <Dummy
                      category={"Rewrite With Keywords"}
                      inputOne={true}
                      inputOneTitle={"Keywords"}
                      inputTwo={true}
                      inputTwoTitle={"Text to rewrite"}
                      inputThree={false}
                    />
                  }
                />
                <Route
                  path="/sentencerewriter"
                  element={
                    <Dummy
                      category={"Sentence Rewriter"}
                      inputOne={true}
                      inputOneTitle={"What sentence would you like to rewrite?"}
                      inputTwo={false}
                      inputTwoTitle={"Describe your products"}
                      inputThree={true}
                    />
                  }
                />
                <Route
                  path="/simplifysentences"
                  element={
                    <Dummy
                      category={"Simplify Sentences"}
                      inputOne={true}
                      inputOneTitle={"What would like you like to rewrite?"}
                      inputTwo={false}
                      inputTwoTitle={"Describe your products"}
                      inputThree={true}
                    />
                  }
                />
                <Route
                  path="/tonechanger"
                  element={
                    <Dummy
                      category={"Tone Changer"}
                      inputOne={true}
                      inputOneTitle={"What is your business name?"}
                      inputTwo={true}
                      inputTwoTitle={"What would you like to rewrite?"}
                      inputThree={true}
                    />
                  }
                />
                <Route
                  path="/twosentencestories"
                  element={
                    <Dummy
                      category={"Two Sentence Stories"}
                      inputOne={true}
                      inputOneTitle={"What is your topic?"}
                      inputTwo={false}
                      inputTwoTitle={"Describe your products"}
                      inputThree={true}
                    />
                  }
                />
                <Route
                  path="/verbbooster"
                  element={
                    <Dummy
                      category={"Verb Booster"}
                      inputOne={true}
                      inputOneTitle={"Describe your verb"}
                      inputTwo={false}
                      inputTwoTitle={"Describe your products"}
                      inputThree={false}
                    />
                  }
                />
                <Route
                  path="/growthideas"
                  element={
                    <Dummy
                      category={"Growth Ideas"}
                      inputOne={true}
                      inputOneTitle={"What is your business name?"}
                      inputTwo={true}
                      inputTwoTitle={"Describe your products"}
                      inputThree={false}
                    />
                  }
                />
                <Route
                  path="/namegenerator"
                  element={
                    <Dummy
                      category={"Name Generator"}
                      inputOne={true}
                      inputOneTitle={"Describe your product"}
                      inputTwo={false}
                      inputTwoTitle={"Describe your products"}
                      inputThree={false}
                    />
                  }
                />
                <Route
                  path="/nextproduct"
                  element={
                    <Dummy
                      category={"Next Product"}
                      inputOne={true}
                      inputOneTitle={"What is your business name?"}
                      inputTwo={true}
                      inputTwoTitle={"Describe your products"}
                      inputThree={false}
                    />
                  }
                />
                <Route
                  path="/startupideas"
                  element={
                    <Dummy
                      category={"Startup Ideas"}
                      inputOne={true}
                      inputOneTitle={"What interests you?"}
                      inputTwo={false}
                      inputTwoTitle={"Describe your products"}
                      inputThree={false}
                    />
                  }
                />
                <Route
                  path="/viralideas"
                  element={
                    <Dummy
                      category={"Viral Ideas"}
                      inputOne={true}
                      inputOneTitle={"What is your business name?"}
                      inputTwo={true}
                      inputTwoTitle={"Describe your products"}
                      inputThree={false}
                    />
                  }
                />
                <Route
                  path="/birthdaycard"
                  element={
                    <Dummy
                      category={"Birthday Card"}
                      inputOne={true}
                      inputOneTitle={"Who is the message for?"}
                      inputTwo={true}
                      inputTwoTitle={"What are you grateful for?"}
                      inputThree={true}
                    />
                  }
                />
                <Route
                  path="/clubhousebio"
                  element={
                    <Dummy
                      category={"Clubhouse Bio"}
                      inputOne={true}
                      inputOneTitle={"Tell us about yourself"}
                      inputTwo={false}
                      inputTwoTitle={"Describe your products"}
                      inputThree={true}
                    />
                  }
                />
                <Route
                  path="/coverletter"
                  element={
                    <Dummy
                      category={"Cover Letter"}
                      inputOne={true}
                      inputOneTitle={"What's the role?"}
                      inputTwo={true}
                      inputTwoTitle={"List your experience"}
                      inputThree={true}
                    />
                  }
                />
                <Route
                  path="/loveletter"
                  element={
                    <Dummy
                      category={"Love Letter"}
                      inputOne={true}
                      inputOneTitle={"Who is the message for?"}
                      inputTwo={true}
                      inputTwoTitle={"What is the occasion?"}
                      inputThree={true}
                    />
                  }
                />
                <Route
                  path="/resumebulletpoints"
                  element={
                    <Dummy
                      category={"Resume Bullet Points"}
                      inputOne={true}
                      inputOneTitle={"What's the role?"}
                      inputTwo={true}
                      inputTwoTitle={"What did you do?"}
                      inputThree={true}
                    />
                  }
                />
                <Route
                  path="/showerthoughts"
                  element={
                    <Dummy
                      category={"Shower Thoughts"}
                      inputOne={true}
                      inputOneTitle={"What is your target niche?"}
                      inputTwo={false}
                      inputTwoTitle={"Describe your products"}
                      inputThree={true}
                    />
                  }
                />
                <Route
                  path="/add-emoji"
                  element={
                    <Dummy
                      category={"Add Emoji To List"}
                      inputOne={true}
                      inputOneTitle={"Write your list below"}
                      path={"/add-emoji"}
                     
                    />
                  }
                />
                <Route
                  path="/bullet-points"
                  element={
                    <Dummy
                      category={"Bullet Points"}
                      inputOne={true}
                      inputOneTitle={"Describe your product"}
                      inputThree={true}
                      path={"/bullet-points"}
                     
                    />
                  }
                />
              </Routes>
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default App;
