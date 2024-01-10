import Button from './Button';

const button = new Button(document.body);

interface IObjName {
  name : string
}

const obj : IObjName = {
  name: 'Artur',
};

const { name } = obj;
console.log(name);