import React from "react";
import "./home.css";
import video from "../../assets/video.mp4";
import img from "../../assets/data.jpg";
import img2 from "../../assets/data2.jpg";
import img3 from "../../assets/data3.jpg";
import company from "../../assets/company.png";
import HomeCard from "./card/HomeCard";
import HomeTestimonials from "./t_card/HomeTestimonials";

const Home = () => {
  return (
    <div className="home">
      <div className="home__wrapper">
        <div className="home__heading">
          <h3>Best Certificates</h3>
          <p>Book Job-Ready Career Consultation Call</p>
        </div>
        <div className="home__video">
          <video src={video} width={"100%"} controls></video>
        </div>
      </div>
      <div className="home__product">
        <h1>Products</h1>
        <div className="home__product_card">
          <HomeCard
            img={img}
            price={"₹3,959"}
            heading={"Budget Friendly Data Science(A-Z) Course"}
            course={"Course+ 90 Lessons"}
            btn={"View Products"}
          />
          <HomeCard
            img={img2}
            price={"₹9,999"}
            heading={"CMLA (70% Interview Questions from this Videos)"}
            course={"Course+ 255 Lessons"}
            btn={"View Products"}
          />
          <HomeCard
            img={img}
            price={"₹3,959"}
            heading={"Budget Friendly Data Science(A-Z) Course"}
            course={"Course+ 90 Lessons"}
            btn={"View Products"}
          />
          <HomeCard
            img={img2}
            price={"₹9,999"}
            heading={"CMLA (70% Interview Questions from this Videos)"}
            course={"Course+ 255 Lessons"}
            btn={"View Products"}
          />
          <HomeCard
            img={img3}
            price={"Free"}
            heading={"Getting Started with R for Data Science"}
            course={"Course+ 7 Lessons"}
            btn={"View Products"}
          />
        </div>
      </div>

      <div className="home__learning">
        <h1>Who is Learning ?</h1>
        <small>
          Majority of skilled professionals would recommend BEPEC for career
          transition programs & customised corporate trainings!
        </small>
        <div>
          <img src={company} alt="home__companies" />
        </div>
      </div>

      <div className="home__career">
        <div className="home__career_content">
          <h1>Career Transition Simplified!</h1>
          <div className="home__carrer_wrapper">
            <p className="">
              Every learner's major goal is to get placed into future
              technologies. But, they <br />
              <span>
                have lot of limitations like their current experience, current
                timing
              </span>
            </p>
            <br />
            <p>
              <span>
                pattern, building right skillset, building good projects in
                their <br /> resume, building unbeatable confidence etc.
              </span>
              <br />
              For all your limitations on career transition we have
              <span>
                <br />
                one solution BEPEC Career Transition
              </span>
            </p>
            <br />
            <p>
              <span>Programs.</span>
              We make every learner to perform successful career transition{" "}
              <br />
              from any profile into Data Science, Machine Learning, Deep
              Learning or AI.
            </p>
          </div>
          <button>Career Transition Programs</button>
        </div>
        <div className="home__background">
          <h1>SKILLEAD.</h1>
          <h3>Career transition simplified!</h3>
        </div>
      </div>

      <div className="home__testimonials">
        <h1>Testimonials</h1>
        <div className="home__testimonials_wrapper">
          <HomeTestimonials
            name={"Raj"}
            content={`I was a bit nervous before coming to 
              Bepec but 
              as long as keep on doing things instructed by 
              the trainers you will get to know how things 
              in AI works and what challenges you will face right from 
              business understanding to deployment. If we talk about trainers, both the trainers 
              are superb in bringing positive vibes in the 
              online session. The way of teaching can't be expressed in words it's far better and most 
              important you will be able to clear your doubt anytime. If anyone is 
              willing to enter in the AI/Data Science field or Career Switch then Bepec is the best place.`}
          />
          <HomeTestimonials
            name={"Suraj"}
            content={`Hi, I had enrolled for career transition 
              program here... And I must say the 
              program is awesome.. In fact it's not like 
              your doing some random course it's more of like your working as a 
              data scientist/ML engineer...the experience is that high level..also at every point 
              I was able to learn the real time challenges that are faced and how to overcome... Mr. Kanth 
              and Mr. Rakesh both of them classes are fantastically fabulous as they are giving out the content which 
              are not in the internet and projects given here are only real time.. That is the best part which I liked here.`}
          />
          <HomeTestimonials
            name={"Julie"}
            content={`I am enrolled in BEPEC Data scientist Career Transition program. Before BEPEC i tried other online 
            platforms but didn't worked well for me, It only increased my confusion. After we Joining BEPEC i got a clear vision for roadmap of journey as data scientist, what are different 
            roles and responsibilities in the industry and how to get into those roles. Regarding the course, it is very well designed. It covers all topic which a data scientist should 
            know in current business world. For theoretical concepts they have lightboard sessions which provides a live classroom like environment. 
            And every theory session is followed by a hands on class where Kanth explains about how to use that theory in real business. For doubt clarifications 
            mentors are available all the time. Along with assignments they have Live Projects which builds up all skillset to be a data scientist and also add 
            values to our portfolio The best thing i liked is that Kanth explains how to apply all the concepts in real world. Along with developing domain knowledge he is also 
            helping to enhance our professional skills to face real world challenges as data scientist.`}
          />
          <HomeTestimonials
            name={"Hema"}
            content={`Hello All !! I am Keshav and I am currently learning Data science from BEPEC. 
            I am very happy to learn from such an experienced faculties who are having 10+ yrs of experience 
            in the same field. They are giving me so many techniques and ideas on how to approach a problem. You 
            can ask them whenever you are having a doubt and they will revert to you ASAP. And I need to say this ..they are providing 
            agenda sheet which covers all most all the important topics and they are supporting us for real life projects too. Trust me , 
            they will help you to achieve your goal with maximum skill . Their teachings are superb and you will understand very much 
            easier even if you are a beginner . Trust me , you will understand very easily . Concluding, this is the best career transition 
            ever given . Whatever the course it may be (ML/AI/DS/TIME SERIES) they are awesome .`}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
