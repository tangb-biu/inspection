<template>
	<div class="i-container">
		<SideBar></SideBar>
		<div class="content clearfix">
			<HeaderItem></HeaderItem>
			<div class="substance">
				<h5>您现在的位置：配置管理 > 配置日常巡检目标</h5>
				<div class="box">
					<h3>配置日常巡检目标</h3>
					<div class="clearfix">
						<div class="col-lg-3 col-md-3">
							<div class="input-group">
								<input type="text" class="form-control" placeholder="请输入搜索关键字" v-model="queryString">
								<span class="input-group-btn">
									<button class="btn btn-info" type="button" @click="searchTarget">
										<span class="glyphicon glyphicon-search" aria-hidden="true"></span>
									</button>
								</span>
							</div>
						</div>
						<div class="input-group col-lg-9 col-md-9">
							<a class="btn btn-info pull-right" @click="addHandle">添加</a>
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
									<td>{{ item.bussiness }}</td>
									<td>{{ item.instance }}</td>
									<td>{{ item.componentType }}</td>
									<td>{{ item.os }} </td>
									<td>{{ item.ip }}</td>
									<td>
										<a class="btn-img" title="编辑" @click="() => updateHandle(item)">
											<img src="../../images/edit.png" />
										</a>
										<a class="btn-img" title="删除" @click="() => deleteHandle(item.id)">
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
		<Modal :show="show" :couldNext="canSave" :okHandle="addTarget" :cancleHandle="formatModal" :modalTitle="modalTitle">
			<form class="form-horizontal">
				<div class="form-group">
					<div class="clearfix">
						<label class="col-md-3 control-label">组件类型：</label>
						<div class="col-md-9">
							<select class="form-control" v-model="targetObj.componentType.value" @change="() => validateVal('instance', targetObj.instance.value)">
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
							<input type="text" class="form-control" placeholder="业务名称" v-model="targetObj.business.value" @change="() => validateVal('business', targetObj.business.value)">
							<p class="text-danger err-place">{{targetObj.business.tips}}</p>
						</div>
					</div>
				</div>
				<div class="form-group">
					<div class="clearfix">
						<label class="col-md-3 control-label">数据库实例名：</label>
						<div class="col-md-9">
							<input type="text" class="form-control" placeholder="数据库实例名" v-model="targetObj.instance.value" @input="() => validateVal('instance', targetObj.instance.value)">
							<p class="text-danger err-place">{{targetObj.instance.tips}}</p>
						</div>
					</div>
				</div>
				<div class="form-group">
					<div class="clearfix">
						<label class="col-md-3 control-label">操作系统：</label>
						<div class="col-md-9">
							<select class="form-control" placeholder="操作系统" v-model="targetObj.os.value" @change="() => validateVal('os', targetObj.os.value)">
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
							<input type="text" class="form-control" placeholder="IP地址" v-model="targetObj.ip.value" @input="() => validateVal('ip', targetObj.ip.value)">
							<p class="text-danger err-place">{{targetObj.ip.tips}}</p>
						</div>
					</div>
				</div>
				<div class="form-group">
					<div class="clearfix">
						<label class="col-md-3 control-label">操作系统用户名：</label>
						<div class="col-md-9">
							<input type="text" class="form-control" placeholder="操作系统用户名" v-model="targetObj.osUname.value" @input="() => validateVal('osPwd', targetObj.osUname.value)">
							<p class="text-danger err-place">{{targetObj.osUname.tips}}</p>
						</div>
					</div>
				</div>
				<div class="form-group">
					<div class="clearfix">
						<label class="col-md-3 control-label">操作系统密码：</label>
						<div class="col-md-9">
							<input type="password" class="form-control" placeholder="操作系统密码" v-model="targetObj.osPwd.value" @input="() => validateVal('osPwd', targetObj.osPwd.value)">
							<p class="text-danger err-place">{{targetObj.osPwd.tips}}</p>
						</div>
					</div>
				</div>
				<div class="form-group">
					<div class="clearfix">
						<label class="col-md-3 control-label">SSH端口：</label>
						<div class="col-md-9">
							<input type="text" class="form-control" placeholder="SSH端口" v-model="targetObj.sshPort.value" @input="() => validateVal('dbType', targetObj.sshPort.value)">
							<p class="text-danger err-place">{{targetObj.sshPort.tips}}</p>
						</div>
					</div>
				</div>
				<div class="form-group">
					<div class="clearfix">
						<label class="col-md-3 control-label">数据库类型：</label>
						<div class="col-md-9">
							<input type="text" class="form-control" placeholder="数据库类型" v-model="targetObj.dbType.value" @input="() => validateVal('dbType', targetObj.dbType.value)">
							<p class="text-danger err-place">{{targetObj.dbType.tips}}</p>
						</div>
					</div>
				</div>
				<div class="form-group">
					<div class="clearfix">
						<label class="col-md-3 control-label">数据库用户名：</label>
						<div class="col-md-9">
							<input type="text" class="form-control" placeholder="数据库用户名" v-model="targetObj.dbUname.value" @input="() => validateVal('dbUname', targetObj.dbUname.value)">
							<p class="text-danger err-place">{{targetObj.dbUname.tips}}</p>
						</div>
					</div>
				</div>
				<div class="form-group">
					<div class="clearfix">
						<label class="col-md-3 control-label">数据库密码：</label>
						<div class="col-md-9">
							<input type="password" class="form-control" placeholder="数据库密码" v-model="targetObj.dbPwd.value" @input="() => validateVal('dbPwd', targetObj.dbPwd.value)">
							<p class="text-danger err-place">{{targetObj.dbPwd.tips}}</p>
						</div>
					</div>
				</div>
				<div class="form-group">
					<div class="clearfix">
						<label class="col-md-3 control-label">数据库端口：</label>
						<div class="col-md-9">
							<input type="text" class="form-control" placeholder="数据库端口" v-model="targetObj.dbPort.value" @input="() => validateVal('dbPort', targetObj.dbPort.value)">
							<p class="text-danger err-place">{{targetObj.dbPort.tips}}</p>
						</div>
					</div>
				</div>
			</form>
		</Modal>

		<Modal :show="tipsShow" :couldNext="true" :okHandle="okDelete" :cancleHandle="formatModal" :modalTitle="modalTitle">
			<h4 class="text-center">您确定要删除这条数据吗？</h4>
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
			tipsShow: false, // 信息提示框
			modalTitle: "温馨提示",
			canSave: false,
			targetId: "",
			queryString: '',
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
		backData() {
			return {
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
		},
		changePageSize(val) {
			let page = Object.assign({}, this.pager);
			page.pageSize = val;
			this.targetsLoad({params: page, that: this});
		},
		changeCurrentPage(val) {
			let page = Object.assign({}, this.pager);
			page.currentPage = val;
			this.targetsLoad({params: page, that: this});
		},
		validateVal(type, val) {
			if(type === 'ip') {
				let flag = validator.isIP(val, 4);
				if(!flag) {
					this.targetObj[type]['tips'] = "IP地址格式不合法";
					this.targetObj[type]['valid'] = false;
					return;
				}
				this.targetObj[type]['tips'] = "";
				this.targetObj[type]['valid'] = true;
			} else if (type.indexOf("Port") > -1) {
				let flag = validator.isPort(val.trim());
				if(!flag) {
					this.targetObj[type]['tips'] = "端口格式不合法";
					this.targetObj[type]['valid'] = false;
					return;
				}
				this.targetObj[type]['tips'] = "";
				this.targetObj[type]['valid'] = true;
			} else {
				let val = this.targetObj[type]['value'];
				if(validator.isEmpty(val.trim())) {
					this.targetObj[type]['tips'] = "此位置不能为空";
					this.targetObj[type]['valid'] = false;
				} else {
					this.targetObj[type]['tips'] = "";
					this.targetObj[type]['valid'] = true;
				}
			}



			for(let item in this.targetObj) {
				if(!this.targetObj[item]['valid']) {
					this.canSave = false;
					return;
				}
			}

			this.canSave = true;

		},

		formatModal() {
			this.show = false;
			this.tipsShow = false;
			this.targetObj = this.backData();
		},
		getObj() {
			let target = (function(obj){
				let o = {};
				for(let i in obj) {
					o[i] = obj[i]['val'];
				}
				return o;
			}(this.targetObj));
			return target;
		},
		addTarget() {
			if(!this.canSave) {
				return;
			}

			if(this.targetId) {
				this.updateTarget(this.targetId);
				return;
			};
			let target = this.getObj();
			target['that'] = this;
			this.saveTarget(target);
		},

		addHandle() {
			this.modalTitle = "添加巡检目标";
			this.targetObj = this.backData();
			this.show = true;
		},

		updateHandle(item) {
			this.modalTitle = "更新巡检目标";
			this.targetId = item.id;
			let target = this.getObj();
			for(var i in this.targetObj) {
				this.targetObj[i]['value'] = target[i];
				this.targetObj[i]['valid'] = true;
				this.canSave = true;
			}
			this.show = true;
		},

		deleteHandle(id) {
			this.targetId = id;
			this.tipsShow  = true;	
		},

		okDelete() {
			let target = {
				id: this.targetId,
				that: this
			};
			this.deleteTarget(target);
		},

		searchTarget() {
			let queryString = this.queryString.trim();
			let query = Object.assign({}, this.pager);
			query['query'] = queryString;
			query['that'] = this;
			query.currentPage = 1; 
			this.targetsLoad(query);
		},
		...mapActions(['targetsLoad', 'saveTarget', 'updateTarget', 'deleteTarget'])
	},
	created() {

	},
	computed:{
		...mapGetters({targets: 'getTargets', pager: 'getPager'})
	},
	mounted(){
		this.searchTarget();
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