export default function Navbar(){
    return (
      <div>
        <div className="flex bg-gray-600 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 p-2 rounded-full">
          <ul className="w-full flex flex-row whitespace-nowrap justify-items-center">
            <li className="bg-gray-900 p-3 rounded-full flex justify-center items-center hover:bg-[#faffec]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#bae635"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="#bae635"
              className="w-6 h-6 rotate-135"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
              />
            </svg>
            </li>

            <li className="w-full bg-[#fefffc] py-3 rounded-full flex justify-center items-center hover:bg-[#bae635]">
              Home
            </li>
            <li className="w-full bg-[#fefffc] py-3 rounded-full flex justify-center items-center hover:bg-[#bae635]">
              Our Solutions
            </li>
            <li className="w-full bg-[#fefffc] py-3 rounded-full flex justify-center items-center hover:bg-[#bae635]">
              Sustainability
            </li>
            <li className="w-full bg-[#fefffc] py-3 rounded-full flex justify-center items-center hover:bg-[#bae635]">
              Benifits
            </li>
            <li className="w-full bg-[#fefffc] py-3 rounded-full flex justify-center items-center hover:bg-[#bae635]">
              About Us
            </li>
            <li className="w-full bg-[#fefffc] py-3 rounded-full flex justify-center items-center hover:bg-[#bae635]">
              Test Drive
            </li>
          </ul>
        </div>
      </div>
    );
}