// previous design:
// <div className="group relative h-[22rem] w-72 overflow-hidden rounded-lg border-[1px] shadow-lg">
//   <img
//     src={images?.length > 0 ? images[0] : "No image"}
//     className="z-10 h-full w-full rounded-lg bg-white object-contain"
//     alt=""
//   />

//   <div className="absolute left-0 top-0 hidden h-96 w-72 px-2 py-16 text-center text-gray-800 transition-all duration-100 hover:bg-white/30 hover:backdrop-blur-lg group-hover:block">
//     <h1 className="mb-5 font-bold uppercase">
//       {title
//         ? title.length > 15
//           ? title.split("").slice(0, 10).join("") + "..."
//           : title
//         : "No Title"}
//     </h1>
//     <p className="mb-3 font-medium">
//       Category:
//       <span> </span>
//       {category
//         ? category.length > 10
//           ? category.split("").slice(0, 14).join("") + "..."
//           : category
//         : "No category"}
//     </p>
//     <p className="mb-3 font-medium">
//       Brand:
//       <span> </span>
//       {brandText
//         ? brandText.length > 10
//           ? brandText.split("").slice(0, 14).join("") + "..."
//           : brandText
//         : "No brand"}
//     </p>
//     <p className="mb-5 font-bold">
//       Price:
//       <span> </span>
//       {price}
//     </p>
//     <button className="text-l w-1/3 rounded-full bg-green-500 px-3 py-2 transition-all duration-300 hover:bg-inherit hover:backdrop-blur-lg">
//       Buy
//     </button>
//   </div>
// </div>
