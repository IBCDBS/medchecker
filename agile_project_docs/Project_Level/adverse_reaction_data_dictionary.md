#Adverse Reaction Data Dictionary

##Header
#####General information about the adverse event

| Attribute   |  Type     |  Definition / List of Values |Sample Value|
|:---------:|:------------:|:----------|:----------|
|	safetyreportid	|	string	|	"The 8-digit Safety Report ID number, also known as the case report number or case ID. The first 7 digits (before the hyphen) identify an individual report and the last digit (after the hyphen) is a checksum. This field can be used to identify or find a specific adverse event report."	|	1234567-8	|
|	safetyreportversion	|	string	|	"The version number of the safetyreportid. Multiple versions of the same report may exist, it is generally best to only count the latest report and disregard others. OpenFDA will only return the latest version of a report."	|	17	|
|	receivedate	|	string	|	"Date that the report was first received by FDA. If this report has multiple versions, this will be the date the first version was received by FDA."	|	20041025	|
|	receivedateformat	|	string	|	Identifies the encoding format of the receivedate field. Always set to 102 (YYYYMMDD).	|	102	|
|	receiptdate	|	string	|	Date that most recent information in the report was received by FDA.	|	20040224	|
|	receiptdateformat	|	string	|	Identifies the encoding format of the receiptdate field. Always set to 102 (YYYYMMDD).	|	102	|
|	serious	|	string	|	"1 = The adverse event resulted in death, a life threatening condition, hospitalization, disability, congenital anomali, or other serious condition. 2 = The adverse event did not result in any of the above."	|	1	|
|	seriousnesscongenitalanomali	|	string	|	"This value is 1 if the adverse event resulted in a congenital anomali, and absent otherwise."	|	1	|
|	seriousnessdeath	|	string	|	"This value is 1 if the adverse event resulted in death, and absent otherwise."	|	1	|
|	seriousnessdisabling	|	string	|	"This value is 1 if the adverse event resulted in disability, and absent otherwise."	|	1	|
|	seriousnesshospitalization	|	string	|	"This value is 1 if the adverse event resulted in a hospitalization, and absent otherwise."	|	1	|
|	seriousnesslifethreatening	|	string	|	"This value is 1 if the adverse event resulted in a life threatening condition, and absent otherwise."	|	1	|
|	seriousnessother	|	string	|	"This value is 1 if the adverse event resulted in some other serious condition, and absent otherwise."	|	1	|
|	transmissiondate	|	string	|	Date that the record was created. This may be earlier than the date the record was received by the FDA.	|	1	|
|	transmissiondateformat	|	string	|	Identifies the encoding format of the transmissiondate field. Always set to 102 (YYYYMMDD).	|	1	|
|	duplicate	|	string	|	This value is 1 if the report has had previous versions submitted. OpenFDA only shows the most recent version.	|	1	|
|	companynumb	|	string	|	Identifier for the company providing the report. This is self-assigned.	|	200501050	|
|	occurcountry	|	string	|	The name of the country where the event occurred.	|	US	|
|	primarysourcecountry	|	string	|	The country of the reporter of the event.	|	US	|
|	primarysource	|	list	|	Information about the source provider of the adverse event.	|		|
|	primarysource.qualification	|	string	|	"An encoded value for the category of individual submitting the report: <ul><li>1 = Physician</li> <li>2 = Pharmacist</li><li>3 = Other Health Professional</li><li>4 = Lawyer</li><li>5 = Consumer or non-health professional"</li></ul>|	1	|
|	primarysource.reportercountry	|	string	|	The name of the country from which the report was submitted.	|	UNITED STATES	|
|	reportduplicate	|	list	|	"If a report is a duplicate or more recent version than a previously submitted report, this field will provide additional details on source provider."	|		|
|	reportduplicate.duplicatesource	|	string	|	The name of the organization providing the duplicate.	|	NOVARTIS	|
|	reportduplicate.duplicatenumb	|	string	|	The case identifier for the duplicate.	|	PHEH2006US00792	|
|	sender	|	list	|	Information on the organization sending the report.	|		|
|	sender.sendertype	|	string	|	"The name of the organization sending the report. Because FDA is providing these reports to you, it will always appear as 2: <ul><li>1 = Pharmaceutical Company</li><li>2 = Regulatory Authority</li><li>3 = Health Professional</li><li>4 = Regional Pharmacovigilance Center</li><li>5 = WHO Collaborating Center for International Drug Monitoring</li><li>6 = Other"</li></ul>	|	2	|
|	sender.senderorganization	|	string	|	"The name of the organization sending the report. Because FDA is providing these reports to you, it will always appear as FDA-Public Use."	|	FDA-Public Use	|
|	receiver	|	list	|	Information on the organization receiving the report.	|		|
|	receiver.receivertype	|	string	|	"The name of the organization receiving the report: <ul><li>1 = Pharmaceutical Company</li><li>2 = Regulatory Authority</li><li>3 = Health Professional</li><li>4 = Regional Pharmacovigilance Center</li><li>5 = WHO Collaborating Center for International Drug Monitoring</li><li>6 = Other"	</li></ul>|	6	|
|	receiver.receiverorganization	|	string	|	The name of the organization receiving the report.	|	FDA|
																	

##Patient
#####Details on the patient who experienced the event, such as age, weight, sex, etc.
| Attribute   |  Type     |  Definition / List of Values |Sample Value|
|:---------:|:------------:|:----------|:----------|
|	patient.patientonsetage	|	string	|	The age of the patient when the event first occured	|	59	|
|	patient.patientonsetageunit	|	string	|	"The unit of measurement for the patientpatientonsetage field: <ul><li>800 = Decade</li><li>801 = Year</li><li>802 = Month</li><li>803 = Week</li><li>804 = Day</li><li>805 = Hour</li></ul>"| 801	|
|	patient.patientsex	|	string	|	"The sex of the patient: <ul><li>0 = Unknown</li><li>1 = Male</li><li>2 = Female"</li> </ul>	|	2	|
|	patient.patientweight	|	string	|	The weight of the patient expressed in kilograms	|	78	|
|	patient.patientdeath	|	list	|	"If the patient died, this section contains information about the death"	|		|
|	patient.patientdeath.patientdeathdate	|	string	|	Date that the patient died	|	20030401	|
|	patient.patientdeath.patientdeathdateformat	|	string	|	Identifies the encoding format of the tientpatientdeathpatientdeathdate field Always set to 102 (YYYYMMDD)	|	102	|
								

##Drugs
#####Information on the drugs taken while the event was experienced
| Attribute   |  Type     |  Definition / List of Values |Sample Value|
|:---------:|:------------:|:----------|:----------|
||||


##Reactions
#####Information on the reactions experienced by the patient
| Attribute   |  Type     |  Definition / List of Values |Sample Value|
|:---------:|:------------:|:----------|:----------|
|patient.reaction.reactionmeddrapt||MedDRA term(s) for the reaction(s). Note that these terms are encoded in British English. For instance, “diarrhea” is recorded as “diarrohea.”|Osteonecrosis of jaw|
|patient.reaction.reactionmeddraversionpt||The MedDRA version that patient.reaction.reactionmeddrapt uses.|16.1|
|patient.reaction.reactionoutcome||Outcome of the reaction or event at the time of last observation:  <ul><li>1 = Recovered/resolved</li><li> 2 = Recovering/resolving </li><li>3 = Not recovered/not resolved</li><li>4 = Recovered/resolved with sequelae</li><li>5 = Fatal</li><li>6 = Unknown</li></ul>|6|
