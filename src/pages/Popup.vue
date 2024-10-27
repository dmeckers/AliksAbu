<script lang="ts" setup>
console.log("Hello from the popup!");

function startTrippin() {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    // Выполняем скрипт на активной вкладке
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      function: () =>
        (window.location.href =
          "https://www.aliexpress.com/p/address-manage/index.html"),
    });
  });
}
</script>

<template>
  <div>
    <img src="/icon-with-shadow.svg" />
    <h1>Alee-xpress abuser 2024</h1>
    <p>Made by: <code>Metz</code> & <code>Deh</code></p>

    <button @click="startTrippin">Lets goo</button>
  </div>
</template>

<style>
html,
body {
  width: 300px;
  height: 400px;
  padding: 0;
  margin: 0;
}

body {
  background-color: rgb(36, 36, 36);
}

body > div {
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  justify-content: center;
}

img {
  width: 200px;
  height: 200px;
}

h1 {
  font-size: 18px;
  color: white;
  font-weight: bold;
  margin: 0;
}

p {
  color: white;
  opacity: 0.7;
  margin: 0;
}

code {
  font-size: 12px;
  padding: 2px 4px;
  background-color: #ffffff24;
  border-radius: 2px;
}

button {
  padding: 10px 20px;
  margin-top: 10px;
  color: white;
  background-color: #ffffff24;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #0056b3;
}
</style>
