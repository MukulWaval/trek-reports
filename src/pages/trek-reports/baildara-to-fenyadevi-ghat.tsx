import React from "react";
import Paragraph from "../../components/Paragraph";
import Accordion from "../../components/Accordion";
import NumberedList from "../../components/NumberedList";
import Carousel from "../../components/Carousel";
import BulletedList from "../../components/BulletedList";
import Card from "../../components/Card";
import Section from "../../components/Section";
import Table from "../../components/Table";
import AccordionItem from "../../components/AccordionItem";
import CarouselItem from "../../components/CarouselItem";

const BaildaraToFenyadeviGhat: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col items-center px-0 lg:px-10">
      <Card
        imgSrc="https://i.postimg.cc/3xgTfXQn/2.jpg"
        alt=""
        title="Baildara to Fenyadevi Ghat Trek Report"
      >
        <Section title="Basic Info.">
          <Table>
            <tr>
              <th>Date</th>
              <td>15 December 2024</td>
            </tr>
            <tr>
              <th>Terk Duration</th>
              <td>6 Hours 18 Minutes</td>
            </tr>
            <tr>
              <th>Start and End Location</th>
              <td>Savale, Maval Taluka, Pune - 410401</td>
            </tr>
            <tr>
              <th>Organised By</th>
              <td>GGIM Udaan</td>
            </tr>
          </Table>
        </Section>
        <Section title="Objective">
          <Paragraph>
            The primary objective of the trek was to navigate the rugged terrain
            of the Sahyadri Hills, honing essential trekking skills such as
            navigation, teamwork, and terrain management, while observing the
            unique biodiversity of the Western Ghats.
          </Paragraph>
        </Section>
        <Section title="Team Details">
          <Table>
            <tr>
              <th>Participants</th>
              <td>9</td>
            </tr>
            <tr>
              <th>Trek Leader</th>
              <td>
                Vivek Shivade{" "}
                <span className="badge">GGIM Udaan Instructor</span>
              </td>
            </tr>
            <tr>
              <th>Instructors</th>
              <td>
                Anushka Deo <span className="badge">GGIM Udaan Instructor</span>
              </td>
            </tr>
          </Table>
          <Paragraph>
            The trek followed a participant-centered approach, with the team
            managing route planning, gear handling, and decision-making under
            the guidance of the instructors.
          </Paragraph>
        </Section>
        <Section title="Gear Checklist">
          <Accordion>
            <AccordionItem title="Attire">
              <NumberedList>
                <li>Full-sleeve clothing</li>
                <li>Trekking shoes</li>
              </NumberedList>
            </AccordionItem>
            <AccordionItem title="Personal Gear">
              <NumberedList>
                <li>3 liters of water</li>
                <li>Packed breakfast and lunch</li>
                <li>Daypack</li>
                <li>Extra set of clothing</li>
                <li>Sun cap</li>
                <li>Rainwear Notebook and pen</li>
              </NumberedList>
            </AccordionItem>
            <AccordionItem title="Group Gear">
              <NumberedList>
                <li>
                  First aid kit (containing antibiotics, painkillers, cotton,
                  crepe bandage, and scissors)
                </li>
                <li>Walkie-talkies</li>
                <li>Dynamic rope</li>
              </NumberedList>
            </AccordionItem>
          </Accordion>
        </Section>
        <Section title="Route Overview">
          <Table>
            <tr>
              <th>Starting Point</th>
              <td>Vitthalvadi Village (18.95705° N, 73.48300° E)</td>
            </tr>
            <tr>
              <th>Ending Point</th>
              <td>Fenyadevi Ghat (18.95705° N, 73.48300° E)</td>
            </tr>
            <tr>
              <th>Distance Covered</th>
              <td>9.5 km</td>
            </tr>
            <tr>
              <th>Elevation Range</th>
              <td>~700 m to ~450 m</td>
            </tr>
            <tr>
              <th>Notable Landmarks</th>
              <td>Kalakrai Village and Baildara Trail</td>
            </tr>
          </Table>
        </Section>
        <Section title="Route Description">
          <Paragraph>
            The trek began in Vitthalvadi Village, where we were greeted by the
            sight of Kothaligad Fort in the distance. The trail initially led us
            up a hillock offering panoramic views of Peth village. Moving
            westward, we entered the Baildara Trail, characterized by dense
            karvi shrubs and unmarked paths. The trail descended sharply to
            Kalakrai Village, where we paused for a short break.
          </Paragraph>
          <Paragraph>
            From Kalakrai, the route transitioned to the Fenyadevi Ghat Trail,
            featuring steep ascents, dramatic rock formations, and ancient stone
            relics. The final stretch involved navigating narrow footpaths back
            to Vitthalvadi Village, concluding the trek.
          </Paragraph>
        </Section>
        <Section title="Photos">
          <Carousel>
            <CarouselItem
              src="https://i.postimg.cc/3xgTfXQn/2.jpg"
              alt="Kothaligad and its base village Peth"
            />
            <CarouselItem
              src="https://i.postimg.cc/Bv4Grjqs/5.jpg"
              alt="A house in Kalakrai village"
            />
            <CarouselItem
              src="https://i.postimg.cc/pr4H4kd1/1.jpg"
              alt="View from Vitthalvadi"
            />
          </Carousel>
        </Section>
        <Section title="Trail Guide">
          <Accordion>
            <AccordionItem title="Starting Point: Vitthalvadi Village">
              <NumberedList>
                <li>
                  Begin at Vitthalvadi village (may appear as Methalvadi on
                  maps).
                </li>
                <li>
                  Cross a small hillock to reach the start of the Baildara
                  trail.
                </li>
                <li>
                  From the hillock, Kothaligad and its base village Peth can be
                  sighted.
                </li>
              </NumberedList>
            </AccordionItem>
            <AccordionItem title="Baildara Trail (to Kalakrai)">
              <NumberedList>
                <li>
                  Follow the Baildara trail, which is narrow and overgrown with
                  karvi.
                </li>
                <li>Descend from 700m to 450m to reach a four-way junction.</li>
                <li>
                  Turn left (westward) to continue towards Kalakrai village. (Do
                  not take the straight-down path to a small village in Raigad
                  district.) (Turn right to visit an old well.)
                </li>
              </NumberedList>
            </AccordionItem>
            <AccordionItem title="Kalakrai to Vitthalvadi via Fenyadevi Ghat">
              <NumberedList>
                <li>
                  From Kalakrai, head westward along the Fenyadevi ghat trail.
                </li>
                <li>
                  The trail eventually makes a sharp southward turn. Look for a
                  stone relic under a tree at this point.
                </li>
                <li>
                  Continue to the Fenyadevi ghat, which is wide and rocky.
                </li>
                <li>
                  Look for another holy relic carved in stone along the way.
                </li>
                <li>
                  Climb 200m to reach the flatland at the top of the ghat.
                </li>
                <li>
                  From the flatland, follow the footpath to return to
                  Vitthalvadi village.
                </li>
              </NumberedList>
            </AccordionItem>
          </Accordion>
        </Section>
        <Section title="Terrain and Biodiversity">
          <Accordion>
            <AccordionItem title="Terrain">
              <BulletedList>
                <li>
                  <strong>Steep Descents:</strong> Gravel-strewn paths and rocky
                  patches required careful footing.
                </li>
                <li>
                  <strong>Narrow Trails:</strong> Overgrown with vegetation,
                  these sections tested our navigation skills.
                </li>
                <li>
                  <strong>Ridge Walks:</strong> Open ridges offered stunning
                  views of the surrounding peaks and valleys.
                </li>
              </BulletedList>
            </AccordionItem>
            <AccordionItem title="Biodiversity Highlights">
              <BulletedList>
                <li>
                  <strong>Tree Canopy:</strong> Dominated by Ain (
                  <i>Terminalia elliptica</i>) and Hirda (
                  <i>Terminalia chebula</i>).
                </li>
                <li>
                  <strong>Shrubs:</strong> Dense growth of karvi (
                  <i>Strobilanthes callosus</i>), a unique species known for its
                  7-year blooming cycle.
                </li>
                <li>
                  <strong>Ground Cover:</strong> Seasonal grasses and ferns
                  thriving in the post-monsoon landscape.
                </li>
              </BulletedList>
            </AccordionItem>
          </Accordion>
        </Section>
        <Section title="Activities and Learning">
          <Accordion>
            <AccordionItem title="Navigation Challenges">
              <Paragraph>
                The team faced a significant challenge during the descent from
                Baildara, where a missed junction delayed progress.
              </Paragraph>
            </AccordionItem>
            <AccordionItem title="Rope Coiling Drill">
              <Paragraph>
                The trek included a session on dynamic rope coiling, focusing on
                proper storage and rapid deployment. This practical activity
                enhanced our technical preparedness for future expeditions.
              </Paragraph>
            </AccordionItem>
            <AccordionItem title="Independent Trekking">
              <Paragraph>
                Participants were encouraged to lead sections of the trail,
                fostering self-reliance and decision-making in real-time
                scenarios.
              </Paragraph>
            </AccordionItem>
          </Accordion>
        </Section>
        <Section title="Challenges Faced">
          <BulletedList>
            <li>
              <strong>Navigation Errors:</strong> A missed junction delayed
              progress.
            </li>
            <li>
              <strong>Loose Terrain:</strong> Steep descents with loose gravel
              required caution.
            </li>
            <li>
              <strong>Gear Mismanagement:</strong> A participant lost their
              phone on a technical section.
            </li>
            <li>
              <strong>Dehydration:</strong> Mild dehydration among participants
              despite winter conditions.
            </li>
          </BulletedList>
        </Section>
        <Section title="Reflections and Recommendations">
          <Accordion>
            <AccordionItem title="Key Successes">
              <BulletedList>
                <li>Effective teamwork in overcoming challenges.</li>
                <li>Valuable technical rope coiling session.</li>
                <li>
                  Immersive experience of Sahyadri’s beauty and biodiversity.
                </li>
              </BulletedList>
            </AccordionItem>
            <AccordionItem title="Areas for Improvement">
              <BulletedList>
                <li>
                  Gear Packing: Secure valuables during technical sections.
                </li>
                <li>
                  Hydration Strategies: Use ORS or electrolytes on longer treks.
                </li>
                <li>
                  Equipment Use: Promote walking poles for steep gradients.
                </li>
              </BulletedList>
            </AccordionItem>
          </Accordion>
        </Section>
        <Section title="Conclusion">
          <Paragraph>
            The Baildara to Fenyadevi Ghat trek was a rewarding experience,
            offering challenges that tested our physical and mental endurance.
            The scenic trails, diverse flora, and panoramic views highlighted
            the timeless charm of the Sahyadri Hills.
          </Paragraph>
          <Paragraph>
            This trek not only reinforced essential trekking skills but also
            deepened our appreciation for the wilderness. The lessons learned
            will undoubtedly serve as a foundation for future expeditions,
            ensuring safer and more fulfilling adventures ahead."
          </Paragraph>
        </Section>
      </Card>
    </div>
  );
};

export default BaildaraToFenyadeviGhat;
