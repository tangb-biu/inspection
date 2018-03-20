<template>
	<div class="i-container">
		<SideBar></SideBar>
		<div class="content clearfix">
			<HeaderItem></HeaderItem>
			<div class="substance">
				<h5>您现在的位置：<span class="text-info">性能解析</span></h5>
				<div class="box">
					<h3>性能解析</h3>
					<div style="width: 30%;">
						<div class="input-group">
							<input type="text" class="form-control" placeholder="请输入业务系统名称" v-model="queryString">
							<span class="input-group-btn">
								<button class="btn btn-info" type="button" @click="getTargets">
									<span class="glyphicon glyphicon-search" aria-hidden="true"></span>
								</button>
							</span>
						</div>
					</div>
					<div class="table-container">
						<table class="table table-bordered">
							<thead>
								<tr>
									<th>
										<div class="checkbox">
											<label>
												<input type="checkbox">全选
											</label>
										</div>
									</th>
									<th>业务系统</th>
									<th>实例名</th>
									<th>操作系统</th>
									<th>IP地址</th>
									<th>性能分析时间</th>
									<th>总的解析项</th>
									<th>异常</th>
									<th>状态</th>
								</tr>
							</thead>
							<tbody>
								<tr v-for="(item, index) in targets" :key="index">
									<td>
										<div class="checkbox">
											<label>
												<input type="checkbox" @change="(e) => changeChecked(item)">全选
											</label>
										</div>
									</td>
									<td>{{ item.bussiness }}</td>
									<td>{{ item.instance }}</td>
									<td>{{ item.os }}</td>
									<td>{{ item.ip }}</td>
									<td>{{ item.parseTime }}</td>
									<td>{{ item.totals }}</td>
									<td>{{ item.exceptions }}</td>
									<td>{{ item.status }}</td>
								</tr>
							</tbody>
						</table>
					</div>
					<div class="clearfix" style="padding-top: 10px">
						<a class="btn btn-info pull-right" @click="gotoParse">去解析</a>
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
import { mapActions } from 'vuex';
export default {
	name: 'inspection',
	components: {
		SideBar,
		HeaderItem,
		FooterItem
	},
	data: function () {
		return {
			queryString: "",
			targets: []
		}
	},
	created() {
		
	},
	methods:{
		getTargets() {
			let config = {
				query: this.queryString,
				that: this
			}
			this.getParseList(config).then((data) => {
				this.targets = data['data'];
			});
			
		},
		changeChecked(item) {
			item.status = !item.status;
		},

		gotoParse() {
			this.$router.push("/performance/parse");
		},
		...mapActions(['getParseList'])
	},
	computed:{
		
	},
	mounted(){
		this.getTargets();
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
	height: ~"calc(100% - 150px)";
	overflow: auto;
	margin-top: 15px;
	border: 1px solid #ccc;
}

table {
	margin-bottom: 0px;
	th,
	td {
		padding-left: 10px;
	}
}

.checkbox {
	margin: 0;
}
</style>