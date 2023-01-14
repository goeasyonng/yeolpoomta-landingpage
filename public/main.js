/*참고 사이트 : https://ko.javascript.info/searching-elements-dom
참고 사이트 : https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/const */
 
/*const : 블록 범위의 상수 선언, 상수값 재할당 불가 & 다시 선언 불가*/
/*document.querySelector : id 속성만 있다면 위치와 상관없이 document.querySelector(id)를 이용해 접근 가능,
                            단, 요소 id를 따서 자동으로 선언된 전역변수는 동일한 이름을 가진 변수가 선언 시 무용지물*/
/*addEventListener : 지정한 이벤트가 대상에 전달될 때마다 호출하는 함수(여기서는 클릭을 지정)*/
/*classList.toggle(String [, force ]) 
    1개의 인수만 있을 때 : 클래스 값 토글링, 즉 클래스 존재 시 제거 → false 반환(존재하지 않으면 클래스 추가하고 true 반환)
    2번째 인수가 있을 때 : 두 번쨰 인수가 true → 지정한 클래스 값 추가하고 false로 평가되면 제거*/

    const firebaseConfig = {
      apiKey: "AIzaSyD8a6Hll7YjTs0_aPUx6cNNnA1hSCzS8TM",
      authDomain: "yeolpoomta-977d9.firebaseapp.com",
      databaseURL: "https://yeolpoomta-977d9-default-rtdb.firebaseio.com",
      projectId: "yeolpoomta-977d9",
      storageBucket: "yeolpoomta-977d9.appspot.com",
      messagingSenderId: "165499323571",
      appId: "1:165499323571:web:b4cd07763d8a9f778c5cc6",
      measurementId: "G-ZE12GCR5X5"
    };
    
  firebase.initializeApp(firebaseConfig);
  database = firebase.database();
  
    const toogleBtn = document.querySelector('.navbar_toogleBtn');
    const menu = document.querySelector('.navbar_menu');
    const icons = document.querySelector('.navbar_icons');
     
    toogleBtn.addEventListener('click', () => {
        menu.classList.toggle('active');
        icons.classList.toggle('active');
    });
    

// 토스트
const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')
if (toastTrigger) {
  toastTrigger.addEventListener('click', () => {
    const toast = new bootstrap.Toast(toastLiveExample)

    toast.show()
  })
}