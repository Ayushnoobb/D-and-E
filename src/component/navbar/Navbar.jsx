import React from "react";
import { useSession } from "next-auth/react";



// import AOS from 'aos'
// import 'aos/dist/aos.css'


import { useRouter } from "next/router";

import Link from "next/link";
import { signOut, signIn } from "next-auth/react";

import { Peralta } from "next/font/google";
const peralta = Peralta({ subsets: ["latin"] , weight:["400"] });

function Navbar() {
  const { data: session } = useSession();

  let  user ;
  session ? user = session.user.name : user = '';

  let location = useRouter()
  // console.log(location.asPath)


  return (
    <>
      <nav className="nav">
        <div className="container">
          <div className="nav_wrapper">
            <div className="page__head">
              <Link href={"/"}><span className={peralta.className}>D&E</span></Link>
            </div>
            <div className="nav__center">
              <ul className="nav__links">
                <li className="nav__link">
                  <Link href={"/"}>Home</Link>
                </li>
                <li className="nav__link">
                  <Link href={"/about"}>About Us</Link>
                </li>
                <li className="nav__link">
                  <Link href={"/contact"}>Contact</Link>
                </li>
                <li className="nav__link">
                  <Link href={"/featured"}>Featured</Link>
                </li>
                <li className="nav__link">
                  <Link href={"/news"}>News</Link>
                </li>
                <li className="nav__link">
                  <Link href={"/gallery"}>Gallery</Link>
                </li>
                <li className="nav__link">
                  <Link href={"/recruit"}>Recruit</Link>
                </li>
              </ul>
            </div>
            <div className="nav__right">
              <div className="nav__search">
                <label htmlFor="search">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.7204 9.43396H10.0429L9.80274 9.2024C10.6432 8.2247 11.1492 6.9554 11.1492 5.57461C11.1492 2.49571 8.65352 0 5.57461 0C2.49571 0 0 2.49571 0 5.57461C0 8.65352 2.49571 11.1492 5.57461 11.1492C6.9554 11.1492 8.2247 10.6432 9.2024 9.80274L9.43396 10.0429V10.7204L13.7221 15L15 13.7221L10.7204 9.43396ZM5.57461 9.43396C3.43911 9.43396 1.71527 7.71012 1.71527 5.57461C1.71527 3.43911 3.43911 1.71527 5.57461 1.71527C7.71012 1.71527 9.43396 3.43911 9.43396 5.57461C9.43396 7.71012 7.71012 9.43396 5.57461 9.43396Z"
                      fill="black"
                    />
                  </svg>
                </label>
                <input type="text" name="search" className="nav__searchbar" />
              </div>
              <div className={ !session ? `nav__userFeatures` : 'nav__userFeatures hidden'}>
                <div className="nav__userFeature" onClick={()=>signIn()}>
                  <Link href={"#"} className="button"><span>Sign In</span></Link>
                </div>
                <div className="nav__userFeature" onClick={()=>signIn()}>
                  <Link href={"#"} className="button"><span>Log In</span></Link>
                </div>
              </div>
              <div className={session ? "nav__userFeatures" : "nav__userFeatures hidden"}>
                <Link href={"#"} className="nav__userFeature">
                  <svg
                    width="20"
                    height="19"
                    viewBox="0 0 20 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 18.35L8.55 17.03C3.4 12.36 0 9.28 0 5.5C0 2.42 2.42 0 5.5 0C7.24 0 8.91 0.81 10 2.09C11.09 0.81 12.76 0 14.5 0C17.58 0 20 2.42 20 5.5C20 9.28 16.6 12.36 11.45 17.04L10 18.35Z"
                      fill="#E3E3E3"
                    />
                  </svg>
                </Link>
                <Link href={"#"} className="nav__userFeature">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 16C4.9 16 4.01 16.9 4.01 18C4.01 19.1 4.9 20 6 20C7.1 20 8 19.1 8 18C8 16.9 7.1 16 6 16ZM0 0V2H2L5.6 9.59L4.25 12.04C4.09 12.32 4 12.65 4 13C4 14.1 4.9 15 6 15H18V13H6.42C6.28 13 6.17 12.89 6.17 12.75L6.2 12.63L7.1 11H14.55C15.3 11 15.96 10.59 16.3 9.97L19.88 3.48C19.96 3.34 20 3.17 20 3C20 2.45 19.55 2 19 2H4.21L3.27 0H0ZM16 16C14.9 16 14.01 16.9 14.01 18C14.01 19.1 14.9 20 16 20C17.1 20 18 19.1 18 18C18 16.9 17.1 16 16 16Z"
                      fill="#E3E3E3"
                    />
                  </svg>
                </Link>
                <div className="userFeature" onClick={()=>signOut()}>
                  <svg
                    width="23px"
                    height="23px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M2 6.5C2 4.01472 4.01472 2 6.5 2H12C14.2091 2 16 3.79086 16 6V7C16 7.55228 15.5523 8 15 8C14.4477 8 14 7.55228 14 7V6C14 4.89543 13.1046 4 12 4H6.5C5.11929 4 4 5.11929 4 6.5V17.5C4 18.8807 5.11929 20 6.5 20H12C13.1046 20 14 19.1046 14 18V17C14 16.4477 14.4477 16 15 16C15.5523 16 16 16.4477 16 17V18C16 20.2091 14.2091 22 12 22H6.5C4.01472 22 2 19.9853 2 17.5V6.5ZM18.2929 8.29289C18.6834 7.90237 19.3166 7.90237 19.7071 8.29289L22.7071 11.2929C23.0976 11.6834 23.0976 12.3166 22.7071 12.7071L19.7071 15.7071C19.3166 16.0976 18.6834 16.0976 18.2929 15.7071C17.9024 15.3166 17.9024 14.6834 18.2929 14.2929L19.5858 13L11 13C10.4477 13 10 12.5523 10 12C10 11.4477 10.4477 11 11 11L19.5858 11L18.2929 9.70711C17.9024 9.31658 17.9024 8.68342 18.2929 8.29289Z"
                      fill="#E3E3E3"
                    />
                  </svg>
                </div>
                <Link href={"#"} className="nav__userFeature">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 18 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 0C4.03 0 0 4.03 0 9C0 13.17 2.84 16.67 6.69 17.69L9 20L11.31 17.69C15.16 16.67 18 13.17 18 9C18 4.03 13.97 0 9 0ZM9 2C10.66 2 12 3.34 12 5C12 6.66 10.66 8 9 8C7.34 8 6 6.66 6 5C6 3.34 7.34 2 9 2ZM9 16.3C6.5 16.3 4.29 15.02 3 13.08C3.03 11.09 7 10 9 10C10.99 10 14.97 11.09 15 13.08C13.71 15.02 11.5 16.3 9 16.3Z"
                      fill="#E3E3E3"
                    />
                  </svg>
                  <p>
                    {user}
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
