import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import YouTube from "react-youtube";

function VideoPopup({ showPopup, setShowPopup }) {
  const opts = {
    height: "450",
    width: "100%",
    playerVars: {
      autoplay: 0,
    },
  };

  const location = useLocation();
  let timer;

  useEffect(() => {
    // Start a timer to show the popup after 4 seconds
    timer = setTimeout(() => {
      setShowPopup(true);
    }, 4000);

    // Clean up the timer if the component unmounts or if the location changes
    return () => {
      clearTimeout(timer);
    };
  }, [location.pathname]); // Listen for changes in the pathname

  const onReady = (event) => {
    event.target.pauseVideo();
  };
  const handlePopupClose = () => {
    setShowPopup(false);
  };
  return (
    <div>
      {" "}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black  bg-opacity-50 ">
          <div className=" rounded-lg overflow-hidden  mx-auto w-[880px]  ">
            <div className="p-8 pt-4  w-full">
              <div className="flex justify-end ">
                <img
                  onClick={handlePopupClose}
                  className="hover:cursor-pointer mb-2 text-right bg-white p-2 rounded-full"
                  src="/assets/svgs/close.svg"
                  alt=""
                  srcSet=""
                />
              </div>
              <YouTube
                className="shadow-2xl"
                videoId="Zevbcce_cuI"
                opts={opts}
                onReady={onReady}
                onEnd={() => setShowPopup(false)}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default VideoPopup;
