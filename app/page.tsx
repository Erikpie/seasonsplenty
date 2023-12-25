import FarmerCard from "./components/FarmerCard";

export default function Home() {
  return (
    <main>
      <br></br>
      <h1>Meet your local farmers</h1>
      <br></br>
      <div className="flex items-center justify-center">
        <FarmerCard />
        <FarmerCard />
        <FarmerCard />
      </div>
    </main>
  )
}