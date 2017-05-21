# Précis-Nouveaux

Slack Channel: https://sea-expeditionhacks.slack.com/messages/C5F94RLC8/search/precis%20nouveaux/ 



# PART I -  Knime Analytics Platform Workflow 
	(KNIME integrates various components for machine learning and data mining) 


	### 1) String Input 
		This Knime node is a variable that holds our sample keyword string of "North Koreo Missile" that we want to search news on.

		### 2) String Manipulation
		This Knime node inserts that string to the template we need to query IBM Watson Discovery
			 (IBM Watson Discovery is a service makes it possible to rapidly build cognitive, cloud-based exploration applications that unlock actionable insights hidden in unstructured data)

	### 3) GET Request
		This is the HTTP GET request to the IBM Watson Discovery API.

			This link includes a "Collection ID", "Environment ID" (one instance of a particular web server that is responding to this API), "search string", etc  

		It queries against a specific "Collection ID" you have created in IBM Watson Discovery. 
			A "Collection ID" is a data set you have curated with specific RSS feeds or news sources you wish to search from.

		The response returns a json file. 


	### 4) JSON Path
		This is  where we specified what properties we wanted to keep from those JSON objects. 
			In our example, we wanted 'Relevance', 'Keywords', 'Text' (summary)


	### 5) Ungroup
		This is where we convert that json file/objects into a table. 

			Where each object is put a row and each property is put in a column. (This is so we can move things around and work with it in Knime.)


	### 6) Row Filter
		Here we can specify which rows we want to discard/keep.
			For our example, we kept 3 rows since we had an HTML template with just 3 articles that we are printing out as 
			a sheet of people.


	### 7) Table to JSON
		This again turns that data into a JSON file again.


	### 8) JSON Writer
		This can write it to a file on your disk 






# PART II 


Once that json file was generated and saved onto our disk, we needed to be able to parse that json file using nodeJS and inject it into our HTML template w/ EJS. (EJS is a templating language that lets you generate HTML markup with JavaScript.) 



	### 1) The front-end UI part of the web page was made w/ HTML5/CSS3. 

	### 2) Then the data that IBM Watson Discovery curated and was saved as a Json file by Knime platform was parsed and injected into the HTML markup with EJS. (A JS templating language.) 
  
  
  
  
  
  


	3) At this point, the single file app that I created with EXPRESS and Node.js was able to showcase the final result in our webpage here.  


	4) You can see that sample data injected as the text in the first article summary in this web page. 










