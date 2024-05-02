import "./App.css"
import LimitationCard from "./components/ui/limitationCard.tsx"
import { limitationsCardsData } from "./data/mockData.ts"

function App() {
  return (
    <div className="text-base text-dark-electric-blue font-inter">
      <section className="pt-32 pb-32">
        <div className="grid u-limitations-grid-layout">
          <div className="grid-heading">
            <h2 className="text-5xl mb-7 text-gunmetal">Limitations of BMI</h2>
            <p className="m-0">
              Although BMI is often a practical indicator of healthy weight, it
              is not suited for every person. Specific groups should carefully
              consider their BMI outcomes, and in certain cases, the measurement
              may not be beneficial to use.
            </p>
          </div>
          {limitationsCardsData.map((item) => (
            <LimitationCard
              title={item.title}
              description={item.description}
              iconPath={item.icon}
            />
          ))}
        </div>
      </section>
    </div>
  )
}

export default App
