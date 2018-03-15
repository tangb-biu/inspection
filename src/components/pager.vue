<template>
<div class="pagebar">
	每页显示&nbsp;<input type="number" class="form-control paged" min="1" v-model="pager.pageSize" @change="chPageSize"/>&nbsp;条 
	&nbsp;&nbsp;&nbsp;
	第&nbsp;<input type="number" class="form-control paged" min="1" v-model="pager.currentPage" @change="chCurrentPage"/>&nbsp;页
	&nbsp;&nbsp;&nbsp;
	共&nbsp;{{pager.totalPage}}&nbsp;页 
	&nbsp;&nbsp;&nbsp;
	<a class="btn btn-default" @click="(e) => this.changeCurrentPage(pager.currentPage - 1)" :disabled="pager.cuurentPage <= 1">
		<span class="glyphicon glyphicon-menu-left"></span>
	</a>
	<a class="btn btn-default" @click="(e) => this.changeCurrentPage(pager.currentPage + 1)" :disabled="pager.cuurentPage >= pager.totalPage">
		<span class="glyphicon glyphicon-menu-right"></span>
	</a>
</div>
</template>

<script>
export default {
	name: 'pager',
	props: {
		pager: {
			type: Object,
			default: function() {
				return {
					pageSize: 10,
					currentPage: 1,
					totalPage: 0,
					total: 0
				}
			}
		},
		changePageSize: {
			type: Function
		},
		changeCurrentPage: {
			type: Function
		}
	},
    data: function() {
      return {
		  pageSize: 10,
		  totalPage: 0,
		  currentPage: 1,
		  total: 0
      }
	},
	methods: {
		chPageSize(e) {
			let val = e.target.value;
			if(val < 1) {
				val = 1;
			}
			this.changePageSize(val);
		},
		chCurrentPage(e) {
			let val = e.target.value;
			if(val < 1) {
				val = 1;
			}
			if(val >= this.pager.totalPage) {
				return;
			}
			this.changePageSize(val);
		}
	},
    created(){
        
    },
    mounted() {

	}
}
</script>

<style lang="less" scoped>
.pagebar {
	float: right;
}

.paged {
	display: inline-block;
	width: 60px;
	border-radius: 2px;
}

.btn-default {
	border-radius: 2px;
}
</style>
