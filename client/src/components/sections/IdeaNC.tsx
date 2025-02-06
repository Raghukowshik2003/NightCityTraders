import React, { useEffect } from "react";
import { PageFlip } from "page-flip"; // Import the PageFlip library

const IdeaNC = () => {
  useEffect(() => {
    // Initialize the PageFlip library when the component mounts
    const element = document.getElementById("example");
    if (!element) return;

    const pageFlip = new PageFlip(element, {
      startPage: 0,
      size: "fixed",
      width: 600, // Set the width of the book
      height: 400, // Set the height of the book
      flippingTime: 1000,
      drawShadow: true,
      showCover: true,
      mobileScrollSupport: true,
    });

    // Load pages dynamically
    pageFlip.loadFromHTML(document.querySelectorAll(".page"));

    return () => {
      // Cleanup when the component unmounts
      pageFlip.destroy();
    };
  }, []);

  return (
    <section className="py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-44 text-center">
        <h2 className="text-6xl font-extrabold text-white mb-16">Idea NC Book Section</h2>

        <div id="example" className="flip-book">
          <div className="page page-cover page-cover-top" data-density="hard">
            <div className="page-content">
              <h2>BOOK TITLE</h2>
            </div>
          </div>

          <div className="page">
            <div className="page-content">
              <h2 className="page-header">Page 1</h2>
              <div className="page-image" style={{ backgroundImage: "url('1.jpg')" }}></div>
              <div className="page-text">Page Content 1</div>
            </div>
          </div>

          <div className="page">
            <div className="page-content">
              <h2 className="page-header">Page 2</h2>
              <div className="page-image" style={{ backgroundImage: "url('2.jpg')" }}></div>
              <div className="page-text">Page Content 2</div>
            </div>
          </div>

          {/* Add more pages as needed */}

          <div className="page page-cover page-cover-bottom" data-density="hard">
            <div className="page-content">
              <h2>THE END</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IdeaNC;
