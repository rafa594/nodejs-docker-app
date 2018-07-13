def variable1 = 'FAILED'
pipeline{
    

    agent{
        label 'slave-agent-1'
    }

    stages{
        def testFlag = "FAILED"
        stage('Build'){
            steps{
                sh "eval \$(aws ecr get-login --no-include-email --region us-east-2 | sed 's|https://||')"
                sh "docker build -t p5imagertut ./nodeapp"
            }            
        }
        stage('Test'){
            steps{
                sh "docker-compose up -d"
                sh "./test.sh"                
                sh "docker-compose down"
            }
        }
        stage('Deploy'){
            steps{
                script{
                    /*if(env.TESTFLAG == 'PASSED'){
                        echo "Test passed - //update stack code here"
                    } else {
                        echo "Test not passed"
                    }*/
                    echo "jejeje"
                }
                
            } 
        }

    }

    

}