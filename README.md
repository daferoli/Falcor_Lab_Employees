# Falcor_Lab_Employees
A lab setup for a corporate employee management tool using Falcor

### Setup

This lab requires Node/npm and Mongo:
 - https://docs.npmjs.com/getting-started/installing-node
 - https://docs.mongodb.com/manual/installation/

Once downloaded, Clone this lab and it's counterpart here: https://github.com/daferoli/Falcor_Lab_Employees_Cloud

then run `npm install` and `npm start` to startup the server

For this service, you will need Mongo running: `mongod`

confirm that your server is running on port 27017

### Services

when running, the base url of this application is: `http://localhost:8001`

There are 3 services currently available in this lab (and the url path to access them):
 - Employee (`/employee`)
 - Office (`/office`)
 - Department (`/department`)

Each one had actions that can be accessed (and the following url paths):
 - Create (*POST* `/`)
 - Read (*GET* `/list/:id`)
 - Update (*PUT* `/:id/update`)
 - List (*GET* `/list`)

Using these will be able to access mongo and act as your backend services for this lab

Remember that in an enterprise environment, these servers would likely run
on separate machines/node processes/repos. We Use this because it is simpler for the
example, and we treat the services as separate both here and on the cloud with the 3 url paths to access each one.

*PLEASE NOTE* This example is not very robust, and currently is not setup to manage
 related data. Therefore, for example, if you want to add a new employee, you will
 also need to add that employee to the list of both the department and office he is
 desegnated in

### Training set
I have included a training set for this example that you can use. If you call `http://localhost:8001/training`
it will clear all of the services and input a basic set of data you can use
