// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import dynamic from "next/dynamic";
// import { useEffect, useState } from "react";

// const DynamicMap = dynamic(() => import("./components/Map"), {
//   ssr: false,
//   loading: () => <p>در حال بارگذاری نقشه...</p>, // یک پیام حین بارگذاری نمایش دهید
// });

// export default function Home() {
//   const [isClient, setIsClient] = useState(false);

//   useEffect(() => {
//     setIsClient(true);
//   }, []);

//   return (
//     <div className="bg-[#e7e7e7] ">
//       <nav className="flex justify-center items-center mx-4 my-4">
//         <Image
//           src="/favicon.ico"
//           alt="icon"
//           width={120}
//           height={120}
//           className="rounded-full"
//         />
//       </nav>

//       {/* Team */}
//       <div
//         className="flex flex-col  justify-center items-center
//        mx-2 my-4 rounded-2xl border-none"
//       >
//         <h1 className="text-4xl text-gray-700 mb-3">Maka Team</h1>
//         <p className="text-xl text-black">Software Developers Team.</p>
//       </div>

//       {/* Infos */}
//       <div className="flex  justify-center items-center text-center">
//         <p dir="rtl" className="mx-4 my-5 text-xl w-[80%]">
//           تخصص اصلی ما در طراحی و توسعه سرویس‌ها و پلتفرم‌های تحت وب است. به
//           موازات آن، در حال تحقیق و توسعه یک سامانه هوشمند برای شناورها هستیم که
//           با استفاده از حسگرها، داده‌کاوی و الگوریتم‌های هوش مصنوعی، امکان
//           مدیریت و مانیتورینگ هوشمند آنها را فراهم می‌کند.
//         </p>
//       </div>

//       {/* Contact */}
//       <div className="flex flex-row justify-around items-center">
//         <div
//           className="flex flex-row m-2
//            items-center justify-center
//         rounded-xl border p-5"
//         >
//           <Image
//             src="/emailicon.png"
//             alt="email"
//             width={20}
//             height={20}
//             className="bg-gray-500 rounded-xl"
//           />
//           <Link href="https://mail.google.com/mail/u/1/?ogbl#sent">
//             <p className="mx-2 text-xl">makaseairan@gmail.com</p>
//           </Link>
//         </div>

//         <div
//           className="flex flex-row m-2
//            items-center justify-center
//         rounded-xl border p-5"
//         >
//           <Image
//             src="/telegramicon.png"
//             alt="email"
//             width={20}
//             height={20}
//             className="bg-gray-500 rounded-xl"
//           />
//           <Link href={"t.me/heredeveloper"}>
//             <p className="mx-2 text-xl">Telegram</p>
//           </Link>
//         </div>

//         <div
//           className="flex flex-row m-2
//            items-center justify-center
//         rounded-xl border p-5"
//         >
//           <Image
//             src="/callicon.png"
//             alt="email"
//             width={20}
//             height={20}
//             className="bg-gray-500 rounded-xl"
//           />
//           <Link href={""}>
//             <p className="mx-2 text-xl">09154316864</p>
//           </Link>
//         </div>
//       </div>

//       {/* Map */}
//       <div
//         style={{
//           // شما می‌توانید این اندازه‌ها را به دلخواه تغییر دهید
//           width: "82vw", // مثلا 90 درصد عرض صفحه
//           height: "35vh", // مثلا 85 درصد ارتفاع صفحه
//           maxWidth: "1200px", // حداکثر عرض برای مانیتورهای بزرگ
//           margin: "20px auto", // مرکز کردن والد در صفحه
//           border: "none", // حاشیه برای مشخص شدن والد
//           borderRadius: "12px", // گوشه‌های گرد
//           overflow: "hidden", // مهم: برای اینکه محتوای داخل از حاشیه بیرون نزند
//           backgroundColor: "#e9ecef", // رنگ پس‌زمینه برای والد
//         }}
//       >
//         {/* --- این دیو، کانتینر "فرزند" است که به والد می‌چسبد --- */}
//         <div
//           style={{
//             width: "100%", // 100 درصد عرض والد
//             height: "100%", // 100 درصد ارتفاع والد
//           }}
//         >
//           {isClient && <DynamicMap />}
//         </div>
//       </div>

//       {/* Card */}
//       <div className="flex flex-row items-center justify-around p-5 ">
//         <div className="flex flex-col p-2  border rounded-xl">
//           <h1 className="text-2xl text-black font-bold my-2">
//             Habibolah Atashbahar
//           </h1>
//           <p className="text-l text-gray-600 my-2">
//             Front-end Developer: React and Next Js
//           </p>
//           <div className="flex flex-row my-2 justify-around items-center ">
//             <Link
//               target="_blank"
//               href="https://github.com/habibollah-atashbahar"
//             >
//               <Image
//                 src="/githubicon.png"
//                 alt="github"
//                 width={30}
//                 height={30}
//                 className="
//               bg-gray-700 rounded-2xl
//           "
//               />
//             </Link>

//             <Link target="_blank" href="mailto:habibollahatashbahar@gmail.com">
//               <Image
//                 src="/emailicon.png"
//                 alt="github"
//                 width={30}
//                 height={30}
//                 className="
//               bg-gray-700 rounded-2xl
//           "
//               />
//             </Link>

//             <Link target="_blank" href="https://t.me/AllahsFreind">
//               <Image
//                 src="/telegramicon.png"
//                 alt="github"
//                 width={30}
//                 height={30}
//                 className="
//               bg-gray-700 rounded-2xl
//           "
//               />
//             </Link>
//           </div>
//         </div>

//         <div className="flex flex-col p-2 border rounded-xl">
//           <h1 className="text-2xl text-black font-bold my-2">Pourya Samimi</h1>
//           <p className="text-l text-gray-600 my-2">
//             Back-end Developer: Django and Go
//           </p>
//           <div className="flex flex-row my-2 justify-around items-center ">
//             <Link
//               target="_blank"
//               href="https://github.com/habibollah-atashbahar"
//             >
//               <Image
//                 src="/githubicon.png"
//                 alt="github"
//                 width={30}
//                 height={30}
//                 className="
//               bg-gray-700 rounded-2xl
//           "
//               />
//             </Link>

//             <Link target="_blank" href="mailto:habibollahatashbahar@gmail.com">
//               <Image
//                 src="/emailicon.png"
//                 alt="github"
//                 width={30}
//                 height={30}
//                 className="
//               bg-gray-700 rounded-2xl
//           "
//               />
//             </Link>

//             <Link target="_blank" href="https://t.me/AllahsFreind">
//               <Image
//                 src="/telegramicon.png"
//                 alt="github"
//                 width={30}
//                 height={30}
//                 className="
//               bg-gray-700 rounded-2xl
//           "
//               />
//             </Link>
//           </div>
//         </div>

//         <div className="flex flex-col p-2 border rounded-xl">
//           <h1 className="text-2xl text-black font-bold my-2">Reza Khanzehi</h1>
//           <p className="text-l text-gray-600 my-2">
//             project Manager: Python, C++, C#
//           </p>
//           <div className="flex flex-row my-2 justify-around items-center ">
//             <Link
//               target="_blank"
//               href="https://github.com/habibollah-atashbahar"
//             >
//               <Image
//                 src="/githubicon.png"
//                 alt="github"
//                 width={30}
//                 height={30}
//                 className="
//               bg-gray-700 rounded-2xl
//           "
//               />
//             </Link>

//             <Link target="_blank" href="mailto:habibollahatashbahar@gmail.com">
//               <Image
//                 src="/emailicon.png"
//                 alt="github"
//                 width={30}
//                 height={30}
//                 className="
//               bg-gray-700 rounded-2xl
//           "
//               />
//             </Link>

//             <Link target="_blank" href="https://t.me/AllahsFreind">
//               <Image
//                 src="/telegramicon.png"
//                 alt="github"
//                 width={30}
//                 height={30}
//                 className="
//               bg-gray-700 rounded-2xl
//           "
//               />
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const DynamicMap = dynamic(() => import("./components/Map"), {
  ssr: false,
  loading: () => <p className="text-center p-4">در حال بارگذاری نقشه...</p>,
});

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="bg-[#e7e7e7] min-h-screen">
      {/* Nav */}
      <nav className="flex justify-center items-center p-4">
        <Image
          src="/favicon.ico"
          alt="icon"
          // Responsive width and height
          width={120}
          height={120}
          className="w-16 h-16 sm:w-20 sm:h-20 md:w-30 md:h-30 rounded-full"
        />
      </nav>

      {/* Team */}
      <div className="flex flex-col justify-center items-center mx-2 my-4">
        {/* Responsive text size */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl text-black mb-3 font-bold">
          Maka Team
        </h1>
        <p className="text-lg sm:text-xl text-black">
          Software Developers Team.
        </p>
      </div>

      {/* Infos */}
      <div className="flex justify-center items-center text-center px-4">
        {/* Responsive width and text size */}
        <p
          dir="rtl"
          className="text-base sm:text-lg md:text-xl w-full md:w-4/5 lg:w-3/4 text-black"
        >
          تخصص اصلی ما در طراحی و توسعه سرویس‌ها و پلتفرم‌های تحت وب است. به
          موازات آن، در حال تحقیق و توسعه یک سامانه هوشمند برای شناورها هستیم که
          با استفاده از حسگرها، داده‌کاوی و الگوریتم‌های هوش مصنوعی، امکان
          مدیریت و مانیتورینگ هوشمند آنها را فراهم می‌کند.
        </p>
      </div>

      {/* Contact */}
      {/* On small screens, this will be a column (flex-col). On medium screens and up, it will be a row (md:flex-row). */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 p-4">
        <div className="flex items-center justify-center w-full md:w-auto border rounded-xl p-4 bg-white shadow-sm">
          <Image
            src="/emailicon.png"
            alt="email"
            width={20}
            height={20}
            className="bg-gray-800 rounded-xl p-1"
          />
          {/* Corrected link to open a compose window */}
          <Link
            href="mailto:makaseairan@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="mx-2 text-sm sm:text-base md:text-xl text-black">
              makaseairan@gmail.com
            </p>
          </Link>
        </div>

        <div className="flex items-center justify-center w-full md:w-auto border rounded-xl p-4 bg-white shadow-sm">
          <Image
            src="/telegramicon.png"
            alt="telegram"
            width={20}
            height={20}
            className="bg-gray-800 rounded-xl p-1"
          />
          <Link
            href={"https://t.me/AllahsFreind"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="mx-2 text-sm sm:text-base md:text-xl text-black">
              Telegram
            </p>
          </Link>
        </div>

        <div className="flex items-center justify-center w-full md:w-auto border rounded-xl p-4 bg-white shadow-sm">
          <Image
            src="/callicon.png"
            alt="phone"
            width={20}
            height={20}
            className="bg-gray-800 rounded-xl p-1"
          />
          {/* Use tel: for phone numbers to open the dialer app on mobile */}
          <Link href={"tel:+989154316864"}>
            <p className="mx-2 text-sm sm:text-base md:text-xl text-black">
              09154316864
            </p>
          </Link>
        </div>
      </div>

      {/* Map */}
      {/* The map container is now fully responsive with Tailwind classes. */}
      <div className="w-11/12 md:w-4/5 lg:w-10/12 mx-auto my-5 max-w-7xl h-[40vh] md:h-[50vh] lg:h-[60vh] rounded-xl overflow-hidden shadow-lg">
        {isClient && <DynamicMap />}
      </div>

      {/* Card */}
      {/* On small screens, cards stack vertically (flex-col). On medium screens, they are in a row (md:flex-row). */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 p-5">
        <div className="w-full md:w-1/3 lg:w-1/4 flex flex-col items-center p-4 sm:p-6 border rounded-xl bg-white shadow-md">
          <h1 className="text-xl sm:text-2xl text-black font-bold my-2 text-center">
            Habibolah Atashbahar
          </h1>
          <p className="text-sm sm:text-base text-gray-600 my-2 text-center">
            Front-end Developer: React and Next Js
          </p>
          <div className="flex flex-row my-2 justify-around items-center w-full">
            <Link
              target="_blank"
              href="https://github.com/habibollah-atashbahar"
            >
              <Image
                src="/githubicon.png"
                alt="github"
                width={30}
                height={30}
                className="bg-gray-700 rounded-2xl p-1"
              />
            </Link>

            <Link target="_blank" href="mailto:habibollahatashbahar@gmail.com">
              <Image
                src="/emailicon.png"
                alt="email"
                width={30}
                height={30}
                className="bg-gray-700 rounded-2xl p-1"
              />
            </Link>

            <Link target="_blank" href="https://t.me/AllahsFreind">
              <Image
                src="/telegramicon.png"
                alt="telegram"
                width={30}
                height={30}
                className="bg-gray-700 rounded-2xl p-1"
              />
            </Link>
          </div>
        </div>

        <div className="w-full md:w-1/3 lg:w-1/4 flex flex-col items-center p-4 sm:p-6 border rounded-xl bg-white shadow-md">
          <h1 className="text-xl sm:text-2xl text-black font-bold my-2 text-center">
            Pourya Samimi
          </h1>
          <p className="text-sm sm:text-base text-gray-600 my-2 text-center">
            Back-end Developer: Django and Go
          </p>
          <div className="flex flex-row my-2 justify-around items-center w-full">
            <Link target="_blank" href="https://github.com/itpourya">
              <Image
                src="/githubicon.png"
                alt="github"
                width={30}
                height={30}
                className="bg-gray-700 rounded-2xl p-1"
              />
            </Link>

            <Link target="_blank" href="mailto:pouria.backdev@gmail.com">
              <Image
                src="/emailicon.png"
                alt="email"
                width={30}
                height={30}
                className="bg-gray-700 rounded-2xl p-1"
              />
            </Link>

            <Link target="_blank" href="https://t.me/heredeveloper">
              <Image
                src="/telegramicon.png"
                alt="telegram"
                width={30}
                height={30}
                className="bg-gray-700 rounded-2xl p-1"
              />
            </Link>
          </div>
        </div>

        <div className="w-full md:w-1/3 lg:w-1/4 flex flex-col items-center p-4 sm:p-6 border rounded-xl bg-white shadow-md">
          <h1 className="text-xl sm:text-2xl text-black font-bold my-2 text-center">
            Reza Khanzehi
          </h1>
          <p className="text-sm sm:text-base text-gray-600 my-2 text-center">
            project Manager: Python, C++, C#
          </p>
          <div className="flex flex-row my-2 justify-around items-center w-full">
            <Link target="_blank" href="https://github.com/itpourya">
              <Image
                src="/githubicon.png"
                alt="github"
                width={30}
                height={30}
                className="bg-gray-700 rounded-2xl p-1"
              />
            </Link>

            <Link target="_blank" href="mailto:rezakhanzahi12@gmail.com">
              <Image
                src="/emailicon.png"
                alt="email"
                width={30}
                height={30}
                className="bg-gray-700 rounded-2xl p-1"
              />
            </Link>

            <Link target="_blank" href="https://t.me/RK_with_k">
              <Image
                src="/telegramicon.png"
                alt="telegram"
                width={30}
                height={30}
                className="bg-gray-700 rounded-2xl p-1"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
