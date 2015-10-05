#!/bin/bash

grunt build
s3_website push --site=dist
