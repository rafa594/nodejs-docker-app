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
            /*when{
                expression{ variable1 == "PASSED"}
            }
            steps{
                echo "Its ok"
            }*/
            steps{
                script{
                    echo "Resultado : ${variable1}"
                    if(variable1.contains("PASSED")){
                        echo "Test passed - //update stack code here"
                        sh "docker tag p5imagertut 797409686075.dkr.ecr.us-east-2.amazonaws.com/p5rtut"
                        sh "docker push 797409686075.dkr.ecr.us-east-2.amazonaws.com/p5rtut"
                    } else {
                        echo "Test not passed"
                    }
                    
                }
                
            } 
        }

    }

    

}