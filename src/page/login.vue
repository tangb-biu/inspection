<template>
	<div class="login-container">
		<div class="header"></div>
		<div class="content clearfix">
			<div class="column left"></div>
			<div class="column right">
				<form class="form-horizontal login-form">
					<div class="form-group">
						<p class="text-center login-form-title">用户登录</p>
					</div>
					<div class="form-group">
						<div class="input-group input-group-md">
							<span class="input-group-addon user"></span>
							<input type="text" class="form-control" placeholder="账号" disabled="true" v-model="username"/>
						</div>
					</div>
					<div class="form-group">
						<div class="input-group input-group-md">
							<span class="input-group-addon passwd"></span>
							<input type="password" class="form-control" placeholder="密码" v-model="password"/>
						</div>
					</div>
					<div class="form-group">
						<p class="text-danger"></p>
					</div>
					<div class="form-group">
						<a href="javascript:;" class="btn btn-primary" @click="login" @keyup="login">登录</a>
					</div>
				</form>
			</div>
		</div>
		<div class="footer">
			<span>杭州美创科技有限公司 &nbsp; &copy;2005-2018 &nbsp; 版权所有</span>
		</div>
	</div>
</template>

<script>
import common from '@/utils/common'
export default {
	name: 'login',
  	data: function() {
  		return {
			username: 'ADMIN',
  			password: ''
  		}
  	},
  	methods: {
  		checkCode() {
  			let code = common.trim(this.vcode);
  			const vcode = this.$store.state.vcode;
  			if(code === vcode) {
  				this.$router.push({ path: '/home' });
  			}
		},
		login(e) {
			if(e.keyCode === 13) {
				
			}
		}  
  	},
    created(){

    }
}
</script>

<style lang="less" scoped>
@baseColor: #418dd9;
.login-container {
	position: absolute;
	width: 100vw;
	height: 100vh;
	.header {
		height: 70px;
	}
	.content {
		top: 70px;
		height: ~"calc(100vh - 100px)";
		padding: 20px;
		background-color: @baseColor;
	}

	.footer {
		bottom: 0px;
		height: 30px;
		width: 100%;
		line-height: 30px;
		text-align: center;
	}

	.copyright {
		font-size: 12px;
	}
}

.column {
	display: inline-block;
	height: 100%;
	padding: 10px;
	float: left;

	&.left {
		width: 60%;
		background: url('../images/login-img.png') 70% center no-repeat;
	}

	&.right {
		width: 40%;
	}
}
.input-group-addon{
	&.user {
		background: #ddd url('../images/user.png') no-repeat center;
	}

	&.passwd {
		background: #ddd url('../images/passwd.png') no-repeat center;
	}
}

.login-form {
	background-color: white;
	position: absolute;
	top: 20%;
	width: 25%;
	padding: 10px;
	.form-group {
		padding: 5px 45px;
	}

	.login-form-title {
		font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
		font-size: 16px;
		font-weight: 400;
	}

	.btn-primary {
		width: 100%;
	}
}

@media screen and (max-width: 800px) {
	.column{
		&.left {
			width: 0;
			padding: 0px;
		}
		&.right {
			width: 100%;
		}
	}

	.login-form {
		width: 70%;
		left: 15%
	}
}
</style>
