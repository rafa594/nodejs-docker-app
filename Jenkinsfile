
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
                sh "docker-compose up -d"
                sh "./test.sh"
            }
        }
        stage('Deploy'){
            steps{
                sh "Start Deploying stage"
                if(${env.TESTFLAG} == 'PASSED'){
                    echo "Test passed - //update stack code here"
                } else {
                    echo "Test not passed"
                }
            } 
        }

    }

    

}