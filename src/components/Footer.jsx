export default function Footer(){
    return(
        <div>
            <div className="h-72 flex flex-col justify-center items-center bg-slate-950 rounded-full">
                <div>
                <h2 className="text-gray-100">TEST DRIVE NOW</h2>
                </div>

                <div className="flex flex-row -mt-10 gap-12 justify-center items-center">
                
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="#ffffff" viewBox="0 0 24 24" strokeWidth={1} stroke="#ffffff" className="w-8 h-8 p-2 rotate-180 bg-gray-600 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-70 rounded-full">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
                        </svg>
                    </div>

                    <div className="p-6 bg-gray-600 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-70 rounded-full">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#bae635"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="#bae635"
                class="w-[8vw] h-[8vw] rotate-135 bg-gray-900 p-3 rounded-full"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
                />
              </svg>
                </div>

                    <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#ffffff" viewBox="0 0 24 24" strokeWidth={1} stroke="#ffffff" className="w-8 h-8 p-2 bg-gray-600 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-70 rounded-full">
  <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
</svg>
                    </div>

                </div>


        </div>
        </div>
    )
}