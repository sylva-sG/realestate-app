import Hero from "../components/Hero";

function Home() {
  return (
    <div>
      <Hero />

      <div style={{ padding: "20px", textAlign: "center" }}>
        <h2>Welcome to Real Estate App</h2>
        <p>
          Browse and find the best properties including apartments, houses,
          and land at affordable prices.
        </p>
      </div>
    </div>
  );
}

export default Home;