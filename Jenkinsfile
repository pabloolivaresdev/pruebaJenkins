pipeline {
    agent any
     tools {
        dotnet 'dotnet-sdk-6.0'
    }
    environment {
        // Definir variables de entorno para la ruta de tu proyecto y las versiones de .NET necesarias
        DOTNET_VERSION = '8.0' // Ajusta la versión de .NET a la que usas
        CYPRESS_CACHE_FOLDER = "${WORKSPACE}/.cache/Cypress"
    }
    stages {
        stage('Restore NuGet Packages') {
            steps {
                dir ('C:\\Users\\pablo.olivares\\Documents\\GitHub\\pruebaJenkins') {
                    script {
                        // Restaurar paquetes de NuGet
                        bat "dotnet clean"
                        bat "dotnet restore" // En caso de ser Linux/macOS, usar ./dotnet restore
                    }
                }
            }
        }

        stage('Build') {
            steps {
                dir ('C:\\Users\\pablo.olivares\\Documents\\GitHub\\pruebaJenkins') {
                    script {
                        // Compilar el proyecto
                        bat "dotnet build --configuration Release"
                    }
                }
            }
        }

        stage('Run Unit Tests') {
            steps {
                dir ('C:\\Users\\pablo.olivares\\Documents\\GitHub\\pruebaJenkins') {
                    script {
                        // Ejecutar pruebas unitarias del proyecto .NET
                        bat "test.bat"
                        bat "trx2junit 'TestResult\\result.trx'"
                    }
                }
            }
        }

        stage('Run WebAPI') {
            steps {
                dir ('C:\\Users\\pablo.olivares\\Documents\\GitHub\\pruebaJenkins\\TareasAPI') {
                    script {
                        // Ejecutar pruebas unitarias del proyecto .NET
                        bat "start dotnet run"
                    }
                }
            }
        }

        stage('Run Front-End') {
            steps {
                dir ('C:\\Users\\pablo.olivares\\Documents\\GitHub\\pruebaJenkins\\SistemitaTareas') {
                    script {
                        // Asegurarse de tener Node.js y Cypress instalados
                        // Ejecutar las pruebas de Cypress para la API Web
                        bat "npm install"
                        bat "start npx ng serve --port 4200"
                        echo 'Please let me Sleep 30 seconds more'
                        sleep(time:10, unit: "SECONDS") // Para instalar dependencias de Node.js (si no las tienes en un contenedor, instálalas en este paso)
                        bat "curl http://localhost:4200"
                        //bat 'start "" ng serve --port 4200' // Cambia el puerto según corresponda
                    }
                }
            }
        }

        stage('Run Cypress Tests') {
            steps {
                dir ('C:\\Users\\pablo.olivares\\Documents\\GitHub\\pruebaJenkins\\SistemitaTareas') {
                    script {
                        // Asegurarse de tener Node.js y Cypress instalados
                        // Ejecutar las pruebas de Cypress para la API Web
                        bat "npx cypress install"
                        bat "npx cypress run --config baseUrl=http://localhost:4200" // Cambia el puerto según corresponda
                    }
                }
            }
        }

        stage('Publish Test Results') {
            steps {
                script {
                    bat 'echo finalizando'
                }
            }
        }
    }

    post {
        always {
            junit 'TestResult\\result.trx' 
            //junit 'TestResult\\result.trx'
        }
    }

}
