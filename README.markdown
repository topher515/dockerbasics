# MAINTAINER Chris Wilcox <ckwilcox@gmail.com>

# Build your container
docker build -t topher515/<name>:latest <directory>

# Create a working database container
docker run redis
docker run mysql
docker run postgres

# Run the crawlit container linked to your redis container
# (Specify a known port for at least one instance of crawlit)

docker run --link=<database_container_name>:redis -t -i topher515/<name>:latest

# Maybe specify which ports to serve on...
docker run --link=<database_container_name>:redis -p 0.0.0.0:49155:80 -t -i topher515/<name>:latest

# Or serve on any random port...
docker run --link=<database_container_name>:redis -P -t -i topher515/<name>:latest