#Building Medchecker 

##Prerequisites: 
First, ensure that java 1.8, maven 3, npm and bower are installed on the machine where you wish to build Medchecker and that you have cloned the repository to an appropriate directory.  Ensure that any tomcat servers are tomcat version 7.

###Setting Up Maven to Deploy to Tomcat:   
Create a settings.xml file for maven within the .m2 directory (usually located under the user’s home directory) and add the following content: 

```
<?xml version="1.0" encoding="UTF-8"?> 
<settings> 
    <servers> 
        <server> 
            <id>TomcatServer</id> 
            <username>MANAGER_USER</username> 
            <password>MANAGER_PASSWORD</password> 
        </server> 
    </servers> 
    <profiles> 
        <profile> 
            <id>default</id> 
            <activation> 
                <activeByDefault>true</activeByDefault> 
            </activation> 
            <properties> 
                <staging.server.url>STAGING_URL</staging.server.url> 
                <production.server.url>PROD_URL</production.server.url 
                <mail.host>MAIL_HOST</mail.host> 
                <mail.username>SERIVCE_ACCOUNT</mail.username> 
                <mail.password>ACCOUNT_PASS</mail.password> 
            </properties> 
        </profile> 
    </profiles> 
</settings> 
``` 
 
###Settings.xml Token Values: 
 
Throughout the settings.xml file, add properties as needed and replace the UPPER_CASE values with an appropriate corresponding value.  These values should be replaced as follows: 
 
1) MANAGER_USER: a user account for tomcat 7 with permissions to deploy to tomcat. 

2) MANAGER_PASS: the password for whatever tomcat 7 user you choose to provide. 

3) MAIL_HOST: the host for an email server which can be used by medchecker to send feed back  emails. 

4) SERVICE_ACCOUNT: a service account on the mail host which will receive the feed back emails.  For example, “feedback@yourdomain.com”. 

5) ACCOUNT_PASS: the password for the provided service account. 

6) STAGING_URL: the url of the staging server. 

7) PROD_URL: the url of the prod server. 
 
###Configuring Tomcat To Work With Maven:
The manager user and password need to be configured within Tomcat.  Create a user which has priviliges to deploy through the built in manager application and through maven.  Add the following xml lines conf/tomcat-users.xml and adjust USER and PASS appropriately.
```
<?xml version='1.0' encoding='utf-8'?>
<tomcat-users>
	<role rolename="manager-gui"/>
	<role rolename="manager-script"/>
	<user username="USER" password="PASS" roles="manager-gui,manager-script" />
</tomcat-users>
```
Note that these steps should be completed for every environment you intend to deploy to.
###Tomcat7 Mail Configuration: 
The project depends on javax.mail:mail:1.4.7 jar file, which should be placed into the "lib" folder of the tomcat root directory.  After, the mail jar has been placed within the tomcat lib folder, navigate to the tomcat conf directory and edit the context.xml file with the following JNDI resource definition.  

```
<Resource name="mail/session" 
    auth="Container" 
    type="javax.mail.Session" 
    mail.debug="true" 
    mail.user="USER" 
    password="PASS” 
    mail.transport.protocol="smtp" 
    mail.smtp.host="HOST" 
    mail.smtp.auth="true" 
    mail.smtp.port="PORT" 
    mail.smtp.starttls.enable="true"/> 
``` 
Replace USER, PASS, HOST, and PORT with details specific to your mail server. These steps should be completed for every environment you intend to deploy to.

##Build and Run:
###Retrieving Frontend Dependencies: 

Navigate to the root directory of the project then cd into src/main/webapp/app.  Pull down all required node modules by running the following command within src/main/webapp/app: 

```
npm install
```

After npm finishes retrieving the node modules, retrieve all required bower managed dependencies by running the following command (also within src/main/webapp/app) 

 
```
bower install 
```
 
Bower will retrieve the front end dependencies specified in bower.json, and store them locally within the vendor directory. 

##A Word on Grunt: 

This documentation assumes some level of familiarity with grunt.  All grunt command examples shown in this document are run in the same directory as the grunt file.  At the time of this writing, the project’s grunt file is located at src/main/webapp/app/gruntfile.js. 

###Grunt Build: 

To build a “debuggable” version of Medchecker’s javascript code (not concatenated or minified), run the following command: 

```
grunt build 
```

Note that this command will lint the javascript source files, run javascript unit tests with phantomjs and the karma test runner, create template scripts for html template files, then drop the built files into a “build” directory. 

###Grunt Compile: 

To create a minifed and production ready version of the frontend code, run the compile task following the build task (see above for more on the build task): 

```
grunt compile 
```

Be aware that this will replace any debuggable versions of the code within the build directory.  

###Grunt Watch: 

If a developer is making frequent changes to the javascript code, he/she may wish to use the watch task.  The watch task waits for the developer to make changes to files within the project.  When it detects a change has been made, it runs the build subtask then begins waiting again.  The watch task is useful if the developer wishes to simply have changes reload automatically rather than having to manually run grunt build following every save.  The watch task is run in the following manner: 

```
grunt watch 
```
##A Word on Maven: 

Note that all maven commands are run in the same directory as pom.xml. 

###Running Maven Tomcat Plugin: 
 
While developing, use the maven tomcat plugin to run an embedded tomcat server.  This command is as follows: 
```
mvn clean tomcat7:run 
``` 
 
###Deploying With Maven Tomcat Plugin: 
 
When deploying the project to tomcat, or configuring a build server to deploy the project, run or specify the following command 
``` 
mvn clean tomcat7:deploy  
``` 

To deploy to a specific environment (for example, staging or production), set the profile for the target environment with the maven profile flag.  At the time of this documentation, medchecker’s pom has three profiles defined.  These are production, staging, and local.  The local profile is active by default and will attempt to deploy to a local instance of tomcat.  Overriding this default behavior from the command prompt can be accomplished by specifying a profile in the following manner: 

```
mvn clean tomcat7:deploy –P staging 
``` 