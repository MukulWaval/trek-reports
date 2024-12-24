import React from "react";

const About: React.FC = () => {
  return (
    <div className="grid grid-rows-[auto_1fr_auto]  h-screen">
      <div className="w-full h-full flex flex-col items-center pr-5 pl-5">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 p-4">
          <h1 className="mt-4 text-5xl font-bold lg:text-center lg:col-start-2 sm:col-start-1 sm:text-left">
            About
          </h1>
        </div>

        <div className="join join-vertical w-full">
          {/* Who Am I Section */}
          <div className="collapse collapse-arrow join-item border-base-300 border">
            <input type="radio" name="about-accordion" defaultChecked />
            <div className="collapse-title text-xl font-medium">Who am I?</div>
            <div className="collapse-content">
              <p>
                I’m a passionate trekker with an insatiable love for the great
                outdoors. Over the years, I’ve explored breathtaking landscapes,
                climbed challenging peaks, and walked trails that tell stories
                of nature's magnificence. Each trek has been a journey of
                growth, discovery, and inspiration. Through this platform, I aim
                to bring my adventures to life and inspire others to step into
                the wilderness with confidence. Whether you’re a seasoned
                trekker or someone just starting, I believe my experiences can
                guide you on your journey.
              </p>
            </div>
          </div>

          {/* Why I Started Trek Reports Section */}
          <div className="collapse collapse-arrow join-item border-base-300 border">
            <input type="radio" name="about-accordion" />
            <div className="collapse-title text-xl font-medium">
              Why I Started Trek Reports
            </div>
            <div className="collapse-content">
              <p>
                Trekking is more than just a hobby—it’s a way of life. I started
                Trek Reports as a way to document my adventures and share the
                knowledge I’ve gained along the way. From choosing the right
                gear to navigating unpredictable trails, trekking is a blend of
                preparation and spontaneity. This website is my way of giving
                back to the trekking community. Here, you’ll find:
              </p>
              <ul className="list-inside list-disc">
                <li>Detailed trek reports with itineraries and tips.</li>
                <li>Trail insights to help you plan your trips.</li>
                <li>
                  Photos and stories that capture the magic of the trails.
                </li>
              </ul>
            </div>
          </div>

          {/* My Trekking Philosophy Section */}
          <div className="collapse collapse-arrow join-item border-base-300 border">
            <input type="radio" name="about-accordion" />
            <div className="collapse-title text-xl font-medium">
              My Trekking Philosophy
            </div>
            <div className="collapse-content">
              <p>
                For me, trekking isn’t just about reaching a destination; it’s
                about the journey—the people I meet, the lessons I learn, and
                the memories I create. Here’s what I live by:
              </p>
              <ul className="list-inside list-disc">
                <li>
                  <strong>Leave No Trace:</strong> Respecting nature is
                  paramount. I always ensure my treks have minimal environmental
                  impact.
                </li>
                <li>
                  <strong>Preparation is Key:</strong> A successful trek starts
                  with good planning, but adaptability is just as important.
                </li>
                <li>
                  <strong>Stay Curious:</strong> Every trail has a story, and I
                  love uncovering those hidden gems.
                </li>
              </ul>
            </div>
          </div>

          {/* My Vision for Trek Reports Section */}
          <div className="collapse collapse-arrow join-item border-base-300 border">
            <input type="radio" name="about-accordion" />
            <div className="collapse-title text-xl font-medium">
              My Vision for Trek Reports
            </div>
            <div className="collapse-content">
              <p>
                My vision is to make Trek Reports a trusted resource for anyone
                passionate about trekking. I want this website to be a space
                where adventurers can:
              </p>
              <ul className="list-inside list-disc">
                <li>Find reliable, first-hand information about treks.</li>
                <li>Share their own stories and inspire others.</li>
                <li>
                  Learn how to embark on safe, sustainable, and memorable
                  adventures.
                </li>
              </ul>
            </div>
          </div>

          {/* How You Can Join the Journey Section */}
          <div className="collapse collapse-arrow join-item border-base-300 border">
            <input type="radio" name="about-accordion" />
            <div className="collapse-title text-xl font-medium">
              How You Can Join the Journey
            </div>
            <div className="collapse-content">
              <p>
                I’d love for you to be part of this growing community! Here’s
                how you can connect:
              </p>
              <ul className="list-inside list-disc">
                <li>
                  Read the Reports: Explore my detailed trek guides and
                  itineraries.
                </li>
                <li>
                  Share Your Stories: Got an adventure of your own? Reach out to
                  share your experiences!
                </li>
                <li>
                  Follow Me: Stay updated with my latest treks and insights by
                  following on social media.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
