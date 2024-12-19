import React from "react";
import KeyValueTable from "../../components/KeyValueTable";
import Title from "../../components/Title";
import Paragraph from "../../components/Paragraph";
import Accordion from "../../components/Accordion";
import NumberedList from "../../components/NumberedList";
import Carousel from "../../components/Carousel";
import BulletedList from "../../components/BulletedList";
import Card from "../../components/Card";
import Section from "../../components/Section";

const BaildaraToFenyadeviGhat: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col items-center px-0 lg:px-10">
      <Card
        imgSrc="https://i.postimg.cc/3xgTfXQn/2.jpg"
        alt=""
        title="Baildara to Fenyadevi Ghat Trek Report"
        body=<>
          <Section
            defaultChecked={true}
            title=<Title title="Basic Info." />
            content=<KeyValueTable
              rows={[
                { key: "Date", value: "15 December 2024" },
                { key: "Duration", value: "6 Hours 18 Minutes" },
                {
                  key: "Location",
                  value: "Savale, Maval Taluka, Pune - 410401"
                },
                { key: "Organised By", value: "GGIM" }
              ]}
            ></KeyValueTable>
          />
          <Section
            defaultChecked={false}
            title=<Title title="Objective" />
            content=<>
              <Paragraph
                text="The primary objective of the trek was to navigate the rugged
              terrain of the Sahyadri Hills, honing essential trekking skills
              such as navigation, teamwork, and terrain management, while
              observing the unique biodiversity of the Western Ghats."
              />
            </>
          />
          <Section
            defaultChecked={false}
            title=<Title title="Team Details" />
            content=<>
              <KeyValueTable
                rows={[
                  { key: "Participants", value: "9" },
                  { key: "Trek Leader", value: "Vivek Shivade" },
                  { key: "Instructors", value: "Anushka" }
                ]}
              />
              <Paragraph
                text="The trek followed a participant-centered approach, with the team
              managing route planning, gear handling, and decision-making under
              the guidance of the instructors."
              />
            </>
          />
          <Section
            defaultChecked={false}
            title=<Title title="Gear Checklist" />
            content=<>
              <Accordion
                items={[
                  {
                    title: "Attire",
                    content: (
                      <NumberedList
                        items={["Full-sleeve clothing", "Trekking shoes"]}
                      />
                    )
                  },
                  {
                    title: "Personal Gear",
                    content: (
                      <NumberedList
                        items={[
                          "3 liters of water",
                          "Packed breakfast and lunch",
                          "Daypack",
                          "Extra set of clothing",
                          "Sun cap",
                          "Rainwear",
                          "Notebook and pen"
                        ]}
                      />
                    )
                  },
                  {
                    title: "Group Gear",
                    content: (
                      <NumberedList
                        items={[
                          "First aid kit (containing antibiotics, painkillers, cotton,   crepe bandage, and scissors)",
                          "Walkie-talkies",
                          "Dynamic rope"
                        ]}
                      />
                    )
                  }
                ]}
              />
            </>
          />
          <Section
            defaultChecked={false}
            title=<Title title="Route Overview" />
            content=<>
              <KeyValueTable
                rows={[
                  {
                    key: "Starting Point",
                    value: "Vitthalvadi Village (18.95705° N, 73.48300° E)"
                  },
                  {
                    key: "Ending Point",
                    value: "Fenyadevi Ghat (18.95705° N, 73.48300° E)"
                  },
                  {
                    key: "Distance Covered",
                    value: "9.5 km"
                  },
                  {
                    key: "Elevation Range",
                    value: "~700 m to ~450 m"
                  },
                  {
                    key: "Notable Landmarks",
                    value: "Kalakrai Village and Baildara Trail"
                  }
                ]}
              />
            </>
          />
          <Section
            defaultChecked={false}
            title=<Title title="Route Description" />
            content=<>
              <Paragraph
                text="The trek began in Vitthalvadi Village, where we were greeted by
              the sight of Kothaligad Fort in the distance. The trail initially
              led us up a hillock offering panoramic views of Peth village.
              Moving westward, we entered the Baildara Trail,
              characterized by dense karvi shrubs and unmarked paths. The trail
              descended sharply to Kalakrai Village, where we paused for a short
              break."
              />
              <Paragraph
                text="From Kalakrai, the route transitioned to the Fenyadevi Ghat Trail, featuring steep ascents,
              dramatic rock formations, and ancient stone relics. The final
              stretch involved navigating narrow footpaths back to Vitthalvadi
              Village, concluding the trek."
              />
            </>
          />
          <Section
            defaultChecked={false}
            title=<Title title="Photos" />
            content=<>
              <Carousel
                images={[
                  {
                    src: "https://i.postimg.cc/3xgTfXQn/2.jpg",
                    alt: "Kothaligad and its base village Peth"
                  },
                  {
                    src: "https://i.postimg.cc/Bv4Grjqs/5.jpg",
                    alt: "A house in Kalakrai village"
                  },
                  {
                    src: "https://i.postimg.cc/pr4H4kd1/1.jpg",
                    alt: "View from Vitthalvadi"
                  }
                ]}
              />
            </>
          />
          <Section
            defaultChecked={false}
            title=<Title title="Trail Guide" />
            content=<>
              <Accordion
                items={[
                  {
                    title: "Starting Point: Vitthalvadi Village",
                    content: (
                      <NumberedList
                        items={[
                          "Begin at Vitthalvadi village (may appear as Methalvadi on maps).",
                          "Cross a small hillock to reach the start of the Baildara  trail.",
                          "From the hillock, Kothaligad and its base village Peth can be sighted."
                        ]}
                      />
                    )
                  },
                  {
                    title: "Baildara Trail (to Kalakrai)",
                    content: (
                      <NumberedList
                        items={[
                          "Follow the Baildara trail, which is narrow and overgrown with karvi.",
                          "Descend from 700m to 450m to reach a four-way junction.",
                          "Turn left (westward) to continue towards Kalakrai village. (Do not take the straight-down path to a small village in Raigad district.) (Turn right to visit an old well.)"
                        ]}
                      />
                    )
                  },
                  {
                    title: "Kalakrai to Vitthalvadi via Fenyadevi Ghat",
                    content: (
                      <NumberedList
                        items={[
                          "From Kalakrai, head westward along the Fenyadevi ghat trail",
                          "The trail eventually makes a sharp southward turn. Look for a stone relic under a tree at this point.",
                          "Continue to the Fenyadevi ghat, which is wide and rocky.",
                          "Look for another holy relic carved in stone along the way.",
                          "Climb 200m to reach the flatland at the top of the ghat.",
                          "From the flatland, follow the footpath to return to Vitthalvadi village."
                        ]}
                      />
                    )
                  }
                ]}
              />
            </>
          />
          <Section
            defaultChecked={false}
            title=<Title title="Terrain and Biodiversity" />
            content=<>
              <Accordion
                items={[
                  {
                    title: "Terrain",
                    content: (
                      <BulletedList
                        items={[
                          "Steep Descents: Gravel-strewn paths and rocky patches required careful footing.",
                          "Narrow Trails: Overgrown with vegetation, these sections tested our navigation skills.",
                          "Ridge Walks: Open ridges offered stunning views of the surrounding peaks and valleys."
                        ]}
                      />
                    )
                  },
                  {
                    title: "Biodiversity Highlights",
                    content: (
                      <BulletedList
                        items={[
                          "Tree Canopy: Dominated by Ain (Terminalia elliptica) and Hirda (Terminalia chebula).",
                          "Shrubs: Dense growth of karvi (Strobilanthes callosus), a unique species known for its 7-year blooming cycle.",
                          "Ground Cover: Seasonal grasses and ferns thriving in the post-monsoon landscape."
                        ]}
                      />
                    )
                  }
                ]}
              />
            </>
          />
          <Section
            defaultChecked={false}
            title=<Title title="Activities and Learning" />
            content=<>
              <Accordion
                items={[
                  {
                    title: "Navigation Challenges",
                    content: (
                      <Paragraph text="The team faced a significant challenge during the descent from Baildara, where a missed junction delayed progress." />
                    )
                  },
                  {
                    title: "Rope Coiling Drill",
                    content: (
                      <Paragraph text="The trek included a session on dynamic rope coiling, focusing on proper storage and rapid deployment. This practical activity enhanced our technical preparedness for future expeditions." />
                    )
                  },
                  {
                    title: "Independent Trekking",
                    content: (
                      <Paragraph text=" Participants were encouraged to lead sections of the trail, fostering self-reliance and decision-making in real-time scenarios." />
                    )
                  }
                ]}
              />
            </>
          />
          <Section
            defaultChecked={false}
            title=<Title title="Challenges Faced" />
            content=<>
              <BulletedList
                items={[
                  "Navigation Errors: A missed junction delayed progress.",
                  "Loose Terrain: Steep descents with loose gravel required caution.",
                  "Gear Mismanagement: A participant lost their phone on a technical section.",
                  "Dehydration: Mild dehydration among participants despite winter conditions."
                ]}
              />
            </>
          />
          <Section
            defaultChecked={false}
            title=<Title title="Reflections and Recommendations" />
            content=<>
              <Accordion
                items={[
                  {
                    title: "Key Successes",
                    content: (
                      <BulletedList
                        items={[
                          "Effective teamwork in overcoming challenges.",
                          "Valuable technical rope coiling session.",
                          "Immersive experience of Sahyadri’s beauty and biodiversity."
                        ]}
                      />
                    )
                  },
                  {
                    title: "Areas for Improvement",
                    content: (
                      <BulletedList
                        items={[
                          "Gear Packing: Secure valuables during technical sections.",
                          "Hydration Strategies: Use ORS or electrolytes on longer treks.",
                          "Equipment Use: Promote walking poles for steep gradients."
                        ]}
                      />
                    )
                  }
                ]}
              />
            </>
          />
          <Section
            defaultChecked={false}
            title=<Title title="Conclusion" />
            content=<>
              <Paragraph
                text="The Baildara to Fenyadevi Ghat trek was a rewarding experience,
              offering challenges that tested our physical and mental endurance.
              The scenic trails, diverse flora, and panoramic views highlighted
              the timeless charm of the Sahyadri Hills."
              />
              <Paragraph
                text="This trek not only reinforced essential trekking skills but also
              deepened our appreciation for the wilderness. The lessons learned
              will undoubtedly serve as a foundation for future expeditions,
              ensuring safer and more fulfilling adventures ahead."
              />
            </>
          />
        </>
      />
    </div>
  );
};

export default BaildaraToFenyadeviGhat;
