Prototype link - http://medchecker.info

To deliver our project, we identified IBC personnel with children to comprise our “User Community.”  Our prototype delivery team is led by our Product Manager, Courtney Bristow, an experienced agile delivery leader. Courtney was responsible for making any scope-related decisions about the end product, including technical trade-offs, what additional scope was needed to produce a minimum viable product (MVP), and what was acceptable to remove or delay given resource and time constraints. She attended every stand-up and planning session, and had a Product Owner Approval Sign-off task on each story that the team delivered. (a evidence:)

Additionally, we identified James Fintel as our Delivery Manager /Scrum Manager.   We made the corporate decision to focus our prototype development around a single agile team to show 18F how we operate within our IBC Agile Development and Innovation Lab.  We also identified six other key labor categories used as part of our agile team to deliver this project, while showing our IBC DevOps capabilities in a cost effective manner.  The complete roster of the team is included within our GitHub directory. (b:)

The agile team held focus groups with stakeholders and requirements brainstorming sessions with a large group within IBC to discuss where we could bring value to the consumer leveraging one of the datasets provided, ultimately building out the product backlog. We discussed many ideas and ultimately selected the presentation choices and data queries exhibited in MedChecker because of the relevance to our own lives as consumers and parents. Furthermore, as an additional source of “external feedback and testing,” the team leveraged our spouses, who were totally separate from this effort, but all part of the target user base, to use the application on both on their computers and mobile devices and provide any feedback. Our primary takeaway from this was that they would likely use a mobile device, given that they may be using it while in a store with a sick child, so we focused on ensuring that capability was functional. (c:)

Following the Human Centered Design Discover process, we simulated “going into the world” and asked our user community what their greatest fear was about administering drugs to their children.  Almost unanimously, users spoke of their concerns regarding side effects caused by those drugs.  As part of HCD Ideate, our prototype team held a series of brainstorming session to discuss how to help our user community alleviate their concerns related to side effects of drugs their children might take, coming up with two potential scenarios to explore that might resonate with our customer base.  Finally, as part of HCD Prototype, the IBC team decided to develop the MedChecker Application to provide an easy to use drug research tool. (d:)

Once project scope was confirmed, the team engaged our Visual Designer and Content Designer to create the MedChecker Style Guide. The team leveraged this style guide to ensure that colors, fonts, sizing, and components were all created within one common style and color pallet. In addition, the team chose to build the application using Bootstrap, and thus heavily leveraged its inherent pattern library. (e:)

Usability tests were conducted throughout the prototype development process in two different ways. First, the team had multiple potential end users review design templates and functionality samples for the core components of the application. These users included other IBC employees that were not part of the agile delivery team, as well as external users, typically family members of IBC employees. By conducting these usability tests frequently, the agile team was able to identify areas of improvement that could be incorporated within the current Sprint, or included in the backlog.
Second, our agile team included a Functional (Usability) Tester role. (f:)

To develop our MedChecker Application, the team leveraged a combination of agile scrum and kanban approaches. We conducted 3 sprints/iterations over the course of the RFQ timeline; however, at different points we chose to adjust planned sprint scope to work higher priority items based on product owner feedback/direction, as well as to use team member bandwidth to implement the next highest priority from the backlog. 

The team tracked all of our work in the JIRA ALM tool, which provided traceability and visibility to all work in progress as well as the backlog, and used Confluence as our project information repository, posting relevant documentation throughout the project lifecyle.  We conducted the typical agile ceremonies, including:
- Initial Backlog Creation/Backlog Grooming - including epics and stories, with initial prioritization;
- Sprint Planning - including sizing, scoping, and acceptance criteria creation;
- Daily Stand-up - discussed sprint progress and issues with each story or bug;
- Sprint Demo - reviewed the iteration's product with stakeholders; and
- Sprint Retrospective - assessed what went well and what could have gone better with the agile team, documented tangible actions to incorporate into the next sprint. (g:)

We also made the decision to ensure MedChecker leverages a combination of the popular mobile first framework Twitter Bootstrap 3 and the AngularJS library UI Bootstrap to enable its responsive design. As a result, MedChecker is able to provide a consistent user experience, across a variety of devices, while maintaining a single code base. (h:)

For MedChecker, we decided to leverage the following open source technologies/frameworks/libraries: Dev Tools used included Maven, Grunt, Bower, NPM; Backend used Spring Framework; Frontend used Ng Boilerplate, Angular UI Boostrap, Bootstrap 3, Smart-Table, D3. (I:)

IBC regularly uses cloud services from a variety of vendors. Specifically for this prototype, MedChecker, we built on an Ubuntu virtual machine within Microsoft Azure. Microsoft Azure allows us to quickly build and replicate environments, while providing flexible redundancy and scalability options. (j:)

We wanted to ensure MedChecker has unit tests automatically executed with each build. The JUnit framework is used to test Java components while Karma is used for testing the JavaScript. Testing for each build can be monitored within Bamboo. For Java, we conducted 4 unit tests which included 95% coverage.  For Javascript we conducted 28 unit tests which included 70% coverage. (k:)

IBC leverages the Atlassian suite for most of its DevOps. Included in the suite is a product called Bamboo, which provides provides continuous integration, along with organizing automated builds, testing, and deployments within a single build plan/workflow. Bamboo used in conjunction with Jira, provides our team traceability from idea inception, to code deployment. The prototype was built using an iterative and continuous delivery approach (3 mini-sprints were held), within a 7-calendar day iteration Each morning we conducted a 9:30 AM standup to discuss progress from the day before, clarified requirements, and addressed team issues/concerns.  In some cases, we moved items to the backlog and reprioritized based on confirmation with the product owner. (l:)

Within our Configuration management approach for MedChecker, it uses several components:
- Azure Portal-Initial virtual networks/cloud services/machines were created via the Azure portal. Once in use, snapshots and backups were scheduled and administered on a regular basis;
- Ansible-Ansible playbooks were developed to configure the base environments, including downloading/installing required packages, in preparation for MedChecker to be deployed; and
- Bamboo, Grunt, Bower, NPM, and Maven Bamboo is providing continuous integration for our project. Once it recognizes new code has been committed, it runs a series of tests, and if successful, will continue on to the build plan. The build plans leverages Grunt, Bower, and NPM for JavaScript, and Maven incorporates that into the overall build and deployment process. Leveraging these build plans allows us to consistently package and deploy MedChecker to the specified environment. (m:)

IBC monitors their Microsoft Azure assets with New Relic. New Relic offers several products, but the one we use for server monitoring is New Relic Servers. This product easily integrates with our Azure portal, installs on each virtual machine in seconds, and provides almost instant status on our server's health, and potential issues. Alerts are configured to notify our DevOps team at various thresholds, to ensure our servers applications perform optimally. (n:)

MedChecker has been deployed within a LXC container running on an Ubuntu 14.04 host virtual machine. (o:)

(p:)

MedChecker was developed using the following open source and open licensed technologies and frameworks, completely free of charge: Ubuntu 14.04; LXC; Tomcat; Apache; Java; Spring Framework; AngularJS; Bootstrap; Smart-Table; Spring Framework; Ng Boilerplate; Angular UI Boostrap; D3. (q:)


