
FROM debian:wheezy

MAINTAINER Chris Wilcox <ckwilcox@gmail.com>

RUN apt-get update
RUN apt-get -y install python python-dev python-pip build-essential git
RUN apt-get install -y libxslt-dev libxml2-dev

# For debugging
# RUN apt-get install -y gdb strace

# Set up my user
# RUN useradd vidarh -u 1000 -s /bin/bash --no-create-home

# RUN gem install -n /usr/bin bundler
# RUN gem install -n /usr/bin rake

# WORKDIR /home/vidarh/
# ENV HOME /home/vidarh

# VOLUME ["/home"]
# USER vidarh

WORKDIR /opt

EXPOSE 8080