#!/bin/bash
cd /home/kavia/workspace/code-generation/piggyquest-27012-11d88818/piggyquest
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

