#!/bin/bash

# Get the directory path of the script
SCRIPT_DIR=$(dirname "$0")

# Path to the JSON file (assuming it's in the same directory as the script)
JSON_FILE="$SCRIPT_DIR/file.json"

# Previous content
prev_content=""

while true; do
  # Read the current content of the JSON file
  current_content=$(cat "$JSON_FILE")

  # Check if the content has changed
  if [ "$current_content" != "$prev_content" ]; then
    # Extract the specific content (replace with your extraction logic)
    extracted_key=$(echo "$current_content" | jq -r '.current')

    # Run the Docker command with the extracted key as the environment variable
    docker run -i --init --cap-add=SYS_ADMIN --rm -e KEY="$extracted_key" ghcr.io/puppeteer/puppeteer:latest node -e "$(cat ./start.js)"

    # Update the previous content
    prev_content="$current_content"
  fi


  # Wait for a period of time before checking again
  sleep 10
done
