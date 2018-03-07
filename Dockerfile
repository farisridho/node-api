FROM node:6-alpine

# Create app directory
RUN mkdir -p /app
WORKDIR /app

# Copy project file under app dir
COPY . /app

# Install Depedencies project
RUN npm install
# If you are building your code for production
# RUN npm install --only=production

EXPOSE 3000
CMD [ "npm", "start" ]
