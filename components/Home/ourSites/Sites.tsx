export const Sites = () => {
    const siteList = [
      { name: 'Company A', url: 'http://www.w3.org/2000/svg', image: 'https://www.google.com/imgres?q=pop&imgurl=https%3A%2F%2Fmedia.designcafe.com%2Fwp-content%2Fuploads%2F2023%2F04%2F23221414%2Fbeautiful-yet-simple-pop-design-for-hall.jpg&imgrefurl=https%3A%2F%2Fwww.designcafe.com%2Fblog%2Fhome-interiors%2F8-beautiful-pop-designs-for-indian-homes%2F&docid=-NTib-nzItjQkM&tbnid=MdVB2At2NKlO0M&vet=12ahUKEwitz6_5jciMAxW5dmwGHYxRHFgQM3oECGUQAA..i&w=940&h=564&hcb=2&ved=2ahUKEwitz6_5jciMAxW5dmwGHYxRHFgQM3oECGUQAA' },
      { name: 'Company B', url: 'https://companyb.com', image: '/site2.png' },
      { name: 'Company C', url: 'https://companyc.com', image: '/site3.png' },
    ];
  
    return (
      <div className="flex flex-col items-center mt-10 min-h-[max-content] px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white leading-tight">
            Explore <span className="text-green-600">live</span>
            <br />
            Our <span className="text-sky-700">sites</span>
          </h2>
        </div>
  
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
          {siteList.map((site, i) => (
            <a
              href={site.url}
              target="_blank"
              rel="noopener noreferrer"
              key={i}
              className="group relative bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300"
            >
              <img
                src={site.image}
                alt={site.name}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute bottom-0 w-full bg-black/60 text-white p-4 flex justify-between items-center">
                <h3 className="text-lg font-semibold">{site.name}</h3>
                <span className="text-sm text-blue-400 group-hover:underline">Visit ↗</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    );
  };
  