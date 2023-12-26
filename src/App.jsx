
import { BrowserRouter } from "react-router-dom";
import {About , Contact , Hero , Navbar  , Experience , Feedbacks  , Tech , Works, StarsCanvas} from "./components";

const App = () => {
  return (
      <BrowserRouter>
        <div className="relative z-0 bg-primary"> 
            <div className="bg-hero-pattern bg-cover bg-no-repeat
             bg-center">
                  <Navbar />
                  <Hero />
                  <About />
                  <Experience />
                  <Tech />
                  <Works />
                  <div className="relative z-0 ">
                      <Contact />
                      <StarsCanvas />
                      <div
        itemScope
        itemType='http://schema.org/Person'
        className='fiverr-seller-widget'
      >
        <a
          itemProp='url'
          href='https://www.fiverr.com/amiirr98'
          rel='nofollow'
          target='_blank'
          
        >
          <div
            className='fiverr-seller-content'
            id='fiverr-seller-widget-content-ebf44ad2-f07b-4b13-b860-5263504be7e2'
            itemProp='contentURL'
           
          ></div>
          <div
            id='fiverr-widget-seller-data'
            
          >
            <div itemProp='name'>amiirr98</div>
            <div
              itemScope
              itemType='http://schema.org/Organization'
            >
              <span itemProp='name'>Fiverr</span>
            </div>
            <div itemProp='jobtitle'>Seller</div>
            <div itemProp='description'>
              I am an accomplished Backend Developer with over 5 years of
              experience in C#.NET development, showcasing my diverse skill
              set in both creative and technical fields. As a Video Editor,
              I am proficient in Adobe Premiere and After Effects, and I
              have 3 years of expertise in Photo Editing using Adobe
              Photoshop and Lightroom, along with experience in creating
              music visualizers.
            </div>
          </div>
        </a>
      </div>
                  </div>
       



              </div>
        </div>
      </BrowserRouter>
  )
}


export default App
