import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import axios from "../instance.js";

const Home = ({ userCount, setuserCount }) => {

  function gtag_report_conversion(url) {
    var callback = function () {
      if (typeof (url) != 'undefined') {
        window.location = url;
      }
    };
    window.gtag('event', 'conversion', {
      'send_to': 'AW-11093062414/XJm_CMjLuMoZEI7myqkp',
      'event_callback': callback
    });
    return false;
  }






  const postPladge = async () => {
    gtag_report_conversion(`${window.location.origin}/register`)
        const response = await axios.get("/pladge");

    if (response.status === 200) {
      setuserCount(1040 + response.data.msg);
      navigate("/register");
    }
  };
  const navigate = useNavigate();
  return (
    <>
      <div className=" flex flex-col md:flex-row justify-between md:p-[52px]   h-[vh] md:h-full md:pt-20 md:pb-40 ">
        <div className="flex flex-col justify-center md:justify-start items-center  w-full md:w-[344px]   left-0 md:left-20 gap-9 top-40 px-4 md:px-0">
            <img
              className="w-[160px] h-[200px]  hidden md:flex"
              src="./assets/images/logo-2.png"
              alt=""
            />
          {/* visible in pc only  */}

          {/* text-shadow: 0px 4px 4px  #00000040; */}

          <p className="mt-2 px-2 md:p-0 md:mt-0 text-[14px] leading-[22px] md:text-2xl text-white text-center font-bold font-OpenSans ">
            Imagine a world where every meal brings hope. Take the pledge & give
            them #FreedomFromHunger <br></br> With every pledge, a child gets a
            meal.
          </p>

          <Button
            onClick={() => {
              postPladge();
            }}
            text={`pledge now`}
            className={`hidden md:flex`}
          />
        </div>

        {/* removed from here  */}

        <div className="hidden md:flex flex-col justify-center md:justify-start items-center md:items-end  w-full  md:w-[344px]  pb- md:pb-0  left-0 md:left-20 gap-9 top-40 px-4 md:px-0">
          <div className="flex flex-col gap-24 text-center text-white items-center">
            <img
              src="./assets/images/logo-1.png"
              className="h-[250px] w-[250px] hidden md:flex "
              alt=""
            />

            <div className=" text-white text-center md:text-right bg-black bg-opacity-50 md:bg-transparent     px-6 py-2 rounded-xl ">
              <p className="text-white  font-OpenSans  md:font-Inter text-[11.3px] leading-[15.4px]  md:text-[20px] md:leading-6 font-bold ">
                Pledges so far
              </p>

              <div className="flex flex-col mt-[-10px]  md:mt-[-20px]  ">

                <p className="text-shadow-custom text-[45.3px] leading-[58.7px]  md:text-[120px] md:leading-[165px] font-bold font-Antonio md:h-[160px]">
                  {userCount}
                </p>

                <p className="text-white mt- font-OpenSans  md:font-Inter text-[11.3px] leading-[15.4px] m  md:text-[20px] md:leading-6 font-bold ">
                  and counting...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>


{/* for phone hiddne on desktop */}
      <div className=" flex md:hidden flex-col gap-3 absolute bottom-[2rem] left-0 right-0 ">
        <div className=" flex flex-col justify-center md:justify-start items-center md:items-end  w-full  md:w-[344px]  pb- md:pb-0  left-0 md:left-20 gap-9 top-40 px-4 md:px-0">
          <div className="flex flex-col gap-24 text-center text-white items-center">
            <img
              src="./assets/images/logo-1.png"
              className="h-[250px] w-[250px] hidden md:flex "
              alt=""
            />

            <div className=" text-white text-center md:text-right bg-black bg-opacity-50 md:bg-transparent     px-6 py-2 rounded-xl ">
              <p className="text-white  font-OpenSans  md:font-Inter text-[11.3px] leading-[15.4px]  md:text-[20px] md:leading-6 font-bold ">
                Pledges so far
              </p>

              <div className="flex flex-col mt-[-10px]  md:mt-[-20px]  ">
                {/* text-shadow: 3.54px 3.54px 0px  #682E21; */}
                {/* [text-shadow:_3.54_3.54px_0_#682E21] */}

                <p className="text-shadow-custom text-[45.3px] leading-[58.7px]  md:text-[120px] md:leading-[165px] font-bold font-Antonio md:h-[160px]">
                  {userCount}
                </p>

                <p className="text-white mt- font-OpenSans  md:font-Inter text-[11.3px] leading-[15.4px] m  md:text-[20px] md:leading-6 font-bold ">
                  and counting...
                </p>
              </div>
            </div>
          </div>
        </div>

        <Button
          onClick={() => {
            postPladge();
          }}
          text={`pledge now`}
          className="md:hidden !w-[80%] text-xl leading-[25px] !mx-auto  justify-center mb- "
        />
      </div>
    </>

    // <>
    //   <div className=" flex flex-col md:flex-row justify-between md:p-[52px]   h-[52vh] md:h-full md:pt-20 md:pb-40 ">
    //     <div className="flex flex-col justify-center md:justify-start items-cente  w-full md:w-[344px]   left-0 md:left-20 gap-9 top-40 px-4 md:px-0">
    //       <img
    //         className="w-[160px] h-[200px] ml-24 hidden md:flex"
    //         src="./assets/images/logo-2.png"
    //         alt=""
    //       />
    //       {/* visible in pc only  */}

    //       {/* text-shadow: 0px 4px 4px  #00000040; */}

    //       <p className="mt-2 px-6 md:p-0 md:mt-0 text-[13px] leading-[22px] md:text-2xl text-white text-center font-bold font-OpenSans ">
    //         Imagine a world where every meal brings hope. Take the pledge & give
    //         them #FreedomFromHunger <br></br> With every pledge, a child gets a
    //         meal.
    //       </p>

    //       <Button
    //         onClick={() => {
    //           postPladge();
    //         }}
    //         text={`pledge now`}
    //         className={`hidden md:flex`}
    //       />
    //     </div>

    //     <div className=" flex flex-col justify-center md:justify-start items-center md:items-end  w-full  md:w-[344px]  pb-9 md:pb-0  left-0 md:left-20 gap-9 top-40 px-4 md:px-0">
    //       <div className="flex flex-col gap-24 text-center text-white items-center">
    //         <img
    //           src="./assets/images/logo-1.png"
    //           className="h-[250px] w-[250px] hidden md:flex "
    //           alt=""
    //         />

    //         <div className=" text-white text-center md:text-right bg-black bg-opacity-50 md:bg-transparent  px-6 py-2 rounded-xl !mx-auto absolute bottom-16 ">
    //           <p className="text-white  font-OpenSans  md:font-Inter text-[11.3px] leading-[15.4px]  md:text-[20px] md:leading-6 font-bold ">
    //             Pledges so far
    //           </p>

    //           <div className="flex flex-col mt-[-10px]  md:mt-[-20px]  ">
    //             <p className="text-shadow-custom text-[45.3px] leading-[58.7px]  md:text-[120px] md:leading-[165px] font-bold font-Antonio md:h-[160px]">
    //               {userCount}
    //             </p>

    //             <p className="text-white mt- font-OpenSans  md:font-Inter text-[11.3px] leading-[15.4px] m  md:text-[20px] md:leading-6 font-bold ">
    //               and counting...
    //             </p>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>

    //   <Button
    //     onClick={() => {
    //       postPladge();
    //     }}
    //     text={`pledge now`}
    //     className="!w-[80%] text-xl leading-[25px] !mx-auto absolute bottom-7 left-0 right-0 flex justify-center mb-9 md:hidden"
    //   />
    // </>

    // <>
    //   <div className=" flex flex-col md:flex-row justify-between md:p-[52px]   h-[56vh] md:h-full md:pt-20 md:pb-40 ">
    //     <div className="flex flex-col justify-center md:justify-start items-cente  w-full md:w-[344px]   left-0 md:left-20 gap-9 top-40 px-4 md:px-0">
    //       <img
    //         className="w-[160px] h-[200px] ml-24 hidden md:flex"
    //         src="./assets/images/logo-2.png"
    //         alt=""
    //       />
    //       {/* visible in pc only  */}

    //       {/* text-shadow: 0px 4px 4px  #00000040; */}

    //       <p className="mt-2 px-6 md:p-0 md:mt-0 text-[13px] leading-[22px] md:text-2xl text-white text-center font-bold font-OpenSans ">
    //         Imagine a world where every meal brings hope. Take the pledge & give
    //         them #FreedomFromHunger <br></br> With every pledge, a child gets a
    //         meal.
    //       </p>

    //       <Button
    // onClick={() => {
    //   postPladge();
    // }}
    //         text={`pledge now`}
    //         className={`hidden md:flex`}
    //       />
    //     </div>

    //     <div className=" flex flex-col justify-center md:justify-start items-center md:items-end  w-full  md:w-[344px]  pb-9 md:pb-0  left-0 md:left-20 gap-9 top-40 px-4 md:px-0">
    //       <div className="flex flex-col gap-24 text-center text-white items-center">
    //         <img
    //           src="./assets/images/logo-1.png"
    //           className="h-[250px] w-[250px] hidden md:flex "
    //           alt=""
    //         />

    //         <div className=" text-white text-center md:text-right bg-black bg-opacity-50 md:bg-transparent     px-6 py-2 rounded-xl ">
    //           <p className="text-white  font-OpenSans  md:font-Inter text-[11.3px] leading-[15.4px]  md:text-[20px] md:leading-6 font-bold ">
    //             Pledges so far
    //           </p>

    //           <div className="flex flex-col mt-[-10px]  md:mt-[-20px]  ">
    //             {/* text-shadow: 3.54px 3.54px 0px  #682E21; */}
    //             {/* [text-shadow:_3.54_3.54px_0_#682E21] */}

    //             <p className="text-shadow-custom text-[45.3px] leading-[58.7px]  md:text-[120px] md:leading-[165px] font-bold font-Antonio md:h-[160px]">
    //               {userCount}
    //             </p>

    //             <p className="text-white mt- font-OpenSans  md:font-Inter text-[11.3px] leading-[15.4px] m  md:text-[20px] md:leading-6 font-bold ">
    //               and counting...
    //             </p>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>

    //   <Button
    //     onClick={() => {
    //       postPladge();
    //     }}
    //     text={`pledge now`}
    //     className="!w-[80%]  text-xl  leading-[25px]   !mx-auto absolute bottom-9 left-0 right-0 flex justify-center mb-9 md:hidden"
    //   />
    // </>

    // <>
    //   <div className="flex flex-col md:flex-row justify-between p-[52px] h-[65vh] md:h-full md:pt-20 md:pb-40 ">
    //     <div className="flex flex-col justify-center md:justify-start items-cente  w-full md:w-[344px]   left-0 md:left-20 gap-9 top-40 px-4 md:px-0">
    //       <img
    //         className="w-[160px] h-[200px] ml-24 hidden md:flex"
    //         src="./assets/images/logo-2.png"
    //         alt=""
    //       />
    //       <p className="text-[18px] md:text-[24px] text-white text-center font-bold font-OpenSans md:mt-0">
    //         Imagine a world where every meal brings hope. Take the pledge & give
    //         them #FreedomFromHunger <br></br> With every pledge, a child gets a
    //         meal.
    //       </p>
    //       <Button
    //         onClick={() => navigate("/register")}
    //         text={`pledge now`}
    //         className={`hidden md:flex`}
    //       />
    //     </div>
    //     <div className="flex flex-col justify-center md:justify-start items-center md:items-end  w-full md:w-[344px]  pb-10 md:pb-0  left-0 md:left-20 gap-9 top-40 px-4 md:px-0">
    //       <div className="flex flex-col gap-24 text-center text-white items-center">
    //         <img
    //           src="./assets/images/logo-1.png"
    //           className="h-[250px] w-[250px] hidden md:flex "
    //           alt=""
    //         />
    //         <div className="text-white text-center md:text-right bg-black bg-opacity-50 md:bg-transparent px-6 py-2 rounded-xl">
    //           <p className="text-white font-Inter text-[12px] md:text-[20px] font-bold ">
    //             Pledges so far
    //           </p>
    //           <div className="flex flex-col mt-[-10px] md:mt-[-20px]">
    //             <p className="text-shadow-custom text-[62px] md:text-[120px] font-bold font-Antonio md:h-[160px]">
    //               {userCount}
    //             </p>
    //             <p className="text-white font-Inter text-[12px] md:text-[20px] font-bold">
    //               and counting...
    //             </p>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>

    //   <Button
    //     onClick={() => navigate("/register")}
    //     text={`pledge now`}
    //     className="!w-[80%] !mx-auto absolute bottom-0 left-0 right-0 flex justify-center mb-6 md:hidden"
    //   />
    // </>
  );
};

export default Home;
