// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import backendUrl from "../config";


// const Hero = () => {
//   const [data, setData] = useState([]);
//   const [currentItemIndex, setCurrentItemIndex] = useState(0);
//   const [isLoading, setIsLoading] = useState(true);
//   const [attributionText, setAttributionText] = useState("");

//   const setLoading = (loading) => {
//     setIsLoading(loading);
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       const nextIndex = (currentItemIndex + 1) % data.length;
//       setCurrentItemIndex(nextIndex);
//     }, 5000);

//     return () => clearInterval(timer);
//   }, [currentItemIndex, data]);

//   const fetchData = async () => {
//     try {
//       setLoading(true);
//       const response = await axios.get(`${backendUrl}/marvel/db`);
//       console.log(response.data, "abc");
//       setData(response.data[0]?.data?.results || []);
//       setAttributionText(response.data[0].attributionText)

//     } catch (error) {
//       console.log("Error fetching data:", error);
//     } finally {
//       setLoading(false);
//     }
//   };



//   const goToPrevious = () => {
//     const previousIndex = (currentItemIndex - 1 + data.length) % data.length;
//     setCurrentItemIndex(previousIndex);
//   };

//   const goToNext = () => {
//     const nextIndex = (currentItemIndex + 1) % data.length;
//     setCurrentItemIndex(nextIndex);
//   };

//   return (
//     <div className="w-full h-full relative">
//       {isLoading ? (
//         <div>Loading...</div>
//       ) : data.length > 0 ? (
//         <>
//           <div className="w-full h-[100vh] md:h-[125vh] relative">
//             <a
//               href={data[currentItemIndex]?.urls[0]?.url}
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <img
//                 className="w-full h-full object-cover object-top absolute top-0 left-0"
//                 src={`${data[currentItemIndex]?.images[0]?.path}.${data[currentItemIndex]?.images[0]?.extension}`}
//                 alt={data[currentItemIndex]?.title}
//               />
//             </a>
//           </div>

//           <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
//             <button
//               tabIndex={0}
//               onClick={goToPrevious}
//               className="bg-black bg-opacity-40 text-white rounded-full p-2 hover:bg-opacity-60 focus:outline-none transition duration-300"
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-6 w-6"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M15 19l-7-7 7-7"
//                 />
//               </svg>
//             </button>
//           </div>
//           <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
//             <button
//               tabIndex={0}
//               onClick={goToNext}
//               className="bg-black bg-opacity-40 text-white rounded-full p-2 hover:bg-opacity-60 focus:outline-none transition duration-300"
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-6 w-6"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M9 5l7 7-7 7"
//                 />
//               </svg>
//             </button>
//           </div>
//           <div className="absolute md:w-[40%] bottom-[5%] left-0 p-5 w-full bg-gradient-to-b from-black">
//             <h1 className="text-white font-bold text-[3vmin] p-3">
//               {data[currentItemIndex].title}
//             </h1>
//             <p className="text-white font-bold text-[2.0vmin] p-3">
//               Creators:{" "}
//               {data[currentItemIndex].creators.items.map((creator, index) => (
//                 <span key={index}>
//                   {creator.name} ({creator.role})
//                   {index < data[currentItemIndex].creators.items.length - 1
//                     ? ", "
//                     : ""}
//                 </span>
//               ))}
//             </p>

//             <p className="text-yellow-300 font-bold text-[2.3vmin] p-2">
//               Price: ${data[currentItemIndex].prices[0]?.price || "N/A"}
//             </p>
//             <p className="text-yellow-300 font-bold text-[2.3vmin] p-2">
//               Issue #: {data[currentItemIndex].issueNumber || "N/A"}
//             </p>
//             <p className="text-yellow-300 font-bold text-[2.3vmin] p-2">
//               Page Count: {data[currentItemIndex].pageCount || "N/A"}
//             </p>
//             <p className="text-white font-bold text-[2.3vmin] p-2">
//               Attribution: {attributionText || "N/A"}
//             </p>
//           </div>
//         </>
//       ) : (
//         <div>No data available.</div>
//       )}
//     </div>
//   );
// };

// export default Hero;

import React, { useState, useEffect } from "react";
import axios from "axios";
import backendUrl from "../config";


const Hero = () => {
  const [data, setData] = useState([]);
  const [currentItemIndex, setCurrentItemIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [attributionText, setAttributionText] = useState("");

  const setLoading = (loading) => {
    setIsLoading(loading);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      const nextIndex = (currentItemIndex + 1) % data.length;
      setCurrentItemIndex(nextIndex);
    }, 5000);

    return () => clearInterval(timer);
  }, [currentItemIndex, data]);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${backendUrl}/marvel/db`);
      console.log(response.data, "abc");
      setData(response.data[0]?.data?.results || []);
      setAttributionText(response.data[0].attributionText)

    } catch (error) {
      console.log("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };



  const goToPrevious = () => {
    const previousIndex = (currentItemIndex - 1 + data.length) % data.length;
    setCurrentItemIndex(previousIndex);
  };

  const goToNext = () => {
    const nextIndex = (currentItemIndex + 1) % data.length;
    setCurrentItemIndex(nextIndex);
  };

  return (
    <div className="w-full h-full relative">
      {isLoading ? (
        <div>Loading...</div>
      ) : data.length > 0 ? (
        <>
          <div className="w-full h-[100vh] md:h-[125vh] relative">
            <a
              href={data[currentItemIndex]?.urls[0]?.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="w-full h-full object-cover object-top absolute top-0 left-0"
                src={`${data[currentItemIndex]?.images[0]?.path}.${data[currentItemIndex]?.images[0]?.extension}`}
                alt={data[currentItemIndex]?.title}
              />
            </a>
          </div>

          <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
            <button
              tabIndex={0}
              onClick={goToPrevious}
              className="bg-black bg-opacity-40 text-white rounded-full p-2 hover:bg-opacity-60 focus:outline-none transition duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
          </div>
          <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
            <button
              tabIndex={0}
              onClick={goToNext}
              className="bg-black bg-opacity-40 text-white rounded-full p-2 hover:bg-opacity-60 focus:outline-none transition duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
          <div className="absolute md:w-[40%] bottom-[5%] left-0 p-5 w-full bg-gradient-to-b from-black">
            <h1 className="text-white font-bold text-[3vmin] p-3">
              {data[currentItemIndex].title}
            </h1>
            <p className="text-white font-bold text-[2.0vmin] p-3">
              Creators:{" "}
              {data[currentItemIndex].creators.items.map((creator, index) => (
                <span key={index}>
                  {creator.name} ({creator.role})
                  {index < data[currentItemIndex].creators.items.length - 1
                    ? ", "
                    : ""}
                </span>
              ))}
            </p>

            <p className="text-yellow-300 font-bold text-[2.3vmin] p-2">
              Price: ${data[currentItemIndex].prices[0]?.price || "N/A"}
            </p>
            <p className="text-yellow-300 font-bold text-[2.3vmin] p-2">
              Issue #: {data[currentItemIndex].issueNumber || "N/A"}
            </p>
            <p className="text-yellow-300 font-bold text-[2.3vmin] p-2">
              Page Count: {data[currentItemIndex].pageCount || "N/A"}
            </p>
            <p className="text-white font-bold text-[2.3vmin] p-2">
              Attribution: {attributionText || "N/A"}
            </p>
          </div>
        </>
      ) : (
        <div>No data available.</div>
      )}
    </div>
  );
};

export default Hero;
