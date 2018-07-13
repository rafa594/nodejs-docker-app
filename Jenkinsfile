def variable1 = 'FAILED'
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
                script{
                    variable1 = sh (script: './test.sh',returnStdout: true)  
                    echo "Resultado : ${variable1}"
                }
                              
                sh "docker-compose down"
            }
        }
        stage('Deploy'){
            steps{
                script{
                    echo "Resultado : ${variable1}"
                    if(variable1.equals("PASSED")){
                        echo "Test passed - //update stack code here"
                    } else {
                        echo "Test not passed"
                    }
                    
                }
                
            } 
        }

    }

    

}