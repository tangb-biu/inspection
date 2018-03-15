<template>
  <div class="sidebar">
			<div class="logo">
				<img src="" alt="logo"/>
			</div>
			<div class="list-group">
				<a href="#/inspection" class="list-group-item active"><img src="../images/side-informance.png"/>日常巡检</a>
				<a href="#/performance" class="list-group-item"><img src="../images/side-informance.png"/>性能解析</a>
				<a href="javascript:void(0)" class="list-group-item"><img src="../images/side-informance.png"/>配置管理</a>
				<div class="list-group">
					<a href="#/config/targets" class="list-group-item sub-sidebar">配置日常巡检目标</a>
					<a href="#/config/items" class="list-group-item sub-sidebar">配置日常巡检指标</a>
				</div>
			</div>
		</div>
</template>

<script>
export default {
    name: 'sidebar',
    data: function() {
      return {

      }
    },
    created(){
        
    },
    mounted() {

    }
}
</script>

<style lang="less" scoped>
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

.logo {
	img {
		height: 70px;
		font-size: 30px;
		line-height: 70px;
		text-align: center;
		color: #fff;
	}
}
</style>
