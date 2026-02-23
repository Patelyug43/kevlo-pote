const Contact = () => {
  return (
    <div id="contact" className="bg-orange-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-orange-600 font-semibold tracking-wide uppercase">Contact Us</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Visit Us Today
          </p>
        </div>
        <div className="mt-10 lg:grid lg:grid-cols-2 lg:gap-8">
          <div>
            <h3 className="text-lg leading-6 font-medium text-gray-900">Location</h3>
            <p className="mt-2 text-base text-gray-500">
              <a href="https://maps.app.goo.gl/YXGeTm8sq1AK7JGu6" target="_blank" rel="noopener noreferrer" className="hover:text-orange-600 hover:underline">
                Jk Chowk, Pushkardham Rd,<br />
                near Akashwani Chowk, opp. Shyamal Infinity,<br />
                Bhawani Nagar, Rajkot, Gujarat 360005
              </a>
            </p>
            <div className="mt-4">
              <a
                href="https://maps.app.goo.gl/YXGeTm8sq1AK7JGu6"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700"
              >
                Get Directions
              </a>
            </div>
          </div>
          <div className="mt-8 lg:mt-0">
            <h3 className="text-lg leading-6 font-medium text-gray-900">Contact Info</h3>
            <div className="mt-2 text-base text-gray-500">
              <p>Phone: <a href="tel:09510931838" className="text-orange-600 hover:underline">095109 31838</a></p>
              <p className="mt-2">
                Instagram: <a href="https://www.instagram.com/kevlopotemaggiandsnacks?igsh=a2E1ZTI2MWptbGR3" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">@kevlopotemaggiandsnacks</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
