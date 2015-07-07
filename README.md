#MedChecker

#####Prototype link - (https://medchecker.info)
 
To deliver our project, we identified IBC personnel with children to comprise our “User Community.”  Our prototype delivery team is led by our Product Manager, Courtney Bristow, an experienced agile delivery leader. Courtney was responsible for making any scope-related decisions about the end product, including technical trade-offs, what additional scope was needed to produce a Minimum Viable Product (MVP), and what was acceptable to remove or delay given resource and time constraints. She attended every stand-up and planning session, and had a Product Owner Approval Sign-off task on each story that the team delivered. 

######[a_evidence](https://github.com/IBCDBS/medchecker/tree/master/agile_project_docs#project-level-documentation)
 
Additionally, we identified James Fintel as our Delivery Manager /Scrum Manager.   We made the corporate decision to focus our prototype development around a single agile team to show how we operate within our IBC Agile Development and Innovation Lab.  We also identified seven other key labor categories used as part of our agile team to deliver this project (many individuals supported part time), while highlighting our IBC DevOps capabilities in a cost effective manner.  The complete roster of the team is included within our GitHub directory.
######[b_evidence](https://github.com/IBCDBS/medchecker/tree/master/agile_project_docs#team-roles-and-contact-list)
 
The agile team held focus groups with stakeholders and requirements brainstorming sessions with a large group within IBC to discuss where we could bring value to the consumer leveraging one of the datasets provided, ultimately building out the product backlog. We discussed many ideas and ultimately selected the presentation choices and data queries exhibited in MedChecker because of the relevance to our own lives as consumers and parents. Furthermore, as an additional source of “external feedback and testing,” the team leveraged our spouses, who were totally separate from this effort, but all part of the target user base, to use the application on both on their computers and mobile devices and provide any feedback. Our primary takeaway from this was that they would likely use a mobile device, given that they may be using it while in a store with a sick child, so we focused on ensuring that capability was functional.
######[c_evidence](https://github.com/IBCDBS/medchecker/blob/master/agile_project_docs/FocusGroupNotes.md) 
 
Following Human Centered Design (HCD) Discover, we simulated “going into the world” and asked our user community, through an internal focus group, what their greatest fear was about administering drugs to their children.  Almost unanimously, our users spoke of their concerns regarding side effects caused by those drugs.  As part of HCD Ideate, our prototype team held a series of brainstorming session to discuss how to help our user community alleviate their concerns related to side effects of drugs their children might take, coming up with two potential scenarios to explore that might resonate with our customer base.  Finally, as part of HCD Prototype, the IBC team decided to develop the MedChecker Application to provide an easy to use drug research tool per our user analysis. (d_evidence)
######[d_evidence](https://github.com/IBCDBS/medchecker/tree/master/agile_project_docs#initial-scope-discussion) 
 
Once project scope was confirmed, the team engaged our Visual Designer and Content Designer to create the MedChecker Style Guide. The team leveraged this style guide to ensure that colors, fonts, sizing, and components were all created within one common style and color pallet. In addition, the team chose to build the application using Bootstrap, and thus heavily leveraged its inherent pattern library. (e_evidence)
######[e_evidence](https://github.com/IBCDBS/medchecker/blob/master/agile_project_docs/MedCheck_Style_Guide.jpg) 
 
Usability tests were conducted throughout the prototype development process in two different ways. First, the team had multiple potential end users review design templates and functionality samples for the core components of the application. These users included other IBC employees that were not part of the agile delivery team, as well as external users, typically family members of IBC employees. By conducting these usability tests frequently, the agile team was able to identify areas of improvement that could be incorporated within the current Sprint, or included in the backlog. 
Second, our agile team included a Functional (Usability) Tester role who was responsible for usability testing of the MedChecker Application. 
######[f_evidence](https://github.com/IBCDBS/medchecker/blob/master/testing/usability-testing.md#usability-testing) 
 
To develop our MedChecker Application, the team leveraged a combination of agile scrum and kanban approaches. The prototype was built using an iterative and continuous delivery approach, with the team conducting 4 mini-sprints during the RFQ timeline. Each morning we conducted a 9:30 AM standup to discuss progress from the day before, clarified requirements, and addressed team issues/concerns.  In some cases, we moved items to the backlog and reprioritized based on confirmation with the product owner to work a higher priority item, as well as to use team member bandwidth to implement the next highest priority from the backlog.   
 
The team tracked all of our work in the JIRA ALM tool by creating Epics, Stories, sub-tasks and bugs, setting their associated priority to drive current sprint and future work.  Using JIRA provided real-time traceability and visibility to all work in progress as well as the backlog, and with the Bamboo integration, we were able to link code check-in to JIRA stories.  We also used Confluence as our project information repository, posting relevant documentation throughout the project lifecycle.  We conducted the typical agile ceremonies, including: 
Initial Backlog Creation/Backlog Grooming - including epics and stories, with initial prioritization; 
Sprint Planning - including sizing, scoping, acceptance criteria creation and story/bug ownership; 
Daily Stand-up - discussed sprint progress and issues with each story or bug; 
Sprint Demo - reviewed the iteration's product with stakeholders; and 
Sprint Retrospective - assessed what went well and what could have gone better with the agile team, documented tangible actions to incorporate into the next sprint. 
######[g_evidence](https://github.com/IBCDBS/medchecker/tree/master/agile_project_docs) 
 
Based on user requests around mobility, we made the decision to ensure MedChecker leverages a combination of the popular mobile first framework Twitter Bootstrap 3 and the AngularJS library UI Bootstrap to enable its responsive design. As a result, MedChecker is able to provide a consistent user experience, across a variety of devices, while maintaining a single code base. 

######[h_evidence](https://github.com/IBCDBS/medchecker/blob/master/testing/crossbrowser-testing.md#cross-browser-testing)
 
In developing MedChecker, we leveraged the following open source technologies/frameworks/libraries: Development Tools used included Maven, Grunt, Bower, NPM; Backend Tools used included Spring Framework; Frontend Tools used Ng Boilerplate, Angular UI Boostrap, Bootstrap 3, Smart-Table, D3. 
######[i_evidence](https://github.com/IBCDBS/medchecker/blob/master/LICENSE.md#license-summary-of-included-technologies) 
 
IBC regularly uses cloud services from a variety of vendors. Specifically for MedChecker, we built on an Ubuntu virtual machine within Microsoft Azure. Microsoft Azure allows us to quickly build and replicate environments, while providing flexible redundancy and scalability options. 
######[j_evidence](https://github.com/IBCDBS/medchecker/tree/master/devops#infrastructure-overview) 
 
We wanted to ensure MedChecker unit testing was automatically executed with each build to ensure constant build quality.  Within our project, the JUnit framework is used to test Java components and Karma for testing JavaScript. Testing for each build can be monitored within Bamboo. For Java, we conducted 9 unit tests which included 95% coverage.  For Javascript we conducted 44 unit tests which included 70% coverage. 
######[k_evidence](https://github.com/IBCDBS/medchecker/blob/master/testing/unit-testing.md)
 
IBC leverages the Atlassian suite for most of its DevOps and CI activities. Included in our installation is the Bamboo product, which provides continuous integration, along with organizing automated builds, testing, and deployments within a single build plan/workflow. We configured Bamboo in conjunction with JIRA to show code check-in by User Story # within our project dashboard, providing our team traceability from idea inception to code deployment.  
 
In addition, Bamboo, Grunt, Bower, NPM, and Maven Bamboo are together providing continuous integration for our project. Once it recognizes new code has been committed, it runs a series of tests, and if successful, will continue on to the build plan and deploy to staging once complete.
######[l_evidence](https://github.com/IBCDBS/medchecker/tree/master/devops#continous-integration)

Within our Configuration management approach for MedChecker, we use several components: 
Azure Portal - Initial virtual networks/cloud services/machines were created via the Azure portal. Once in use, snapshots and backups were scheduled and administered on a regular basis; 
Ansible - Ansible playbooks were developed to configure the base environments, including downloading/installing required packages, in preparation for MedChecker to be deployed; and 
The build plans take the recently committed code and incorporate that into the overall build and deployment process. Leveraging these build plans allows us to consistently package and deploy MedChecker to the specified environment. 
######[m_evidence](https://github.com/IBCDBS/medchecker/tree/master/devops#configuration-management-and-automated-deployment)

IBC monitors their Microsoft Azure assets with New Relic. New Relic offers several products, but the one we use for server monitoring is New Relic Servers. This product easily integrates with our Azure portal, installs on each virtual machine in seconds, and provides almost instant status on our server's health, and potential issues. Alerts are configured to notify our DevOps team at various thresholds, to ensure our servers applications perform optimally. 
######[n_evidence](https://github.com/IBCDBS/medchecker/tree/master/devops#security-monitoring) 
 
MedChecker has been deployed within a LXC container running on an Ubuntu 14.04 host virtual machine. 
######[o_evidence](https://github.com/IBCDBS/medchecker/blob/master/devops/iaas/medchecker_network_topology.png) 
 
IBC has built MedChecker as an open source product that can be improved upon, not only by IBC staff, but other developers that are interested in further developing our application.  Instructions for how a developer can be involved with MedChecker are included in our INSTALL.md file. 
######[p_evidence](https://github.com/IBCDBS/medchecker/blob/master/devops/REST_api.jpg)
 
MedChecker was developed using the following open source and open licensed technologies and frameworks, completely free of charge: Ubuntu 14.04; LXC; Tomcat; Apache; Java; Spring Framework; AngularJS; Bootstrap; Smart-Table; Spring Framework; Ng Boilerplate; Angular UI Bootstrap; D3. 
######[q_evidence](https://github.com/IBCDBS/medchecker/blob/master/LICENSE.md#license-summary-of-included-technologies)


