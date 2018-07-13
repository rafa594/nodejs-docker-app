FROM node:latest

# Create app directory
#RUN mkdir /usr/src
RUN npm install nodemon -g
RUN npm install express-layout
WORKDIR /usr/src

# Install app dependencies
COPY ./package.json /usr/src/package.json
RUN npm install
#RUN npm install nodemon --save
#RUN npm install redis --save
#RUN npm install body-parser
#RUN npm install express-layout
ADD ./nodemon.json /usr/src/nodemon.json
#RUN npm install events
#RUN npm install path
# Copy app source code
COPY . /usr/src/app

#Expose port and start application
EXPOSE 8000
CMD [ "npm", "start" ]