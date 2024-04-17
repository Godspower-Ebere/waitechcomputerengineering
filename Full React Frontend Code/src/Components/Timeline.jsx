import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
const Timeline = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div>
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
        <li data-aos="zoom-in">
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-end mb-10">
            <time className="font-mono italic">2015</time>
            <div className="text-lg font-black" data-aos="zoom-in">
              Establisment
            </div>
            Waitech Computer Engineering was established with the vision of
            providing reliable and efficient technology solutions to businesses
            and individuals in need.
          </div>
          <hr />
        </li>
        <li data-aos="zoom-in">
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-start md:text-end mb-10">
            <time className="font-mono italic">2018</time>
            <div className="text-lg font-black" data-aos="zoom-in">
              Advance Services
            </div>
            The company expanded its services to include IT consulting,
            networking solutions, and software troubleshooting, catering to a
            wider range of clients.
          </div>
          <hr />
        </li>
        <li data-aos="zoom-in">
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-end mb-10" data-aos="zoom-in">
            <time className="font-mono italic">2019</time>
            <div className="text-lg font-black" data-aos="zoom-in">
              Recognition
            </div>
            Waitech Computer Engineering received recognition for its
            outstanding service and dedication to customer satisfaction, earning
            several awards in the technology sector.
          </div>
          <hr />
        </li>
      </ul>
    </div>
  );
};

export default Timeline;
