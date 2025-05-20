import React from "react";

const Testimonials = () => {
  const companies = [
    { logo: "/logos/orange.png" },
    { logo: "/logos/sncf.png" },
    { logo: "/logos/tele2.png" },
    { logo: "/logos/bnp.png" }
  ];

  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-10">Ils nous ont fait confiance</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 items-center justify-center">
          {companies.map((company, index) => (
            <div key={index} className="flex flex-col items-center justify-center">
              <img
                src={company.logo}
                alt={company.name}
                className="h-12 mb-2 object-contain"
              />
              <span className="text-lg font-medium">{company.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
