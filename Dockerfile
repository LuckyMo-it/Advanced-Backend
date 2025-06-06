#Use an official node.js runtime as a parent image
FROM node:22-alpine

#set the working directory in container
WORKDIR /app

#Copy the package.json and package-lock.json
#Syntax:source(our computer) to destination(container)
COPY package*.json .


#Install the dependencies
RUN npm install


#Copy the rest application
COPY . .

#expose the port from container to world external port to internal port 
EXPOSE 5000


#Define the command to run your application
CMD [ "node","./src/server.js" ]
