<template>
	<div class="i-container">
		<SideBar></SideBar>
		<div class="content clearfix">
			<HeaderItem></HeaderItem>
			<div class="substance">
				<h5>您现在的位置：配置管理 > 配置日常巡检目标</h5>
				<div class="box">
					<h3>配置日常巡检目标</h3>
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
							<thead>
								<tr>
									<th>序号</th>
									<th>业务系统</th>
									<th>实例名</th>
									<th>组件类型</th>
									<th>操作系统</th>
									<th>IP地址</th>
									<th style="width:100px; text-align: center">操作</th>
								</tr>
							</thead>
							<tbody>
								<tr v-for="(item, index) in targets" :key="index">
									<td>{{ index + 1 }}</td>
									<td>{{ item.business }}</td>
									<td>{{ item.instance }}</td>
									<td>{{ item.componentType }}</td>
									<td>{{ item.os }} </td>
									<td>{{ item.ip }}</td>
									<td>
										<a class="btn-img" title="编辑">
											<img src="../../images/edit.png" />
										</a>
										<a class="btn-img" title="删除">
											<img src="../../images/delete.png" />
										</a>
									</td>
								</tr>
							</tbody>
						</table>
						<div class="page-container clearfix">
							<Pager 
								:changePageSize="(val) => changePageSize(val)"
								:changeCurrentPage="(val) => changeCurrentPage(val)"
								:pager="pager"></Pager>
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
import Pager from 'components/pager';
import { mapGetters, mapActions } from 'vuex';
export default {
	name: 'targets',
	components: {
		SideBar,
		HeaderItem,
		FooterItem,
		Pager
	},
	data: function () {
		return {

		}
	},
	methods:{
		changePageSize(val) {
			let page = Object.assign({}, this.pager);
			page.pageSize = val;
			this.targetsLoad({params: page});
		},
		changeCurrentPage(val) {
			let page = Object.assign({}, this.pager);
			page.currentPage = val;
			this.targetsLoad({params: page});
		},
		...mapActions(['targetsLoad'])
	},
	created() {

	},
	computed:{
		...mapGetters({targets: 'getTargets', pager: 'getPager'})
	},
	mounted(){
		this.targetsLoad(this.pager);
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

.page-container {
	margin-top: -21px;
	padding: 10px;
	border:1px solid #ddd;
	border-top: none;
}

.btn-img {
	padding: 10px;
	cursor: pointer;
}

</style>