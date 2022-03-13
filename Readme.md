# A simple guide to locally host frontend + backend app in minikube

### requirements
- Frontend web application
- API
- Minikube for hosting local app
- Docker
In this repo, I used the fast-api as API and react as frontend

### procedures

#### prepare material for hosting the web application
1. Make docker images for 
1.1 API
1.2 FRONTEND

In this case, I use React as frontend and fast-api as backend.

2. Edit deployment yaml files as shown in deploy folder.
   
Normally kubenetes will require 
   - Deployment to build your application in the pod located in the worker node
   - Service to set the local app endpoint
   - Ingress for making the external sever to be able to access the endpoint
3. Build react app using
    ```yarn build```

#### prepare material for hosting the web application
1. Start minikube
    ```$ minikube start```
2. Add [docker environment](https://minikube.sigs.k8s.io/docs/handbook/pushing/#1-pushing-directly-to-the-in-cluster-docker-daemon-docker-env) to minikube 
   In the real cloud we may push image to the registry like Azure cloud
2.1. For window powershell 
    ```& minikube -p minikube docker-env --shell powershell | Invoke-Expression``` 
2.2. For window cmd 
    ```@FOR /f "tokens=*" %i IN ('minikube -p minikube docker-env --shell cmd') DO @%i``` 
2.3 For linux/macOS
    ```eval $(minikube docker-env)``` 
3. Pushing images to minikube
3.1 Push images to minikube by going to api directory and build docker image by
 ```docker build -t api:latest .```
3.2 For frontend, we are doing the same procedure as api one.
 ```docker build -t web:latest .```
    However, the application may have some issue with environment variable, this could be solved [by](https://www.npmjs.com/package/runtime-env-cra) 
3.3 You may check images in the minikube cluster by
 ```docker ps```
4. Install [Ingress](https://kubernetes.io/docs/tasks/access-application-cluster/ingress-minikube/) addon on minikube
    ```minikube addons enable ingress```
5. Go back to the root directory and apply all kube yaml file to kubenetes cluster (minikube) by 
    ```kubectl apply -f deploy```
6. Check if the app is deploy and run normally
   5.1 Check if pods is running  
   ```kubectl get pods```
   5.2 Check service
   ```kubectl get svc```
   5.3 Run app on local IP
   ```minikube tunnel```
   5.4 If you type 127.0.0.1 (localhost) you will see the frontend page
   ![alt text](/documentation/img/img1.PNG)
   ![alt text](/documentation/img/img2.PNG)

7. Clean up the cluster
   7.1 Delete all deployment in the cluster ```kubectl delete deploy --all``` 
   7.2 Delete everything in minikube ```minikube delete --all``` 
