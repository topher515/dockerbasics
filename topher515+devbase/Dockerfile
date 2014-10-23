
FROM debian:wheezy

MAINTAINER Chris Wilcox <ckwilcox@gmail.com>

RUN apt-get update
RUN apt-get -y install python python-dev python-pip build-essential git
RUN apt-get install -y libxslt-dev libxml2-dev

WORKDIR /opt

EXPOSE 8080