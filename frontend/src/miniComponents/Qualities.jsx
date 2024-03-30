import React from "react";

const Qualities = () => {
  const qualities = [
    {
      id: 1,
      image: "/community.jpg",
      title: "COMMUNITY DEVELOPMENT",
      description:
        "Our mission is simple yet profound: to inspire compassion, generosity, and kindness in our communities. We strive to provide a platform where individuals, businesses, and organizations can come together to support worthy causes and make a tangible difference in the world"
    },
        {
      id: 2,
      image: "/transparency.jpg",
      title: "TRANSPARENCY",
      description:
        "We understand the importance of transparency and accountability in the world of philanthropy. That's why we are committed to ensuring that every donation is used effectively and responsibly. We work closely with our partner organizations to ensure that your contributions directly benefit those in need, making a measurable and sustainable impact."
        },
        {
      id: 3,
      image: "/impact.jpg",
      title: "IMPACT MEASUREMENT",
      description:
        "At Volunteers Community, we understand that when you make a donation, you want to know that it's making a real difference in the lives of those it's intended to help. That's why we're committed to rigorous impact measurement and transparency, ensuring that every dollar you donate has a tangible impact."
        },
  ];
  return (
    <>
      <div className="qualities">
        <h2>OUR QUALITIES</h2>
        <div className="container">
          {qualities.map((elememt) => {
            return (
              <div className="card" key={elememt.id}>
                <div className="img-wrapper">
                  <img src={elememt.image} alt={elememt.title} />
                </div>
                <div className="content">
                  <p className="title">{elememt.title}</p>
                  <p className="description">{elememt.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Qualities;