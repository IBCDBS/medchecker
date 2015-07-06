#Adverse Reaction Data Dictionary

##Header
#####General information about the adverse event

| Attribute   |  Type     |  Definition / List of Values |Sample Value|
|:---------:|:------------:|:----------|:----------|
|	safetyreportid	|	string	|	 The 8-digit Safety Report ID number, also known as the case report number or case ID. The first 7 digits (before the hyphen) identify an individual report and the last digit (after the hyphen) is a checksum. This field can be used to identify or find a specific adverse event report. 	|	1234567-8	|
|	safetyreportversion	|	string	|	 The version number of the safetyreportid. Multiple versions of the same report may exist, it is generally best to only count the latest report and disregard others. OpenFDA will only return the latest version of a report. 	|	17	|
|	receivedate	|	string	|	 Date that the report was first received by FDA. If this report has multiple versions, this will be the date the first version was received by FDA. 	|	20041025	|
|	receivedateformat	|	string	|	Identifies the encoding format of the receivedate field. Always set to 102 (YYYYMMDD).	|	102	|
|	receiptdate	|	string	|	Date that most recent information in the report was received by FDA.	|	20040224	|
|	receiptdateformat	|	string	|	Identifies the encoding format of the receiptdate field. Always set to 102 (YYYYMMDD).	|	102	|
|	serious	|	string	|	 1 = The adverse event resulted in death, a life threatening condition, hospitalization, disability, congenital anomali, or other serious condition. 2 = The adverse event did not result in any of the above. 	|	1	|
|	seriousnesscongenitalanomali	|	string	|	 This value is 1 if the adverse event resulted in a congenital anomali, and absent otherwise. 	|	1	|
|	seriousnessdeath	|	string	|	 This value is 1 if the adverse event resulted in death, and absent otherwise. 	|	1	|
|	seriousnessdisabling	|	string	|	 This value is 1 if the adverse event resulted in disability, and absent otherwise. 	|	1	|
|	seriousnesshospitalization	|	string	|	 This value is 1 if the adverse event resulted in a hospitalization, and absent otherwise. 	|	1	|
|	seriousnesslifethreatening	|	string	|	 This value is 1 if the adverse event resulted in a life threatening condition, and absent otherwise. 	|	1	|
|	seriousnessother	|	string	|	 This value is 1 if the adverse event resulted in some other serious condition, and absent otherwise. 	|	1	|
|	transmissiondate	|	string	|	Date that the record was created. This may be earlier than the date the record was received by the FDA.	|	1	|
|	transmissiondateformat	|	string	|	Identifies the encoding format of the transmissiondate field. Always set to 102 (YYYYMMDD).	|	1	|
|	duplicate	|	string	|	This value is 1 if the report has had previous versions submitted. OpenFDA only shows the most recent version.	|	1	|
|	companynumb	|	string	|	Identifier for the company providing the report. This is self-assigned.	|	200501050	|
|	occurcountry	|	string	|	The name of the country where the event occurred.	|	US	|
|	primarysourcecountry	|	string	|	The country of the reporter of the event.	|	US	|
|	primarysource	|	list	|	Information about the source provider of the adverse event.	|		|
|	primarysource.qualification	|	string	|	 An encoded value for the category of individual submitting the report: <ul><li>1 = Physician</li> <li>2 = Pharmacist</li><li>3 = Other Health Professional</li><li>4 = Lawyer</li><li>5 = Consumer or non-health professional </li></ul>|	1	|
|	primarysource.reportercountry	|	string	|	The name of the country from which the report was submitted.	|	UNITED STATES	|
|	reportduplicate	|	list	|	 If a report is a duplicate or more recent version than a previously submitted report, this field will provide additional details on source provider. 	|		|
|	reportduplicate.duplicatesource	|	string	|	The name of the organization providing the duplicate.	|	NOVARTIS	|
|	reportduplicate.duplicatenumb	|	string	|	The case identifier for the duplicate.	|	PHEH2006US00792	|
|	sender	|	list	|	Information on the organization sending the report.	|		|
|	sender.sendertype	|	string	|	 The name of the organization sending the report. Because FDA is providing these reports to you, it will always appear as 2: <ul><li>1 = Pharmaceutical Company</li><li>2 = Regulatory Authority</li><li>3 = Health Professional</li><li>4 = Regional Pharmacovigilance Center</li><li>5 = WHO Collaborating Center for International Drug Monitoring</li><li>6 = Other </li></ul>	|	2	|
|	sender.senderorganization	|	string	|	 The name of the organization sending the report. Because FDA is providing these reports to you, it will always appear as FDA-Public Use. 	|	FDA-Public Use	|
|	receiver	|	list	|	Information on the organization receiving the report.	|		|
|	receiver.receivertype	|	string	|	 The name of the organization receiving the report: <ul><li>1 = Pharmaceutical Company</li><li>2 = Regulatory Authority</li><li>3 = Health Professional</li><li>4 = Regional Pharmacovigilance Center</li><li>5 = WHO Collaborating Center for International Drug Monitoring</li><li>6 = Other 	</li></ul>|	6	|
|	receiver.receiverorganization	|	string	|	The name of the organization receiving the report.	|	FDA|
																	

##Patient
#####Details on the patient who experienced the event, such as age, weight, sex, etc.
| Attribute   |  Type     |  Definition / List of Values |Sample Value|
|:---------:|:------------:|:----------|:----------|
|	patient.patientonsetage	|	string	|	The age of the patient when the event first occured	|	59	|
|	patient.patientonsetageunit	|	string	|	 The unit of measurement for the patientpatientonsetage field: <ul><li>800 = Decade</li><li>801 = Year</li><li>802 = Month</li><li>803 = Week</li><li>804 = Day</li><li>805 = Hour</li></ul> | 801	|
|	patient.patientsex	|	string	|	 The sex of the patient: <ul><li>0 = Unknown</li><li>1 = Male</li><li>2 = Female </li> </ul>	|	2	|
|	patient.patientweight	|	string	|	The weight of the patient expressed in kilograms	|	78	|
|	patient.patientdeath	|	list	|	 If the patient died, this section contains information about the death 	|		|
|	patient.patientdeath.patientdeathdate	|	string	|	Date that the patient died	|	20030401	|
|	patient.patientdeath.patientdeathdateformat	|	string	|	Identifies the encoding format of the tientpatientdeathpatientdeathdate field Always set to 102 (YYYYMMDD)	|	102	|

##Drugs
#####Information on the drugs taken while the event was experienced
| Attribute   |  Type     |  Definition / List of Values |Sample Value|
|:---------:|:------------:|:----------|:----------|
|	patient.drug	|	list of objects	|	Drugs known to be taken by the patient at the time of the adverse event.	|	
|	patient.drug.actiondrug	|	string	|	 Actions taken with the drug: <ul> 1 = Drug withdrawn 2 = Dose reduced 3 = Dose increased 4 = Dose not changed 5 = Unknown 6 = Not applicable</ul> 	|	1
|	patient.drug.drugadditional	|	string	|	Additional details about the circumstances surrounding the patientís use of the drug.	|	1
|	patient.drug.drugcumulativedosagenumb	|	string	|	The cumulative dose taken until the first reaction was experienced.	|	4100
|	patient.drug.drugcumulativedosageunit	|	string	|	 The unit for drugcumulativedosagenumb: <ul>001 = kg kilogram(s) 002 = G gram(s) 003 = Mg milligram(s) 004 = _g microgram(s)</ul> 	|	003
|	patient.drug.drugdosageform	|	string	|	The drugís dosage form.	|	Tablet
|	patient.drug.drugintervaldosagedefinition	|	string	|	 The unit for the interval in patient.drug.drugintervaldosageunitnumb: <ul> <li>801 = Year</li><li>802 = Month</li><li>803 = Week</li><li>804 = Day</li><li>805 = Hour</li><li>806 = Minute</li><li>807 = Trimester</li><li>810 = Cyclical</li><li>811 = Trimester</li><li>812 = As Necessary</li><li>813 = Total</li></ul> 	|	804
|	patient.drug.drugintervaldosageunitnumb	|	string	|	Number of units in patient.drug.drugintervaldosagedefinition	|	1
|	patient.drug.drugrecurreadministration	|	string	|	Whether the reaction occured on a readministration of the drug: <ul><li>1 = Yes</li><li>2 = No</li><li>3 = Unknown</li></ul>	|	3
|	patient.drug.drugseparatedosagenumb	|	string	|	The number of separate dosages.	|	1
|	patient.drug.drugstructuredosagenumb	|	string	|	The number of doses.	|	600
|	patient.drug.drugstructuredosageunit	|	string	|	The unit for drugstructuredosagenumb:<ul><li>001 = kg kilogram(s)</li> <li>002 = G gram(s)</li> <li>003 = Mg milligram(s)</li> <li>004 = _g microgram(s)</li></ul>	|	003
|	patient.drug.drugadministrationroute	|	string	|	The drugís route of administration:<ul><li>001 = Auricular (otic)</li><li>002 = Buccal</li><li>003 = Cutaneous</li><li>004 = Dental</li><li>005 = Endocervical</li><li>006 = Endosinusial</li><li>007 = Endotracheal</li><li>008 = Epidural</li><li>009 = Extra-amniotic</li><li>010 = Hemodialysis</li><li>011 = Intra corpus cavernosum</li><li>012 = Intra-amniotic</li><li>013 = Intra-arterial</li><li>014 = Intra-articular</li><li>015 = Intra-uterine</li><li>016 = Intracardiac</li><li>017 = Intracavernous</li><li>018 = Intracerebral</li><li>019 = Intracervical</li><li>020 = Intracisternal</li><li>021 = Intracorneal</li><li>022 = Intracoronary</li><li>023 = Intradermal</li><li>024 = Intradiscal (intraspinal)</li><li>025 = Intrahepatic</li><li>026 = Intralesional</li><li>027 = Intralymphatic</li><li>028 = Intramedullar (bone marrow)</li><li>029 = Intrameningeal</li><li>030 = Intramuscular</li><li>031 = Intraocular</li><li>032 = Intrapericardial</li><li>033 = Intraperitoneal</li><li>034 = Intrapleural</li><li>035 = Intrasynovial</li><li>036 = Intratumor</li><li>037 = Intrathecal</li><li>038 = Intrathoracic</li><li>039 = Intratracheal</li><li>040 = Intravenous bolus</li><li>041 = Intravenous drip</li><li>042 = Intravenous (not otherwise specified)</li><li>043 = Intravesical</li><li>044 = Iontophoresis</li><li>045 = Nasal</li><li>046 = Occlusive dressing technique</li><li>047 = Ophthalmic</li><li>048 = Oral</li><li>049 = Oropharingeal</li><li>050 = Other</li><li>051 = Parenteral</li><li>052 = Periarticular</li><li>053 = Perineural</li><li>054 = Rectal</li><li>055 = Respiratory (inhalation)</li><li>056 = Retrobulbar</li><li>057 = Sunconjunctival</li><li>058 = Subcutaneous</li><li>059 = Subdermal</li><li>060 = Sublingual</li><li>061 = Topical</li><li>062 = Transdermal</li><li>063 = Transmammary</li><li>064 = Transplacental</li><li>065 = Unknown</li><li>066 = Urethral</li><li>067 = Vaginal</li></ul>|	048
|	patient.drug.drugauthorizationnumb	|		|	Drug authorization or application number.	|	021223
|	patient.drug.drugbatchnumb	|		|	Drug product lot number.	|	020113A
|	patient.drug.drugcharacterization	|		|	 Reported role of the drug in the adverse event:<ul><li>1 = Suspect drug</li><li>2 = Concomitant drug</li><li>3 = Interacting drug</li></ul>|	1
|	patient.drug.drugdosagetext	|		|	Additional detail about the dosage taken.	|	 3.5 MG/KG, 1 IN 1 AS NECESSARY, INTRAVENOUS DRIP 
|	patient.drug.drugenddate	|		|	Date the patient ended taking the drug.	|	20020920
|	patient.drug.drugenddateformat	|		|	Identifies the encoding format of the patient.drug.drugenddateformat field. Always set to 102 (YYYYMMDD).	|	102
|	patient.drug.drugindication	|		|	Indication for use in the case.	|	RHEUMATOID ARTHRITIS
|	patient.drug.drugstartdate	|		|	Date the patient began taking the drug.	|	20020903
|	patient.drug.drugstartdateformat	|		|	Identifies the encoding format of the patient.drug.drugstartdate field. Always set to 102 (YYYYMMDD).	|	102
|	patient.drug.drugtreatmentduration	|		|	The length of time the patient was using the drug.	|	1
|	patient.drug.drugtreatmentdurationunit	|		|	 The unit for patient.drug.drugtreatmentduration:<li>801 = Year</li><li>802 = Month</li><li>803 = Week</li><li>804 = Day</li><li>805 = Hour<li>806 = Minute</li></ul>|	804
|	patient.drug.medicinalproduct	|		|	Valid Trade name of the product	|	ASCORBIC ACID


##Reactions
#####Information on the reactions experienced by the patient
| Attribute   |  Type     |  Definition / List of Values |Sample Value|
|:---------:|:------------:|:----------|:----------|
|patient.reaction.reactionmeddrapt||MedDRA term(s) for the reaction(s). Note that these terms are encoded in British English. For instance, “diarrhea” is recorded as “diarrohea.”|Osteonecrosis of jaw|
|patient.reaction.reactionmeddraversionpt||The MedDRA version that patient.reaction.reactionmeddrapt uses.|16.1|
|patient.reaction.reactionoutcome||Outcome of the reaction or event at the time of last observation:  <ul><li>1 = Recovered/resolved</li><li> 2 = Recovering/resolving </li><li>3 = Not recovered/not resolved</li><li>4 = Recovered/resolved with sequelae</li><li>5 = Fatal</li><li>6 = Unknown</li></ul>|6|
