#!/bin/bash
shopt -s expand_aliases

alias kubectl='minikube kubectl --'

kubectl apply -f deployment-green.yml
