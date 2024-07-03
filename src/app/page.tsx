import Image from "next/image";
import '@fortawesome/fontawesome-svg-core/styles.css'; // Import the styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

export default function Home() {
  return (
    <>
    <head>
      <link rel="icon" type="image" href="#"/>
      
      <title>TravelBoom</title>
    </head>
    <body>
      <nav className="sticky top-0 z-50 p-4 flex bg-primaryd">
           <div className="mx-2 px-2">
            <span className="font-bold text-white font-serif text-2xl antialiased  underline decoration-yellow-100/70 hover:subpixel-antialiased">TravelBoom</span>
           </div>
            <div className="w-full">
              <ul className="flex flex-row justify-evenly ">
                <li className="text-yellow-50 mt-1.5"><a href="#Home">Home</a></li>
                <li className="text-yellow-50 mt-1.5"><a href="#About Us">About Us</a></li>
                <li className="text-yellow-50 mt-1.5"><a href="#Contact Us">Contact Us</a></li>
              </ul>
            </div>
            <div className="flex gap-4">
              <input type="text"className="rounded" placeholder="Enter the destination" ></input>
              <button className="rounded-lg px-2 bg-primaryl hover:cursor-pointer hover:bg-blue-400"><i className="fa-solid fa-magnifying-glass"/>Search</button>
              <button className="rounded-lg px-2 bg-primaryl hover:cursor-pointer hover:bg-blue-400">Reset</button>
            </div>
      </nav>
      <div className="fixed left-0 top-0 h-screen flex flex-col items-center justify-center bg-black text-white p-4">
  <div className="mb-4">
    <FontAwesomeIcon icon={faTwitter} className="text-4xl" />
  </div>
  <div className="mb-4">
    <FontAwesomeIcon icon={faFacebook} className="text-4xl" />
  </div>
  <div className="mb-4">
    <FontAwesomeIcon icon={faInstagram} className="text-4xl" />
  </div>
  <div className="mb-4">
    <FontAwesomeIcon icon={faYoutube} className="text-4xl" />
  </div>
</div>

      <section id="Home" className="bg-[url('/bg1.jpg')] h-screen bg-cover bg-center relative">
      <div className="absolute inset-0 bg-black bg-opacity-60">
      <div className="grid grid-cols-2 h-full ">
        <div className="col-span-1 flex items-center justify-center">
          <div className="px-10">
            <h3 className="text-6xl text-white font-bold mb-4">Your Adventure Awaits!</h3>
            <p className="font-mono text-white text-lg">
              We offer excellent professional travel consulting, planning & booking services. We simply want you to sit back, relax, & enjoy your wonderful getaway! Need help planning the ultimate getaway?! Whether it’s a solo trip, honeymoon, family & friends vacation or you're looking to check off another bucket list destination, let us handle booking your flights, accommodations, excursions, transportation, authentic cultural experiences and more!
            </p>
          </div>
        </div>
       
      </div>
      </div>
      
    </section>
    <section id="About Us" className="bg-[url('/bg2.jpg')] h-screen bg-cover bg-center relative">
      <div className="absolute inset-0 bg-black bg-opacity-60">
      <div className="grid grid-cols-2 h-full ">
        <div className="col-span-1 flex items-center justify-center">
          <div className="px-10">
            <h3 className="text-4xl text-white font-bold mb-4">CEO & Travel Advisor</h3>
            <p className="font-sans text-white text-lg">
            As a Verified Travel Advisor, my goal is to inspire and encourage people to travel this beautiful world. I have a passion for travel and love to customize wonderful one-of-a-kind vacation experiences. I have personally traveled to over 15+ countries and counting! I draw from my personal travel experiences to help create fabulous vacations for my clients. I look forward to helping you check more countries off your Bucket List! </p>
          </div>
        </div>
        <div className="col-span-1 flex items-center justify-center">
          <div className="px-10">
            <h3 className="text-4xl text-white font-bold mb-4">Travel Advisor</h3>
            <p className="font-sans text-white text-lg">
            My journey as a Travel Advisor is driven by my desire to inspire individuals to experience the transformative power of global community. Having visited over 15+ countries and lived in Spain, Brazil, and Colombia, I leverage my personal travels and language abilities (Spanish fluency and conversational Portuguese) to curate memorable travel experiences for my clients. </p>
          </div>
        </div>
       
      </div>
      </div>
      
    </section>
    <section id="Contact Us" className="bg-[url('/bg3.jpg')] h-screen bg-cover bg-center relative">
    <div className="absolute inset-0 bg-black bg-opacity-60">
    <div className=" p-4 flex flex-wrap md:flex-nowrap">
      <div className="p-2 mt-20 w-2/3">
         <span className="text-4xl font-serif text-secondaryl mb-12">Become A Travel Insider!</span>
         <p className="text-white mb-5">
         Sign up for Destination E's latest news, travel updates, new group travel experiences and more, delivered right to your inbox.
         </p>
          <p className="text-white text-sm mb-20">Destination E is a Virtuoso partner, the leading global network specializing in luxury travel from hotels, resorts, cruise lines, tour operators and more. We have access to great benefits, perks and amenities when you book through us! </p>
         <p className="text-white mb-5">Ph: (267) 888-7224</p>
         <p className="text-white">Em: contact@travelboom.com</p>
      </div>
      <div className="p-4 mt-20">
      <form className="w-full max-w-lg">
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
        First Name
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border hover:border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane"/>
      
    </div>
    <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-gray-700 hover:border-red-500 text-xs font-bold mb-2" for="grid-last-name">
        Last Name
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 hover:border-red-500 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe"/>
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
        Password
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 hover:border-red-500 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="******************"/>
      <p className="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-2">
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 hover:border-red-500 text-xs font-bold mb-2" for="grid-city">
        City
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 hover:border-red-500 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Albuquerque"/>
    </div>
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 hover:border-red-500 text-xs font-bold mb-2" for="grid-state">
        State
      </label>
      <div className="relative">
        <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
          <option>New Mexico</option>
          <option>Missouri</option>
          <option>Texas</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 hover:border-red-500">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
    </div>
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 hover:border-red-500 text-xs font-bold mb-2" for="grid-zip">
        Zip
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 hover:border-red-500 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="90210"/>
    </div>
  </div>
</form>
<button className="rounded-lg p-2  bg-primaryl hover:cursor-pointer hover:bg-blue-400"><i className="fa-solid fa-magnifying-glass"/>Search</button>
            
      </div>
    </div>
    </div>
   
    
    
    </section>
    <footer>

    </footer>
    </body>
    </>
  );
}
