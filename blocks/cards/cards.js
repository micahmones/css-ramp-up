export default function decorate(block) {

  [...block.children].forEach((row) => {
      if(row.children.length > 1) {
        row.closest('div').classList.add('cards-multi-pic-container');
      } else {
        row.closest('div').classList.add('cards-single-pic-container');
        const logo = row.getElementsByTagName('picture')[1];
        logo.classList.add('cards-logo');
      }

      [...row.children].forEach((child) => {
        child.closest('div').classList.add('cards-child');
        child.closest('div').addEventListener('click', () => {
          child.querySelector('ul').classList.toggle('cards-show');
          child.querySelectorAll('p').forEach(p => {
            p.classList.toggle('cards-hidden');
          });
        })
      }) 
  })
}