<template>
  <footer>
    <div class="logotype">
      <img
        src="../assets/logo-purple.svg"
        alt="logotype" />
    </div>
    <small>2023 &copy; All Rights Reserved</small>
  </footer>
</template>

<script>
export default {
  name: 'footer-component',
};
</script>

<style>
footer {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 16px;
  margin-top: 80px;
  background: var(--Preto, #1b1b1b);
  box-shadow: 0px -16px 50px 0px rgba(0, 0, 0, 0.15);
}
footer .logotype {
  width: 36px;
  height: 40px;
  flex-shrink: 0;
}
</style>
