<template>
	<div class="i-container">
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
							<input type="password" class="form-control" placeholder="密码" v-model="password" @keyup="login" @input="handleInput" autocomplete="false"/>
						</div>
					</div>
						<p class="text-danger" style="line-height: 20px; height: 20px;">{{msg}}</p>
					<div class="form-group">
						<a href="javascript:;" class="btn btn-primary" @click="login" @keyup="login">登录</a>
					</div>
				</form>
			</div>
		</div>
		<!-- <div class="footer">
			<span>杭州美创科技有限公司 &nbsp; &copy;2005-2018 &nbsp; 版权所有</span>
		</div> -->
		<Footer></Footer>
	</div>
</template>

<script>
import { mapActions } from 'vuex';
import Header from 'components/header';
import Footer from 'components/footer';
export default {
	name: 'login',
	components: {
		Header,
		Footer,
	},
  	data: function() {
  		return {
			username: 'ADMIN',
			password: '',
			msg: ''  
  		}
  	},
  	methods: {
		login(e) {
			let { username, password } = this;
			if(e.type === 'click' || e.keyCode === 13) {
				//login(handleSuccess.bind(this), handleFail.bind(this));
				this.userLogin({username, password}).then(() => {
					this.$router.push({ path: '/home' });
				}).catch((data) => {
					this.msg = data['msg'];
				});
			}
		},
		handleInput() {
			this.msg = "";
		},
		...mapActions(['userLogin'])

  	},
    created(){

    }
}
</script>

<style lang="less" scoped>
@baseColor: #418dd9;
.column {
	display: inline-block;
	height: 100%;
	padding: 10px;
	float: left;

	&.left {
		width: 60%;
		background: url('../images/login-img.png') 70% center no-repeat;
		transition: width linear 0.5s;
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
	top: 30%;
	width: 25%;
	padding: 10px;
	transition: width linear 0.6s;
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

.content {
	top: 70px;
	height: ~"calc(100vh - 100px)";
	background-color: @baseColor;
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
		top: 20%;
		width: 70%;
		left: 15%
	}
}
</style>
