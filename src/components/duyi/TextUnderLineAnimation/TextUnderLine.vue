<template>
  <h2>
    <span class="underline-animation">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, ad beatae,
      consequuntur doloremque earum, ipsum itaque modi mollitia nam perferendis
      quaerat quis quos rem voluptate voluptatibus! Ad commodi debitis deserunt
      dicta distinctio doloribus, eos esse eveniet excepturi facilis, fugiat
      harum hic impedit laboriosam maiores omnis porro quae quod sint voluptas?
      Aperiam architecto commodi dolorem ea esse praesentium quidem sit
      voluptatibus voluptatum? Accusamus alias aliquid iusto laudantium placeat
      sunt suscipit, tenetur? Animi asperiores atque cum dignissimos, ea et
      exercitationem facere fuga itaque iure iusto maxime molestias, optio
      perspiciatis possimus provident quae quaerat quas quidem quo ratione
      reprehenderit, sed sint sit tempore temporibus veritatis voluptate! A
      atque culpa dolores ea eaque, earum error illo iusto magnam natus numquam
      officiis, optio perferendis recusandae repellendus sed veritatis. Ab
      corporis earum eveniet harum quas qui sit? Error eveniet excepturi ipsam
      maxime rem. Beatae dolore ipsam nobis perspiciatis qui, soluta vel
      veritatis. Atque autem commodi debitis dolore doloribus eligendi
      exercitationem modi, nesciunt odit optio provident quisquam ratione
      repellendus, repudiandae rerum sapiente similique suscipit tempora, ut
      veritatis! Eaque inventore ipsam omnis quas, qui quia sequi similique
      voluptas! Aspernatur commodi cum cumque dicta doloremque dolores ipsa
      ipsam labore laboriosam mollitia nesciunt nisi nobis omnis quas,
      repudiandae sequi voluptatibus!
    </span>
  </h2>
</template>
<script setup></script>

<style scoped lang="scss">
.underline-animation {
  --background-color: #646cff;
  transition: background-size 1s;
  background: linear-gradient(to right, var(--background-color), #fff) no-repeat
    right bottom;
  background-size: 0 2px;

  &:hover {
    background-position: left bottom;
    background-size: 100% 2px;
  }
}
</style>
