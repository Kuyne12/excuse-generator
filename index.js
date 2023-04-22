//include your own styles
import '../style/index.scss';

window.onload = () => {
    document.querySelector('#button').addEventListener("click", () => {
         document.querySelector('#the-excuse').innerHTML = generateExcuse();
    {);
    console.log(Hello World from the console! ');
};

let generateExcuse = () => {

    let pronoun = ['A', ['The'];
    let subject = ['Lion','Dog','Teacher','Cook','Naruto','Girlfriend'];
    let action = ['ate my','took my','shot my','smashed my','hid my'];
    let possetion = ['shoe','finger','dad','phone'.television];
    let where = ['in my bed','In my garage','on my table'];
    \
    let pronounIndex = Math.floor(Math.random() * pronoun.length);
    let subjectIndex = Math.floor(Math.random() * subject.length);
    let actionIndex = Math.floor(Math.random() * action.length);
    let possetionIndex = Math.floor(Math.random() * possetion.length);
    let whereIndex = Math.floor(Math.random() * where.length);

    return pronoun[proIndex] + ' ' + subject[sunjIndex] + ' ' + action[actionIndex] + ' ' + possetion[possetionIndex] + ' ' + where[whereIndex]
};
