import React from "react";
import Link from "next/link";

import { Peralta , Noto_Sans } from "next/font/google";
const peralta = Peralta({ subsets: ["latin"], weight: ["400"] });
const noto = Noto_Sans({ subsets: ["latin"], weight: ["400"] });

function Footer() {
  return (
    <>
      <footer className={`footer ${noto.className}`}>
        <div className="container">
          <div className="footer__head grid">
            <div className="footer__row page__head">
              <Link href={"/"}>
                <span className={peralta.className}>D&E</span>
              </Link>
            </div>
            <div className="footer__row">
              <h3 className="footer__heading">Featured Items</h3>
            </div>
            <div className="footer__row">
              <h3 className="footer__heading">New Products</h3>
            </div>
            <div className="footer__row">
              <h3 className="footer__heading">This week Sale</h3>
            </div>
            <div className="footer__row">
              <h3 className="footer__heading">For a limited time</h3>
            </div>
            <div className="footer__row">
              <h3 className="footer__heading">This week Pickup</h3>
            </div>
            <div className="footer__row">
              <h3 className="footer__heading">Recruitment</h3>
            </div>
          </div>
          <div className="footer__linkWrap grid">
            <ul className="footer__links">
              <Link href={"/"}>Home</Link>
              <Link href={"/about"}>About Us</Link>
              <Link href={"/news"}>News</Link>
              <Link href={"#"}>Our Branch</Link>
              <Link href={"/contact"}>Contact Us</Link>
            </ul>
            <ul className="footer__links">
              <Link href={"#"}>Home</Link>
              <Link href={"#"}>About Us</Link>
              <Link href={"#"}>News</Link>
              <Link href={"#"}>Our Branch</Link>
              <Link href={"#"}>Contact Us</Link>
            </ul>
            <ul className="footer__links">
              <Link href={"#"}>Home</Link>
              <Link href={"#"}>About Us</Link>
              <Link href={"#"}>News</Link>
              <Link href={"#"}>Our Branch</Link>
              <Link href={"#"}>Contact Us</Link>
            </ul>
            <ul className="footer__links">
              <Link href={"#"}>Home</Link>
              <Link href={"#"}>About Us</Link>
              <Link href={"#"}>News</Link>
              <Link href={"#"}>Our Branch</Link>
              <Link href={"#"}>Contact Us</Link>
            </ul>
            <ul className="footer__links">
              <Link href={"#"}>Home</Link>
              <Link href={"#"}>About Us</Link>
              <Link href={"#"}>News</Link>
              <Link href={"#"}>Our Branch</Link>
              <Link href={"#"}>Contact Us</Link>
            </ul>
            <ul className="footer__links">
              <Link href={"#"}>Home</Link>
              <Link href={"#"}>About Us</Link>
              <Link href={"#"}>News</Link>
              <Link href={"#"}>Our Branch</Link>
              <Link href={"#"}>Contact Us</Link>
            </ul>
            <ul className="footer__links">
              <Link href={"#"}>Home</Link>
              <Link href={"#"}>About Us</Link>
              <Link href={"#"}>News</Link>
              <Link href={"#"}>Our Branch</Link>
              <Link href={"#"}>Contact Us</Link>
            </ul>
          </div>
          <p className="footer__copyright text-center">
            Copyright © 2019 NepaVFX Pvt. Ltd  All rights reserved
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
