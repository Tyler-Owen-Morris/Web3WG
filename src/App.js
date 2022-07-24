import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <section class="header">
        <h1>Web3</h1>
        <h6>working group</h6>
        <div class="nav">
          <button class="btn">
            <a href="#">Web3?</a>
          </button>
          <button class="btn">
            <a href="#">About</a>
          </button>
          <button class="btn">
            <a href="#">Team</a>
          </button>
          <button class="btn">
            <a href="#">Contact</a>
          </button>
          <button class="btn">
            <a href="#">Videos</a>
          </button>
          <button class="btn">
            <a href="/jobs.html">Jobs</a>
          </button>
        </div>
      </section>
      <section class="transition-top"></section>
      <section class="container">
        <div class="jobs-content-block">
          <h2>Partnerships, Public Policy & Government Affairs</h2>
          <h3>About you</h3>
          <p>
            Passionate about policy and the new decentralized web? Have the
            drive to build a new organization and push it forward? Great at
            developing relationships with regulators and organizations to
            provide education on technology issues? Skilled at organizing events
            and creating educational materials?
          </p>
          <h3>The Job</h3>
          <p>
            You will establish and manage local, state, federal and global
            relationships that benefit the programs and policies of Web3 Working
            Group. Additionally, you’ll strategize ways to educate and achieve
            impact in areas of public policy and technology development that
            support the growth and adoption of web3, as well as organize events
            and create materials.
          </p>
          <h4>Responsibilities</h4>
          <p>
            You will be responsible for Web3WG’s presence on Capitol Hill and
            beyond. You’ll build and maintain relationships with regulators at
            government entities and agencies at the local, state, federal and
            global levels, as well as partnerships with organizations and
            associations. You will provide internal and external education about
            policy and regulations, maintain current knowledge of government
            changes and actions, and generate public support for relevant
            issues. Duties will range from social to legislative to
            administrative.
          </p>
          <ul class="a">
            <li>
              Research and monitor government activities that could affect the
              organization’s mission
            </li>
            <li>
              Track, report and analyze various legislative and regulatory
              actions
            </li>
            <li>
              Assist senior management and leadership with strategic planning
              for known and potential regulatory activities related to the
              organization
            </li>
            <li>
              Liaise with other organizations and collaborate with industry
              advocates to build areas of common interest
            </li>
            <li>
              Attend meetings and briefings to represent the organization as
              needed
            </li>
            <li>Draft/write monthly updates for internal and external use</li>
            <li>
              Establish and maintain CRM to track status of relationships with
              government and other organizations
            </li>
            <li>
              Introduce legislative and public policy changes that will support
              the growth and adoption of web3
            </li>
            <li>Perform other duties as required</li>
          </ul>
          <h4>What success looks like</h4>
          <ul class="a">
            <li>
              Regulators and their staff have a positive view of Web3WG, regard
              us as experts in the industry and look to us to provide
              educational resources
            </li>
            <li>
              Strong partnerships with other organizations, associations, and
              individuals in the industry
            </li>
            <li>
              Participate in, organize and execute successful events, content &
              materials which are highly regarded for their educational content
              and quality experience
            </li>
            <li>Build strong newsletter following</li>
          </ul>
          <h3>Requirements</h3>
          <ul class="a">
            <li>Strong government and organization contacts</li>
            <li>
              Strong understanding of web3 and familiarity with or ability to
              quickly learn about web3 issues like content moderation, node
              discovery & analytics.{" "}
            </li>
            <li>
              Verbal and written communication skills.
              <ul class="b">
                <li>
                  Ability to read, understand and clearly draft proposed
                  legislation and public comments, as well as prepare a variety
                  of written communications such as reports, testimony and
                  factsheets.
                </li>
                <li>
                  Skill in communicating effectively with all levels of
                  management, boards of directors and staff as well as external
                  individuals and groups.
                </li>
              </ul>
            </li>
            <li>
              Interpersonal and negotiation skills.
              <ul class="b">
                <li>
                  Demonstrated ability to ethically form and maintain
                  relationships with government officials and government
                  entities; ability to maintain respectful and appropriate
                  professional demeanor at all times.
                </li>
              </ul>
            </li>
            <li>
              Analytical and problem-solving skills.
              <ul class="b">
                <li>
                  Understanding of the interplay between proposed changes and
                  existing statutory or regulatory frameworks and how the
                  changes may affect the growth and adoption of web3.
                </li>
              </ul>
            </li>
            <li>
              Organizational skills
              <ul class="b">
                <li>
                  Ability to organize events, relationships with people and
                  organizations, and internal and external calendars.
                </li>
              </ul>
            </li>
            <li>Occasional travel required</li>
          </ul>
          <h3>About Web3 Working Group</h3>
          <p>
            Web3 Working Group is a 501(c)(3) nonprofit organization. Our
            purpose is to educate about web3 infrastructure and how it's
            distinct but adjacent to the cryptocurrency industry. We educate
            regulators and the public at-large about how web3 will permanently
            restore user control of cyberspace, replacing centralized control
            with transparent and permissionless protocols through incentives
            aligned with users.
          </p>
          <h3>What to expect during the interview process:</h3>
          <ul class="a">
            <li>Initial Zoom Interview</li>
            <li>First and Second Round Interview</li>
            <li>Reference Checks</li>
          </ul>
        </div>

        <div class="apply-form" id="apply">
          <h3>Apply for Job</h3>

          <form
            enctype="multipart/form-data"
            method="post"
            name="jobsubmissions"
            action="contact-form-handler.php"
          >
            <div class="grid-container">
              <div class="fname">
                <input
                  type="text"
                  id="fname"
                  name="fname"
                  placeholder="First name"
                />
              </div>
              <div class="lname">
                <input
                  type="text"
                  id="lname"
                  name="lname"
                  placeholder="Last name"
                />
              </div>
              <div class="phone">
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  placeholder="Phone (optional)"
                />
              </div>
              <div class="email">
                <input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="Email"
                />
              </div>

              <input
                name="upfile"
                type="file"
                id="fileElem"
                accept="application/pdf, application/x-iwork-pages-sffpages, application/vnd.apple.pages, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                onchange="handleFiles(this.files)"
              />
              <label class="button" id="fileupload" for="fileElem">
                Select Resume
              </label>
              <div class="cover-letter">
                <textarea
                  class="letter"
                  name="message"
                  placeholder="Cover Letter"
                ></textarea>
              </div>

              <div class="submit">
                <input type="submit" value="Submit Application" />
              </div>
            </div>
          </form>
        </div>
      </section>
      <section class="transition-bottom"></section>
      <section class="footer">
        <div class="footer-icons">
          <a href="https://twitter.com/web3wg/" target="_blank">
            <img src="svgs/brands/twitter.svg" class="svg" />
          </a>
          <a href="https://www.youtube.com/" target="_blank">
            <img src="svgs/brands/youtube.svg" class="svg" />
          </a>
          <a href="https://www.instagram.com/web3wg/" target="_blank">
            <img src="svgs/brands/instagram.svg" class="svg" />
          </a>
          <a href="https://www.linkedin.com" target="_blank">
            <img src="/svgs/brands/linkedin.svg" class="svg" />
          </a>
        </div>
        <div class="footer-text">&copy; Web3 Working Group 2022</div>
      </section>
    </div>
  );
}

export default App;
