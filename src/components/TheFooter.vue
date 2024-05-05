<template>
  <footer 
    class="footer" 
    :style="{
        'height': isContact ? 'calc(100vh - 85px)' : 'auto',
        'justifyContent': isContact ? 'center' : 'space-around',
        'padding-top': !(isHome && isContact) ? '10px' : '20px'
        }"
    >
    <h1 v-show="isHome">联系我们</h1>
    <div 
        v-show="isHome || isContact"
        class="contact"
        :style="{
            'flex': isContact ? '1' : 'none',
        }"
    >
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
    <p :style="{'padding': isHome || isContact ? '20px 0 10px 0' : '10px 0'}">
        Copyright © 2024.XX学校.教学示例
    </p>
  </footer>
</template>

<script>
export default {
    data: () => {
        return {
            isHome: true,
            isContact: false
        }
    },
    watch: {
        $route: {
            handler(to) {
                switch(to.name) {
                    case 'home':
                        this.isHome = true
                        this.isContact = false
                        break
                    case 'contact':
                        this.isContact = true
                        this.isHome = false
                        break
                    default:
                        this.isHome = false
                        this.isContact = false
                        break
                }
            },
            immediate: true
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
    box-sizing: border-box;
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
    }
}
</style>