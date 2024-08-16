import { useEffect, useState } from "react";
import Button from "../components/Button";
import axios from "../instance.js";
import { useNavigate } from "react-router-dom";

const Thankyou = ({ userCount }) => {
  const navigate = useNavigate();
  const [percentage, setPercentage] = useState(0);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    // Trigger fbq('track', 'Lead') when the component mounts
    if (typeof window.fbq !== "undefined") {
      window.fbq("track", "Lead"); // Facebook Pixel tracking for lead
    }

    if (typeof window.gtag !== "undefined") {
      window.gtag("event", "conversion", {
        send_to: "AW-11093062414/-LDICOyWxMoZEI7myqkp",
      });
    }


  }, []);



  useEffect(() => {
    const startCounter = () => {
      let count = 0;
      const interval = setInterval(() => {
        if (count < 100) {
          count += 1;
          setPercentage(count);
        } else {
          clearInterval(interval);
        }
      }, 30); // Adjust the speed of the animation here
    };

    // Start counter animation
    startCounter();

    const generateCretificate = async () => {
      const response = await axios.post("/generate-certificate", {
        name: sessionStorage.getItem("user_name"),
        phone: sessionStorage.getItem("user_phone"),
      });
      setPercentage(100);
      setIsLoading(false);
      sessionStorage.setItem("user_url", response.data.msg.url);
      sessionStorage.setItem("user_filename", response.data.msg.certificates);
      //   setCertificateUrl(response.data.msg.url);
    };
    generateCretificate();
  }, []);

  const sendWhatsAPP = async () => {
    const response = await axios.post("/send-whatsapp-message", {
      name: sessionStorage.getItem("user_name"),
      destination: sessionStorage.getItem("user_phone"),
      image: sessionStorage.getItem("user_url"),
    });
    navigate("/congratulations");
  };

  const getColorFromPercentage = (percent) => {
    const hue = ((percent / 100) * 120).toString(); // Green (120) to Red (0)
    return `hsl(${hue}, 100%, 50%)`;
  };

  const borderColor = getColorFromPercentage(percentage);

  return (
    <>
      <div className="flex flex-col md:flex-row justify-between p6 md:p-[52px] h-auto md:h-full md:pt-20 md:pb-40 ">
        <div className=" flex flex-col justify-center md:justify-start items-center   w-full md:w-[344px]   left-0 md:left-20 gap2 md:gap-3 md:gap4 top-40 px-4 md:px-0 ">
          <img
            className="hidden md:block w-[160px] h-[200px]"
            src="./assets/images/logo-2.png"
            alt=""
          />
          <div className="flex justify-center items-center text-[#F5F5F5] font-bold  text-[55px] leading-[70px] md:text-[70px] md:leading-[90px] font-Antonio">
            <h1 className="relative inline-block text-shadow-custom">
              Thank You
            </h1>
          </div>

          <p className="text-[14px] leading-[22px] md:text-2xl text-white text-center font-bold font-OpenSans">
            For pledging your support and participating in the initiative.
            Together, we are making a difference.
          </p>

          {/* percentage laoding ui */}
          <div className="hidden md:flex justify-center">
            <div
              style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
              className="w-24 h-24 rounded-full p-3"
            >
              <div
                className={`flex items-center justify-center transition-all duration-1000 text-white font-OpenSans`} // Tailwind classes for smooth transition
                style={{
                  border: "8px solid",
                  borderRadius: "50%",
                  borderColor: borderColor,
                  width: "100%",
                  height: "100%",
                  fontSize: "16px",
                  fontWeight: "bold",
                  // color: "#000",
                  transition: "border-color 1s ease", // Ensure smooth color transition
                }}
              >
                {percentage}%
              </div>
            </div>
          </div>

          <p className="hidden md:block text-[18px] text-white text-center font-normal font-OpenSans">
            {isLoading ? "Generating yourCertificate..." : "Completed"}
          </p>
          <Button
            onClick={() => sendWhatsAPP()}
            text={`view certificate`}
            className={`hidden md:flex`}
          />
        </div>

        <div className="hidden md:flex flex-col justify-center md:justify-start items-center md:items-end  w-full md:w-[344px] pb-20 md:pb-0   left-0 md:left-20 gap-9 top-40 px-4 md:px-0">
          <div className="flex flex-col gap-24 text-center text-white items-center">
            <img
              src="./assets/images/logo-1.png"
              className="h-[250px] w-[250px] hidden md:flex "
              alt=""
            />
            <div className="hidden md:block text-white text-center md:text-right bg-black bg-opacity-50 md:bg-transparent px-6 py-2 rounded-xl">
              <p className="text-white font-Inter text-[12px] md:text-[20px] font-bold ">
                Pledges so far
              </p>
              <div className="flex flex-col mt-[-10px] md:mt-[-20px]">
                <p className="text-shadow-custom text-[62px] md:text-[120px] font-bold font-Antonio md:h-[160px]">
                  {userCount}
                </p>
                <p className="text-white font-Inter text-[12px] md:text-[20px] font-bold">
                  and counting...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>



      <div className=" flex md:hidden flex-col items-center gap-2 absolute bottom-8 left-0 right-0">


      {/* <div className=" md:hidden  text-white text-center md:text-right bg-black bg-opacity-50 md:bg-transparent px-6 py-2 rounded-xl">
        <p className="text-white font-Inter text-[12px] md:text-[20px] font-bold ">
          Pledges so far
        </p>
        <div className="flex flex-col mt-[-10px] md:mt-[-20px]">
          <p className="text-shadow-custom text-[62px] md:text-[120px] font-bold font-Antonio md:h-[160px]">
            {userCount}
          </p>
          <p className="text-white font-Inter text-[12px] md:text-[20px] font-bold">
            and counting...
          </p>
        </div>
      </div> */}

      <div className="flex md:hidden justify-center">
        <div
          style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
          className="w-24 h-24 rounded-full p-3"
        >
          <div
            className={`flex items-center justify-center transition-all duration-1000 text-white font-OpenSans`} // Tailwind classes for smooth transition
            style={{
              border: "8px solid",
              borderRadius: "50%",
              borderColor: borderColor,
              width: "100%",
              height: "100%",
              fontSize: "16px",
              fontWeight: "bold",
              // color: "#000",
              transition: "border-color 1s ease", // Ensure smooth color transition
            }}
          >
            {percentage}%
          </div>
        </div>
      </div>

      <p className="block md:hidden text-[18px] text-white text-center font-normal font-OpenSans">
        {isLoading ? "Generating yourCertificate..." : "Completed"}
      </p>

      <Button
        onClick={() => sendWhatsAPP()}
        text={`view certificate`}
        className={`!w-[80%] !mx-auto flex justify-center  md:hidden `}
      />

        
      </div>
    </>
  );
};

export default Thankyou;
