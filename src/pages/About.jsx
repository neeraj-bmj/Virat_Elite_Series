import { useRef } from 'react';
import {lazy} from "react";
import TextType from'../components/TextType'
import VariableProximity from '../components/VariableProximity';


const About = () => {
  const containerRef = useRef(null);
  
  
  return (
    <div className="min-h-screen bg-gray-600 text-zinc-100 p-8 md:p-16">
      <div className="max-w-4xl mx-auto">
        {/* this is about text */}
        <div className="text-4xl font-bold mb-6 text-rose-400">
          <TextType 
           text={["About Virat Elite Series ", "About Virat Elite Series ", "About Virat Elite Series "]}
           typingSpeed={140}
           pauseDuration={2500}
           showCursor={true}
           cursorCharacter="|"
          />
        </div>
         {/* this is decription */}
        <p className="text-lg mb-4">
          <strong className="text-red-400  bg-gray-800 px-2 py-1 rounded-lg">
            💖 Virat Elite Series 💖
          </strong>{" "}
          is a premier sports gear and lifestyle brand inspired by the spirit,
          passion, and performance of{" "}
          <strong className="text-pink-100 bg-gray-800 px-2 py-1 rounded-lg">
            Virat Kohli
          </strong>{" "}
          — a global cricketing icon and fitness ambassador.
        </p>

        {/* 1. this is hover effect from VariableProximity file  */}
        <div
         ref={containerRef}
         style={{position: 'relative'}}
         >
           <VariableProximity
             label={' Whether you`re on the field or off it, the Virat Elite Series delivers high-performance apparel, accessories, and gear trusted by athletes and inspired by Virat`s discipline and drive.'}
             className={'variable-proximity-demo text-lg mb-10 leading-relaxed'}
             fromFontVariationSettings="'wght' 400, 'opsz' 9"
             toFontVariationSettings="'wght' 1000, 'opsz' 40"
             containerRef={containerRef}
             radius={100}
             falloff='linear'/>
         </div>

        <p className="text-lg mb-6 leading-relaxed">
          We don't just sell products — we promote a movement.{" "}
          <em>Train like Kohli. Live like Kohli. Be Elite.</em>
        </p>

        <div className="bg-indigo-50 border-l-4 border-indigo-600 p-4 rounded-md shadow">
          <ul className="space-y-2 text-gray-700">
            <li>
               <strong>Endorsed by:</strong> Virat Kohli
            </li>
            <li>
               <strong>Origin:</strong> India
            </li>
            <li>
               <strong>Vision:</strong> "Fueling fitness, focus, and future
              champions"
            </li>
          </ul>
        </div>

        {/* this is founder / influencer section */}
        <div className="mt-16">
          <h2 className="text-3xl font-semibold mb-4 text-pink-300">
            Founder & Influencer
          </h2>

          {/* this is influencer description */}
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
            <div className="text-lg mb-2">
              <span className="bg-gray-800 text-4xl text-pink-600 px-3 py-1 rounded-xl my-5">
                ~Virat Kohli~
              </span>
              
              {/* this is hover effect from VariableProximity file */}
              <div
               ref={containerRef}
               style={{position: 'relative'}}>
                <VariableProximity
                  label={' is not just the face of elite fitness — he`s the spirit behind it. As one of the most consistent cricketers and a modern icon of discipline, Virat brings excellence, intensity, and innovation to everything he touches —  including the Virat Elite Series.'}
                  className={'variable-proximity-demo text-lg mb-10 leading-relaxed'}
                  fromFontVariationSettings="'wght' 400, 'opsz' 9"
                  toFontVariationSettings="'wght' 1000, 'opsz' 40"
                  containerRef={containerRef}
                  radius={100}
                  falloff='linear'/>
              </div>
            </div>
            <p className="text-sm text-red-100 font-bold">
              "Consistency and hard work are the bridges between goals and
              success." — Virat Kohli
            </p>
          </div>
        </div>

        {/* this is timeline section */}
        <div className="mt-16">
          <h2 className="text-3xl font-semibold mb-6 text-pink-300">
            Milestones & Achievements
          </h2>
          <div className="space-y-6 border-l-2 border-pink-600 pl-6">
            <div>
              <p className="text-sm text-zinc-400">2008</p>
              <p className="text-lg font-semibold">
                Debuted for India's national cricket team
              </p>
            </div>
            <div>
              <p className="text-sm text-zinc-400">2013</p>
              <p className="text-lg font-semibold">
                Appointed ODI team captain
              </p>
            </div>
            <div>
              <p className="text-sm text-zinc-400">2018</p>
              <p className="text-lg font-semibold">
                Named ICC Cricketer of the Year
              </p>
            </div>
            <div>
              <p className="text-sm text-zinc-400">2023</p>
              <p className="text-lg font-semibold">
                Crossed 25,000 international runs
              </p>
            </div>
            <div>
              <p className="text-sm text-zinc-400">2025</p>
              <p className="text-lg font-semibold">Led RCB to a record-breaking season with 12 consecutive wins in IPL 2025</p>
              <p className="text-lg font-semibold">
                Launched the <span className="bg-gray-800 text-pink-600 px-3 py-1 rounded-xl">Virat Elite Series</span>  brand globally, inspiring
                athletes across continents
              </p>
            </div>
          </div>
        </div>

        {/* this is testimonial section */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-semibold mb-4 text-pink-300">
            Testimonial
          </h2>
          <div className="bg-gray-800 p-6 rounded-xl shadow-md">
            <p className="italic text-lg mb-2 text-zinc-100">
              "The Virat Elite Series is more than just gear — it's a mindset.
              It's for those who want to win every single day."
            </p>
            <p className="text-pink-400 font-bold">— Team Virat Elite</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
