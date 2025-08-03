import { Card, StatCard } from "@/components";
import {
  aboutCards,
  aboutContent,
  aboutStatistics,
  aboutStoryContent,
} from "@/constants";
import Image from "next/image";

const About = () => {
  return (
    <div className="about-page-container">
      <main>
        {/* Header Section */}
        <section className="header-content-container">
          <h1>{aboutContent.title}</h1>
          {aboutContent.content?.map((para, idx) => (
            <p key={idx}>{para}</p>
          ))}
        </section>

        {/* Story Section */}
        <section className="story-section">
          <div className="story-content">
            <h2>{aboutStoryContent.title}</h2>
            <div>
              {aboutStoryContent.content?.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>
          </div>
          <div className="image-container">
            <Image
              src="https://www.shutterstock.com/image-photo/waterfall-hidden-tropical-jungle-600nw-460505092.jpg"
              alt=""
              width={2000}
              height={0}
              className="w-full h-auto"
            />
          </div>
        </section>

        {/* Values Section */}
        <section className="values-section">
          <div className="values-header">
            <h2>Our Values</h2>
            <p>
              These core principles guide everything we do and shape how we
              approach every project.
            </p>
          </div>

          <div className="value-cards-container">
            {aboutCards.map((card) => (
              <Card
                key={card.id}
                title={card.title}
                description={card.description}
                icon={card.icon}
              />
            ))}
          </div>
        </section>

        {/* Statistics Section */}
        <section className="statistics-section">
          <div className="stat-cards-container">
            {aboutStatistics.map((stat) => (
              <StatCard key={stat.id} stat={stat.stat} label={stat.label} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;
