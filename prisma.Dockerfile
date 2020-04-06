FROM node
# First copy the yarn.lock to install stuff and benefit from the layer cache
COPY ["package.json", "yarn.lock", "/usr/src/"]

# Run all the code from here
WORKDIR /usr/src

# User can run the setup script
COPY scripts/setup.sh /usr/src/scripts/setup.sh
RUN chmod +x /usr/src/scripts/setup.sh

# Install dependencies
RUN yarn install

# Copy the code
COPY [".", "/usr/src/"]

# Build the project
RUN yarn build