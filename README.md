# learnify-test-app-anandp
### Task from Hr @ Learnify Technologies
## Table of Contents
### Taks Completed
### Getting Started
### Prerequisites
### Instructions
### Built With
### Author

## Taks Completed
###  Mobile no field
###  Get OTP button with some beautification (image and text)
###  Phone no
###  OTP field
###  Verify OTP button
###  On click verify button, a message will display in pop up “Your details has been submitted”

## Getting Started
### Clone the repository:
git clone https://github.com/anandp2310/learnify-test-app-anandp.git

### Navigate to the project folder:
cd learnify-test-app-anandp

### Install dependencies:
npm install

## Prerequisites
### Node.js - v14 or higher
### Expo CLI
### Git

## Instrucction
In case of error like "In React 18, SSRProvider is not necessary and is a noop. You can remove it from your app."
###  Navigate to node_modules/native-base/src/core/NativeBaseProvider.tsx
###  Delete that wraps {children}. Take care not to delete {children}.
###  Remove SSRProvider import. That is, delete this line import { SSRProvider } from '@react-native-aria/utils';
###  Run npx patch-package native-base. Select yes in the prompt.
### When Native Base officially fixes it, you can delete the patch from the patch directory that was created and reinstall native-base
### use reference https://stackoverflow.com/questions/76579391/in-react-18-ssrprovider-is-not-necessary-and-is-a-noop-you-can-remove-it-from-y
 
## Built With
EAS Build

## Author
### ANAND P
### gitHub: https://github.com/anandp2310
### Linkedin: https://www.linkedin.com/in/ianandp/