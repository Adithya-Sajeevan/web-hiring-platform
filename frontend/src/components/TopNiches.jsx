import React from "react";

const TopNiches = () => {
  const services = [
    {
      id: 1,
      service: "Software Development",
      description:
        "Cutting-edge software development services to build, maintain, and enhance applications, ensuring they adhere to the highest quality standards.",
    },
    {
      id: 2,
      service: "Web Development",
      description:
        "End-to-end web development solutions, from front-end design to back-end integration, delivering responsive and user-friendly websites.",
    },
    {
      id: 3,
      service: "Data Science",
      description:
        "Expert data science services for analyzing and interpreting complex data, delivering actionable insights and data-driven solutions.",
    },
    {
      id: 4,
      service: "Cloud Computing",
      description:
        "Dependable cloud computing services for efficient data management, storage, and processing, providing scalable and flexible cloud solutions.",
    },
    {
      id: 5,
      service: "DevOps",
      description:
        "DevOps services designed to optimize software development and operations, improving deployment efficiency and accelerating time to market.",
    },
    {
      id: 6,
      service: "Mobile App Development",
      description:
        "Professional mobile app development for iOS and Android, delivering intuitive and engaging user experiences.",
    },
  ];

  return (
    <section className="services">
      <h3>Top Domains</h3>
      <div className="grid">
        {services.map((element) => {
          return (
            <div className="card" key={element.id}>
              <h4>{element.service}</h4>
              <p>{element.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default TopNiches;