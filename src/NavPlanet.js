// import React, { Component } from "react";
// import { BrowserRouter, Route, Link } from "react-router-dom";
// class NavPlanet extends Component {
//   render() {
//     return (
//       <BrowserRouter>
//         <div>
//           <h1>Life on Earth is Dying</h1>
//           <nav className="navbar navbar-expand-lg navbar-light navbar-dark bg-dark">
//             <Link to="/NavPlanet">
//               <a className="navbar-brand">Our Planet</a>
//             </Link>
//             <button
//               className="navbar-toggler"
//               type="button"
//               data-toggle="collapse"
//               data-target="#navbarSupportedContent"
//               aria-controls="navbarSupportedContent"
//               aria-expanded="false"
//               aria-label="Toggle navigation"
//             >
//               <span className="navbar-toggler-icon" />
//             </button>

//             <div
//               className="collapse navbar-collapse"
//               id="navbarSupportedContent"
//             >
//               <ul className="navbar-nav mr-auto">
//                 <li className="nav-item active">
//                   <Link to="/Animals">
//                     <a className="nav-link" href="#">
//                       Animals <span className="sr-only">(current)</span>
//                     </a>
//                   </Link>
//                 </li>
//                 <li className="nav-item active">
//                   <a className="nav-link" href="#">
//                     Nature <span className="sr-only">(current)</span>
//                   </a>
//                 </li>
//                 <li className="nav-item">
//                   <a className="nav-link" href="#">
//                     Contact
//                   </a>
//                 </li>
//               </ul>
//             </div>
//           </nav>
//         </div>
//         <div>
//           <Route exact path="/" />
//           <Route path="./NavPlanet" component={NavPlanet} />
//           <Route path="./Animals" component={Animals} />
//           {/* <Route path="/AnimalCard/:id" component={} /> */}
//           <Route path="./Nature" component={Nature} />
//           {/* <Route path="/NatureCard" component={} /> */}
//           <Route path="./Contact" component={Contact} />
//         </div>
//       </BrowserRouter>
//     );
//   }
// }
// export default NavPlanet;
