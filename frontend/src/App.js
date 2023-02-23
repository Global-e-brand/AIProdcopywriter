import "./App.css";
import Grid from "@mui/material/Grid";
import HeaderLogo from "./HeaderLogo";
// import ButtonMain from "./ButtonMain";
import { Routes, Route } from "react-router-dom";
import Categories from "./components/categories/Categories";
import UserPage from "./components/Form/UserPage";
import SidebarMenu from "./SidebarMenu";


function App() {
  return (
    <>
      <div className="App">
        <Grid container >
          <Grid item xs={3} md={3}>
            <div className="logo-panel">
              <br></br>
              <HeaderLogo />
              <br></br>
              <br></br>
              <SidebarMenu />
            </div>
          </Grid>
          <Grid item xs={9} md={9}>           
            
              <Routes>
                <Route
                  path="/productdescription"
                  element={
                    <UserPage
                      path={"/productdescription"}
                      category={"Product Description"}
                      inputOne={true}
                      inputOneTitle={"Describe your product"}
                      inputTwo={false}
                      inputTwoTitle={""}
                      toneInput={true}
                    />
                  }
                />
                <Route
                  path="/adcopyvariants"
                  element={
                    <UserPage
                      path={"/adcopyvariants"}
                      category={"Ad Copy Variants"}
                      inputOne={true}
                      inputOneTitle={"Describe your product"}
                      inputTwo={false}
                      inputTwoTitle={""}
                      toneInput={true}
                    />
                  }
                />
                <Route
                  path="/facebookheadlines"
                  element={
                    <UserPage
                      path={"/facebookheadlines"}
                      category={"Facebook Headlines"}
                      inputOne={true}
                      inputOneTitle={"What is the headline for?"}
                      inputTwo={false}
                      inputTwoTitle={""}
                      toneInput={true}
                    />
                  }
                />
                <Route
                  path="/facebooklinkdescription"
                  element={
                    <UserPage
                      path={"/facebooklinkdescription"}
                      category={"Facebook Link Descriptions"}
                      inputOne={true}
                      inputOneTitle={"Describe the ad topic"}
                      inputTwo={false}
                      inputTwoTitle={""}
                      toneInput={false}
                    />
                  }
                />
                <Route
                  path="/facebooklisticle"
                  element={
                    <UserPage
                      path={"/facebooklisticle"}
                      category={"Facebook Listicle"}
                      inputOne={true}
                      inputOneTitle={"What is your topic?"}
                      inputTwo={false}
                      inputTwoTitle={""}
                      toneInput={true}
                    />
                  }
                />
                <Route
                  path="/facebookprimarytext"
                  element={
                    <UserPage
                      path={"/facebookprimarytext"}
                      category={"Facebook Primary Text"}
                      inputOne={true}
                      inputOneTitle={"Describe the topic"}
                      inputTwo={false}
                      inputTwoTitle={""}
                      toneInput={true}
                    />
                  }
                />
                <Route
                  path="/generaladcopy"
                  element={
                    <UserPage
                      path={"/generaladcopy"}
                      category={"General Ad Copy"}
                      inputOne={true}
                      inputOneTitle={"What is the copy for?"}
                      inputTwo={false}
                      inputTwoTitle={""}
                      toneInput={true}
                    />
                  }
                />
                <Route
                  path="/googledescriptions"
                  element={
                    <UserPage
                      path={"/googledescriptions"}
                      category={"Google Descriptions"}
                      inputOne={true}
                      inputOneTitle={"Describe your product/brand"}
                      inputTwo={false}
                      inputTwoTitle={""}
                      toneInput={true}
                    />
                  }
                />
                <Route
                  path="/googleheadlines"
                  element={
                    <UserPage
                      path={"/googleheadlines"}
                      category={"Google Headlines"}
                      inputOne={true}
                      inputOneTitle={"Describe your product/brand"}
                      inputTwo={false}
                      inputTwoTitle={""}
                      toneInput={true}
                    />
                  }
                />
                <Route
                  path="/linkedinadcopy"
                  element={
                    <UserPage
                      path={"/linkedinadcopy"}
                      category={"LinkedIn Ad Copy"}
                      inputOne={true}
                      inputOneTitle={"What is the copy for?"}
                      inputTwo={false}
                      inputTwoTitle={""}
                      toneInput={true}
                    />
                  }
                />
                <Route
                  path="/audiencerefiner"
                  element={
                    <UserPage
                      path={"/audiencerefiner"}
                      category={"Audience Refiner"}
                      inputOne={true}
                      inputOneTitle={"Describe your ideal audience"}
                      inputTwo={false}
                      inputTwoTitle={""}
                      toneInput={false}
                    />
                  }
                />
                <Route
                  path="/brandmission"
                  element={
                    <UserPage
                      path={"/brandmission"}
                      category={"Brand Mission"}
                      inputOne={true}
                      inputOneTitle={"Describe your brand"}
                      inputTwo={false}
                      inputTwoTitle={""}
                      toneInput={true}
                    />
                  }
                />
                <Route
                  path="/brandvoice"
                  element={
                    <UserPage
                      path={"/brandvoice"}
                      category={"Brand Voice"}
                      inputOne={true}
                      inputOneTitle={"Brand Name"}
                      inputTwo={true}
                      inputTwoTitle={"Describe your brand"}
                      toneInput={false}
                    />
                  }
                />
                <Route
                  path="/mottogenerator"
                  element={
                    <UserPage
                      path={"/mottogenerator"}
                      category={"Motto Generator"}
                      inputOne={true}
                      inputOneTitle={"Describe your product/brand"}
                      inputTwo={false}
                      inputTwoTitle={""}
                      toneInput={true}
                    />
                  }
                />
                <Route
                  path="/valueproposition"
                  element={
                    <UserPage
                      path={"/valueproposition"}
                      category={"Value Proposition"}
                      inputOne={true}
                      inputOneTitle={"Describe your business"}
                      inputTwo={false}
                      inputTwoTitle={""}
                      toneInput={true}
                    />
                  }
                />
                <Route
                  path="/calltoaction"
                  element={
                    <UserPage
                      path={"/calltoaction"}
                      category={"Call To Action"}
                      inputOne={true}
                      inputOneTitle={"Describe your product"}
                      inputTwo={false}
                      inputTwoTitle={""}
                      toneInput={true}
                    />
                  }
                />
                <Route
                  path="/eventcopy"
                  element={
                    <UserPage
                      path={"/eventcopy"}
                      category={"Event Copy"}
                      inputOne={true}
                      inputOneTitle={"What is the event?"}
                      inputTwo={true}
                      inputTwoTitle={"Describe your event"}
                      toneInput={true}
                    />
                  }
                />
                <Route
                  path="/landingpageherotext"
                  element={
                    <UserPage
                      path={"/landingpageherotext"}
                      category={"Landing Page Hero Text"}
                      inputOne={true}
                      inputOneTitle={"Describe your product/brand"}
                      inputTwo={false}
                      inputTwoTitle={""}
                      toneInput={true}
                    />
                  }
                />
                <Route
                  path="/listicle"
                  element={
                    <UserPage
                      path={"/listicle"}
                      category={"Listicle"}
                      inputOne={true}
                      inputOneTitle={"What is the list for?"}
                      inputTwo={false}
                      inputTwoTitle={""}
                      toneInput={true}
                    />
                  }
                />
                <Route
                  path="/metadescription"
                  element={
                    <UserPage
                      path={"/metadescription"}
                      category={"Meta Descriptions"}
                      inputOne={true}
                      inputOneTitle={"Describe your product/brand"}
                      inputTwo={false}
                      inputTwoTitle={""}
                      toneInput={true}
                    />
                  }
                />
                <Route
                  path="/microcopy"
                  element={
                    <UserPage
                      path={"/microcopy"}
                      category={"Microcopy"}
                      inputOne={true}
                      inputOneTitle={"What's the microcopy for?"}
                      inputTwo={false}
                      inputTwoTitle={""}
                      toneInput={true}
                    />
                  }
                />
                <Route
                  path="/questiongenerator"
                  element={
                    <UserPage
                      path={"/questiongenerator"}
                      category={"Question Generator"}
                      inputOne={true}
                      inputOneTitle={"What are you generating questions for?"}
                      inputTwo={false}
                      inputTwoTitle={""}
                      toneInput={true}
                    />
                  }
                />
                <Route
                  path="/socialprooftext"
                  element={
                    <UserPage
                      path={"/socialprooftext"}
                      category={"Social Proof Text"}
                      inputOne={true}
                      inputOneTitle={"What will the social proof be used for?"}
                      inputTwo={false}
                      inputTwoTitle={""}
                      toneInput={true}
                    />
                  }
                />
                <Route
                  path="/subheader"
                  element={
                    <UserPage
                      path={"/subheader"}
                      category={"Subheader"}
                      inputOne={true}
                      inputOneTitle={"What is your business?"}
                      inputTwo={true}
                      inputTwoTitle={"What is the header?"}
                      toneInput={true}
                    />
                  }
                />
                <Route
                  path="/testimonialrewriter"
                  element={
                    <UserPage
                      path={"/testimonialrewriter"}
                      category={"Testimonial Rewriter"}
                      inputOne={true}
                      inputOneTitle={
                        "What testimonial would you like to rewrite?"
                      }
                      inputTwo={false}
                      inputTwoTitle={""}
                      toneInput={true}
                    />
                  }
                />
                <Route
                  path="/blogconclusion"
                  element={
                    <UserPage
                      path={"/blogconclusion"}
                      category={"Blog Conclusion"}
                      inputOne={true}
                      inputOneTitle={
                        "Provide some information about your blog (sample paragraph, title, etc)"
                      }
                      inputTwo={false}
                      inputTwoTitle={""}
                      toneInput={true}
                    />
                  }
                />
                <Route
                  path="/blogideas"
                  element={
                    <UserPage
                      path={"/blogideas"}
                      category={"Blog Ideas"}
                      inputOne={true}
                      inputOneTitle={"What are you interested in?"}
                      inputTwo={false}
                      inputTwoTitle={""}
                      toneInput={true}
                    />
                  }
                />
                <Route
                  path="/blogintro"
                  element={
                    <UserPage
                      path={"/blogintro"}
                      category={"Blog Intro"}
                      inputOne={true}
                      inputOneTitle={
                        "What would you like to include in the intro?"
                      }
                      inputTwo={false}
                      inputTwoTitle={""}
                      toneInput={true}
                    />
                  }
                />
                <Route
                  path="/blogoutline"
                  element={
                    <UserPage
                      path={"/blogoutline"}
                      category={"Blog Outline"}
                      inputOne={true}
                      inputOneTitle={"What is your blog title?"}
                      inputTwo={true}
                      inputTwoTitle={"What is your blog about?"}
                      toneInput={true}
                    />
                  }
                />
                <Route
                  path="/blogtitle"
                  element={
                    <UserPage
                      path={"/blogtitle"}
                      category={"Blog Title"}
                      inputOne={true}
                      inputOneTitle={"Describe your blog topic"}
                      inputTwo={false}
                      inputTwoTitle={""}
<<<<<<< HEAD
                      toneInput={true}
=======
                      inputThree={false}
>>>>>>> feature/jason
                    />
                  }
                />
                <Route
                  path="/blogtitlelisticle"
                  element={
                    <UserPage
                      path={"/blogtitlelisticle"}
                      category={"Blog Title Listicle"}
                      inputOne={true}
                      inputOneTitle={"Describe your blog topic"}
                      inputTwo={false}
                      inputTwoTitle={""}
                      toneInput={true}
                    />
                  }
                />
                <Route
                  path="/bulletpointtoblogsection"
                  element={
                    <UserPage
                      path={"/bulletpointtoblogsection"}
                      category={"Bullet Point To Blog Section"}
                      inputOne={true}
                      inputOneTitle={"List your blog topics"}
                      inputTwo={false}
                      inputTwoTitle={""}
                      toneInput={true}
                    />
                  }
                />
                <Route
                  path="/keywordgenerator"
                  element={
                    <UserPage
                      path={"/keywordgenerator"}
                      category={"Keyword Generator"}
                      inputOne={true}
                      inputOneTitle={"What topics are you posting about?"}
                      inputTwo={false}
                      inputTwoTitle={""}
<<<<<<< HEAD
                      toneInput={true}
=======
                      inputThree={false}
>>>>>>> feature/jason
                    />
                  }
                />
                <Route
                  path="/cancellationemail"
                  element={
                    <UserPage
                      path={"/cancellationemail"}
                      category={"Cancellation Email"}
                      inputOne={true}
                      inputOneTitle={"What is the email for?"}
                      inputTwo={false}
                      inputTwoTitle={""}
                      toneInput={true}
                    />
                  }
                />
                <Route
                  path="/emailsubjectlines"
                  element={
                    <UserPage
                      path={"/emailsubjectlines"}
                      category={"Email Subject Lines"}
                      inputOne={true}
                      inputOneTitle={"Describe your brand/product"}
                      inputTwo={false}
                      inputTwoTitle={""}
                      toneInput={true}
                    />
                  }
                />
                <Route
                  path="/confirmationemails"
                  element={
                    <UserPage
                      path={"/confirmationemails"}
                      category={"Confirmation Emails"}
                      inputOne={true}
                      inputOneTitle={"What is the email for?"}
                      inputTwo={false}
                      inputTwoTitle={""}
                      toneInput={true}
                    />
                  }
                />
                <Route
                  path="followupemail"
                  element={
                    <UserPage
                      path={"/followupemail"}
                      category={"Follow Up Email"}
                      inputOne={true}
                      inputOneTitle={"What is the email for?"}
                      inputTwo={false}
                      inputTwoTitle={""}
                      toneInput={true}
                    />
                  }
                />
                <Route
                  path="/thankyounote"
                  element={
                    <UserPage
                      path={"/thankyounote"}
                      category={"Thank You Note"}
                      inputOne={true}
                      inputOneTitle={"Who is the message for?"}
                      inputTwo={true}
                      inputTwoTitle={"What would you like to thank them for?"}
                      toneInput={true}
                    />
                  }
                />
                <Route
                  path="/welcomeemail"
                  element={
                    <UserPage
                      path={"/welcomeemail"}
                      category={"Welcome Email"}
                      inputOne={true}
                      inputOneTitle={"Who is the email for?"}
                      inputTwo={true}
                      inputTwoTitle={"What is the email for"}
                      toneInput={true}
                    />
                  }
                />
                <Route
                  path="/add-emoji"
                  element={
                    <UserPage
                      path={"/add-emoji"}
                      category={"Add Emoji To List"}
                      inputOne={true}
                      inputOneTitle={
                        "Write your list below (one item per line)"
                      }
                      inputTwo={false}
                      inputTwoTitle={""}
                      toneInput={true}
                    />
                  }
                />
                <Route
                  path="/bullet-points"
                  element={
                    <UserPage
                      path={"/bullet-points"}
                      category={"Bullet Points"}
                      inputOne={true}
                      inputOneTitle={"What text would you like to summarize?"}
                      inputTwo={false}
                      inputTwoTitle={""}
                      toneInput={true}
                    />
                  }
                />
                <Route
                  path="/carousel-post"
                  element={
                    <UserPage
                      path={"/carousel-post"}
                      category={"Carousel Post"}
                      inputOne={true}
                      inputOneTitle={"Describe your topic"}
                      inputTwo={false}
                      inputTwoTitle={""}
                      toneInput={true}
                    />
                  }
                />
                <Route
                  path="/youtube-ideas"
                  element={
                    <UserPage
                      path={"/youtube-ideas"}
                      category={"YouTube Ideas"}
                      inputOne={true}
                      inputOneTitle={"Describe your topic"}
                      inputTwo={false}
                      inputTwoTitle={""}
                      toneInput={true}
                    />
                  }
                />
                <Route
                  path="/hashtag-generator"
                  element={
                    <UserPage
                      path={"/hashtag-generator"}
                      category={"Hashtag Generator"}
                      inputOne={true}
                      inputOneTitle={"Describe your topic"}
                      inputTwo={false}
                      inputTwoTitle={""}
<<<<<<< HEAD
                      toneInput={true}
=======
                      inputThree={false}
>>>>>>> feature/jason
                    />
                  }
                />
                <Route
                  path="/hook-generator"
                  element={
                    <UserPage
                      path={"/hook-generator"}
                      category={"Hook Generator"}
                      inputOne={true}
                      inputOneTitle={"Describe the topic"}
                      inputTwo={false}
                      inputTwoTitle={""}
                      toneInput={true}
                    />
                  }
                />
                <Route
                  path="/instagram-caption"
                  element={
                    <UserPage
                      path={"/instagram-caption"}
                      category={"Instagram Caption"}
                      inputOne={true}
                      inputOneTitle={"Describe the topic?"}
                      inputTwo={false}
                      inputTwoTitle={""}
                      toneInput={true}
                    />
                  }
                />
                <Route
                  path="/instagram-products"
                  element={
                    <UserPage
                      path={"/instagram-products"}
                      category={"Instagram Product Showcase"}
                      inputOne={true}
                      inputOneTitle={"What is your product?"}
                      inputTwo={false}
                      inputTwoTitle={""}
                      toneInput={true}
                    />
                  }
                />
                <Route
                  path="/launchyourproduct"
                  element={
                    <UserPage
                      path={"/launchyourproduct"}
                      category={"Launch Your Product"}
                      inputOne={true}
                      inputOneTitle={"Describe your product"}
                      inputTwo={true}
                      inputTwoTitle={"What is your brand/product?"}
                      toneInput={true}
                    />
                  }
                />
                <Route
                  path="/relatable-experiences"
                  element={
                    <UserPage
                      path={"/relatable-experiences"}
                      category={"Relatable Experiences"}
                      inputOne={true}
                      inputOneTitle={"What is the experience?"}
                      inputTwo={false}
                      inputTwoTitle={""}
                      toneInput={true}
                    />
                  }
                />
                <Route
                  path="/short-texthook"
                  element={
                    <UserPage
                      path={"/short-texthook"}
                      category={"Short Text Hook"}
                      inputOne={true}
                      inputOneTitle={"Describe your topic"}
                      inputTwo={false}
                      inputTwoTitle={""}
                      toneInput={true}
                    />
                  }
                />
                <Route
                  path="/tiktok-brainstorm-topics"
                  element={
                    <UserPage
                      path={"/tiktok-brainstorm-topics"}
                      category={"TikTok Brainstorm Topics"}
                      inputOne={true}
                      inputOneTitle={"What are you interested in?"}
                      inputTwo={false}
                      inputTwoTitle={""}
                      toneInput={true}
                    />
                  }
                />
                <Route
                  path="/videocalltoaction"
                  element={
                    <UserPage
                      path={"/videocalltoaction"}
                      category={"Video Call To Action"}
                      inputOne={true}
                      inputOneTitle={"What is your video about?"}
                      inputTwo={false}
                      inputTwoTitle={""}
                      toneInput={true}
                    />
                  }
                />
                <Route
                  path="/youtubedescriptionintro"
                  element={
                    <UserPage
                      path={"/youtubedescriptionintro"}
                      category={"YouTube Description Intro"}
                      inputOne={true}
                      inputOneTitle={"What is your video title?"}
                      inputTwo={true}
                      inputTwoTitle={"What is your video about?"}
                      toneInput={true}
                    />
                  }
                />
                <Route
                  path="/youtubevideotitle"
                  element={
                    <UserPage
                      path={"/youtubevideotitle"}
                      category={"YouTube Video Title"}
                      inputOne={true}
                      inputOneTitle={"What is your video about?"}
                      inputTwo={false}
                      inputTwoTitle={""}
<<<<<<< HEAD
                      toneInput={true}
=======
                      inputThree={false}
>>>>>>> feature/jason
                    />
                  }
                />
                <Route
                  path="/adjectiveaccelerator"
                  element={
                    <UserPage
                      path={"/adjectiveaccelerator"}
                      category={"Adjective Accelerator"}
                      inputOne={true}
                      inputOneTitle={"Describe your adjective"}
                      inputTwo={false}
                      inputTwoTitle={""}
                      toneInput={true}
                    />
                  }
                />
                <Route
                  path="/analogygenerator"
                  element={
                    <UserPage
                      path={"/analogygenerator"}
                      category={"Analogy Generator"}
                      inputOne={true}
                      inputOneTitle={
                        "What would you like the analogy to be about?"
                      }
                      inputTwo={false}
                      inputTwoTitle={""}
                      toneInput={true}
                    />
                  }
                />
                <Route
                  path="/bulletpointtoparagraph"
                  element={
                    <UserPage
                      path={"/bulletpointtoparagraph"}
                      category={"Bullet Point To Paragraph"}
                      inputOne={true}
                      inputOneTitle={
                        "Describe your paragraph with bullet points"
                      }
                      inputTwo={false}
                      inputTwoTitle={""}
                      toneInput={true}
                    />
                  }
                />
                <Route
                  path="/cliffhanger"
                  element={
                    <UserPage
                      path={"/cliffhanger"}
                      category={"Cliffhanger"}
                      inputOne={true}
                      inputOneTitle={"What text comes before the cliffhanger?"}
                      inputTwo={false}
                      inputTwoTitle={""}
                      toneInput={true}
                    />
                  }
                />
                <Route
                  path="/essayintro"
                  element={
                    <UserPage
                      path={"/essayintro"}
                      category={"Essay Intro"}
                      inputOne={true}
                      inputOneTitle={"What is your essay about?"}
                      inputTwo={false}
                      inputTwoTitle={""}
                      toneInput={true}
                    />
                  }
                />
                <Route
                  path="/essayoutline"
                  element={
                    <UserPage
                      path={"/essayoutline"}
                      category={"Essay Outline"}
                      inputOne={true}
                      inputOneTitle={"What is your essay topic?"}
                      inputTwo={true}
                      inputTwoTitle={"What should the essay cover?"}
                      toneInput={true}
                    />
                  }
                />
                <Route
                  path="/herostoryintro"
                  element={
                    <UserPage
                      path={"/herostoryintro"}
                      category={"Hero Story Intro"}
                      inputOne={true}
                      inputOneTitle={"A short background of the hero"}
                      inputTwo={false}
                      inputTwoTitle={""}
                      toneInput={true}
                    />
                  }
                />
                <Route
                  path="/herostoryvillain"
                  element={
                    <UserPage
                      path={"/herostoryvillain"}
                      category={"Hero Story Villain"}
                      inputOne={true}
                      inputOneTitle={"A short background of the hero"}
                      inputTwo={false}
                      inputTwoTitle={""}
                      toneInput={true}
                    />
                  }
                />
                <Route
                  path="/passivetoactivevoice"
                  element={
                    <UserPage
                      path={"/passivetoactivevoice"}
                      category={"Passive To Active Voice"}
                      inputOne={true}
                      inputOneTitle={"What would you like to rewrite?"}
                      inputTwo={false}
                      inputTwoTitle={""}
                      toneInput={true}
                    />
                  }
                />
                <Route
                  path="/pressreleaseintros"
                  element={
                    <UserPage
                      path={"/pressreleaseintros"}
                      category={"Press Release Intros"}
                      inputOne={true}
                      inputOneTitle={"What is the press release about?"}
                      inputTwo={true}
                      inputTwoTitle={"Who is the information source?"}
                      toneInput={true}
                    />
                  }
                />
                <Route
                  path="/rewritewithkeywords"
                  element={
                    <UserPage
                      path={"/rewritewithkeywords"}
                      category={"Rewrite With Keywords"}
                      inputOne={true}
                      inputOneTitle={"Keywords"}
                      inputTwo={true}
                      inputTwoTitle={"Text to rewrite"}
                      toneInput={true}
                    />
                  }
                />
                <Route
                  path="/sentencerewriter"
                  element={
                    <UserPage
                      path={"/sentencerewriter"}
                      category={"Sentence Rewriter"}
                      inputOne={true}
                      inputOneTitle={"What sentence would you like to rewrite?"}
                      inputTwo={false}
                      inputTwoTitle={""}
                      toneInput={true}
                    />
                  }
                />
                <Route
                  path="/simplifysentences"
                  element={
                    <UserPage
                      path={"/simplifysentences"}
                      category={"Simplify Sentences"}
                      inputOne={true}
                      inputOneTitle={
                        "What sentence would you like to simplify?"
                      }
                      inputTwo={false}
                      inputTwoTitle={""}
                      toneInput={true}
                    />
                  }
                />
                <Route
                  path="/tonechanger"
                  element={
                    <UserPage
                      path={"/tonechanger"}
                      category={"Tone Changer"}
                      inputOne={true}
                      inputOneTitle={"What sentence would you like to rewrite?"}
                      inputTwo={false}
                      inputTwoTitle={""}
                      toneInput={true}
                    />
                  }
                />
                <Route
                  path="/twosentencestories"
                  element={
                    <UserPage
                      path={"/twosentencestories"}
                      category={"Two Sentence Stories"}
                      inputOne={true}
                      inputOneTitle={"Describe your topic?"}
                      inputTwo={false}
                      inputTwoTitle={""}
                      toneInput={true}
                    />
                  }
                />
                <Route
                  path="/verbbooster"
                  element={
                    <UserPage
                      path={"/verbbooster"}
                      category={"Verb Booster"}
                      inputOne={true}
                      inputOneTitle={"Describe your verb"}
                      inputTwo={false}
                      inputTwoTitle={""}
                      toneInput={true}
                    />
                  }
                />
                <Route
                  path="/growthideas"
                  element={
                    <UserPage
                      path={"/growthideas"}
                      category={"Growth Ideas"}
                      inputOne={true}
                      inputOneTitle={"What would you like to grow?"}
                      inputTwo={false}
                      inputTwoTitle={""}
                      toneInput={true}
                    />
                  }
                />
                <Route
                  path="/namegenerator"
                  element={
                    <UserPage
                      path={"/namegenerator"}
                      category={"Name Generator"}
                      inputOne={true}
                      inputOneTitle={"What is the name for?"}
                      inputTwo={false}
                      inputTwoTitle={""}
                      toneInput={true}
                    />
                  }
                />
                <Route
                  path="/nextproduct"
                  element={
                    <UserPage
                      path={"/nextproduct"}
                      category={"Next Product"}
                      inputOne={true}
                      inputOneTitle={"Describe your current product"}
                      inputTwo={true}
                      inputTwoTitle={"What is the brand/product"}
                      toneInput={true}
                    />
                  }
                />
                <Route
                  path="/startupideas"
                  element={
                    <UserPage
                      path={"/startupideas"}
                      category={"Startup Ideas"}
                      inputOne={true}
                      inputOneTitle={"What interests you?"}
                      inputTwo={false}
                      inputTwoTitle={""}
                      toneInput={true}
                    />
                  }
                />
                <Route
                  path="/viralideas"
                  element={
                    <UserPage
                      path={"/viralideas"}
                      category={"Viral Ideas"}
                      inputOne={true}
                      inputOneTitle={"Describe your topic?"}
                      inputTwo={true}
                      inputTwoTitle={"Who is the idea for?"}
                      toneInput={true}
                    />
                  }
                />
                <Route
                  path="/birthdaycard"
                  element={
                    <UserPage
                      path={"/birthdaycard"}
                      category={"Birthday Card"}
                      inputOne={true}
                      inputOneTitle={"Who is the message for?"}
                      inputTwo={true}
                      inputTwoTitle={"What is the card for?"}
                      toneInput={true}
                    />
                  }
                />
                <Route
                  path="/clubhousebio"
                  element={
                    <UserPage
                      path={"/clubhousebio"}
                      category={"Clubhouse Bio"}
                      inputOne={true}
                      inputOneTitle={"Tell us about yourself"}
                      inputTwo={false}
                      inputTwoTitle={""}
                      toneInput={true}
                    />
                  }
                />
                <Route
                  path="/coverletter"
                  element={
                    <UserPage
                      path={"/coverletter"}
                      category={"Cover Letter"}
                      inputOne={true}
                      inputOneTitle={"What's the role?"}
                      inputTwo={true}
                      inputTwoTitle={"List your experience"}
                      toneInput={true}
                    />
                  }
                />
                <Route
                  path="/loveletter"
                  element={
                    <UserPage
                      path={"/loveletter"}
                      category={"Love Letter"}
                      inputOne={true}
                      inputOneTitle={"Who is the message for?"}
                      inputTwo={true}
                      inputTwoTitle={"What is the occasion?"}
                      toneInput={true}
                    />
                  }
                />
                <Route
                  path="/resumebulletpoints"
                  element={
                    <UserPage
                      path={"/resumebulletpoints"}
                      category={"Resume Bullet Points"}
                      inputOne={true}
                      inputOneTitle={"What did you do?"}
                      inputTwo={true}
                      inputTwoTitle={"What is the role?"}
                      toneInput={true}
                    />
                  }
                />
                <Route
                  path="/showerthoughts"
                  element={
                    <UserPage
                      path={"/showerthoughts"}
                      category={"Shower Thoughts"}
                      inputOne={true}
                      inputOneTitle={"What is the topic?"}
                      inputTwo={false}
                      inputTwoTitle={""}
                      toneInput={true}
                    />
                  }
                />
                <Route
                  path="/aida"
                  element={
                    <UserPage
                      category={"AIDA"}
                      inputOne={true}
                      inputOneTitle={"Describe your product/brand"}
                      inputTwo={false}
                      inputTwoTitle={""}
                      toneInput={true}
                      path={"/aida"}
                    />
                  }
                />
                <Route
                  path="/bab"
                  element={
                    <UserPage
                      category={"BAB"}
                      inputOne={true}
                      inputOneTitle={"Describe your product/brand"}
                      inputTwo={false}
                      inputTwoTitle={""}
                      toneInput={true}
                      path={"/bab"}
                    />
                  }
                />
                <Route
                  path="/features-to-benefits"
                  element={
                    <UserPage
                      category={"Features To Benefits"}
                      inputOne={true}
                      inputOneTitle={"What is the product/brand?"}
                      inputTwo={true}
                      inputTwoTitle={"List your features"}
                      toneInput={true}
                      path={"/features-to-benefits"}
                    />
                  }
                />
                <Route
                  path="/fab"
                  element={
                    <UserPage
                      category={"FAB"}
                      inputOne={true}
                      inputOneTitle={"Describe your product/brand"}
                      inputTwo={false}
                      inputTwoTitle={""}
                      toneInput={true}
                      path={"/fab"}
                    />
                  }
                />
                <Route
                  path="/marketing-angles"
                  element={
                    <UserPage
                      category={"Marketing Angles"}
                      inputOne={true}
                      inputOneTitle={"Describe your product/brand"}
                      inputTwo={true}
                      inputTwoTitle={"What is your product/brand name?"}
                      toneInput={true}
                      path={"/marketing-angles"}
                    />
                  }
                />
                <Route
                  path="/pas"
                  element={
                    <UserPage
                      category={"PAS"}
                      inputOne={true}
                      inputOneTitle={"Describe your product/brand"}
                      inputTwo={false}
                      inputTwoTitle={""}
                      toneInput={true}
                      path={"/pas"}
                    />
                  }
                />
                <Route
                  path="/pppp"
                  element={
                    <UserPage
                      category={"PPPP"}
                      inputOne={true}
                      inputOneTitle={"Describe your product/brand"}
                      inputTwo={false}
                      inputTwoTitle={""}
                      toneInput={true}
                      path={"/pppp"}
                    />
                  }
                />
                <Route
                  path="/quest-copywriting"
                  element={
                    <UserPage
                      category={"QUEST Copywriting"}
                      inputOne={true}
                      inputOneTitle={"Describe your product/brand"}
                      inputTwo={false}
                      inputTwoTitle={""}
                      toneInput={true}
                      path={"/quest-copywriting"}
                    />
                  }
                />
              </Routes>
            
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default App;
