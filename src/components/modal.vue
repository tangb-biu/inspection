<template>
<div :class="{'modal': true, 'fade': true, 'in': inTrans}" tabindex="-1" :style="{display:status}">
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-header">
				<button @click="hideModal" class="close"><span aria-hidden="true">&times;</span></button>
				<h4 class="modal-title">温馨提示</h4>
			</div>
			<div class="modal-body">
				<slot></slot>
			</div>
			<div class="modal-footer">
				<button type="button" class="btn btn-default" @click="hideModal">取消</button>
				<button type="button" class="btn btn-primary" @click="okHandle">确定</button>
			</div>
		</div>
	</div>
</div>
<!-- <div class="modal-backdrop fade in"></div> -->
</template>

<script>
import common from '@/utils/common'
export default {
	name: 'modal',
	props: {
		show: {
			type: Boolean,
			default: false
		},
		cancleHandle: {
			type: Function,
			default: new Function()
		},
		okHandle: {
			type: Function,
			default: new Function()
		}
	},
	data () {
		return {
			status: 'block',
			inTrans: false
		}
	},

	methods: {
		hideModal() {
			this.status = 'none';
			this.inTrans = false;
			let mask = document.getElementsByClassName("modal-backdrop")[0];
			document.body.removeChild(mask);
		},
		showModal() {
			this.status = 'block';
			this.inTrans = true;
			let mask = document.createElement("div");
			mask.setAttribute("class", "modal-backdrop fade in");
			document.body.appendChild(mask);
			//this.okHandle();
		},
		
		cancleFunc() {
			this.cancleHandle(this);
		},

		submitFunc() {
			this.okHandle(this);
		}
	},

	computed: {

	},

	mounted() {
		
	},

	watch: {
		show: function(newVal, oldVal){
			if(newVal === oldVal) {
				return;
			}
			console.log(this.status);
			if(newVal) {
				this.showModal();
			} else {
				this.hideModal();
			}
		}
	}
}

</script>

<style lang="less" scoped>
	.modal-body {
		display: inline-block;
		width: 100%;
		max-height: 500px;
		overflow: auto;
	}
</style>