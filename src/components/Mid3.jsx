export default function Mid3(){
    return(
        <div className="flex flex-col">

        <div className="flex flex-col md:flex-row justify-between items-end">
      <div>
        <div>
          <h2 className="flex justify-start flex-row whitespace-normal md:flex-col mb-4">
            <span>ADVANTAGES</span>
            <span className="whitespace-nowrap">OF ELECTRIC</span>
            <span className="flex flex-row gap-4 items-center">
              VEHICLES{" "}
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
            </span>
          </h2>
        </div>
      </div>

      <div className="w-full md:w-1/3 flex flex-col gap-4">

        <h3 className="text-right">
          We drive innovation and sustainability into the future of
          transporation. Our lineup of electronic cars is designed to redefine
          your driving experience
        </h3>
      </div>
    </div>

    <div>
          <ul className="w-full flex flex-col whitespace-nowrap justify-items-end">

            <li className="w-full bg-[#fefffc] text-3xl font-bold hover:text-[#bae635] md:text-6xl pr-5 py-5 rounded-full flex justify-end items-center hover:bg-slate-950">
              SMART CONNECTIVITY
            </li>
            <li className="w-full bg-[#fefffc] text-3xl font-bold hover:text-[#bae635] md:text-6xl pr-5 py-5 rounded-full flex justify-end items-center hover:bg-slate-950">
              ZERO EMISSION
            </li>
            <li className="w-full bg-[#fefffc] text-3xl font-bold hover:text-[#bae635] md:text-6xl pr-5 py-5 rounded-full flex justify-end items-center hover:bg-slate-950">
              IMPRESSIVE RANGE
            </li>
            <li className="w-full bg-[#fefffc] text-3xl font-bold hover:text-[#bae635] md:text-6xl pr-5 py-5 rounded-full flex justify-end items-center hover:bg-slate-950">
              EFFICIENT CHARGING
            </li>
            <li className="w-full bg-[#fefffc] text-3xl font-bold hover:text-[#bae635] md:text-6xl pr-5 py-5 rounded-full flex justify-end items-center hover:bg-slate-950">
              SAFETY
            </li>
          </ul>
        </div>

   </div> 
    )
}