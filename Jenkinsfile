
pipeline{
    
    agent{
        label 'slave-agent-1'
    }
    
    stages{
        
        stage('Build'){
            steps{
                sh "export TESTFLAG='FAILED'"
                sh "eval \$(aws ecr get-login --no-include-email --region us-east-2 | sed 's|https://||')"
                sh "docker build -t p5imagertut ./nodeapp"
            }            
        }
        stage('Test'){
            steps{                
                sh "./test.sh"
                sh "docker-compose down"
            }
        }
        stage('Deploy'){
            when {
                // Only say hello if a "greeting" is requested
                expression { env.TESTFLAG == 'greeting' }
            }
            steps{
                echo "Test passed - //update stack code here"
                sh "docker tag p5imagertut 797409686075.dkr.ecr.us-east-2.amazonaws.com/p5rtut"
                sh "docker push 797409686075.dkr.ecr.us-east-2.amazonaws.com/p5rtut"
            } 
            
        }

    }

    

}