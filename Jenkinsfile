pipeline{
    def testFlag = 'FAILED'
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
                testFlag = sh "./test.sh"                
            }
        }
        stage('Deploy'){
            steps{
                if(testFlag == 'PASSED'){
                    echo "Test passed - //update stack code here"
                } else {
                    echo "Test not passed"
                }
            } 
        }

    }

    

}