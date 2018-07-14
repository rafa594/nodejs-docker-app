tasks=$(aws --region us-east-2 ecs list-tasks --cluster p5rtut-stack --query taskArns --output text)
for task in $tasks; do
    echo $task
	aws --region us-east-2 ecs stop-task --task $task --cluster p5rtut-stack
done
