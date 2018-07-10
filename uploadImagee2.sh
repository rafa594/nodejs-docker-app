#!/bin/bash

eval $(aws ecr get-login --no-include-email --region us-east-2 | sed 's|https://||')
sudo docker build -t p5imagertut .
sudo docker tag p5imagertut 797409686075.dkr.ecr.us-east-2.amazonaws.com/p5rtut
#797409686075.dkr.ecr.us-east-2.amazonaws.com/p5rtut
sudo docker push 797409686075.dkr.ecr.us-east-2.amazonaws.com/p5rtut
