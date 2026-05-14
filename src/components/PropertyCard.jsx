export default function PropertyCard() {
  return (
<div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-4xl mx-auto">

  <h2 className="text-2xl font-bold mb-4">
    Find Your Perfect Home
  </h2>

  <div className="grid md:grid-cols-4 gap-4">

    <input
      type="text"
      placeholder="Search location..."
      className="border p-3 rounded-lg"
    />

    <select className="border p-3 rounded-lg">
      <option>Apartment</option>
      <option>House</option>
      <option>Land</option>
    </select>

    <select className="border p-3 rounded-lg">
      <option>1500</option>
      <option>1200</option>
      <option>2500</option>
      <option>50000</option>
      <option>3500</option>
    </select>

    <button className="bg-slate-900 text-white rounded-lg">
      Search
    </button>

  </div>

</div>
  );
} 