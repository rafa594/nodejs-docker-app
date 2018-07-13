
pipeline{
    
    agent{
        label 'slave-agent-1'
    }
    
    stages{
        
        stage('Build'){
            steps{
                sh "export TESTFLAG='FAILED'"
                sh "echo 'test flag stage build value'"
                sh "echo \$TESTFLAG"
                sh "eval \$(aws ecr get-login --no-include-email --region us-east-2 | sed 's|https://||')"
                sh "docker build -t p5imagertut ./nodeapp"
            }            
        }
        stage('Test'){
            steps{                
                echo "test flag stage test value"
                sh "echo \$TESTFLAG"
                sh "./test.sh"
                sh "docker-compose down"
                echo "test flag stage test value after execute test"
                sh "echo \$TESTFLAG"
            }
        }
        stage('Deploy'){
            when {
                // Only say hello if a "greeting" is requested
                expression { env.TESTFLAG == 'PASSED' }
            }
            steps{
                echo "Test passed - //update stack code here"
                sh "docker tag p5imagertut 797409686075.dkr.ecr.us-east-2.amazonaws.com/p5rtut"
                sh "docker push 797409686075.dkr.ecr.us-east-2.amazonaws.com/p5rtut"
            } 
            
        }

    }

    

}