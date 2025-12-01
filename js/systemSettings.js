'use strict'

const systemSettings = {
    darkMode: true,
    fontSize: '18',
    language: 'en',
    betaAccess: 'true'
}
const font = +systemSettings.fontSize;
const betaAccess = systemSettings.betaAccess === 'true';
const isLargeFont = font >= 18;
let systemMessage;

if (systemSettings.darkMode === true && isLargeFont === true) {
    systemMessage = 'Dark Mode + Large Font';
}
else if (systemSettings.darkMode === true) {
    systemMessage = 'Dark Mode';
}
else if (isLargeFont === true) {
    systemMessage = 'Large Font';
}
else{
    systemMessage = 'Default Settings';
}
if (betaAccess === true) {
    systemMessage += ' (Beta tester)';
}
alert(systemMessage);