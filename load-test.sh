#!/bin/bash

BASE_URL=$1

sleep 5;
wrk -d2m -c500 -t2 $BASE_URL/request
sleep 5;
wrk -d2m -c500 -t2 $BASE_URL/request-promise-native
sleep 5;
wrk -d2m -c500 -t2 $BASE_URL/got
sleep 5;
wrk -d2m -c500 -t2 $BASE_URL/superagent
sleep 5;
wrk -d2m -c500 -t2 $BASE_URL/axios
sleep 5;
wrk -d2m -c500 -t2 $BASE_URL/fetch
sleep 5;