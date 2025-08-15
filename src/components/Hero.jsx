import { ArrowUpRight, LineSquiggle, Waves } from "lucide-react";

const SquiggleUnderline = () => (
  <svg
    className="w-full"
    height="15"
    viewBox="0 0 211 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1.15527 13.8447C51.2386 -2.33815 133.253 -2.33815 209.845 13.8447"
      stroke="#9A77FF"
      strokeWidth="2"
    />
  </svg>
);

const AvailableForWork = () => (
  <div className="absolute -top-8 -left-8 w-36 h-36 freelance-badge-container group select-none">
    <style>
      {`
        @keyframes spinSlow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .rotate-slow {
          animation: spinSlow 12s linear infinite;
          transition: animation-duration 0.3s ease;
        }
        .group:hover .rotate-slow {
          animation-duration: 4s;
        }
      `}
    </style>

    <svg className="w-full h-full rotate-slow" viewBox="0 0 100 100">
      <defs>
        <path
          id="circlePath"
          d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0"
        />
      </defs>

      <circle cx="50" cy="50" r="50" fill="white" />
      <circle
        cx="50"
        cy="50"
        r="49"
        fill="none"
        stroke="#e5e7eb"
        strokeWidth="2"
      />

      <g>
        <text
          fill="#111827"
          className="text-[9px] font-semibold tracking-wider uppercase"
        >
          <textPath href="#circlePath" startOffset="0%" textLength="251">
            Plan • Design • Develop • Deploy •&nbsp;
          </textPath>
        </text>
      </g>
    </svg>

    <ArrowUpRight className="w-6 h-6 text-gray-900 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
  </div>
);

const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-16 md:pt-40 md:pb-24 bg-[#F3F0FF]">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <span className="inline-block bg-white border border-gray-900/20 rounded-full px-4 py-1 text-sm font-semibold text-gray-800 mb-4">
              • HELLO!
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              I'm Shivam Gupta,
              <br />
              <span className="inline-block relative">
                an engineering student.
                <div className="absolute -bottom-3 left-0 w-full px-2">
                  <SquiggleUnderline />
                </div>
              </span>
            </h1>
            <p className="text-lg text-gray-600 max-w-lg mb-8">
              I'm currently exploring opportunities to apply my skills in
              real-world projects and contribute to impactful teams.
            </p>
            <a
              href="#projects"
              className="inline-block bg-white text-gray-900 px-8 py-3 rounded-full font-semibold border-2 border-black shadow-[4px_4px_0_0_#000] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all duration-200"
            >
              See My Works
            </a>
          </div>
          <div className="relative flex justify-center items-center mt-12 lg:mt-0">
            <div className="relative w-[300px] h-[400px] md:w-[350px] md:h-[480px]">
              {/* This div now acts as the frame, clipping your image to the arched shape. */}
              <div className="absolute border-2 border-black inset-0 rounded-t-[200px] rounded-b-[20px] overflow-hidden">
                <img
                  src="/profile.png"
                  alt="Shivam Gupta"
                  className="w-full h-full object-cover"
                  // This placeholder will show if your image fails to load.
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://placehold.co/400x500/F3F0FF/333333?text=Your+Image";
                  }}
                />
              </div>

              {/* Rotating "Available for Work" badge */}
              <AvailableForWork />

              {/* Decorative Sparkles (top right) */}
              <div className="absolute top-0 -right-4 hidden md:block">
                {" "}
                <Waves strokeWidth={1} size={32} />{" "}
              </div>
              <div className="absolute bottom-15 -left-25 hidden md:block">
                {" "}
                <LineSquiggle strokeWidth={0.5} size={64} />{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
