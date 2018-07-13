
node('slave-agent-1'){
    

 
    
    stage('Build'){
        env.TESTFLAG = "FAILED"

        
        sh "echo 'test flag stage build value'"
        print "TESTFLAG will be : ${env.TESTFLAG}"
        sh "eval \$(aws ecr get-login --no-include-email --region us-east-2 | sed 's|https://||')"
        sh "docker build -t p5imagertut ./nodeapp"
                
    }
    stage('Test'){
                    
        echo "test flag stage test value"
        print "TESTFLAG will be : ${env.TESTFLAG}"
        sh "docker-compose up -d"
        env.TESTFLAG = sh "./test.sh"
        echo "test flag stage test value after execute test"
        print "TESTFLAG will be : ${env.TESTFLAG}"
        sh "docker-compose down"
        
        
        
    }
    stage('Deploy'){
        
        if (env.TESTFLAG == 'PASSED') {
            echo "Test passed - //update stack code here"
            sh "docker tag p5imagertut 797409686075.dkr.ecr.us-east-2.amazonaws.com/p5rtut"
            sh "docker push 797409686075.dkr.ecr.us-east-2.amazonaws.com/p5rtut"

        }else {
            echo "BAD NEWS!!! :S"
            print "TESTFLAG will be : ${env.TESTFLAG}"
        }
        
            
        
        
    }



    

}