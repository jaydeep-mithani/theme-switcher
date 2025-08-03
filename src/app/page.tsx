import { Card, ThemeButton } from "@/components";
import { homeCards, homeContent } from "@/constants";

export default function Home() {
  return (
    <div className="home-page-container">
      <main>
        <section className="header-content-container">
          <h1>{homeContent.title}</h1>
          {homeContent.content?.map((para, idx) => (
            <p key={idx}>{para}</p>
          ))}
          <ThemeButton>Get Started Today</ThemeButton>
        </section>
        <section className="home-cards-container">
          {homeCards.map((card) => (
            <Card
              key={card.id}
              title={card.title}
              description={card.description}
              icon={card.icon}
              showLearnMore
            />
          ))}
        </section>
      </main>
    </div>
  );
}
