docker run -P -v $(pwd)/app:/opt/app -t -i topher515/devwebapp:latest node_modules/.bin/gulp
sshfs -p 2022 docker@localhost:/shared /opt/app


# More research: https://github.com/docker/docker/issues/4023


# After following these instructions and then installing sshfs (from here or via brew install sshfs) the following works for me:

# # run container and create folder/volume for sshfs to mount
# $ docker run -p 49001:49001 -v /shared:/shared user/image

# $ sshfs -p 2022 docker@localhost:/shared ~/shared
# I've now got access to the /shared folder inside the container, shown as a mounted drive in OSX.

# Hopefully this might help someone.

# Thanks @haad for the pointer