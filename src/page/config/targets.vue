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
		<Modal :show="show">
			<form class="form-horizontal">
				<div class="form-group">
					<div class="clearfix">
						<label class="col-md-3 control-label">组件类型：</label>
						<div class="col-md-9">
							<select class="form-control" v-model="targetObj.componentType.value">
								<option value="1">数据库</option>
								<option value="2">中间件</option>
							</select>
							<p class="text-danger err-place">{{targetObj.componentType.tips}}</p>
						</div>
					</div>
				</div>
				<div class="form-group">
					<div class="clearfix">
						<label class="col-md-3 control-label">业务名称：</label>
						<div class="col-md-9">
							<input type="text" class="form-control" placeholder="业务名称" v-model="targetObj.business.value" @input="() => {

							}">
							<p class="text-danger err-place">{{targetObj.business.tips}}</p>
						</div>
					</div>
				</div>
				<div class="form-group">
					<div class="clearfix">
						<label class="col-md-3 control-label">数据库实例名：</label>
						<div class="col-md-9">
							<input type="text" class="form-control" placeholder="数据库实例名" v-model="targetObj.instance.value">
							<p class="text-danger err-place">{{targetObj.instance.tips}}</p>
						</div>
					</div>
				</div>
				<div class="form-group">
					<div class="clearfix">
						<label class="col-md-3 control-label">操作系统：</label>
						<div class="col-md-9">
							<select class="form-control" placeholder="操作系统" v-model="targetObj.os.value">
								<option value="linux">Linux</option>
								<option value="windows">Windows</option>
								<option value="aix">AIX</option>
								<option value="hp-unix">HP-UNIX</option>
							</select>
							<p class="text-danger err-place">{{targetObj.os.tips}}</p>
						</div>
					</div>
				</div>
				<div class="form-group">
					<div class="clearfix">
						<label class="col-md-3 control-label">IP地址：</label>
						<div class="col-md-9">
							<input type="text" class="form-control" placeholder="IP地址" v-model="targetObj.ip.value">
							<p class="text-danger err-place">{{targetObj.ip.tips}}</p>
						</div>
					</div>
				</div>
				<div class="form-group">
					<div class="clearfix">
						<label class="col-md-3 control-label">操作系统用户名：</label>
						<div class="col-md-9">
							<input type="text" class="form-control" placeholder="操作系统用户名" v-model="targetObj.osUname.value">
							<p class="text-danger err-place">{{targetObj.osUname.tips}}</p>
						</div>
					</div>
				</div>
				<div class="form-group">
					<div class="clearfix">
						<label class="col-md-3 control-label">操作系统密码：</label>
						<div class="col-md-9">
							<input type="text" class="form-control" placeholder="操作系统密码" v-model="targetObj.osPwd.value">
							<p class="text-danger err-place">{{targetObj.osPwd.tips}}</p>
						</div>
					</div>
				</div>
				<div class="form-group">
					<div class="clearfix">
						<label class="col-md-3 control-label">SSH端口：</label>
						<div class="col-md-9">
							<input type="text" class="form-control" placeholder="SSH端口" v-model="targetObj.sshPort.value">
							<p class="text-danger err-place">{{targetObj.sshPort.tips}}</p>
						</div>
					</div>
				</div>
				<div class="form-group">
					<div class="clearfix">
						<label class="col-md-3 control-label">数据库类型：</label>
						<div class="col-md-9">
							<input type="text" class="form-control" placeholder="数据库类型" v-model="targetObj.dbType.value">
							<p class="text-danger err-place">{{targetObj.dbType.tips}}</p>
						</div>
					</div>
				</div>
				<div class="form-group">
					<div class="clearfix">
						<label class="col-md-3 control-label">数据库用户名：</label>
						<div class="col-md-9">
							<input type="text" class="form-control" placeholder="数据库用户名" v-model="targetObj.dbUname.value">
							<p class="text-danger err-place">{{targetObj.dbUname.tips}}</p>
						</div>
					</div>
				</div>
				<div class="form-group">
					<div class="clearfix">
						<label class="col-md-3 control-label">数据库密码：</label>
						<div class="col-md-9">
							<input type="text" class="form-control" placeholder="数据库密码" v-model="targetObj.dbPwd.value">
							<p class="text-danger err-place">{{targetObj.dbPwd.tips}}</p>
						</div>
					</div>
				</div>
				<div class="form-group">
					<div class="clearfix">
						<label class="col-md-3 control-label">数据库端口：</label>
						<div class="col-md-9">
							<input type="text" class="form-control" placeholder="数据库端口" v-model="targetObj.dbPort.value">
							<p class="text-danger err-place">{{targetObj.dbPort.tips}}</p>
						</div>
					</div>
				</div>
			</form>
		</Modal>
	</div>
</template>

<script>
import SideBar from 'components/sidebar';
import FooterItem from 'components/footer';
import HeaderItem from 'components/header';
import Pager from 'components/pager';
import Modal from 'components/modal';
import { mapGetters, mapActions } from 'vuex';
import validator from 'validator'
export default {
	name: 'targets',
	components: {
		SideBar,
		HeaderItem,
		FooterItem,
		Pager,
		Modal
	},
	data: function () {
		return {
			show: false,
			targetObj: {
				componentType: {
					value: 1,
					valid: true,
					tips: ''
				},
				business: {
					value: '',
					valid: false,
					tips: ''
				},
				instance: {
					value: '',
					valid: false,
					tips: ''
				},
				os: {
					value: 'linux',
					valid: true,
					tips: ''
				},
				ip: {
					value: '',
					valid: false,
					tips: ''
				},
				osUname: {
					value: '',
					valid: false,
					tips: ''
				},
				osPwd: {
					value: '',
					valid: false,
					tips: ''
				},
				sshPort: {
					value: 22,
					valid: true,
					tips: ''
				},
				dbType: {
					value: 'oracle',
					valid: true,
					tips: ''
				},
				dbUname: {
					value: '',
					valid: false,
					tips: ''
				},
				dbPwd: {
					value: '',
					valid: false,
					tips: ''
				},
				dbPort: {
					value: 1521,
					valid: true,
					tips: ''
				}
			}
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
		validateVal(type, val) {

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

		setTimeout(() => {
			this.show = true;
		}, 2000);
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

.form-group {
	margin-bottom: -5px;
}

.err-place {
	height: 20px;
}
</style>