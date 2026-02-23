import aboutImage from '../assets/images/food-1.png';

const About = () => {
  return (
    <div id="about" className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <div className="relative">
            <div className="relative text-base mx-auto max-w-prose lg:max-w-none">
              <h2 className="text-base text-orange-600 font-semibold tracking-wide uppercase">About Us</h2>
              <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                More Than Just Maggie
              </h3>
              <p className="mt-8 text-lg text-gray-500">
                At Kevlo Pote, we are passionate about serving the best Maggie in Rajkot. Our cafe offers a delightful experience with a variety of Maggie dishes that are sure to satisfy your cravings.
              </p>
              <div className="mt-5 prose prose-orange text-gray-500 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1">
                <p>
                  We pride ourselves on our comfortable seating arrangement, perfect for hanging out with friends or enjoying a quick meal. Our efficient order system ensures you get your food hot and fresh without the wait.
                </p>
                <p className="mt-4">
                  Our friendly and attentive staff are here to make your visit memorable. Whether you're a Maggie lover or just looking for a great place to relax, Kevlo Pote is the place to be!
                </p>
              </div>
            </div>
          </div>
          <div className="mt-12 lg:mt-0 relative">
            <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen">
              <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-full lg:max-w-xl">
                 <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md overflow-hidden">
                    <img
                      className="w-full h-full object-cover"
                      src={aboutImage}
                      alt="Delicious Maggie"
                    />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
