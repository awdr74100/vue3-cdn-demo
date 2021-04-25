/*
1. 可使用 ref、reactive 綁定 data
2. ref 可以綁任何型態 (只能完成淺層拷貝)
3. reactive 只能綁陣列、物件 (可進行深層拷貝)
4. watchEffect (類似 Vue2 Computer)
*/

const { ref, reactive, watch, watchEffect } = Vue;

const app = {
  setup() {
    const refObject = ref({ name: 'MiKe' });
    const reactiveObject = reactive({ name: 'Roya' });

    // watch(refObject, (val) => {
    //   console.log(val);
    // });
    // watch(reactiveObject, (val) => {
    //   console.log(val);
    // });
    watch(
      () => refObject.value.name,
      (val) => {
        console.log(val);
      },
    );
    watch(
      () => reactiveObject.name,
      (val) => {
        console.log(val);
      },
    );
    watchEffect(()=>{
      console.log(reactiveObject.name);
    })

    const submit = () => {
      refObject.value.name = 'MiKe!!!!';
      reactiveObject.name = 'Roya!!!!';
    };
    return { refObject, reactiveObject, submit };
  },
};

Vue.createApp(app).mount('#app');
