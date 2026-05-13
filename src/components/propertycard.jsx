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
      <option>Villa</option>
      <option>Bungalow</option>
    </select>

    <select className="border p-3 rounded-lg">
      <option>Any Price</option>
      <option>Under 50k</option>
      <option>50k - 100k</option>
    </select>

    <button className="bg-slate-900 text-white rounded-lg">
      Search
    </button>

  </div>

</div>