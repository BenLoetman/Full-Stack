# Use Python 3.12 and Alpine
FROM python:3.12.9-alpine3.21

# Set working directory. 
WORKDIR /usr/src/app

# Copy index.py
COPY index.py requirements.txt ./

# Install packages.
RUN pip install --no-cache-dir -r requirements.txt

# Run script.
CMD ["python", "./index.py"]