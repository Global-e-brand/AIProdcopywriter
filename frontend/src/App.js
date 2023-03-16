import "./App.css";
import Grid from "@mui/material/Grid";
import { useLocation, Routes, Route, Navigate, Link } from "react-router-dom";
import UserPage from "./components/Form/UserPage";
import HomePage from "./components/home/HomePage";
import HistoryPage from "./components/History/HistoryPage";
import CreateAccount from "./components/Login/CreateAccount";
import Signin from "./components/Login/Signin";
import ForgotPassword from "./components/Login/ForgotPassword";
import ResetPassword from "./components/Login/ResetPassword";
import PaymentNew from "./components/payment/PaymentNew";

import { PayPalScriptProvider } from "@paypal/react-paypal-js";

function App() {
  const location = useLocation();
  return (
    <>
      <div className="App">
        <Grid container>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <div className="logo-panel-wrapper"></div>
            <Routes>
              <Route path="/" element={<Navigate replace to="/login" />} />
              <Route path="/home" element={<HomePage />} />
              <Route path="/history" element={<HistoryPage />} />
              <Route path="/create-account" element={<CreateAccount />} />
              <Route path="/login" element={<Signin />} />
              <Route path="/payment" element={<PaymentNew />} />
              <Route
                path="/login/forgot-password"
                element={<ForgotPassword />}
              />
              <Route path="/login/reset-password" element={<ResetPassword />} />
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
                    placeholderOne={
                      "E.g. a warm and lightweight fur Winter coat"
                    }
                    placeholderTwo={"E.g. "}
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
                    placeholderOne={
                      "E.g. a warm and lightweight fur Winter coat"
                    }
                    placeholderTwo={"E.g. "}
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
                    placeholderOne={"E.g. an AI copywriting web app"}
                    placeholderTwo={"E.g. "}
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
                    placeholderOne={"E.g. an AI copywriting web app"}
                    placeholderTwo={"E.g. "}
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
                    placeholderOne={
                      "E.g. taking advantage of the Summer weather"
                    }
                    placeholderTwo={"E.g. "}
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
                    placeholderOne={
                      "E.g. taking advantage of the Summer weather by traveling and trying new things"
                    }
                    placeholderTwo={"E.g. "}
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
                    placeholderOne={"E.g. an AI copywriting web app"}
                    placeholderTwo={"E.g. "}
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
                    placeholderOne={
                      "E.g. a new sugar free sports drink that boosts your energy"
                    }
                    placeholderTwo={"E.g. "}
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
                    placeholderOne={
                      "E.g. a new sugar free sports drink that boosts your energy"
                    }
                    placeholderTwo={"E.g. "}
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
                    placeholderOne={"E.g. an AI copywriting web app"}
                    placeholderTwo={"E.g. "}
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
                    placeholderOne={
                      "E.g. new homeowners who are on a tight budget"
                    }
                    placeholderTwo={"E.g. "}
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
                    placeholderOne={
                      "E.g. a high-quality footwear company that creates both durable and performant footwear"
                    }
                    placeholderTwo={"E.g. "}
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
                    placeholderOne={"E.g. Hype"}
                    placeholderTwo={
                      "E.g. a high-quality footwear company that creates both durable and performant footwear"
                    }
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
                    placeholderOne={
                      "E.g. a new sugar free sports drink that boosts your energy"
                    }
                    placeholderTwo={"E.g. "}
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
                    inputOneTitle={"Describe your brand"}
                    inputTwo={false}
                    inputTwoTitle={""}
                    toneInput={true}
                    placeholderOne={
                      "E.g. a high-quality footwear company that creates both durable and performant footwear"
                    }
                    placeholderTwo={"E.g. "}
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
                    inputOneTitle={"Describe your product/brand"}
                    inputTwo={false}
                    inputTwoTitle={""}
                    toneInput={true}
                    placeholderOne={
                      "E.g. we are an online ecommerce store that sells a variety of sports equipment for the lowest prices on the market"
                    }
                    placeholderTwo={"E.g. "}
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
                    placeholderOne={"E.g. a concert"}
                    placeholderTwo={
                      "E.g. each year we hold an event called Fusion which brings together top music artists from a variety cultures"
                    }
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
                    placeholderOne={
                      "E.g. a new sugar free sports drink that boosts your energy"
                    }
                    placeholderTwo={"E.g. "}
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
                    inputOneTitle={"What is the list about?"}
                    inputTwo={false}
                    inputTwoTitle={""}
                    toneInput={true}
                    placeholderOne={
                      "E.g. 5 of the best Places to Visit in 2023"
                    }
                    placeholderTwo={"E.g. "}
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
                    placeholderOne={
                      "E.g. a new sugar free sports drink that boosts your energy"
                    }
                    placeholderTwo={"E.g. "}
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
                    placeholderOne={
                      "E.g. the login section of an ecommerce store"
                    }
                    placeholderTwo={"E.g. "}
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
                    placeholderOne={"E.g. the planets in our solar system"}
                    placeholderTwo={"E.g. "}
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
                    placeholderOne={
                      "E.g. encouraging users to book hotels on my website"
                    }
                    placeholderTwo={"E.g. "}
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
                    inputOneTitle={"Describe is your business?"}
                    inputTwo={true}
                    inputTwoTitle={"What is the header?"}
                    toneInput={true}
                    placeholderOne={"E.g. a shoe company called Hype"}
                    placeholderTwo={
                      "E.g. It's Finally Here, Hype's Latest Line of Ultra-Performant Sneakers!"
                    }
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
                    placeholderOne={
                      "E.g. I was blown away by their great service and delicious food!"
                    }
                    placeholderTwo={"E.g. "}
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
                    placeholderOne={
                      "E.g. We may never find out what the dinosaurs really looked like"
                    }
                    placeholderTwo={"E.g. "}
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
                    placeholderOne={"E.g. the history behind cultural dishes"}
                    placeholderTwo={"E.g. "}
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
                    placeholderOne={
                      "E.g.\nApple IOS versus Android\nThe benefits and drawbacks of each\nWe will compare the two operating systems"
                    }
                    placeholderTwo={"E.g. "}
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
                    placeholderOne={
                      "E.g. An In-depth Look At Each of the Planets of Our Solar System"
                    }
                    placeholderTwo={
                      "E.g. describing interesting facts and properties our each planet in the solar system"
                    }
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
                    toneInput={false}
                    placeholderOne={
                      "E.g. the interesting facts and properties our each planet in the solar system"
                    }
                    placeholderTwo={"E.g. "}
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
                    placeholderOne={
                      "E.g. the interesting facts and properties our each planet in the solar system"
                    }
                    placeholderTwo={"E.g. "}
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
                    placeholderOne={
                      "E.g.\nAutomatically writing content\n50+ content generation features"
                    }
                    placeholderTwo={"E.g. "}
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
                    toneInput={false}
                    placeholderOne={
                      "E.g. AI content generation that produces high quality results in seconds"
                    }
                    placeholderTwo={"E.g. "}
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
                    placeholderOne={
                      "E.g. a customer cancelling their order from our online store"
                    }
                    placeholderTwo={"E.g. "}
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
                    placeholderOne={
                      "E.g. a new sugar free sports drink that boosts your energy"
                    }
                    placeholderTwo={"E.g. "}
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
                    placeholderOne={
                      "E.g. a customer creating an account with our web app with their email"
                    }
                    placeholderTwo={"E.g. "}
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
                    placeholderOne={
                      "E.g. a great interview for the content writer position at Blog Inc."
                    }
                    placeholderTwo={"E.g. "}
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
                    placeholderOne={"E.g. Jimmy"}
                    placeholderTwo={
                      "E.g. being a great friend for the past 20 years"
                    }
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
                    placeholderOne={"E.g. our customers"}
                    placeholderTwo={"E.g. signing up for our food newsletter"}
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
                    inputOneTitle={"Write your list below (one item per line)"}
                    inputTwo={false}
                    inputTwoTitle={""}
                    toneInput={true}
                    placeholderOne={
                      "E.g.\ngoing to the beach\nspending time with loved ones\nsurfing the ocean waves"
                    }
                    placeholderTwo={"E.g. "}
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
                    placeholderOne={`E.g. In today's industry, content is key. Not only does it need to be high quality, but it also needs to be created in a timely manner. If you own or manage a business that publishes content, then you know just how important this is. Unfortunately, many businesses struggle with generating content on a consistent basis.`}
                    placeholderTwo={"E.g. "}
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
                    placeholderOne={
                      "E.g. the grand opening of our highly anticipated modern restaurant"
                    }
                    placeholderTwo={"E.g. "}
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
                    placeholderOne={
                      "E.g. the grand opening of our highly anticipated modern restaurant"
                    }
                    placeholderTwo={"E.g. "}
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
                    toneInput={false}
                    placeholderOne={
                      "E.g. the grand opening of our highly anticipated modern restaurant"
                    }
                    placeholderTwo={"E.g. "}
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
                    placeholderOne={
                      "E.g. the grand opening of our highly anticipated modern restaurant"
                    }
                    placeholderTwo={"E.g. "}
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
                    inputOneTitle={"Describe the topic"}
                    inputTwo={false}
                    inputTwoTitle={""}
                    toneInput={true}
                    placeholderOne={
                      "E.g. the grand opening of our highly anticipated modern restaurant"
                    }
                    placeholderTwo={"E.g. "}
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
                    placeholderOne={
                      "E.g. an automatic cleaning robot that is rechargeable and user-friendly"
                    }
                    placeholderTwo={"E.g. "}
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
                    placeholderOne={
                      "E.g. an automatic cleaning robot that is rechargeable and user-friendly"
                    }
                    placeholderTwo={"E.g. CleanBot"}
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
                    placeholderOne={
                      "E.g. starting a small business with no funding"
                    }
                    placeholderTwo={"E.g. "}
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
                    placeholderOne={
                      "E.g. the grand opening of our highly anticipated modern restaurant"
                    }
                    placeholderTwo={"E.g. "}
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
                    placeholderOne={"E.g. the history behind cultural dishes"}
                    placeholderTwo={"E.g. "}
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
                    placeholderOne={
                      "E.g. an introduction video about our sports equipment ecommerce site and the team behind it all"
                    }
                    placeholderTwo={"E.g. "}
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
                    placeholderOne={"E.g. Meet the Team Behind Track"}
                    placeholderTwo={
                      "E.g. an introduction video about our sports equipment ecommerce site and the team behind it all"
                    }
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
                    toneInput={false}
                    placeholderOne={
                      "E.g. an introduction video about our sports equipment ecommerce site and the team behind it all"
                    }
                    placeholderTwo={"E.g. "}
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
                    placeholderOne={"E.g. Funny"}
                    placeholderTwo={"E.g. "}
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
                    placeholderOne={"E.g. oceans and deserts"}
                    placeholderTwo={"E.g. "}
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
                    inputOneTitle={"Describe your paragraph with bullet points"}
                    inputTwo={false}
                    inputTwoTitle={""}
                    toneInput={true}
                    placeholderOne={
                      "E.g.\n- Health benefits of healthy eating\n- Fruit like strawberries, blueberries, and kiwi's are healthy\n- Recipes are provided in the blog"
                    }
                    placeholderTwo={"E.g. "}
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
                    placeholderOne={
                      "E.g. It was night, and the children huddled closely around the brightly burning campfire--telling horror stories"
                    }
                    placeholderTwo={"E.g. "}
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
                    placeholderOne={
                      "E.g. the revolutionary impacts that AI copywriters could have on the marketing industry"
                    }
                    placeholderTwo={"E.g. "}
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
                    placeholderOne={
                      "E.g. how AI copywriters could increase productivity"
                    }
                    placeholderTwo={
                      "E.g.\ntime spent generating content and the cost associated with it\nThe amount of struggling that manually creating content requires\nWhat AI copywriters can do"
                    }
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
                    placeholderOne={
                      "E.g. Nick was an ordinary boy living an ordinary life until he began unlocking his superhuman abilities"
                    }
                    placeholderTwo={"E.g. "}
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
                    placeholderOne={
                      "E.g. Nick was an ordinary boy living an ordinary life until he began unlocking his superhuman abilities"
                    }
                    placeholderTwo={"E.g. "}
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
                    placeholderOne={
                      "E.g. My first trip abroad will always be remembered by me"
                    }
                    placeholderTwo={"E.g. "}
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
                    placeholderOne={
                      "E.g. The grand opening of the first 100% plant-based bakery in town"
                    }
                    placeholderTwo={"E.g. Jim's Bakery"}
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
                    placeholderOne={"E.g. Fun, cold, with family"}
                    placeholderTwo={
                      "E.g. My journey to Canada was filled will delicious food and beautiful scenery"
                    }
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
                    placeholderOne={
                      "E.g. My journey to Canada was filled will delicious food and beautiful scenery"
                    }
                    placeholderTwo={"E.g. "}
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
                    inputOneTitle={"What sentence would you like to simplify?"}
                    inputTwo={false}
                    inputTwoTitle={""}
                    toneInput={true}
                    placeholderOne={
                      "E.g. All the faith he had had had had no effect on the outcome of his life"
                    }
                    placeholderTwo={"E.g. "}
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
                    placeholderOne={
                      "E.g. My journey to Canada was filled will delicious food and beautiful scenery"
                    }
                    placeholderTwo={"E.g. "}
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
                    placeholderOne={"E.g. The arrival of the King in town"}
                    placeholderTwo={"E.g. "}
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
                    placeholderOne={"E.g. run"}
                    placeholderTwo={"E.g. "}
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
                    placeholderOne={
                      "E.g. My pool company's social media presence on Twitter, Instagram, and YouTube."
                    }
                    placeholderTwo={"E.g. "}
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
                    inputOneTitle={"What product/brand is the name for?"}
                    inputTwo={false}
                    inputTwoTitle={""}
                    toneInput={false}
                    placeholderOne={"E.g. a sports equipment ecommerce website"}
                    placeholderTwo={"E.g. "}
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
                    placeholderOne={
                      "E.g. the app allows users to choose from over 50 features, and based on the category, it will generate high-quality content to fit the user's needs"
                    }
                    placeholderTwo={"E.g. an AI copywriting web app"}
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
                    placeholderOne={"E.g. the history behind cultural dishes"}
                    placeholderTwo={"E.g. "}
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
                    inputTwoTitle={"What brand/company is the idea for?"}
                    toneInput={true}
                    placeholderOne={
                      "E.g. showcasing our new water filtration device that can be easily used anywhere in the world"
                    }
                    placeholderTwo={"E.g. Filtry"}
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
                    placeholderOne={"E.g. my sister"}
                    placeholderTwo={"E.g. her 25th birthday"}
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
                    placeholderOne={
                      "E.g. I'm an aspiring freelance graphic design artist that specializes in taking normal everyday photos and turning them into something magical. It have socials on Twitter (@JannySprings) and on Instagram (@JannySprings)"
                    }
                    placeholderTwo={"E.g. "}
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
                    placeholderOne={"E.g. a line cook at The Keg Bar & Grill"}
                    placeholderTwo={
                      "E.g.\n- I have 5 years of experience cooking in the restaurant industry\n- I'm great at working under pressure\n- I was deemed employee of the month for a straight year at my last employment"
                    }
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
                    placeholderOne={"E.g. my husband"}
                    placeholderTwo={"E.g. staying with me for 5 years"}
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
                    placeholderOne={
                      "E.g. developed several fully-functional web applications that brought in a lot of money"
                    }
                    placeholderTwo={"E.g. web developer"}
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
                    placeholderOne={"E.g. Aliens"}
                    placeholderTwo={"E.g. "}
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
                    placeholderOne={
                      "E.g. a new sugar free sports drink that boosts your energy"
                    }
                    placeholderTwo={"E.g. "}
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
                    placeholderOne={
                      "E.g. a new sugar free sports drink that boosts your energy"
                    }
                    placeholderTwo={"E.g. "}
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
                    placeholderOne={"E.g. a sports drink"}
                    placeholderTwo={
                      "E.g.\nSugar free\nWill boost your energy levels\nComes in a variety of flavours"
                    }
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
                    placeholderOne={
                      "E.g. a new sugar free sports drink that boosts your energy"
                    }
                    placeholderTwo={"E.g. "}
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
                    placeholderOne={
                      "E.g. a new sugar free sports drink that boosts your energy"
                    }
                    placeholderTwo={"E.g. Natural Energy"}
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
                    placeholderOne={
                      "E.g. a new sugar free sports drink that boosts your energy"
                    }
                    placeholderTwo={"E.g. "}
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
                    placeholderOne={
                      "E.g. a new sugar free sports drink that boosts your energy"
                    }
                    placeholderTwo={"E.g. "}
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
                    placeholderOne={
                      "E.g. a new sugar free sports drink that boosts your energy"
                    }
                    placeholderTwo={"E.g. "}
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
