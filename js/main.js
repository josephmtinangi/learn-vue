Vue.component('message', {
  props: ['title', 'body'],
  template: `
    <article class="message">
      <div class="message-header">
        <p>{{ title }}</p>
        <button class="delete"></button>
      </div>
      <div class="message-body">
        {{ body }}  
      </div>
    </article>
    `
});

new Vue({
  el: '#root'
});