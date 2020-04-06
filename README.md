This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## How to deploy this project using Docker + Kubernetes (Minikube)

### Build and Run dockerfile
	`$ $(minikube docker-env)`
	`$ docker build --tag react-learning-app:1.0 .`
	`$ docker run -p 3000:3000 -d react-learning-app`
	`$ docker rm --force reactapp`

### Deploy on minikube
	`$ kubectl run react-learning-app --image=react-learning-app --port=3031 --image-pull-policy=Never`
	`$ kubectl port-forward react-learning-app-<podId> 7000:3000  (will be visible on 7000)`
