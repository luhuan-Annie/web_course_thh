<template>
  <footer 
    class="footer" 
    :style="{
        'height': isContact ? 'calc(100vh - 85px)' : 'auto',
        'justifyContent': isContact ? 'center' : 'space-around'
        }"
>
    <h1 v-show="!isContact">联系我们</h1>
    <div class="contact">
        <form action="#">
            <input type="text" placeholder="姓名">
            <input type="number" placeholder="电话">
            <input type="email" placeholder="邮箱">
            <textarea name="" id="" cols="30" rows="10" placeholder="留言"></textarea>
            <button>提交</button>
        </form>

        <ul class="contact-info">
            <li>地址:xx.xx.xx</li>
            <li>电话:123456</li>
            <li>邮箱:123456@163.com</li>
        </ul>
    </div>
    <p v-show="!isContact">
        Copyright © 2024.XX学校.教学示例
    </p>
  </footer>
</template>

<script>
export default {
    data: () => {
        return {
            isContact: false
        }
    },
    watch: {
        $route(to) {
            if(to.name === 'contact') {
                this.isContact = true
                return
            }

            this.isContact = false
        }
    }
}
</script>

<style lang='less' scoped>
ul li{
    list-style: none;
}
.footer{
    display: flex;
    flex-direction: column;
    width: 100%;
    color: #fff;
    padding: 20px 0px 10px 0px;
    background-color: #252525;
    h1{
        padding: 0 0 20px 100px;
    }
    .contact{
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-around;
        padding: 0 200px;
        
        form{
            display: flex;
            flex-flow: column nowrap;
            justify-content: space-around;
            align-items: center;
            input, textarea{
                width: 450px;
                height: 40px;
                color: #fff;
                background: transparent;
                border: none;
                border-bottom: 1px solid #fff;
                padding-left: 15px;
                margin-bottom: 20px;
            }
            input:focus, textarea:focus{
                outline: none;
                // border-bottom: 1px solid #fff;
            }
            input::-webkit-outer-spin-button,
            input::-webkit-inner-spin-button {
                -webkit-appearance: none;
            }
            input[type="number"]{
                -moz-appearance: textfield;
            }
            textarea{
                line-height: 40px;
            }
            button{
                width: 150px;
                height: 40px;
                background-color: #6aabff;
                color: #fff;
                border: none;
                border-radius: 4px;
                cursor: pointer;
                margin-top: 20px;
            }
        }
        ul{
            width: 400px;
            display: flex;
            flex-flow: column nowrap;
            justify-content: space-around;
            li{
                padding: 20px 0px;
            }
            align-self: center;
        }
    }
    p{
        text-align: center;
        padding: 20px 0 10px 0;
    }
}
</style>