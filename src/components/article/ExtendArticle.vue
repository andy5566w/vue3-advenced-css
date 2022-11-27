<template>
  <article>
    <p class="cut-off">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam fugit
      iste nostrum tempore? Ab adipisci aliquam blanditiis corporis cupiditate
      dolor, error est excepturi fugit incidunt inventore ipsum laudantium
      libero nemo placeat quia quo repellat repudiandae sed suscipit vel velit
      voluptas. Accusamus adipisci, aliquid animi at cumque distinctio,
      expedita, facere itaque laborum magnam modi molestiae obcaecati officiis
      praesentium reiciendis repellat repellendus repudiandae soluta tempora
      tempore ullam unde veniam. Adipisci aliquam architecto aut dicta dolores
      eligendi expedita ipsum magnam quam unde. Accusantium aperiam at dicta
      enim et magni maxime mollitia neque nulla perferendis possimus, quidem
      sequi ullam veniam veritatis. Distinctio dolore eos expedita quidem.
      Accusamus alias asperiores, at aut dignissimos magnam maiores perspiciatis
      quisquam similique sit veritatis voluptatem? Aut dolorum fugiat hic iusto
      molestiae numquam quisquam sed velit. Ab accusantium ad alias aliquam
      animi aperiam asperiores assumenda autem commodi deserunt dignissimos
      dolorem, dolorum est eveniet in iste itaque iure magni maiores minus nam
      nihil nostrum odit perspiciatis porro quas quia repellat rerum sapiente
      temporibus! Ad, assumenda commodi enim laborum libero, maiores minima modi
      nam obcaecati placeat sit totam veniam voluptates. Aliquam at atque,
      deserunt doloremque earum est et facilis harum in ipsam iste, minima modi
      molestias nisi nobis possimus, quaerat ullam.
    </p>
    <input class="expand-button" type="checkbox" />
  </article>
</template>

<script>
export default {
  name: 'ExtendArticle',
}
</script>

<style scoped lang="scss">
article {
  width: 600px;
}
.cut-off {
  --max-lines: 3;
  --line-height: 1.4;
  //display: -webkit-box;
  position: relative;
  max-height: calc(var(--max-lines) * 1em * var(--line-height));
  overflow: hidden;
  line-height: var(--line-height);
  //-webkit-box-orient: vertical;
  //-webkit-line-clamp: var(--max-lines);

  &:has(+ .expand-button:not(:checked)):before {
    position: absolute;
    bottom: 0;
    left: 0;
    background: linear-gradient(to bottom, transparent, #242424);
    width: 100%;
    height: calc(1em * var(--line-height));
    content: '';
  }

  &:has(+ .expand-button:checked) {
    max-height: none;
  }
}

.expand-button {
  appearance: none;
  cursor: pointer;
  margin-top: 1rem;
  border: 1px solid black;
  border-radius: 8px;
  padding: 0.25rem 0.5rem;

  &:hover {
    background-color: #cccc;
  }

  &:before {
    content: 'Expand';
  }
  &:checked:before {
    content: 'Collapse';
  }
}
</style>
