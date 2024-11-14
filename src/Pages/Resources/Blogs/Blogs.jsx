// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "./Blogs.css";
import { Link } from "react-router-dom"; // Add Link from React Router
import Navbar from "../../../Components/Navbar/Navbar";
import Footer from "../../../Components/Footer/Footer";
import blog from "../../../assets/resources/blog.webp";

const Blogs = () => {
  const [currentPage, setCurrentPage] = useState(1);

  // Sample data for glossary titles and bodys
  const blogsData = [
    {
      title: "The Benefits of Outsourcing Your Supply Chain to a 3PL Provider",
      body: "In todays competitive business environment, companies are constantly seeking ways to optimize their supply chain operations and gain a strategic advantage. One increasingly popular solution is.....",
    },
    {
      title: "Understanding 3PL: What It Is and Why Your Business Needs It",
      body: "In todays fast-paced business landscape, companies are constantly seeking ways to streamline their operations and gain a competitive edge. One solution that..... ",
    },
    {
      title: "How to Choose the Right 3PL Partner for Your Business",
      body: "When it comes to third-party logistics (3PL), choosing the right partner can make all the difference in the success of your supply chain operations. With so many 3PL providers in the market, it can be challenging to.....",
    },
    {
      title: "Top Trends in Third-Party Logistics for 2024",
      body: "As we move into 2024, the world of third-party logistics (3PL) is poised for significant changes and advancements. From the increasing adoption of automation and artificial intelligence to the growing emphasis on.....",
    },
    {
      title: "The Role of Technology in Modern Warehousing Solutions",
      body: "In todays fast-paced business environment, technology plays a critical role in optimizing supply chain performance and driving success in the third-party logistics (3PL) industry. From warehouse management systems to.....",
    },
    {
      title: "Customs Consultation: How It Can Save You Money on Duties",
      body: "Navigating the complexities of international trade can be daunting for importers and exporters. One effective way to streamline this process and save on costs is.....",
    },
    {
      title: "Navigating the Challenges of Supply Chain Management in India",
      body: "Supply chain management in India presents unique challenges due to its diverse landscape, regulatory complexities, and infrastructure limitations. However, with the right strategies and.....",
    },
    {
      title: "Case Study: Successful 3PL Implementation for a Retail Business",
      body: "In todays fast-paced retail environment, efficient logistics operations are crucial for success. A recent case study highlights how a leading retail brand transformed its supply chain by partnering with.....",
    },
    {
      title: "How Startups Can Leverage 3PL Services for Growth",
      body: "For startups looking to scale quickly without heavy investments in infrastructure, partnering with a third-party logistics (3PL) provider can be a game-changer. By outsourcing logistics functions such as.....",
    },
    {
      title: "How 3PL and Warehousing Can Boost Efficiency Across Industries",
      body: "Managing a warehouse or handling supply chain operations can be challenging for businesses in fast-paced industries. To stay competitive, many companies choose to work with 3PL providers. This partnership allows businesses to.....",
    },
    {
      title: "Understanding the Role of 3PL in E-commerce Growth",
      body: "In todays fast-paced world, e-commerce is growing rapidly. One important player in this growth is third-party logistics (3PL). 3PL providers help online businesses manage their logistics, allowing them to focus on.....",
    },
    {
      title: "The Essential Guide to 3PL for Medium-Sized Enterprises",
      body: "In today’s fast-paced market, medium-sized enterprises (SMEs) face unique challenges in logistics and supply chain management. This is where third-party logistics (3PL) comes in as a valuable solution. 3PL providers help businesses manage their logistics, allowing them to.....",
    },
    {
      title: "Managing Risks in Supply Chain Logistics",
      body: "In todays fast-paced world, effective supply chain logistics is vital for business success. However, it comes with its own set of risks. Understanding these risks and knowing how to manage them can save your.....",
    },
    {
      title:
        "Real-World Success Stories: How 3PL Improved Operations for Our Clients",
      body: "In today’s fast-paced business world, companies are constantly seeking ways to improve efficiency and reduce costs. One of our notable clients, a leading Japanese multinational company, turned to us for help in.....",
    },
    {
      title: "Tips for Managing Your Supply Chain During Peak Seasons",
      body: "Managing your supply chain during peak seasons can be challenging, but with the right strategies, you can ensure smooth operations and meet customer demands. Here are some essential tips to.....",
    },
    {
      title: "Customs Duties: What Every Importer Should Know",
      body: "Understanding customs duties is critical for anyone involved in importing goods into India. These duties are the taxes imposed by the Indian government on goods brought into the country, and they can significantly impact the.....",
    },
    {
      title:
        "Common Challenges in Supply Chain Management and How to Overcome Them",
      body: "Supply chain management plays a crucial role in ensuring that goods are delivered efficiently and on time. However, businesses in India often face common challenges that can disrupt their supply chains. Here are a few.....",
    },
    {
      title: "The Impact of Location on Supply Chain Efficiency",
      body: "In todays fast-paced business environment, location plays a critical role in ensuring an efficient supply chain. The placement of warehouses and distribution centers can directly impact the time it takes.....",
    },
    {
      title: "Exploring Cold Chain Logistics for Perishable Goods",
      body: "Cold chain logistics is a critical component for businesses dealing with perishable goods like food and pharmaceuticals. This specialized logistics system ensures that products remain at.....",
    },
    {
      title: "Key Metrics for Measuring Supply Chain Performance",
      body: "Measuring supply chain performance is essential for any business looking to improve efficiency and reduce costs. By tracking key metrics, companies can identify areas for improvement and make informed decisions. Here are some important.....",
    },
    {
      title: "How 3PL Services Support the Automotive Industry",
      body: "The automotive industry faces unique challenges related to supply chain management due to its complexity and fast-paced nature. Partnering with a third-party logistics (3PL) provider can help automotive companies streamline their operations and..... ",
    },
    {
      title: "The Cost Benefits of Using a 3PL Provider for Startups",
      body: "For startups looking to grow quickly while managing costs, using a third-party logistics (3PL) provider can be a smart move. Outsourcing logistics functions allows startups to focus on their core business activities while benefiting..... ",
    },
    {
      title: "The Role of AI and Machine Learning in Logistics Optimization",
      body: "Artificial Intelligence (AI) and machine learning are transforming the logistics industry by enhancing efficiency and decision-making processes. As businesses strive for greater accuracy and speed in their operations, integrating these..... ",
    },
    {
      title: "How Warehousing Strategies Differ Across Industriest",
      body: "Different industries have unique requirements when it comes to warehousing strategies. Understanding these differences is essential for businesses looking to optimize their supply chain operations effectively. Here’s how warehousing strategies vary across..... ",
    },
    {
      title:
        "Understanding the Impact of Energy Logistics on Business Operations",
      body: "In todays fast-changing world, the energy sector plays a crucial role in keeping industries running smoothly. From manufacturing to transportation, businesses rely on energy to keep operations moving. But managing energy logistics is not always simple, especially when it comes to..... ",
    },
    {
      title: "Why Your Business Needs Supply Chain Consultation",
      body: "In today’s fast-paced world, managing a supply chain can be complicated. If you want your business to run smoothly, reduce costs, and stay ahead of the competition, supply chain consultation is something..... ",
    },
    {
      title: "Trends in Pharma Logistics: What You Need to Know",
      body: "The pharmaceutical industry in India is growing rapidly, making pharma logistics more important than ever. With rising demand for medicines, vaccines, and medical supplies, logistics providers must stay updated on the latest trends to..... ",
    },
    {
      title: "Key Benefits of Using Gujarat for Your Supply Chain Needs",
      body: "Gujarat has emerged as one of the top logistics hubs in India due to its strategic location, well-developed infrastructure, and business-friendly policies. If you are looking to optimize your supply chain, here are a few key benefits..... ",
    },
    {
      title:
        "Why Large Enterprises Are Turning to 3PL for Efficient Supply Chains",
      body: "Large enterprises are increasingly relying on 3PL providers to manage and streamline their supply chains. The main reason is that handling logistics in-house can be costly and time-consuming, especially as..... ",
    },
    {
      title: "How to Reduce Pilferage in Retail Warehousing",
      body: "Pilferage is a common issue in retail warehousing that can lead to significant losses if not managed properly. While no warehouse is completely immune, there are steps businesses can take to minimize it. Here are some effective strategies to..... ",
    },
    {
      title:
        "How Global Events Impact Supply Chain Dynamics and What You Can Do About It",
      body: "Global events can have a profound impact on supply chain dynamics, affecting businesses across various industries. Understanding these impacts and adapting your strategies is crucial to maintaining..... ",
    },
    {
      title: "How 3PL Providers Improve Last-Mile Delivery Efficiency",
      body: "Last-mile delivery is often the most challenging and expensive part of the supply chain. It involves getting the product from a warehouse or fulfillment center to the customers doorstep. 3PL providers play a key role in improving this..... ",
    },
    {
      title: "Leveraging Local Warehousing Solutions for Faster Delivery Times",
      body: "Leveraging local warehousing solutions can significantly enhance your businesss delivery times and overall efficiency. As consumer expectations continue to rise, companies must find ways to..... ",
    },
  ];

  const itemsPerPage = 9;
  const totalPages = Math.ceil(blogsData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = blogsData.slice(startIndex, startIndex + itemsPerPage);

  const handlePageClick = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="blogs-container">
        <div className="image-container">
          <img src={blog} alt="Blogs Background" className="background-image" />
        </div>
      </div>

      {/* Separate section for the title */}
      <div className="blogs-title-container">
        <p className="blogs-title">
          <strong>Unveiling Insights</strong>: Your <strong>Source</strong> for{" "}
          <strong>Expert Knowledge</strong>
        </p>
      </div>

      {/* Glossary Cards Section */}
      <div className="cards-container">
        {currentItems.map((item, index) => (
          <div key={index} className="card">
            <h3 className="title-title">{item.title}</h3>
            <p className="title-body">{item.body}</p>
            {/* "Read More" button that links to a detailed blog page */}
            <Link to={`/blogs/${item.title}`} className="read-more-button">
              Read More
            </Link>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="pagination">
        <span
          className="prev-next"
          onClick={() => handlePageClick(currentPage - 1)}
        >
          Previous
        </span>
        {[...Array(totalPages).keys()].map((pageNumber) => (
          <span
            key={pageNumber + 1}
            className={`page-number ${
              pageNumber + 1 === currentPage ? "active" : ""
            }`}
            onClick={() => handlePageClick(pageNumber + 1)}
          >
            {pageNumber + 1}
          </span>
        ))}
        <span
          className="prev-next"
          onClick={() => handlePageClick(currentPage + 1)}
        >
          Next
        </span>
      </div>
      <Footer />
    </div>
  );
};

export default Blogs;
