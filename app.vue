<template>
  <div>
    <NuxtPage/>
  </div>
</template>

<style lang="css">
@import url('https://fonts.googleapis.com/css2?family=Lalezar&display=swap');
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Lalezar", system-ui;
  letter-spacing: .1em;
}

:root {
  --first-color: #062740;
  --second-color: #F18500;
}

h2 {
  color: var(--second-color);
  margin-bottom: 30px;
  font-size: 3rem;
  text-align: center;
  line-height: 1em;
}

p {
  font-weight: 100;
  font-size: 1.1rem;
}
</style>