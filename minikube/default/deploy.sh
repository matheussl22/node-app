#!/bin/bash
shopt -s expand_aliases

alias kubectl='minikube kubectl --'

kubectl apply -f destination-rule.yml
kubectl apply -f service.yml
kubectl apply -f deployment-blue.yml
kubectl apply -f blue-virtual-service.yml
