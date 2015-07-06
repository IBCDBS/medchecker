#Infrastructure Overview

![Infrastructure Overview](https://github.com/IBCDBS/medchecker/blob/master/devops/iaas/medchecker_network_topology.png)

##Infrastrucure
IBC regularly uses cloud services from a variety of vendors. Specifically for this prototype, MedChecker, we built on an Ubuntu virutal machine within Microsoft Azure. Microsoft Azure allows us to quickly build and replicate environments, while providing flexible redundancy and scalability options.

##Configuration Management and Automated Deployment

Configuration management for MedChecker includes several components:

####Azure Portal

- Initial virtual networks/cloud services/machines were created via the Azure portal. Once in use, snapshots and backups were scheduled and administered on a regular basis.
  - [Azure Recovery Services](https://github.com/IBCDBS/medchecker/blob/master/devops/iaas/medchecker_backup.png)
  - [Azure Snapshots](https://github.com/IBCDBS/medchecker/blob/master/devops/iaas/medchecker_snapshots.png)


####Ansible

- IBC used ansible for the configration of its virtual machines, including downloading/installing required packages, in preparation for MedChecker to be deployed.
  - [Ansible Tower Job Summary](https://github.com/IBCDBS/medchecker/blob/master/devops/medchecker_ansibletower.png)
  
####Bamboo, Grunt, Bower, NPM, and Maven
- As part of IBC DevOps process, there are several configurations that occur with each automated build.  Our Bamboo server is used to orchestrate our build process, which runs with the assistance of Grunt, Bower, NPM, and Maven.

##Performance Monitoring
IBC monitors their Microsoft Azure assets with New Relic. New Relic offers several products, but the one we use for server monitoring is New Relice Servers. This product easily integrates with our Azure portal, installs on each virtual machine in seconds, and provides almost instant status on our server's health, and potential issues. Alerts are configured to notify our DevOps team at various thresholds, to ensure our servers applications perform optimally.
  - [NewRelic Summary Report](https://github.com/IBCDBS/medchecker/blob/master/devops/performance/performance_monitoring_newrelic.jpg)

##Security Monitoring
IBC uses CloudFlare for many of its websites and web applications.  CloudFlare provides many benefits, including its ability to actively monitor and protect a website from a wide variet of threats and security risks.
  - [CloudFlare Summary Report](https://github.com/IBCDBS/medchecker/blob/master/devops/security/medchecker_cloudflare.jpg)

#DevOps Overview

![DevOps Environment](https://github.com/IBCDBS/medchecker/blob/master/devops/iaas/medchecker_devops_overview.png)

IBC leverages the Atlassian suite for most of its DevOps.  Tools used for this effort inlude:
- Jira (User story management and issue tracking)
- Conflucence (Team collaboration and system documentation)
- Fisheye (Source control)
- Bamboo (Continuous integration and build/deployment services)
- Crucible (Peer code review)


##Source Control

IBC uses Atlassian Fisheye to provide visibility into project sourcecode revision history within it's internal Git server.
- [Fisheye Repository](https://github.com/IBCDBS/medchecker/blob/master/devops/ci/fisheye_source_control.png)

##Continous Integration

Bamboo is atlassian's build server which provides provides continuous integration, along with organizing automated builds, testing, and deployments within a single build plan/workflow. Bamboo used in conjunction with Jira, provides our team traceability from idea inception, to code deployment. 

####Bamboo, Grunt, Bower, NPM, and Maven

- Bamboo is providing continuous integration for our project. Once it recognizes new code has been committed, it runs a series of tests, and if successful, will continue on to the build plan. The build plans leverages Grunt, Bower, and NPM for JavaScript, and Maven incorporates that into the overall build and deployment process. Leveraging these build plans allows us to consistently package and deploy MedChecker to the specified environment. 
  - [Build Dashboard](https://github.com/IBCDBS/medchecker/blob/master/devops/ci/Bamboo%20Build%20Dashboard.png)
  - [Build Summary](https://github.com/IBCDBS/medchecker/blob/master/devops/ci/medchecker_build_summary.png)
  - [Build Log](https://github.com/IBCDBS/medchecker/blob/master/devops/ci/MedChecker%20Bamboo%20Build%20Log_CI.png)

