const Blog = () => {
    const contents = [
      {
        date: "20 Nov 2020",
        title: "Nori grape silver beet broccoli kombu beet",
        subtitle: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.",
        link: "/blog/nori-grape"
      },
      {
        date: "20 Nov 2020",
        title: "Well, the way they make shows is, they make one",
        subtitle: "Some pilots get picked and become television programs. Some don't, become nothing.",
        link: "/blog/tv-shows"
      },
      {
        date: "20 Nov 2020",
        title: "Pommy ipsum smeg head whizz morris himer due",
        subtitle: "Taking the mick middle class bog roll bow ties are cool posh nosh off t'shop, stew and dumps.",
        link: "/blog/pommy-ipsum"
      }
    ];
  
    return (
      <div className="px-4 py-16 mx-auto sm:max-w-xl  md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div>
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-200">
              Brand new
            </p>
          </div>
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-white sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                    id="db164e35-2a0e-4c0f-ab05-f14edc6d4d30"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#db164e35-2a0e-4c0f-ab05-f14edc6d4d30)"
                  width="52"
                  height="24"
                />
              </svg>
              <span className="relative">The</span>
            </span>{' '}
            Latest Industry News
          </h2>
          <p className="text-base text-white md:text-lg">
            Stay updated with the newest trends and stories from the entertainment industry.
          </p>
        </div>
        
        <div className="grid max-w-sm gap-5 mb-8 lg:grid-cols-3 sm:mx-auto lg:max-w-full">
          {contents.map((content, index) => (
            <div key={index} className="px-10 py-20 text-center border border-gray-800 bg-gray-900 rounded-lg lg:px-5 lg:py-10 xl:py-20 hover:shadow-lg transition-shadow duration-300">
              <p className="mb-2 text-xs font-semibold tracking-wide text-gray-400 uppercase">
                {content.date}
              </p>
              <a
                href={content.link}
                className="inline-block max-w-xs mx-auto mb-3 text-2xl font-extrabold leading-7 text-white transition-colors duration-200 hover:text-blue-400"
                aria-label={`Read article: ${content.title}`}
              >
                {content.title}
              </a>
              <p className="max-w-xs mx-auto mb-2 text-gray-300">
                {content.subtitle}
              </p>
              <a
                href={content.link}
                aria-label={`Read more about ${content.title}`}
                className="inline-flex items-center font-semibold transition-colors duration-200 text-blue-400 hover:text-blue-300"
              >
                Read more
                <svg
                  className="inline-block w-3 ml-2"
                  fill="currentColor"
                  viewBox="0 0 12 12"
                >
                  <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Blog;