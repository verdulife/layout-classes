export function InputSection() {
  return /* html */ `
    <section class="col">
      <h3>input / select / textarea</h3>

      <article class="row">
        <input type="text" placeholder="no class" />
      </article>

      <article class="row">
        <input class="disabled" type="text" placeholder=".disabled" disabled />
        <input class="outline" type="text" placeholder=".outline" />
        <input class="underline" type="text" placeholder=".underline" />
        <input class="outline round" type="text" placeholder=".round" />
      </article>

      <article class="row">
        <input class="outline -100" type="text" placeholder=".outline .-100" />
        <input class="underline -200" type="text" placeholder=".underline .-200" />
        <input class="outline -300" type="text" placeholder=".outline .-300" />
        <input class="underline -400" type="text" placeholder=".underline .-400" />
        <input class="outline -500" type="text" placeholder=".outline .-500" />
        <input class="underline -600" type="text" placeholder=".underline .-600" />
        <input class="outline -700" type="text" placeholder=".outline .-700" />
        <input class="underline -800" type="text" placeholder=".underline .-800" />
        <input class="outline -900" type="text" placeholder=".outline .-900" />
      </article>
    </section>

    <style>
      section {
        width: 1200px;
        margin: 0.5em auto;
        gap: 1.5rem;
        background-color: var(--c-neutral-100);
        padding: 2em;
      }
      
      article {
        gap: 1.5rem;
      }
    </style>
  `;
}
