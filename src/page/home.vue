<template>
	<div class="i-container">
		<div class="sidebar">
			<div class="list-group">
				<a href="#" class="list-group-item active"><img src="../images/side-informance.png"/>日常巡检</a>
				<a href="#" class="list-group-item"><img src="../images/side-informance.png"/>配置管理</a>
				<a href="#" class="list-group-item"><img src="../images/side-informance.png"/>性能解析</a>
				<div class="list-group">
					<a href="#" class="list-group-item sub-sidebar">配置日常巡检目标</a>
					<a href="#" class="list-group-item sub-sidebar">配置日常巡检指标</a>
				</div>
			</div>
		</div>
		<div class="content clearfix">
			<div class="header"></div>
			<div class="substance">
				<h5>您现在的位置：配置管理 &gt; 配置日常巡检目标</h5>
				<div class="box">

				</div>
			</div>
			<div class="footer">
				<span>杭州美创科技有限公司版权所有 &copy;2018</span>
			</div>
		</div>
	</div>
</template>

<script>

export default {
	name: 'home',
	components: {

	},
	data: function () {
		return {

		}
	},
	created() {

	},
	methods:{
		
	},
	computed:{
		
	},
	mounted(){

	}
}
</script>

<style lang="less" scoped>
.content {
	margin-left: 240px;
}

.list-group-item {
	background: #222;
	color: #fff;
	border: none;
	border-radius: 0;
	text-align: left;
	&.active,
	&:hover,
	&:focus,
	&:active{
		background: #000;
		color: #fff;
	}

	&.sub-sidebar {
		padding-left: 40px;
		&:active {
			color: #5BC0DE;
		}
	}

	img {
		vertical-align: baseline;
		margin-right: 10px;
	}
}

.box {
	height: ~"calc(100% - 35px)";
}

</style>