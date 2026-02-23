const reviews = [
  {
    name: 'Prashant Kyada',
    rating: 4,
    text: 'I recently visited Kevlopote Maggie Center and had a delightful experience. I ordered the Cheese Maggie and a cold drink. The Cheese Maggie was delicious, with a perfect blend of flavors. They offer a variety of other Maggie dishes as well, which I look forward to trying on my next visit. The seating arrangement inside is comfortable, with chairs and tables that make for a pleasant dining experience. The order system is efficient, and the service is excellent. The staff is friendly and attentive, ensuring a great overall experience. If you’re a Maggie lover, Kevlopote Maggie Center is definitely worth a visit!',
  },
  {
    name: 'Mihir Sardhara',
    rating: 5,
    text: 'Best place for Maggie lovers...must try!!',
  },
  {
    name: 'RUTVIK JOSHI',
    rating: 5,
    text: 'Food was very delicious, great taste like had never before',
  },
  {
    name: 'Prathmesh Vichhi',
    rating: 5,
    text: 'Super cool place and one the best Maggie centre in Rajkot. Recommended to all.',
  },
  {
    name: 'GIRIRAJ MIRANI',
    rating: 5,
    text: 'Delicious Maggie and Quality is Too Good. I am very Happy to eat Cheese Tadka Maggie, Veg Cheese Maggi',
  },
];

const Reviews = () => {
  return (
    <div id="reviews" className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-orange-600 font-semibold tracking-wide uppercase">Testimonials</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            What Our Customers Say
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, index) => (
            <div key={index} className="bg-gray-50 rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0">
                  <div className="h-10 w-10 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold text-xl">
                    {review.name.charAt(0)}
                  </div>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">{review.name}</p>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`h-5 w-5 ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 italic">"{review.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
