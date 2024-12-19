import React from "react";
import Divider from "../../components/Divider";

const test: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col items-center px-0 lg:px-10">
      <div className="card w-full bg-base-100 shadow-2xl">
        <figure>
          <img
            src="https://i.postimg.cc/3xgTfXQn/2.jpg"
            alt="Kothaligad and its base village Peth"
            className="h-full w-full object-cover"
          />
        </figure>
        <h1 className="text-2xl font-bold mt-5 mb-2 px-3 lg:text-5xl lg:px-10 lg:mb-10">
          Baildara to Fenyadevi Ghat Trek Report
        </h1>
        <div className="card-body">
          <div>
            <table className="table table-compact table-zebra w-full">
              <tbody>
                <tr>
                  <th>Date</th>
                  <td>15 December 2024</td>
                </tr>
                <tr>
                  <th>Duration</th>
                  <td>6 Hours 18 Minutes</td>
                </tr>
                <tr>
                  <th>Location</th>
                  <td>Savale, Maval Taluka, Pune - 410401</td>
                </tr>
                <tr>
                  <th>Organised By</th>
                  <td>GGIM</td>
                </tr>
              </tbody>
            </table>
          </div>
          <Divider />
          <div>
            <h2 className="card-title font-semibold">Objective</h2>
            <p className="mt-2">
              The primary objective of the trek was to navigate the rugged
              terrain of the Sahyadri Hills, honing essential trekking skills
              such as navigation, teamwork, and terrain management, while
              observing the unique biodiversity of the Western Ghats.
            </p>
          </div>
          <Divider />
          <div>
            <h2 className="card-title font-semibold">Team Details</h2>
            <div className="overflow-x-auto">
              <table className="table table-compact table-zebra w-full">
                <tbody>
                  <tr>
                    <th>Participants</th>
                    <td>9</td>
                  </tr>
                  <tr>
                    <th>Trek Leader</th>
                    <td>Vivek Shivade</td>
                  </tr>
                  <tr>
                    <th>Instructors</th>
                    <td>Anushka</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-2">
              The trek followed a participant-centered approach, with the team
              managing route planning, gear handling, and decision-making under
              the guidance of the instructors.
            </p>
          </div>
          <Divider />
          <div>
            <h2 className="card-title font-semibold">Gear Checklist</h2>
            <h3 className="font-medium mt-2">Personal Gear:</h3>
            <ul className="list-disc list-inside">
              <li>3 liters of water</li>
              <li>Packed breakfast and lunch</li>
              <li>Daypack</li>
              <li>Extra set of clothing</li>
              <li>Sun cap</li>
              <li>Rainwear</li>
              <li>Notebook and pen</li>
            </ul>
            <h3 className="font-medium mt-4">Group Gear:</h3>
            <ul className="list-disc list-inside">
              <li>
                First aid kit (containing antibiotics, painkillers, cotton,
                crepe bandage, and scissors)
              </li>
              <li>Walkie-talkies</li>
              <li>Dynamic rope</li>
              <li>ORS packets</li>
            </ul>
          </div>
          <Divider />
          <div>
            <h2 className="card-title font-semibold">Route Overview</h2>
            <div className="overflow-x-auto">
              <table className="table table-compact table-zebra w-full">
                <tbody>
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
                </tbody>
              </table>
            </div>
          </div>
          <Divider />
          <div>
            <h2 className="card-title font-semibold">Route Description</h2>
            <p>
              The trek began in Vitthalvadi Village, where we were greeted by
              the sight of Kothaligad Fort in the distance. The trail initially
              led us up a hillock offering panoramic views of Peth village.
              Moving westward, we entered the <strong>Baildara Trail</strong>,
              characterized by dense karvi shrubs and unmarked paths. The trail
              descended sharply to Kalakrai Village, where we paused for a short
              break.
            </p>
            <p>
              From Kalakrai, the route transitioned to the{" "}
              <strong>Fenyadevi Ghat Trail</strong>, featuring steep ascents,
              dramatic rock formations, and ancient stone relics. The final
              stretch involved navigating narrow footpaths back to Vitthalvadi
              Village, concluding the trek.
            </p>
          </div>
          <Divider />
          <div>
            <h2 className="card-title font-semibold">Photos</h2>
            <div className="carousel carousel-vertical rounded-box h-96">
              <div className="carousel-item h-full">
                <img
                  src="https://i.postimg.cc/3xgTfXQn/2.jpg"
                  alt="Kothaligad and its base village Peth"
                  className="rounded-box object-contain w-full h-full"
                />
              </div>
              <div className="carousel-item h-full">
                <img
                  src="https://i.postimg.cc/Bv4Grjqs/5.jpg"
                  alt="A house in Kalakrai village"
                  className="rounded-box object-contain w-full h-full"
                />
              </div>
              <div className="carousel-item h-full">
                <img
                  src="https://i.postimg.cc/pr4H4kd1/1.jpg"
                  alt="View from Vitthalvadi"
                  className="rounded-box object-contain w-full h-full"
                />
              </div>
            </div>
          </div>
          <Divider />
          <div>
            <h2 className="card-title font-semibold">Trail Guide</h2>
            <ol className="list-decimal space-y-2 pl-6">
              <li>
                <strong>Starting Point: Vitthalvadi Village</strong>
                <ul className="list-disc space-y-1 pl-4">
                  <li>
                    Begin at Vitthalvadi village (may appear as Methalvadi on
                    maps).
                  </li>
                  <li>
                    Cross a small hillock to reach the start of the Baildara
                    trail.
                  </li>
                  <li>
                    From the hillock, Kothaligad and its base village Peth can
                    be sighted.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Baildara Trail (to Kalakrai)</strong>
                <ul className="list-disc space-y-1 pl-4">
                  <li>
                    Follow the Baildara trail, which is narrow and overgrown
                    with karvi.
                  </li>
                  <li>
                    Descend from 700m to 450m to reach a four-way junction.
                  </li>
                  <li>
                    Turn left (westward) to continue towards Kalakrai village.
                    <ul className="list-square space-y-1 pl-4">
                      <li>
                        Do not take the straight-down path to a small village in
                        Raigad district.
                      </li>
                      <li>Turn right to visit an old well.</li>
                    </ul>
                  </li>
                  <li>The trail widens as you proceed westward.</li>
                  <li>
                    Upon reaching Kalakrai, this marks the halfway point—take a
                    short break here.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Kalakrai to Vitthalvadi via Fenyadevi Ghat</strong>
                <ul className="list-disc space-y-1 pl-4">
                  <li>
                    From Kalakrai, head westward along the Fenyadevi ghat trail.
                  </li>
                  <li>
                    The trail eventually makes a sharp southward turn. Look for
                    a stone relic under a tree at this point.
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
                </ul>
              </li>
            </ol>
          </div>
          <Divider />
          <div>
            <h2 className="card-title font-semibold">
              Terrain and Biodiversity
            </h2>
            <h3 className="font-medium mt-2">Terrain:</h3>
            <ul className="list-disc list-inside">
              <li>
                Steep Descents: Gravel-strewn paths and rocky patches required
                careful footing.
              </li>
              <li>
                Narrow Trails: Overgrown with vegetation, these sections tested
                our navigation skills.
              </li>
              <li>
                Ridge Walks: Open ridges offered stunning views of the
                surrounding peaks and valleys.
              </li>
            </ul>
            <h3 className="font-medium mt-2">Biodiversity Highlights:</h3>
            <ul className="list-disc list-inside">
              <li>
                Tree Canopy: Dominated by Ain (<i>Terminalia elliptica</i>) and
                Hirda (<i>Terminalia chebula</i>).
              </li>
              <li>
                Shrubs: Dense growth of karvi (<i>Strobilanthes callosus</i>), a
                unique species known for its 7-year blooming cycle.
              </li>
              <li>
                Ground Cover: Seasonal grasses and ferns thriving in the
                post-monsoon landscape.
              </li>
            </ul>
          </div>
          <Divider />
          <div>
            <h2 className="card-title font-semibold">
              Activities and Learning
            </h2>
            <h3 className="font-medium mt-2">Navigation Challenges:</h3>
            <p>
              The team faced a significant challenge during the descent from
              Baildara, where a missed junction delayed progress.
            </p>
            <h3 className="font-medium mt-2">Rope Coiling Drill:</h3>
            <p>
              The trek included a session on dynamic rope coiling, focusing on
              proper storage and rapid deployment. This practical activity
              enhanced our technical preparedness for future expeditions.
            </p>
            <h3 className="font-medium mt-2">Independent Trekking:</h3>
            <p>
              Participants were encouraged to lead sections of the trail,
              fostering self-reliance and decision-making in real-time
              scenarios.
            </p>
          </div>
          <Divider />
          <h2 className="card-title font-semibold">Challenges Faced</h2>
          <ul className="list-disc list-inside mt-2">
            <li>Navigation Errors: A missed junction delayed progress.</li>
            <li>
              Loose Terrain: Steep descents with loose gravel required caution.
            </li>
            <li>
              Gear Mismanagement: A participant lost their phone on a technical
              section.
            </li>
            <li>
              Dehydration: Mild dehydration among participants despite winter
              conditions.
            </li>
          </ul>
          <Divider />
          <div>
            <h2 className="card-title font-semibold">
              Reflections and Recommendations
            </h2>
            <h3 className="font-medium mt-2">Key Successes:</h3>
            <ul className="list-disc list-inside">
              <li>Effective teamwork in overcoming challenges.</li>
              <li>Valuable technical rope coiling session.</li>
              <li>
                Immersive experience of Sahyadri’s beauty and biodiversity.
              </li>
            </ul>
            <h3 className="font-medium mt-4">Areas for Improvement:</h3>
            <ul className="list-disc list-inside">
              <li>Gear Packing: Secure valuables during technical sections.</li>
              <li>
                Hydration Strategies: Use ORS or electrolytes on longer treks.
              </li>
              <li>Equipment Use: Promote walking poles for steep gradients.</li>
            </ul>
          </div>
          <Divider />
          <div>
            <h2 className="card-title font-semibold">Conclusion</h2>
            <p>
              The Baildara to Fenyadevi Ghat trek was a rewarding experience,
              offering challenges that tested our physical and mental endurance.
              The scenic trails, diverse flora, and panoramic views highlighted
              the timeless charm of the Sahyadri Hills.
            </p>
            <p>
              This trek not only reinforced essential trekking skills but also
              deepened our appreciation for the wilderness. The lessons learned
              will undoubtedly serve as a foundation for future expeditions,
              ensuring safer and more fulfilling adventures ahead.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default test;
