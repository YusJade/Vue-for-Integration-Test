<template>
  <div class="container">
    <div class="main">
        <!-- 整个注册盒子 -->
      <div class="loginbox">
          <!-- 左侧的注册盒子 -->
          <div class="loginbox-in">
          <div class="userbox"> 
           <span class="iconfont">Ⅰ</span> 
           <input  class="user" id="user"   v-model="username" placeholder="你的昵称">
           </div>
          <br>
          <div class="pwdbox">
            <span class="iconfont">Ⅱ</span>
           <input  class="pwd" id ="password" type="password"  v-model="pwd" placeholder="你的密码">
           </div>
          <br>
          <div class="log-box">
            <RouterLink to="/login"><button class="register_btn">返回登录</button></RouterLink>
            <button class="login_btn" @click="register">Register</button>
          </div>
          <br>
     </div>
 
        <!-- 右侧的注册盒子 -->
         <div class="background">
            <div class="title">⌈注册系统 Register System⌋</div>
        </div>

      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import api from '../../request';
let username = "";
let pwd = "";
function register() {
  var data = JSON.stringify({
    "id": null,
    "username": username,
    "password": pwd,
    "real_name": null,
    "gender": null,
    "phone_number": null,
    "email": null,
    "max_borrow_days": null,
    "max_borrow_books": null,
    "create_at": null
  });
  
  var config = {
    method: 'post',
    url: '/register',
    headers: { 
      'User-Agent': 'Apifox/1.0.0 (https://apifox.com)',
      'Content-Type': 'application/json',
    },
    data: data
  };

  api(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
    let jsonObj = JSON.parse(JSON.stringify(response.data));
    if (jsonObj["user_password"] == "") {
      alert("用户名已存在喔")
    }
  })
  .catch(function (error) {
    console.log(error);
  });
}
</script>

<style scoped>

.loginbox{
    display:flex;
    position:absolute;
    width:800px;
    height:400px;
    top:40%;
    left:50%;
    transform:translate(-50%,-50%);
    box-shadow: 0 12px 16px 0  rgba(0,0,0,0.24), 0 17px 50px 0 #4E655D;
}
.loginbox-in{
     background-color:#08132d;
     width:240px;
}
.userbox{
    margin-top:120px ;
    height:30px;
     width:230px;
     display: flex;
     margin-left:25px;
}
.pwdbox{ 
    height:30px;
    width:225px;
    display: flex;
    margin-left:25px;
}

.background{
    width:570px;
    background-image:url('./img/Phigros-Assets-main/Secret Illumination.png');
    background-size:cover;
    font-family:sans-serif;
}
.title{
  margin-left: 20px;
  margin-top:370px;
  font-family: 'Fira Code';
  font-weight:bold;
  font-size:20px;
  color:#ebeaf0;
    
}
.title:hover{
     font-size:21px;
     transition: all 0.4s ease-in-out;
     cursor: pointer;
}
.uesr-text{
     position:left;
}
input{
    outline-style: none ;
    border: 0;
    border-bottom:1.4px solid #E9E9E9;
    background-color:transparent;
    height:20px;
    font-family:'SDK_SC_Web';
    font-size:15px;
    color:#445b53;
    font-weight:bold;
}
 /* input::-webkit-input-placeholder{
    color:#E9E9E9;
 } */
input:focus{
    border-bottom:2px solid #00fbe3;
    background-color:transparent;
     transition: all 0.2s ease-in;
     font-family:sans-serif;
    font-size:15px;
     color:#445b53;
     font-weight:bold;
     
}
input:hover{
    border-bottom:2px solid #d5b6ab;
    background-color:transparent;
     transition: all 0.2s ease-in;
     font-family:sans-serif;
    font-size:15px;
     color:#445b53;
     font-weight:bold;
     
}
 
input:-webkit-autofill {
  /* 修改默认背景框的颜色 */
 box-shadow: 0 0 0px 1000px  #011010 inset !important;
 /* 修改默认字体的颜色 */
 -webkit-text-fill-color: #445b53;
} 

input:-webkit-autofill::first-line {
  /* 修改默认字体的大小 */
 font-size: 15px;
 /* 修改默认字体的样式 */
 font-weight:bold;
 }
.log-box{
    font-size:12px;
    display: flex;
    justify-content: space-between ;
    width:190px;
    margin-left:30px;
    color:#4E655D;
    margin-top:-5px;
    align-items: center;
   
}

.log-box-text{
  color:#19b8a8;
  font-size:12px;
  font-family:'SDK_SC_Web';
  text-decoration:underline;
}

.login_btn{
  font-family: 'Fira Code';
  background-color: #2c3636; /* Green */
  border: none;
  color: #FAFAFA;
  padding: 5px 22px;
  text-align: center;
  text-decoration: none;
  font-size: 13px;
  border-radius: 5px;
  outline:none;
}

.login_btn:hover{
  background-color: #d5b6ab;
  box-shadow: 0 12px 16px 0 rgba(198, 170, 161, 0.24), 0 1px 5px 0 rgba(196, 164, 153,0.19);
  cursor: pointer;
  transition: all 0.2s ease-in;
}

.warn{
    margin-top:60px;
    /* margin-right:120px; */
    margin-left:-120px;
    margin-bottom: 5px;
     font-weight:bold;
    font-size:17px;
}

.register_btn{
  font-family:'SDK_SC_Web';
  background-color: transparent; /* Green */
  border: none;
  text-decoration: none;
  font-size: 12px;
  /* border-radius: 20px;   */
  color:#d6bcb3;
  font-size:12px;
  text-decoration:underline;
  display: flex;
  /* margin-left:25px; */
  outline:none;  
}

.register_btn:hover{
    font-weight:bold;
    cursor: pointer;
}
@font-face {
    font-family: "iconfont";
    src: url('./font/iconfont.eot');
    src: url('./font/iconfont.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('./font/iconfont.woff2') format('woff2'), url('./font/iconfont.woff') format('woff'), url('./font/iconfont.ttf') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
    url('./font/iconfont.svg#iconfont') format('svg');
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 20px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height:22px;
  color:#d1b6ad;
  margin-right:10px;
  margin-bottom:5px;
}

.icon-key:before {
    content: "\e775";
}

.icon-account:before {
    content: "\e817";
}
</style>