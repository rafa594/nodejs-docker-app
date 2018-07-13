env.TESTFLAG = 'FAILED'
pipeline{
    

    agent{
        label 'slave-agent-1'
    }
    
    stages{
        
        stage('Build'){
            steps{
                sh "eval \$(aws ecr get-login --no-include-email --region us-east-2 | sed 's|https://||')"
                sh "docker build -t p5imagertut ./nodeapp"
            }            
        }
        stage('Test'){
            steps{
                sh "docker-compose up -d"
                TESTFLAG = sh (script: "./test.sh",returnStdout: true).trim()     
            }
        }
        stage('Deploy'){
            steps{
                sh "Start Deploying stage"
                if(TESTFLAG == 'PASSED'){
                    echo "Test passed - //update stack code here"
                } else {
                    echo "Test not passed"
                }
            } 
        }

    }

    

}