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
    extracted_keys=$(echo "$current_content" | jq -r 'keys[]')

    # Loop through extracted keys and run the Docker command for each key
    echo "$extracted_keys" | while IFS= read -r extracted_key; do
      # Run the Docker command with the extracted key as the environment variable
      docker_output=$(docker run -i --init --cap-add=SYS_ADMIN --rm -e KEY="$extracted_key" ghcr.io/puppeteer/puppeteer:latest node -e "$(cat ./start.js)")
      
      # Print the Docker command's output
      echo "Output for key $extracted_key:"
      echo "$docker_output"
      continue
    done

    # Update the previous content
    prev_content="$current_content"
  fi

  # Wait for a period of time before checking again
  sleep 10
done
