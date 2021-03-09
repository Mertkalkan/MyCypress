pipeline {
    agent {label 'master'}
    tools {
        nodejs 'stable' // Caruso Jenkins: use 'stable'; On local Jenkins i used 'nodejs'
    }

    stages {
        stage('Install') {
            steps {
                sh 'npm install'
                sh 'npm ci' // install cypress
                sh 'node_modules/.bin/cypress verify'
            }
        }
    
        stage('Browser Electron') {
            steps {
                // Prevents "Stage x skipped due to earlier failure(s)". Other stages will be executed for test purpose. (Remove script and try/catch and only let "sh 'npm test'" to get "Stage x skipped due ....")
                script {
                    try {
                        sh 'npm run cy:run'
                    } catch(e) {
                        catchError(buildResult: 'SUCCESS', stageResult: 'FAILURE') {
                            sh 'exit 1'
                        }
                    }
                }
            }
        }
        stage('Browser Firefox headless') {
            steps {
                script {
                    try {
                        sh 'npm run cy:run:firefox'
                    } catch(e) {
                        catchError(buildResult: 'SUCCESS', stageResult: 'FAILURE') {
                            sh 'exit 1'
                        }
                    }
                }
            }
        }
        stage('Browser Edge headless') {
            steps {
                script {
                    try {
                        sh 'npm run cy:run:edge'
                    } catch(e) {
                        catchError(buildResult: 'SUCCESS', stageResult: 'FAILURE') {
                            sh 'exit 1'
                        }
                    }
                }
            }
        }
        stage('Browser Chrome headless') {
            steps {
                script {
                    try {
                        sh 'npm run cy:run:chrome'
                    } catch(e) {
                        catchError(buildResult: 'SUCCESS', stageResult: 'FAILURE') {
                            sh 'exit 1'
                        }
                    }
                }
            }
        }        
    }

    post {
        always {
            echo "The current build status is: ${currentBuild.result}"
        }
    }
}