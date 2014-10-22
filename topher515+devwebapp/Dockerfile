FROM topher515/devbase

MAINTAINER Chris Wilcox <ckwilcox@gmail.com>

RUN apt-get -y 

# Development

# Build
RUN apt-get install nodejs npm
RUN npm install -g gulp gulp-concat gulp-less gulp-coffee

# Web app
RUN pip install Flask sqlalchemy

# Database
# TODO

# Useful
RUN pip install supervisor

VOLUME ["/opt/app"]

WORKDIR /opt/app

#ADD static-lib
#ADD static-src
#ADD templates
#ADD webapp
#ADD gulpfile.js
#ADD runserver.py

EXPOSE 8080