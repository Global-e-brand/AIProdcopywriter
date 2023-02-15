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
                      path={"/productdescription"}
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
                      path={"/adcopyvariants"}
                      category={"Ad Copy Variants"}
                      inputOne={true}
                      inputOneTitle={"Describe your product"}
                      inputTwo={false}
                      inputTwoTitle={""}
                      inputThree={true}
                    />
                  }
                />
                <Route
                  path="/facebookheadlines"
                  element={
                    <Dummy
                      path={"/facebookheadlines"}
                      category={"Facebook Headlines"}
                      inputOne={true}
                      inputOneTitle={"What is the headline for?"}
                      inputTwo={false}
                      inputTwoTitle={""}
                      inputThree={true}
                    />
                  }
                />
                <Route
                  path="/facebooklinkdescription"
                  element={
                    <Dummy
                      path={"/facebooklinkdescription"}
                      category={"Facebook Link Descriptions"}
                      inputOne={true}
                      inputOneTitle={"Describe the topic"}
                      inputTwo={false}
                      inputTwoTitle={""}
                      inputThree={false}
                    />
                  }
                />
                <Route
                  path="/facebooklisticle"
                  element={
                    <Dummy
                      path={"/facebooklisticle"}
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
                      path={"/facebookprimarytext"}
                      category={"Facebook Primary Text"}
                      inputOne={true}
                      inputOneTitle={"Describe the topic"}
                      inputTwo={false}
                      inputTwoTitle={""}
                      inputThree={true}
                    />
                  }
                />
                <Route
                  path="/generaladcopy"
                  element={
                    <Dummy
                      path={"/generaladcopy"}
                      category={"General Ad Copy"}
                      inputOne={true}
                      inputOneTitle={"What is the copy for?"}
                      inputTwo={false}
                      inputTwoTitle={""}
                      inputThree={true}
                    />
                  }
                />
                <Route
                  path="/googledescriptions"
                  element={
                    <Dummy
                      path={"/googledescriptions"}
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
                      path={"/googleheadlines"}
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
                      path={"/linkedinadcopy"}
                      category={"LinkedIn Ad Copy"}
                      inputOne={true}
                      inputOneTitle={"What is the copy for?"}
                      inputTwo={false}
                      inputTwoTitle={""}
                      inputThree={true}
                    />
                  }
                />
                <Route
                  path="/audiencerefiner"
                  element={
                    <Dummy
                      path={"/audiencerefiner"}
                      category={"Audience Refiner"}
                      inputOne={true}
                      inputOneTitle={"Describe your audience"}
                      inputTwo={false}
                      inputTwoTitle={"Describe your products"}
                      inputThree={true}
                    />
                  }
                />
                <Route
                  path="/brandmission"
                  element={
                    <Dummy
                      path={"/brandmission"}
                      category={"Brand Mission"}
                      inputOne={true}
                      inputOneTitle={"Describe your brand/product"}
                      inputTwo={false}
                      inputTwoTitle={""}
                      inputThree={true}
                    />
                  }
                />
                <Route
                  path="/brandvoice"
                  element={
                    <Dummy
                      path={"/brandvoice"}
                      category={"Brand Voice"}
                      inputOne={true}
                      inputOneTitle={"Product/Brand Name"}
                      inputTwo={true}
                      inputTwoTitle={"Describe your product"}
                      inputThree={true}
                    />
                  }
                />
                <Route
                  path="/mottogenerator"
                  element={
                    <Dummy
                      path={"/mottogenerator"}
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
                      path={"/valueproposition"}
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
                      path={"/calltoaction"}
                      category={"Call To Action"}
                      inputOne={true}
                      inputOneTitle={"Describe your product"}
                      inputTwo={false}
                      inputTwoTitle={""}
                      inputThree={true}
                    />
                  }
                />
                <Route
                  path="/eventcopy"
                  element={
                    <Dummy
                      path={"/eventcopy"}
                      category={"Event Copy"}
                      inputOne={true}
                      inputOneTitle={"What is the event?"}
                      inputTwo={true}
                      inputTwoTitle={"Describe your event"}
                      inputThree={true}
                    />
                  }
                />
                <Route
                  path="/landingpageherotext"
                  element={
                    <Dummy
                      path={"/landingpageherotext"}
                      category={"Landing Page Hero Text"}
                      inputOne={true}
                      inputOneTitle={"What is your landing page for?"}
                      inputTwo={false}
                      inputTwoTitle={""}
                      inputThree={true}
                    />
                  }
                />
                <Route
                  path="/listicle"
                  element={
                    <Dummy
                      path={"/listicle"}
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
                      path={"/metadescription"}
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
                      path={"/microcopy"}
                      category={"Microcopy"}
                      inputOne={true}
                      inputOneTitle={"What's the microcopy for?"}
                      inputTwo={false}
                      inputTwoTitle={""}
                      inputThree={true}
                    />
                  }
                />
                <Route
                  path="/questiongenerator"
                  element={
                    <Dummy
                      path={"/questiongenerator"}
                      category={"Question Generator"}
                      inputOne={true}
                      inputOneTitle={"What are you generating questions for?"}
                      inputTwo={false}
                      inputTwoTitle={""}
                      inputThree={true}
                    />
                  }
                />
                <Route
                  path="/socialprooftext"
                  element={
                    <Dummy
                      path={"/socialprooftext"}
                      category={"Social Proof Text"}
                      inputOne={true}
                      inputOneTitle={"What will the social proof be used for?"}
                      inputTwo={false}
                      inputTwoTitle={""}
                      inputThree={true}
                    />
                  }
                />
                <Route
                  path="/subheader"
                  element={
                    <Dummy
                      path={"/subheader"}
                      category={"Subheader"}
                      inputOne={true}
                      inputOneTitle={"What is your business?"}
                      inputTwo={true}
                      inputTwoTitle={"What is the header?"}
                      inputThree={true}
                    />
                  }
                />
                <Route
                  path="/testimonialrewriter"
                  element={
                    <Dummy
                      path={"/testimonialrewriter"}
                      category={"Testimonial Rewriter"}
                      inputOne={true}
                      inputOneTitle={
                        "What testimonial would you like to rewrite?"
                      }
                      inputTwo={false}
                      inputTwoTitle={""}
                      inputThree={true}
                    />
                  }
                />
                <Route
                  path="/blogconclusion"
                  element={
                    <Dummy
                      path={"/blogconclusion"}
                      category={"Blog Conclusion"}
                      inputOne={true}
                      inputOneTitle={"Provide some information about your blog (sample paragraph, title, etc)"}
                      inputTwo={false}
                      inputTwoTitle={""}
                      inputThree={true}
                    />
                  }
                />
                <Route
                  path="/blogideas"
                  element={
                    <Dummy
                      path={"/blogideas"}
                      category={"Blog Ideas"}
                      inputOne={true}
                      inputOneTitle={"What are you interested in?"}
                      inputTwo={false}
                      inputTwoTitle={""}
                      inputThree={true}
                    />
                  }
                />
                <Route
                  path="/blogintro"
                  element={
                    <Dummy
                      path={"/blogintro"}
                      category={"Blog Intro"}
                      inputOne={true}
                      inputOneTitle={"What would you like to include in the intro?"}
                      inputTwo={false}
                      inputTwoTitle={""}
                      inputThree={true}
                    />
                  }
                />
                <Route
                  path="/blogoutline"
                  element={
                    <Dummy
                      path={"/blogoutline"}
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
                      path={"/blogtitle"}
                      category={"Blog Title"}
                      inputOne={true}
                      inputOneTitle={"Describe your blog topic"}
                      inputTwo={false}
                      inputTwoTitle={""}
                      inputThree={true}
                    />
                  }
                />
                <Route
                  path="/blogtitlelisticle"
                  element={
                    <Dummy
                      path={"/blogtitlelisticle"}
                      category={"Blog Title Listicle"}
                      inputOne={true}
                      inputOneTitle={"Describe your blog topic"}
                      inputTwo={false}
                      inputTwoTitle={""}
                      inputThree={true}
                    />
                  }
                />
                <Route
                  path="/bulletpointtoblogsection"
                  element={
                    <Dummy
                      path={"/bulletpointtoblogsection"}
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
                      path={"/keywordgenerator"}
                      category={"Keyword Generator"}
                      inputOne={true}
                      inputOneTitle={"What topics are you posting about?"}
                      inputTwo={false}
                      inputTwoTitle={""}
                      inputThree={true}
                    />
                  }
                />
                <Route
                  path="/cancellationemail"
                  element={
                    <Dummy
                      path={"/cancellationemail"}
                      category={"Cancellation Email"}
                      inputOne={true}
                      inputOneTitle={"What is the email for?"}
                      inputTwo={false}
                      inputTwoTitle={""}
                      inputThree={true}
                    />
                  }
                />
                <Route
                  path="/emailsubjectlines"
                  element={
                    <Dummy
                      path={"/emailsubjectlines"}
                      category={"Email Subject Lines"}
                      inputOne={true}
                      inputOneTitle={"Describe your brand/product"}
                      inputTwo={false}
                      inputTwoTitle={""}
                      inputThree={true}
                    />
                  }
                />
                <Route
                  path="/confirmationemails"
                  element={
                    <Dummy
                      path={"/confirmationemails"}
                      category={"Confirmation Emails"}
                      inputOne={true}
                      inputOneTitle={"What is the email for?"}
                      inputTwo={false}
                      inputTwoTitle={""}
                      inputThree={true}
                    />
                  }
                />
                <Route
                  path="followupemail"
                  element={
                    <Dummy
                      path={"/followupemail"}
                      category={"Follow Up Email"}
                      inputOne={true}
                      inputOneTitle={"What is the email for?"}
                      inputTwo={false}
                      inputTwoTitle={""}
                      inputThree={true}
                    />
                  }
                />
                <Route
                  path="/thankyounote"
                  element={
                    <Dummy
                      path={"/thankyounote"}
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
                      path={"/welcomeemail"}
                      category={"Welcome Email"}
                      inputOne={true}
                      inputOneTitle={"Who is the email for?"}
                      inputTwo={true}
                      inputTwoTitle={"What is the the email for"}
                      inputThree={true}
                    />
                  }
                />
                <Route
                  path="/addemojitolist"
                  element={
                    <Dummy
                      path={"/addemojitolist"}
                      category={"Add Emoji To List"}
                      inputOne={true}
                      inputOneTitle={"Write your list below (one item per line)"}
                      inputTwo={false}
                      inputTwoTitle={""}
                      inputThree={true}
                    />
                  }
                />
                <Route
                  path="/bulletpoints"
                  element={
                    <Dummy
                      path={"/bulletpoints"}
                      category={"Bullet Points"}
                      inputOne={true}
                      inputOneTitle={"What text would you like to summarize?"}
                      inputTwo={false}
                      inputTwoTitle={""}
                      inputThree={true}
                    />
                  }
                />
                <Route
                  path="/carouselpost"
                  element={
                    <Dummy
                      path={"/carouselpost"}
                      category={"Carousel Post"}
                      inputOne={true}
                      inputOneTitle={"Describe your topic"}
                      inputTwo={false}
                      inputTwoTitle={""}
                      inputThree={true}
                    />
                  }
                />
                <Route
                  path="/youtubeideas"
                  element={
                    <Dummy
                      path={"/youtubeideas"}
                      category={"YouTube Ideas"}
                      inputOne={true}
                      inputOneTitle={"Describe your topic"}
                      inputTwo={false}
                      inputTwoTitle={""}
                      inputThree={true}
                    />
                  }
                />
                <Route
                  path="/hashtaggenerator"
                  element={
                    <Dummy
                      path={"/hashtaggenerator"}
                      category={"Hashtag Generator"}
                      inputOne={true}
                      inputOneTitle={"Describe your topic"}
                      inputTwo={false}
                      inputTwoTitle={""}
                      inputThree={true}
                    />
                  }
                />
                <Route
                  path="/hookgenerator"
                  element={
                    <Dummy
                      path={"/hookgenerator"}
                      category={"Hook Generator"}
                      inputOne={true}
                      inputOneTitle={"Describe the topic"}
                      inputTwo={false}
                      inputTwoTitle={""}
                      inputThree={true}
                    />
                  }
                />
                <Route
                  path="/instagramcaption"
                  element={
                    <Dummy
                      path={"/instagramcaption"}
                      category={"Instagram Caption"}
                      inputOne={true}
                      inputOneTitle={"Describe the topic?"}
                      inputTwo={false}
                      inputTwoTitle={""}
                      inputThree={true}
                    />
                  }
                />
                <Route
                  path="/instagramproductshowcase"
                  element={
                    <Dummy
                      path={"/instagramproductshowcase"}
                      category={"Instagram Product Showcase"}
                      inputOne={true}
                      inputOneTitle={"What is your product?"}
                      inputTwo={false}
                      inputTwoTitle={""}
                      inputThree={true}
                    />
                  }
                />
                <Route
                  path="/launchyourproduct"
                  element={
                    <Dummy
                      path={"/launchyourproduct"}
                      category={"Launch Your Product"}
                      inputOne={true}
                      inputOneTitle={"Describe your product"}
                      inputTwo={true}
                      inputTwoTitle={"What is your brand/product?"}
                      inputThree={true}
                    />
                  }
                />
                <Route
                  path="/relatableexperiences"
                  element={
                    <Dummy
                      path={"/relatableexperiences"}
                      category={"Relatable Experiences"}
                      inputOne={true}
                      inputOneTitle={"What is the experience?"}
                      inputTwo={false}
                      inputTwoTitle={""}
                      inputThree={true}
                    />
                  }
                />
                <Route
                  path="/shorttexthook"
                  element={
                    <Dummy
                      path={"/shorttexthook"}
                      category={"Short Text Hook"}
                      inputOne={true}
                      inputOneTitle={"Describe your topic"}
                      inputTwo={false}
                      inputTwoTitle={""}
                      inputThree={true}
                    />
                  }
                />
                <Route
                  path="/tiktokbrainstormtopics"
                  element={
                    <Dummy
                      path={"/tiktokbrainstormtopics"}
                      category={"TikTok Brainstorm Topics"}
                      inputOne={true}
                      inputOneTitle={"What are you interested in?"}
                      inputTwo={false}
                      inputTwoTitle={""}
                      inputThree={true}
                    />
                  }
                />
                <Route
                  path="/videocalltoaction"
                  element={
                    <Dummy
                      path={"/videocalltoaction"}
                      category={"Video Call To Action"}
                      inputOne={true}
                      inputOneTitle={"What is your video about?"}
                      inputTwo={false}
                      inputTwoTitle={""}
                      inputThree={true}
                    />
                  }
                />
                <Route
                  path="/youtubedescriptionintro"
                  element={
                    <Dummy
                      path={"/youtubedescriptionintro"}
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
                      path={"/youtubevideotitle"}
                      category={"YouTube Video Title"}
                      inputOne={true}
                      inputOneTitle={"What is your video about?"}
                      inputTwo={false}
                      inputTwoTitle={""}
                      inputThree={true}
                    />
                  }
                />
                <Route
                  path="/adjectiveaccelerator"
                  element={
                    <Dummy
                      path={"/adjectiveaccelerator"}
                      category={"Adjective Accelerator"}
                      inputOne={true}
                      inputOneTitle={"Describe your adjective"}
                      inputTwo={false}
                      inputTwoTitle={""}
                      inputThree={true}
                    />
                  }
                />
                <Route
                  path="/analogygenerator"
                  element={
                    <Dummy
                      path={"/analogygenerator"}
                      category={"Analogy Generator"}
                      inputOne={true}
                      inputOneTitle={"What would you like the analogy to be about?"}
                      inputTwo={false}
                      inputTwoTitle={""}
                      inputThree={true}
                    />
                  }
                />
                <Route
                  path="/bulletpointtoparagraph"
                  element={
                    <Dummy
                      path={"/bulletpointtoparagraph"}
                      category={"Bullet Point To Paragraph"}
                      inputOne={true}
                      inputOneTitle={"Describe your paragraph with bullet points"}
                      inputTwo={false}
                      inputTwoTitle={""}
                      inputThree={true}
                    />
                  }
                />
                <Route
                  path="/cliffhanger"
                  element={
                    <Dummy
                      path={"/cliffhanger"}
                      category={"Cliffhanger"}
                      inputOne={true}
                      inputOneTitle={"What text comes before the cliffhanger?"}
                      inputTwo={false}
                      inputTwoTitle={""}
                      inputThree={true}
                    />
                  }
                />
                <Route
                  path="/essayintro"
                  element={
                    <Dummy
                      path={"/essayintro"}
                      category={"Essay Intro"}
                      inputOne={true}
                      inputOneTitle={"What is your essay about?"}
                      inputTwo={false}
                      inputTwoTitle={""}
                      inputThree={true}
                    />
                  }
                />
                <Route
                  path="/essayoutline"
                  element={
                    <Dummy
                      path={"/essayoutline"}
                      category={"Essay Outline"}
                      inputOne={true}
                      inputOneTitle={"What is your essay topic?"}
                      inputTwo={true}
                      inputTwoTitle={"What should the essay cover?"}
                      inputThree={true}
                    />
                  }
                />
                <Route
                  path="/herostoryintro"
                  element={
                    <Dummy
                      path={"/herostoryintro"}
                      category={"Hero Story Intro"}
                      inputOne={true}
                      inputOneTitle={"A short background of the hero"}
                      inputTwo={false}
                      inputTwoTitle={""}
                      inputThree={true}
                    />
                  }
                />
                <Route
                  path="/herostoryvillain"
                  element={
                    <Dummy
                      path={"/herostoryvillain"}
                      category={"Hero Story Villain"}
                      inputOne={true}
                      inputOneTitle={"A short background of the hero"}
                      inputTwo={false}
                      inputTwoTitle={""}
                      inputThree={true}
                    />
                  }
                />
                <Route
                  path="/passivetoactivevoice"
                  element={
                    <Dummy
                      path={"/passivetoactivevoice"}
                      category={"Passive To Active Voice"}
                      inputOne={true}
                      inputOneTitle={"What would you like to rewrite?"}
                      inputTwo={false}
                      inputTwoTitle={""}
                      inputThree={true}
                    />
                  }
                />
                <Route
                  path="/pressreleaseintros"
                  element={
                    <Dummy
                      path={"/pressreleaseintros"}
                      category={"Press Release Intros"}
                      inputOne={true}
                      inputOneTitle={"What is the press release about?"}
                      inputTwo={true}
                      inputTwoTitle={"Who is the information source?"}
                      inputThree={true}
                    />
                  }
                />
                <Route
                  path="/rewritewithkeywords"
                  element={
                    <Dummy
                      path={"/rewritewithkeywords"}
                      category={"Rewrite With Keywords"}
                      inputOne={true}
                      inputOneTitle={"Keywords"}
                      inputTwo={true}
                      inputTwoTitle={"Text to rewrite"}
                      inputThree={true}
                    />
                  }
                />
                <Route
                  path="/sentencerewriter"
                  element={
                    <Dummy
                      path={"/sentencerewriter"}
                      category={"Sentence Rewriter"}
                      inputOne={true}
                      inputOneTitle={"What sentence would you like to rewrite?"}
                      inputTwo={false}
                      inputTwoTitle={""}
                      inputThree={true}
                    />
                  }
                />
                <Route
                  path="/simplifysentences"
                  element={
                    <Dummy
                      path={"/simplifysentences"}
                      category={"Simplify Sentences"}
                      inputOne={true}
                      inputOneTitle={"What sentence would you like to simplify?"}
                      inputTwo={false}
                      inputTwoTitle={""}
                      inputThree={true}
                    />
                  }
                />
                <Route
                  path="/tonechanger"
                  element={
                    <Dummy
                      path={"/tonechanger"}
                      category={"Tone Changer"}
                      inputOne={true}
                      inputOneTitle={"What sentence would you like to rewrite?"}
                      inputTwo={false}
                      inputTwoTitle={""}
                      inputThree={true}
                    />
                  }
                />
                <Route
                  path="/twosentencestories"
                  element={
                    <Dummy
                      path={"/twosentencestories"}
                      category={"Two Sentence Stories"}
                      inputOne={true}
                      inputOneTitle={"Describe your topic?"}
                      inputTwo={false}
                      inputTwoTitle={""}
                      inputThree={true}
                    />
                  }
                />
                <Route
                  path="/verbbooster"
                  element={
                    <Dummy
                      path={"/verbbooster"}
                      category={"Verb Booster"}
                      inputOne={true}
                      inputOneTitle={"Describe your verb"}
                      inputTwo={false}
                      inputTwoTitle={""}
                      inputThree={true}
                    />
                  }
                />
                <Route
                  path="/growthideas"
                  element={
                    <Dummy
                      path={"/growthideas"}
                      category={"Growth Ideas"}
                      inputOne={true}
                      inputOneTitle={"What would you like to grow?"}
                      inputTwo={false}
                      inputTwoTitle={""}
                      inputThree={true}
                    />
                  }
                />
                <Route
                  path="/namegenerator"
                  element={
                    <Dummy
                      path={"/namegenerator"}
                      category={"Name Generator"}
                      inputOne={true}
                      inputOneTitle={"What is the name for?"}
                      inputTwo={false}
                      inputTwoTitle={""}
                      inputThree={true}
                    />
                  }
                />
                <Route
                  path="/nextproduct"
                  element={
                    <Dummy
                      path={"/nextproduct"}
                      category={"Next Product"}
                      inputOne={true}
                      inputOneTitle={"Describe your current product"}
                      inputTwo={true}
                      inputTwoTitle={"What is the brand/product"}
                      inputThree={true}
                    />
                  }
                />
                <Route
                  path="/startupideas"
                  element={
                    <Dummy
                      path={"/startupideas"}
                      category={"Startup Ideas"}
                      inputOne={true}
                      inputOneTitle={"What interests you?"}
                      inputTwo={false}
                      inputTwoTitle={""}
                      inputThree={true}
                    />
                  }
                />
                <Route
                  path="/viralideas"
                  element={
                    <Dummy
                      path={"/viralideas"}
                      category={"Viral Ideas"}
                      inputOne={true}
                      inputOneTitle={"Describe your topic?"}
                      inputTwo={true}
                      inputTwoTitle={"Who is the idea for?"}
                      inputThree={true}
                    />
                  }
                />
                <Route
                  path="/birthdaycard"
                  element={
                    <Dummy
                      path={"/birthdaycard"}
                      category={"Birthday Card"}
                      inputOne={true}
                      inputOneTitle={"Who is the message for?"}
                      inputTwo={true}
                      inputTwoTitle={"What is the card for?"}
                      inputThree={true}
                    />
                  }
                />
                <Route
                  path="/clubhousebio"
                  element={
                    <Dummy
                      path={"/clubhousebio"}
                      category={"Clubhouse Bio"}
                      inputOne={true}
                      inputOneTitle={"Tell us about yourself"}
                      inputTwo={false}
                      inputTwoTitle={""}
                      inputThree={true}
                    />
                  }
                />
                <Route
                  path="/coverletter"
                  element={
                    <Dummy
                      path={"/coverletter"}
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
                      path={"/loveletter"}
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
                      path={"/resumebulletpoints"}
                      category={"Resume Bullet Points"}
                      inputOne={true}
                      inputOneTitle={"What did you do?"}
                      inputTwo={true}
                      inputTwoTitle={"What is the role?"}
                      inputThree={true}
                    />
                  }
                />
                <Route
                  path="/showerthoughts"
                  element={
                    <Dummy
                      path={"/showerthoughts"}
                      category={"Shower Thoughts"}
                      inputOne={true}
                      inputOneTitle={"What is the topic?"}
                      inputTwo={false}
                      inputTwoTitle={""}
                      inputThree={true}
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
