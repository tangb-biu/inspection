<template>
	<div class="i-container">
		<SideBar></SideBar>
		<div class="content clearfix">
			<HeaderItem></HeaderItem>
			<div class="substance">
				<h5>您现在的位置：配置管理 > 配置日常巡检指标</h5>
				<div class="box">
					<h3>配置日常巡检指标</h3>
					<div style="width: 30%;">
						<div class="input-group">
							<input type="text" class="form-control" placeholder="请输入搜索关键字">
							<span class="input-group-btn">
								<button class="btn btn-info" type="button">
									<span class="glyphicon glyphicon-search" aria-hidden="true"></span>
								</button>
							</span>
						</div>
					</div>
					<div class="table-container">
						<table class="table table-bordered">
							<tr>
								<th>
									<div class="checkbox">
										<label>
											<input type="checkbox">全选
										</label>
									</div>
								</td>
								<th>
									业务系统
								</th>
								<th>
									实例名
								</th>
								<th>
									操作系统
								</th>
								<th>
									IP地址
								</th>
								<th>
									上次巡检时间
								</th>
								<th>
									下次巡检时间
								</th>
								<th>
									总巡检项
								</th>
								<th>
									异常
								</th>
								<th>
									状态
								</th>
							</tr>
						</table>
						<div class="clearfix">
							<a class="btn btn-info pull-right">去巡检</a>
						</div>
					</div>
				</div>
			</div>
			<FooterItem></FooterItem>
		</div>
	</div>
</template>

<script>
import SideBar from 'components/sidebar';
import FooterItem from 'components/footer';
import HeaderItem from 'components/header';
import { mapGetters } from 'vuex';
export default {
	name: 'items',
	components: {
		SideBar,
		HeaderItem,
		FooterItem
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

.box {
	height: ~"calc(100% - 35px)";
}

.table-container {
	height: ~"calc(100% - 90px)";
	padding:  20px 0;
}

table {
	max-height: ~"calc(100% - 60px)";
	th,
	td {
		padding-left: 10px;
	}
}
</style>