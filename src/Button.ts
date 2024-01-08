import styles from './Button.module.scss';
class Button {
  body:HTMLElement;
  constructor (body:HTMLElement) {
    this.body = body;
    this.body.insertAdjacentElement('afterbegin' , this.createButton());
  }

  private createButton () : HTMLElement {
    const btn = document.createElement('button');
    btn.classList.add(`${styles.button}`);
    btn.textContent = 'Submit';
    return btn;
  }
}

export default Button;