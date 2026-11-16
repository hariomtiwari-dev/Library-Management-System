// import React, { useEffect, useState } from "react";
// import adminIcon from "../assets/pointing.png";
// import usersIcon from "../assets/people-black.png";
// import bookIcon from "../assets/book-square.png";
// import { Pie } from "react-chartjs-2";
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
// import { useSelector, useDispatch } from "react-redux";
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
//   ArcElement,
// );

// const AdminDashboard = () => {
//   const { user } = useSelector((state) => state.auth);
//   const { users } = useSelector((state) => state.user);
//   const { books } = useSelector((state) => state.book);
//   const { allBorrowedBooks } = useSelector((state) => state.borrow);
//   const { settingPopup } = useSelector((state) => state.popup);

//   const [totalUsers, setTotalUsers] = useState(0);
//   const [totalAdmin, setTotalAdmin] = useState(0);
//   const [totalBooks, setTotalBooks] = useState((books && books.length) || 0);
//   const [totalBorrowedBooks, setTotalBorrowedBooks] = useState(0);
//   const [totalReturnedBooks, setTotalReturnedBooks] = useState(0);

//   useEffect(() => {
//     let numberOfUsers = users.filter((user) => user.role === "User");
//     let numberOfAdmins = users.filter((user) => user.role === "Admin");

//     setTotalUsers(numberOfUsers.length);
//     setTotalAdmin(numberOfAdmins.length);

//     let numberOfTotalBorrowedBooks = allBorrowedBooks.filter(
//       (book) => book.returnDate === null,
//     );

//     let numberOfTotalReturnedBooks = allBorrowedBooks.filter(
//       (book) => book.returnDate !== null,
//     );

//     setTotalBorrowedBooks(numberOfTotalBorrowedBooks.length);
//     setTotalReturnedBooks(numberOfTotalReturnedBooks.length);
//   }, [users, allBorrowedBooks]);

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
//       <main className="relative flex-1 p-6 pt-28">
//         <Header />

//         <div className="flex flex-col-reverse xl:flex-row">
//           {/* LEFT SIDE */}
//           <div className="flex-[2] flex-col gap-7 lg:flex-row flex lg:items-center xl:flex-col justify-between xl:gap-20 py-5">
//             <div className="xl:flex-[4] flex items-end w-full content-center">
//               <Pie
//                 data={data}
//                 options={{ cutout: 0 }}
//                 className="mx-auto lg:mx-0 w-full h-auto"
//               />
//             </div>
//             <div className="flex items-center p-8 w-full sm:w-[400px] xl:w-fit mr-5 xl:p-3 2xl:p-6 gap-5 h-fit xl:min-h-[150px] bg-white xl:flex-1 rounded-lg">
//               <img
//                 src={logo}
//                 alt="logo"
//                 className="w-auto xl:flex-1 rounded-lg"
//               />

//               <span className="w-[2px] bg-black h-full"></span>

//               <div className="flex flex-col gap-3">
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

//           {/* RIGHT SIDE */}
//           <div className="flex flex-[4] flex-col gap-7 lg:gap-16 lg:px-7 lg:py-5 justify-between xl:min-h-[85.5vh]">
//             <div className="flex flex-col-reverse lg:flex-row gap-7 flex-[4]">
//               <div className="flex flex-col gap-7 flex-1">
//                 <div className="flex items-center gap-3 bg-white p-5 max-h-[120px] overflow-y-hidden rounded-lg transition hover:shadow-inner duration-300 w-full lg:max-w-[360px]">
//                   <span className="bg-gray-300 h-20 min-w-20 flex justify-center items-center rounded-lg">
//                     <img src={usersIcon} alt="users-icon" className="w-8 h-8" />
//                   </span>
//                   <span className="w-[2px] bg-black h-20 lg:h-full"></span>
//                   <div className="flex flex-col items-center gap-2">
//                     <h4 className="font-black text-3xl">{totalUsers}</h4>
//                     <p className="font-light text-gray-700 text-sm">
//                       Total User Base
//                     </p>
//                   </div>
//                 </div>
//                 <div className="flex items-center gap-3 bg-white p-5 max-h-[120px] overflow-y-hidden rounded-lg transition hover:shadow-inner duration-300 w-full lg:max-w-[360px]">
//                   <span className="bg-gray-300 h-20 min-w-20 flex justify-center items-center rounded-lg">
//                     <img src={bookIcon} alt="book-icon" className="w-8 h-8" />
//                   </span>

//                   <span className="w-[2px] bg-black h-20 lg:h-full"></span>

//                   <div className="flex flex-col items-center gap-2">
//                     <h4 className="font-black text-3xl">{totalBooks}</h4>
//                     <p className="font-light text-gray-700 text-sm">
//                       Total Book Count
//                     </p>
//                   </div>
//                 </div>

//                 <div className="flex items-center gap-3 bg-white p-5 max-h-[120px] overflow-y-hidden rounded-lg transition hover:shadow-inner duration-300 w-full lg:max-w-[360px]">
//                   <span className="bg-gray-300 h-20 min-w-20 flex justify-center items-center rounded-lg">
//                     <img src={adminIcon} alt="users-icon" className="w-8 h-8" />
//                   </span>

//                   <span className="w-[2px] bg-black h-20 lg:h-full"></span>

//                   <div className="flex flex-col items-center gap-2">
//                     <h4 className="font-black text-3xl">{totalAdmin}</h4>
//                     <p className="font-light text-gray-700 text-sm">
//                       Total Admin Count
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               <div className="flex flex-col lg:flex-row flex-1">
//                 <div className="flex flex-col lg:flex-row flex-1 items-center justify-center">
//                   <div className="bg-white p-5 rounded-lg shadow-lg h-full flex flex-col justify-center items-center gap-4">
//                     <img
//                       src={user && user.avatar?.url}
//                       alt="avatar"
//                       className="rounded-full w-32 h-32 object-cover"
//                     />

//                     <h2 className="text-xl 2xl:text-2xl font-semibold text-center">
//                       {user && user.name}
//                     </h2>

//                     <p className="text-gray-600 text-sm 2xl:text-base text-center">
//                       Welcome to your admin dashboard. Here you can manage all
//                       the settings and monitor the statistics.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="hidden xl:flex bg-white p-7 text-lg sm:text-xl xl:text-3xl 2xl:text-4xl min-h-52 font-semibold relative flex-[3] justify-center items-center rounded-2xl">
//               <h4 className="overflow-hidden">
//                 "Embarking on the journey of reading fosters personal growth,
//                 nurturing a path towards excellence and the refinement of
//                 character."
//               </h4>

//               <p className="text-gray-700 text-sm sm:text-lg absolute right-[35px] sm:right-[78px] bottom-[10px]">
//                 ~ BookWorm Team
//               </p>
//             </div>
//           </div>
//         </div>
//       </main>
//     </>
//   );
// };

// export default AdminDashboard;







import React, { useEffect, useState } from "react";
import adminIcon from "../assets/pointing.png";
import usersIcon from "../assets/people-black.png";
import bookIcon from "../assets/book-square.png";
import { Pie } from "react-chartjs-2";
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
import { useSelector } from "react-redux";
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

const AdminDashboard = () => {
  const { user } = useSelector((state) => state.auth);
  const { users } = useSelector((state) => state.user);
  const { books } = useSelector((state) => state.book);
  const { allBorrowedBooks } = useSelector((state) => state.borrow);

  const [totalUsers, setTotalUsers] = useState(0);
  const [totalAdmin, setTotalAdmin] = useState(0);
  const [totalBorrowedBooks, setTotalBorrowedBooks] = useState(0);
  const [totalReturnedBooks, setTotalReturnedBooks] = useState(0);

  const totalBooks = books?.length || 0;

  useEffect(() => {
    const numberOfUsers = (users || []).filter(
      (user) => user.role === "User"
    );

    const numberOfAdmins = (users || []).filter(
      (user) => user.role === "Admin"
    );

    setTotalUsers(numberOfUsers.length);
    setTotalAdmin(numberOfAdmins.length);

    const borrowed = (allBorrowedBooks || []).filter(
      (book) => book.returnDate === null
    );

    const returned = (allBorrowedBooks || []).filter(
      (book) => book.returnDate !== null
    );

    setTotalBorrowedBooks(borrowed.length);
    setTotalReturnedBooks(returned.length);
  }, [users, allBorrowedBooks]);

  const hasBorrowingData =
    totalBorrowedBooks > 0 || totalReturnedBooks > 0;

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
        borderWidth: 0,
        hoverOffset: 4,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <main className="relative h-screen w-full overflow-hidden p-4 pt-24">
      <Header />

      <div className="grid h-[calc(100vh-112px)] min-h-0 grid-cols-1 gap-4 xl:grid-cols-[0.9fr_1.8fr]">

        {/* LEFT SIDE */}
        <div className="grid min-h-0 grid-rows-[1fr_auto] gap-4">

          {/* PIE CHART */}
          <div className="flex min-h-0 items-center justify-center rounded-lg bg-transparent p-3">
            <div className="h-full max-h-[260px] w-full max-w-[300px]">
              <Pie data={data} options={chartOptions} />
            </div>
          </div>

          {/* CHART LEGEND */}
          <div className="flex items-center justify-center gap-5 rounded-lg bg-white p-4">
            <img
              src={logo}
              alt="BookWorm logo"
              className="h-14 w-14 object-contain"
            />

            <span className="h-16 w-[2px] bg-black"></span>

            <div className="flex flex-col gap-3 text-sm">
              <p className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-[#3D3E3E]"></span>
                Total Borrowed Books
              </p>

              <p className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-[#151619]"></span>
                Total Returned Books
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="grid min-h-0 grid-rows-[1fr_auto] gap-4">

          <div className="grid min-h-0 grid-cols-1 gap-4 lg:grid-cols-[1fr_1fr]">

            {/* STATISTICS */}
            <div className="flex min-h-0 flex-col justify-center gap-4">

              {/* USERS */}
              <div className="flex items-center gap-3 rounded-lg bg-white p-3">
                <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-lg bg-gray-300">
                  <img src={usersIcon} alt="users" className="h-8 w-8" />
                </span>

                <span className="h-14 w-[2px] bg-black"></span>

                <div className="flex flex-col items-center gap-1">
                  <h4 className="text-2xl font-black">{totalUsers}</h4>
                  <p className="text-xs text-gray-700">Total User Base</p>
                </div>
              </div>

              {/* BOOKS */}
              <div className="flex items-center gap-3 rounded-lg bg-white p-3">
                <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-lg bg-gray-300">
                  <img src={bookIcon} alt="books" className="h-8 w-8" />
                </span>

                <span className="h-14 w-[2px] bg-black"></span>

                <div className="flex flex-col items-center gap-1">
                  <h4 className="text-2xl font-black">{totalBooks}</h4>
                  <p className="text-xs text-gray-700">Total Book Count</p>
                </div>
              </div>

              {/* ADMINS */}
              <div className="flex items-center gap-3 rounded-lg bg-white p-3">
                <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-lg bg-gray-300">
                  <img src={adminIcon} alt="admin" className="h-8 w-8" />
                </span>

                <span className="h-14 w-[2px] bg-black"></span>

                <div className="flex flex-col items-center gap-1">
                  <h4 className="text-2xl font-black">{totalAdmin}</h4>
                  <p className="text-xs text-gray-700">Total Admin Count</p>
                </div>
              </div>
            </div>

            {/* ADMIN PROFILE */}
            <div className="flex min-h-0 items-center justify-center">
              <div className="flex h-full max-h-[360px] w-full flex-col items-center justify-center gap-3 rounded-lg bg-white p-5 shadow-lg">

                <img
                  src={user?.avatar?.url || logo}
                  alt="Admin avatar"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = logo;
                  }}
                  className="h-24 w-24 rounded-full border object-cover"
                />

                <h2 className="text-xl font-semibold text-center">
                  {user?.name || "Admin"}
                </h2>

                <p className="text-sm text-center text-gray-600">
                  Welcome to your admin dashboard. Here you can manage all
                  the settings and monitor the statistics.
                </p>
              </div>
            </div>
          </div>

          {/* QUOTE */}
          <div className="flex min-h-0 flex-col justify-center rounded-2xl bg-white p-5 text-center">
            <h4 className="text-lg font-semibold lg:text-xl 2xl:text-2xl">
              "Embarking on the journey of reading fosters personal growth,
              nurturing a path towards excellence and the refinement of
              character."
            </h4>

            <p className="mt-3 text-sm text-gray-700">
              ~ BookWorm Team
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AdminDashboard;
