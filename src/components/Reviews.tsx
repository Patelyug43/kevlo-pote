const reviews = [
  {
    name: 'Prashant Kyada',
    meta: '219 reviews · 2045 photos · a year ago',
    text: 'I recently visited Kevlopote Maggie Center and had a delightful experience. The Cheese Maggie was delicious with a perfect blend of flavors. Comfortable seating, efficient ordering, and friendly staff made the visit excellent.',
    rating: 'Food: 4/5 | Service: 4/5 | Atmosphere: 3/5',
  },
  {
    name: 'Mihir Sardhara',
    meta: '245 reviews · 951 photos · 2 years ago',
    text: 'Best place for Maggie lovers... must try!!',
    rating: 'Highly recommended',
  },
  {
    name: 'RUTVIK JOSHI',
    meta: 'Dine in',
    text: 'Food was very delicious, great taste like had never before.',
    rating: 'Food: 5/5 | Service: 5/5 | Atmosphere: 5/5',
  },
  {
    name: 'Prathmesh Vichhi',
    meta: 'Customer review',
    text: 'Super cool place and one of the best Maggie centres in Rajkot. Recommended to all.',
    rating: 'Top pick in Rajkot',
  },
  {
    name: 'GIRIRAJ MIRANI',
    meta: 'Dine in',
    text: 'Delicious Maggie and quality is too good. I am very happy to eat Cheese Tadka Maggie and Veg Cheese Maggi.',
    rating: 'Food: 5/5 | Service: 5/5 | Atmosphere: 5/5',
  },
];

const Reviews = () => {
  return (
    <section id="reviews" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-yellow-600 font-semibold uppercase tracking-wider">Customer Reviews</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-gray-900">Loved by Maggi lovers in Rajkot</h2>
        </div>

        <div className="mt-10 grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <article key={review.name} className="rounded-xl border border-gray-200 p-6 bg-gray-50">
              <h3 className="text-lg font-bold text-gray-900">{review.name}</h3>
              <p className="text-xs text-gray-500 mt-1">{review.meta}</p>
              <p className="mt-3 text-gray-700">“{review.text}”</p>
              <p className="mt-4 text-sm font-semibold text-yellow-700">{review.rating}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
