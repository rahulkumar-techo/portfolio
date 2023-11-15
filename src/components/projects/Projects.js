import React from "react";
import Title from "../layouts/Title";
import { projectThree } from "../../assets/index";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="SOCIAL MEDIA CLONE"
          des=" Social media connects, inspires, and empowers. In a digital world, it's the heartbeat of communication. Share, engage, and thrive in the ever-evolving landscape of online connections."
          src={"https://cdn.dribbble.com/users/6047818/screenshots/15078471/1social_media_marketing_4x.png"}
        />
        <ProjectsCard
          title="E-commerce Website"
          des=" Discover endless possibilities at our E-commerce haven. Explore curated collections, seamless navigation, and exclusive deals. Elevate your shopping experience with us. Shop smart, shop now"
          src={"https://assets.materialup.com/uploads/040745a3-8dfa-4a5f-8635-dc487b7d5a41/preview.jpg"}
        />
        <ProjectsCard
          title="Chatting App"
          des="Explore seamless connections and vibrant conversations with our innovative chatting app. Instant messaging, voice, and video calls bring people closer. Elevate your social experience today"
          src={"https://assets.materialup.com/uploads/eac03cad-eb8a-4608-9e17-0cf0bb54e1fe/preview.png"}
        />
        <ProjectsCard
          title="SEO"
          des="Unlock online success with SEO magic! Elevate your website's visibility, boost traffic, and climb search rankings. Harness the power of SEO for digital triumph today!"
          src={projectThree}
        />
        <ProjectsCard
          title="Food delivery"
          des=" Explore the convenience of food delivery. From crave-worthy cuisines to doorstep delights, savor the ease of a delicious meal at your fingertips. Bon appétit delivered"
          src={"https://cdn.dribbble.com/users/554465/screenshots/14471510/media/2b2b3592fb6ec485ae57096f02c05b9e.png"}
        />
        <ProjectsCard
          title="visiting app"
          des="Discover a world of convenience with our user-friendly app. Explore seamless navigation, exclusive deals, and instant access to personalized content. Your journey starts here"
          src={"https://cdn.dribbble.com/users/1726280/screenshots/10474951/creative_travel_website_design_4x.png"}
        />
      </div>
    </section>
  );
};

export default Projects;
