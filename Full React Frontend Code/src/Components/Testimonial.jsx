import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Aos from "aos";
import "aos/dist/aos.css";
const Testimonial = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  const testimonials = [
    {
      name: "Benneth Nwankwo",
      message:
        "Waitech Computer Engineering fixed my computer quickly and efficiently. I'm very satisfied with their service!",
      rating: 5,
      avatar:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Benneth_Nwankwo_%28cropped%29.jpg/220px-Benneth_Nwankwo_%28cropped%29.jpg",
    },
    {
      name: "Olalekan Fatodu",
      message:
        "I had a great experience with Waitech. They were able to diagnose and solve my computer issues in no time. Highly recommended!",
      rating: 4,
      avatar:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Mr_Lekan_Fatodu.jpg/220px-Mr_Lekan_Fatodu.jpg",
    },
    {
      name: "Nicole Asinugo",
      message:
        "The team at Waitech Computer Engineering is incredibly knowledgeable and professional. I wouldn't trust anyone else with my computer repairs.",
      rating: 5,
      avatar:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Nicole_Asinugo_Aug_2017.png/220px-Nicole_Asinugo_Aug_2017.png",
    },
    {
      name: "Emily Brown",
      message:
        "Waitech Computer Engineering is simply the best! They went above and beyond to ensure my computer was up and running again. Thank you!",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
      name: "David Smith",
      message:
        "I've been using Waitech's services for years, and they never disappoint. Fast, reliable, and friendly support every time!",
      rating: 4,
      avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    },
    {
      name: "Alice Johnson",
      message:
        "Amazing service! Waitech Computer Engineering is my go-to for all my computer needs. Highly recommended!",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/women/3.jpg",
    },
    {
      name: "Sarah Adams",
      message:
        "I'm impressed by the professionalism and efficiency of Waitech. They fixed my computer issues in no time. Thank you!",
      rating: 4,
      avatar: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      name: "James Wilson",
      message:
        "Great experience with Waitech Computer Engineering. They provided excellent service and resolved my computer problems quickly.",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/men/4.jpg",
    },
    {
      name: "Emma Brown",
      message:
        "Highly recommend Waitech! They are reliable, knowledgeable, and provide top-notch computer repair services.",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/women/5.jpg",
    },
    {
      name: "Matthew Taylor",
      message:
        "Waitech exceeded my expectations! Their team is friendly, skilled, and they fixed my computer issues with ease.",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/men/5.jpg",
    },
  ];

  var settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container px-4">
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="p-4" data-aos="zoom-in">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.avatar}
                  alt="Waitech Computer Engineering"
                  className="w-12 h-12 rounded-full"
                />
                <div className="ml-4">
                  <p className="text-lg font-semibold">{testimonial.name}</p>
                  <div className="flex items-center">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 fill-current text-yellow-500 mr-1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 15.758l-5.48 2.82 1.045-6.094L.465 7.422l6.103-.89L10 1.594l3.432 5.938 6.103.89-4.055 4.063 1.045 6.094z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ))}
                    <span className="text-gray-500">
                      ({testimonial.rating})
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-lg">{testimonial.message}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonial;
