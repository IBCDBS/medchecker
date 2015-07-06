#Building Medchecker 

##Prerequisites: 
First, ensure that java 1.8, maven 3, npm and bower are installed on the machine where you wish to build Medchecker and that you have cloned the repository to an appropriate directory.  

Retrieving Frontend Dependencies: 

 

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

If a developer is making frequent changes to the javascript code in he/she may wish to use the watch task.  The watch task waits for the developer to make changes to files within the project.  When it detects a change has been made, it runs the build subtask then begins waiting again.  The watch task is useful if the developer wishes to simply have changes reload automatically rather than having to manually run grunt build following every save.  The watch task is run in the following manner: 

```
grunt watch 
```

##A Word on Maven: 

Note that all maven commands are run from the project root or in the same file as pom.xml. 

###Setting Up Maven to Deploy to Tomcat:  

Create a settings.xml file for maven within the .m2 directory (usually located under the user’s home directory) and add the following content: 

 
```
<?xml version="1.0" encoding="UTF-8"?> 
```
```
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

            <production.server.url>PROD_URL</production.server.url> 

            <mail.host>MAIL_HOST</mail.host> 

            <mail.username>SERIVCE_ACCOUNT</mail.username> 

            <mail.password>ACCOUNT_PASS</mail.password> 

        </properties> 

    </profile> 

</profiles> 

</settings> 
```

Add profiles as required.  You should have one profile for each deployment environment (staging, test, production, etc).  

Settings.xml Token Values: 

Throughout the settings.xml file, add properties as needed and replace the UPPER_CASE values with an appropriate corresponding value.  These values should be replaced as follows: 

 

1. MANAGER_USER: a user account for tomcat 7 with permissions to deploy to tomcat. 

2. MANAGER_PASS: the password for whatever tomcat 7 user you choose to provide. 

3. MAIL_HOST: the host for an email server which can be used by medchecker to send feed back  emails. 

4. SERVICE_ACCOUNT: a service account on the mail host which will receive the feed back emails.  For example, “feedback@yourdomain.com”. 

5. ACCOUNT_PASS: the password for the provided service account. 

6. STAGING_URL: the url of the staging server. 

7. PROD_URL: the url of the prod server. 

###Running Tomcat: 

While developing, use the maven tomcat plugin to run an embedded tomcat server.  This command is as follows: 
 
```
mvn clean tomcat7:run 
```

###Deploying to Tomcat: 

When deploying the project to tomcat, or configuring a build server to deploy the project, run or specify the following command 
 
```
mvn clean tomcat7:deploy  
```

To deploy to a specific environment (for example, staging or production), set the profile for the target environment with the profile flag.  At the time of this documentation, medchecker’s pom has three profiles defined.  These are production, staging, and local.  The local profile is active by default and will attempt to deploy to a local instance of tomcat.  Overriding this default behavior by specifying a profile can be done in the following manner: 

```
mvn clean tomcat7:deploy –P staging 
```