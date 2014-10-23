FROM topher515/devbase

MAINTAINER Chris Wilcox <ckwilcox@gmail.com>


WORKDIR /opt/app


# Development

# Build
RUN apt-get -y install curl
RUN curl -sL https://deb.nodesource.com/setup | bash -
RUN apt-get -y install nodejs npm
RUN npm install gulp gulp-concat gulp-less gulp-coffee

# Web app
RUN pip install Flask sqlalchemy

# Database
# TODO

# Useful
RUN pip install supervisor

# VOLUME ["/opt/app"]

#ADD static-lib
#ADD static-src
#ADD templates
#ADD webapp
#ADD gulpfile.js
#ADD runserver.py

EXPOSE 8080