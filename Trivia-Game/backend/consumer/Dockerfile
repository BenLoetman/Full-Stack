# Use Python 3.12 and Alpine
FROM python:3.12.9-alpine3.21

# Set the working directory
WORKDIR /usr/src/app

# Copy only required files first for better caching
COPY index.py requirements.txt ./

# Install dependencies efficiently
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of the application code (if needed)
COPY . .

# Default command to run the script
CMD ["python", "./index.py"]
