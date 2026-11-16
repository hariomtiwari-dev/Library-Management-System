
// import React, { useEffect, useState } from "react";
// import logo_with_title from "../assets/logo-with-title-black.png";
// import returnIcon from "../assets/redo.png";
// import browseIcon from "../assets/pointing.png";
// import bookIcon from "../assets/book-square.png";
// import { Pie } from "react-chartjs-2";
// import { useSelector } from "react-redux";
// import Header from "../layout/Header";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
//   LineElement,
//   PointElement,
//   ArcElement,
// } from "chart.js";
// import logo from "../assets/black-logo.png";

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
//   LineElement,
//   PointElement,
//   ArcElement
// );

// const UserDashboard = () => {
//   const { userBorrowedBooks } = useSelector(
//     (state) => state.borrow
//   );

//   const [totalBorrowedBooks, setTotalBorrowedBooks] = useState(0);
//   const [totalReturnedBooks, setTotalReturnedBooks] = useState(0);

//   useEffect(() => {
//     const borrowedBooks = userBorrowedBooks.filter(
//       (book) => book.returned === false
//     );

//     const returnedBooks = userBorrowedBooks.filter(
//       (book) => book.returned === true
//     );

//     setTotalBorrowedBooks(borrowedBooks.length);
//     setTotalReturnedBooks(returnedBooks.length);
//   }, [userBorrowedBooks]);

//   const data = {
//     labels: ["Total Borrowed Books", "Total Returned Books"],
//     datasets: [
//       {
//         data: [totalBorrowedBooks, totalReturnedBooks],
//         backgroundColor: ["#3D3E3E", "#151619"],
//         hoverOffset: 4,
//       },
//     ],
//   };

//   return (
//     <>
//       <main className="relative flex-1 h-screen min-h-0 p-6 pt-24 overflow-hidden">
//         <Header />

//         <div className="flex flex-col-reverse xl:flex-row h-full min-h-0 overflow-hidden">

//           {/* LEFT SIDE */}
//           <div className="flex flex-[4] h-full min-h-0 flex-col gap-7 lg:gap-7 lg:py-2 justify-between overflow-hidden xl:pr-7">

//             <div className="flex flex-col gap-7 flex-[4] min-h-0 overflow-hidden">

//               <div className="flex flex-col gap-5 overflow-hidden">

//                 <div className="flex items-center gap-3 bg-white p-4 min-h-[90px] rounded-lg transition hover:shadow-inner duration-300">
//                   <span className="w-[2px] bg-black h-16"></span>

//                   <span className="bg-gray-300 h-14 w-14 flex justify-center items-center rounded-lg">
//                     <img
//                       src={bookIcon}
//                       alt="book-icon"
//                       className="w-8 h-8"
//                     />
//                   </span>

//                   <p className="text-lg xl:text-xl font-semibold">
//                     Your Borrowed Book List
//                   </p>
//                 </div>

//                 <div className="flex items-center gap-3 bg-white p-4 min-h-[90px] rounded-lg transition hover:shadow-inner duration-300">
//                   <span className="w-[2px] bg-black h-16"></span>

//                   <span className="bg-gray-300 h-14 w-14 flex justify-center items-center rounded-lg">
//                     <img
//                       src={returnIcon}
//                       alt="book-icon"
//                       className="w-8 h-8"
//                     />
//                   </span>

//                   <p className="text-lg xl:text-xl font-semibold">
//                     Your Returned Book List
//                   </p>
//                 </div>

//               </div>

//               <div className="flex flex-col lg:flex-row gap-7 items-center overflow-hidden">

//                 <div className="flex items-center gap-3 bg-white p-4 w-full lg:w-[340px] min-h-[90px] rounded-lg transition hover:shadow-inner duration-300">
//                   <span className="w-[2px] bg-black h-16"></span>

//                   <span className="bg-gray-300 h-14 w-14 flex justify-center items-center rounded-lg">
//                     <img
//                       src={browseIcon}
//                       alt="book-icon"
//                       className="w-8 h-8"
//                     />
//                   </span>

//                   <p className="text-lg xl:text-xl font-semibold">
//                     Let's browse books inventory
//                   </p>
//                 </div>

//                 <img
//                   src={logo_with_title}
//                   alt="logo"
//                   className="hidden lg:block w-auto justify-end"
//                 />

//               </div>
//             </div>

//             <div className="bg-white p-7 text-lg sm:text-xl xl:text-3xl 2xl:text-4xl min-h-0 font-semibold relative flex-[3] flex justify-center items-center rounded-2xl overflow-hidden">

//               <h4 className="overflow-hidden">""</h4>

//               <p className="text-gray-700 text-sm sm:text-lg absolute right-[35px] sm:right-[78px] bottom-[10px]">
//                 ~ BookWorm Team
//               </p>

//             </div>
//           </div>

//           {/* RIGHT SIDE */}
//           <div className="flex-[2] min-h-0 flex flex-col gap-7 lg:flex-row xl:flex-col justify-between xl:gap-10 py-2 overflow-hidden">

//             <div className="xl:flex-[4] flex items-center justify-center min-h-0 w-full overflow-hidden">

//               <Pie
//                 data={data}
//                 options={{
//                   cutout: 0,
//                   maintainAspectRatio: true,
//                   responsive: true,
//                 }}
//                 className="mx-auto w-full h-auto"
//               />

//             </div>

//             <div className="flex items-center p-8 w-full sm:w-[400px] xl:w-fit xl:p-3 2xl:p-6 gap-5 h-fit xl:min-h-[150px] bg-white rounded-lg xl:translate-x-[68px]">

//               <img
//                 src={logo}
//                 alt="logo"
//                 className="w-auto h-12 2xl:h-20"
//               />

//               <span className="w-[2px] bg-black h-full"></span>

//               <div className="flex flex-col gap-5">

//                 <p className="flex items-center gap-3">
//                   <span className="w-3 h-3 rounded-full bg-[#3D3E3E]"></span>
//                   <span>Total Borrowed Books</span>
//                 </p>

//                 <p className="flex items-center gap-3">
//                   <span className="w-3 h-3 rounded-full bg-[#151619]"></span>
//                   <span>Total Returned Books</span>
//                 </p>

//               </div>
//             </div>

//           </div>
//         </div>
//       </main>
//     </>
//   );
// };

// export default UserDashboard;






import React, { useEffect, useState } from "react";
import logo_with_title from "../assets/logo-with-title-black.png";
import returnIcon from "../assets/redo.png";
import browseIcon from "../assets/pointing.png";
import bookIcon from "../assets/book-square.png";
import { Pie } from "react-chartjs-2";
import { useSelector } from "react-redux";
import Header from "../layout/Header";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  ArcElement,
} from "chart.js";
import logo from "../assets/black-logo.png";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  ArcElement
);

const UserDashboard = () => {
  const { userBorrowedBooks } = useSelector(
    (state) => state.borrow
  );

  const [totalBorrowedBooks, setTotalBorrowedBooks] = useState(0);
  const [totalReturnedBooks, setTotalReturnedBooks] = useState(0);

  useEffect(() => {
    const borrowedBooks = userBorrowedBooks.filter(
      (book) => book.returned === false
    );

    const returnedBooks = userBorrowedBooks.filter(
      (book) => book.returned === true
    );

    setTotalBorrowedBooks(borrowedBooks.length);
    setTotalReturnedBooks(returnedBooks.length);
  }, [userBorrowedBooks]);

  const hasBorrowingData =
    totalBorrowedBooks + totalReturnedBooks > 0;

  const data = {
    labels: hasBorrowingData
      ? ["Total Borrowed Books", "Total Returned Books"]
      : ["No borrowing data"],
    datasets: [
      {
        data: hasBorrowingData
          ? [totalBorrowedBooks, totalReturnedBooks]
          : [1],
        backgroundColor: hasBorrowingData
          ? ["#3D3E3E", "#151619"]
          : ["#D1D5DB"],
        hoverOffset: 4,
        borderWidth: 0,
      },
    ],
  };

  return (
    <>
      <main className="relative flex-1 h-screen min-h-0 px-4 pt-24 pb-4 overflow-hidden">
        <Header />

        <div className="flex flex-col-reverse xl:flex-row h-[calc(100vh-7rem)] min-h-0 overflow-hidden">

          {/* LEFT SIDE */}
          <div className="flex flex-[4] min-w-0 min-h-0 flex-col gap-4 justify-between overflow-hidden xl:pr-6">

            <div className="flex flex-col gap-4 flex-[4] min-h-0 overflow-hidden">

              {/* BORROWED AND RETURNED BOOKS */}
              <div className="flex flex-col gap-4">

                <div className="flex items-center gap-3 bg-white px-3 py-3 min-h-[68px] rounded-lg">
                  <span className="w-[2px] bg-black h-12 shrink-0"></span>

                  <span className="bg-gray-300 h-12 w-12 shrink-0 flex justify-center items-center rounded-lg">
                    <img
                      src={bookIcon}
                      alt="book-icon"
                      className="w-7 h-7 object-contain"
                    />
                  </span>

                  <p className="text-base lg:text-lg font-semibold leading-tight">
                    Your Borrowed Book List
                  </p>
                </div>

                <div className="flex items-center gap-3 bg-white px-3 py-3 min-h-[68px] rounded-lg">
                  <span className="w-[2px] bg-black h-12 shrink-0"></span>

                  <span className="bg-gray-300 h-12 w-12 shrink-0 flex justify-center items-center rounded-lg">
                    <img
                      src={returnIcon}
                      alt="return-icon"
                      className="w-7 h-7 object-contain"
                    />
                  </span>

                  <p className="text-base lg:text-lg font-semibold leading-tight">
                    Your Returned Book List
                  </p>
                </div>

              </div>

              {/* BROWSE BOOKS */}
              <div className="flex flex-row gap-4 items-center min-h-0">

                <div className="flex items-center gap-3 bg-white p-3 flex-1 min-w-0 min-h-[76px] rounded-lg">
                  <span className="w-[2px] bg-black h-12 shrink-0"></span>

                  <span className="bg-gray-300 h-12 w-12 shrink-0 flex justify-center items-center rounded-lg">
                    <img
                      src={browseIcon}
                      alt="browse-icon"
                      className="w-7 h-7 object-contain"
                    />
                  </span>

                  <p className="text-base lg:text-lg font-semibold leading-tight">
                    Let's browse books inventory
                  </p>
                </div>

                <img
                  src={logo_with_title}
                  alt="logo"
                  className="hidden lg:block w-auto h-16 xl:h-20 max-w-[38%] object-contain"
                />

              </div>
            </div>

            {/* QUOTE */}
            <div className="bg-white px-6 py-5 text-lg lg:text-xl xl:text-2xl font-semibold relative flex-[3] min-h-[110px] flex justify-center items-center rounded-2xl overflow-hidden">

              <h4 className="text-center leading-snug">
                "Embarking on the journey of reading fosters personal growth,
                nurturing a path towards excellence and the refinement of
                character."
              </h4>

              <p className="text-gray-700 text-xs lg:text-sm absolute right-5 bottom-3">
                ~ BookWorm Team
              </p>

            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex-[2] min-w-0 min-h-0 flex flex-col items-center justify-center gap-5 overflow-hidden xl:py-2">

            {/* PIE CHART */}
            <div className="w-full h-[45vh] min-h-[180px] max-h-[380px] flex items-center justify-center overflow-hidden">

              <Pie
                data={data}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  plugins: {
                    legend: {
                      display: false,
                    },
                  },
                }}
              />

            </div>

            {/* CHART LEGEND */}
            <div className="flex items-center justify-center p-4 w-full max-w-[400px] gap-4 bg-white rounded-lg">

              <img
                src={logo}
                alt="logo"
                className="w-12 h-12 object-contain shrink-0"
              />

              <span className="w-[2px] bg-black self-stretch shrink-0"></span>

              <div className="flex flex-col gap-3 min-w-0">

                <p className="flex items-center gap-2 text-xs lg:text-sm">
                  <span className="w-3 h-3 rounded-full bg-[#3D3E3E] shrink-0"></span>
                  <span>Total Borrowed Books</span>
                </p>

                <p className="flex items-center gap-2 text-xs lg:text-sm">
                  <span className="w-3 h-3 rounded-full bg-[#151619] shrink-0"></span>
                  <span>Total Returned Books</span>
                </p>

              </div>
            </div>

          </div>
        </div>
      </main>
    </>
  );
};

export default UserDashboard;

