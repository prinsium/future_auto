import Image from "next/image";

export default function Mid2() {
  return (
    <div>

        <div className="flex flex-row gap-6 -mb-14 ml-2 md:ml-4 lg:ml-8">
        
<img class="border-8 border-gray-100 rounded-full w-[16vw] h-[16vw] md:w-[20vw] md:h-[20vw] lg:w-[16vw] lg:h-[16vw]" src="/ev1.avif" alt="ev1" />
<img class="border-8 border-gray-100 rounded-full w-[16vw] h-[16vw] md:w-[20vw] md:h-[20vw] lg:w-[16vw] lg:h-[16vw]" src="/ev1.avif" alt="ev1" />
<img class="border-8 border-gray-100 rounded-full w-[16vw] h-[16vw] md:w-[20vw] md:h-[20vw] lg:w-[16vw] lg:h-[16vw]" src="/ev1.avif" alt="ev1" />

        </div>
        
    <div className="h-screen flex justify-center items-center bg-slate-950 rounded-3xl">
    <div className="flex flex-col md:flex-row justify-between items-end px-4 md:px-8 lg:px-12">
      <div className="w-full md:w-2/5 flex md:justify-center md:items-center">
        <h3 className="text-gray-100">
          we're committed to leading the way in sustainable transportation. Our
          electric cars combine cutting edge technology with environmental
          consciousness offering an exhilarating and eco-friendly journey on the
          road
        </h3>
      </div>
      <div>
        <div className="hidden md:block">
          <h2 className="flex text-gray-100 text-end flex-row whitespace-normal md:flex-col mb-4">
            <span>LEARN ABOUT</span>
            <span>OUR CHARGING</span>
            <span className="flex flex-row justify-end gap-4 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#bae635"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="#bae635"
                class="w-[4vw] h-[4vw] rotate-135 bg-gray-900 p-3 rounded-full"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
                />
              </svg>{" "}
              OPTIONS
            </span>
          </h2>
        </div>

        <div className="md:hidden flex justify-center items-center">
          <h2 className="flex text-gray-100 text-center flex-col whitespace-normal mb-4">
            <span>LEARN ABOUT OUR</span>
            <span className="flex flex-row justify-center gap-4 items-center">
            CHARGING{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#bae635"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="#bae635"
                class="w-[4vw] h-[4vw] rotate-135 bg-gray-900 p-3 rounded-full"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
                />
              </svg>
              {" "}OPTIONS
            </span>
          </h2>
        </div>
      </div>
    </div>
    </div>

    <div className="flex justify-end -mt-24 ml-2 md:ml-4 lg:ml-8">
        
<img class="border-8 border-gray-100 rounded-full w-2/3" src="/ev3.jpg" alt="ev3" />

        </div>
    
    </div>
  );
}
