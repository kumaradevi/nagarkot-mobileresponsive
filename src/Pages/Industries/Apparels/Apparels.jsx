// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Apparels.css";
import Navbar from "../../../Components/Navbar/Navbar";
import Footer from "../../../Components/Footer/Footer";
import truck from "../../../assets/industry_logo/truck1.webp";

const Apparels = () => {
  return (
    <div>
      <Navbar />
      {/* Apparels & Fashion Industry Header Section */}
      <div className="apparel-fashion-section">
        <div className="apparel-content-wrapper">
          <h1 className="apparel-section-title">
            Apparel and Fashion Logistics Solutions
          </h1>
          <p className="apparel-section-description">
            We provide advanced logistics solutions for the apparel and fashion
            industry, focused on flexibility, speed, and sustainability.
          </p>
        </div>
      </div>

      {/* Industry Overview Section */}
      <section className="apparel-industry-overview">
        <h2>Industry Overview</h2>
        <p>
          In the fast-paced world of fashion, timing is everything. We
          understand that your success depends on getting the right products to
          the right places at the right time.
        </p>
        <p>
          We have developed a suite of services tailored to the unique demands
          of the apparel industry, ensuring your products move seamlessly from
          production to retail floor or customer doorstep.
        </p>
        <hr className="gray-line" />
      </section>

      {/* Offerings Section */}
      <section className="apparel-offerings-section">
        <h2 className="apparel-offerings-title">
          Our Apparel and Fashion Logistics Offerings
        </h2>
        <div className="apparel-offerings-grid">
          <div className="apparel-offering-card">
            <h3>Peak Season Scaling</h3>
            <p>
              Our operations can flex with your needs, conveniently
              accommodating holiday rushes and seasonal collection launches.
            </p>
          </div>

          <div className="apparel-offering-card">
            <h3>Reverse Logistics & Returns Management</h3>
            <p>
              We run a streamlined returns process to maintain customer
              satisfaction while minimizing losses.
            </p>
          </div>

          <div className="apparel-offering-card">
            <h3>Flexible Warehousing Solutions</h3>
            <p>
              Our facilities feature both hanging garment storage and flat pack
              options to keep your merchandise in pristine condition. We can
              efficiently handle seasonal volume fluctuations with flexible
              space and service options tailored to your needs.
            </p>
          </div>

          <div className="apparel-offering-card">
            <h3>Inventory Management for Fashion</h3>
            <p>
              Our WMS enables real-time stock updates through integration with
              major e-commerce platforms and ERPs. We can cover complex and
              ever-expanding SKU counts typical in the apparel industry.
            </p>
          </div>

          <div className="apparel-offering-card">
            <h3>Omnichannel Distribution</h3>
            <p>
              We manage distribution to retail stores, e-commerce fulfillment
              centers, and direct-to-consumer shipments, and also provide
              support on diversified purchases by end-users across various
              marketplaces.
            </p>
          </div>

          <div className="apparel-offering-card">
            <h3>Value-Added Services</h3>
            <p>
              We provide garment-specific services (e.g., neatly ironing
              pre-delivery, customized packaging)
            </p>
          </div>
        </div>
      </section>

      {/* Why Nagarkot section */}
      <div className="why-nagarkot-section">
       
          <div className="image-container">
            <img
              src={truck}
              alt="Nagarkot Forwarders"
              className="why-nagarkot-image"
            />
          </div>
          <div className="content-container">
            <h2 className="why-nagarkot-title">
              Why Partner with <br /> Nagarkot Forwarders?
            </h2>
            <ul className="why-nagarkot-list">
              <li>
                <strong>Improved Productivity:</strong> Advanced solutions for
                streamlined operations and efficient inventory management.
              </li>
              <li>
                <strong>Enhanced Accountability:</strong> Meticulous tracking
                and transparent processes ensure reliable operations.
              </li>
              <li>
                <strong>Reduced Risks:</strong> Comprehensive risk assessment,
                proactive measures, and robust security protocols.
              </li>
              <li>
                <strong>Specialized Expertise:</strong> Deep understanding of
                apparel logistics and warehousing, ensuring efficient handling
                of complex supply chains and high-volume orders.
              </li>
            </ul>
            <p className="why-nagarkot-summary">
              At Nagarkot, we don&#39;t just move boxes – we understand fashion.
              Whether you&#39;re launching a new line, expanding into
              e-commerce, or looking to streamline your existing supply chain,
              we have the expertise to support your growth. Ready to elevate
              your fashion logistics? Contact us today for a customized solution
              that fits your brand perfectly.
            </p>
     
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Apparels;
