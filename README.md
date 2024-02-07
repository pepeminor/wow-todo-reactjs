This is WOW Todo project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Getting Started..

First, run the development server:

```bash
yarn && yarn start
# or
npm install && npm run start
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Brief description
This WowTodo is for people to take notes on tasks that need to be done
Project have build with reactjs combine with third-party like redux-store to management store 
and also implement with redux-persist to save all data to not get lost after refreshing

Mini-Notes: For now this project can drag&drop item to sorting
but can NOT drag&drop at device mobile...

... Hope you guy like it ! ...

## Structure of project
```
src
.
├── component               # list of all components
├── Context                 # list of all Context provider setup
├── hooks                   # list of all hooks define
├── state                   # where state-management store ( using redux-toolkit )
└── ...
```

