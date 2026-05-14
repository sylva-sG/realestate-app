import Hero from "../components/Hero";

export default function Home() {
  return (
    <div>
      <Hero />
      <section className="py-12">

        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Welcome to Your Dream Home Finder
          </h2>
          <p className="text-lg text-gray-700 mb-8 text-center">
            Discover the best properties in your desired location. Whether you're looking for a cozy apartment, a spacious house, or vacant land, we have it all.
          </p>
        </div>
      </section>
    </div>
  );
}