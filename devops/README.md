#DevOps Environment

![DevOps Environment](https://github.com/IBCDBS/medchecker/blob/master/devops/medchecker_devops_overview.png)

##Infrastrucure
IBC regularly uses cloud services from a variety of vendors. Specifically for this prototype, MedChecker, we built on an Ubuntu virutal machine within Microsoft Azure. Microsoft Azure allows us to quickly build and replicate environments, while providing flexible redundancy and scalability options. 

##Local Development Envrionment

##Source Control



##Continous Integration

IBC leverages the Atlassian suite for most of its DevOps. Included in the suite is a product called Bamboo, which provides provides continuous integration, along with organizing automated builds, testing, and deployments within a single build plan/workflow. Bamboo used in conjunction with Jira, provides our team traceability from idea inception, to code deployment. 

##Configuration Management and Automated Deployment

Configuration management for MedChecker includes several components:

- Azure Portal

  - Initial virtual networks/cloud services/machines were created via the Azure portal. Once in use, snapshots and backups were scheduled and administered on a regular basis.

- Ansible
  - Ansible playbooks were developed to configure the base environments, including downloading/installing required packages, in preparation for MedChecker to be deployed.

- Bamboo, Grunt, Bower, NPM, and Maven
  - Bamboo is providing continuous integration for our project. Once it recognizes new code has been committed, it runs a series of tests, and if successful, will continue on to the build plan. The build plans leverages Grunt, Bower, and NPM for JavaScript, and Maven incorporates that into the overall build and deployment process. Leveraging these build plans allows us to consistently package and deploy MedChecker to the specified environment. 

##Performance Monitoring
IBC monitors their Microsoft Azure assets with New Relic. New Relic offers several products, but the one we use for server monitoring is New Relice Servers. This product easily integrates with our Azure portal, installs on each virtual machine in seconds, and provides almost instant status on our server's health, and potential issues. Alerts are configured to notify our DevOps team at various thresholds, to ensure our servers applications perform optimally. 

##Security Monitoring
