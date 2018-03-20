<template>
	<div class="i-container">
		<SideBar></SideBar>
		<div class="content clearfix">
			<HeaderItem></HeaderItem>
			<div class="substance">
				<h5>您现在的位置：<span class="text-info">性能解析</span></h5>
				<div class="box">
					<h3>性能解析</h3>
					<div class="next-step next-step-horizontal">
						<div class="next-step-item">
							<div class="next-step-item-tail">
								<div class="next-step-item-underlay">
									<div class="next-step-item-overlay"></div>
								</div>
							</div>
							<div class="next-step-item-container">
								<div class="next-step-item-status">2项异常</div>
								<div class="next-step-item-node">
									<div class="next-step-item-node-inner"></div>
								</div>
								<div class="next-step-item-title">可用性</div>
							</div>
						</div>
						<div class="next-step-item">
							<div class="next-step-item-tail">
								<div class="next-step-item-underlay">
									<div class="next-step-item-overlay"></div>
								</div>
							</div>
							<div class="next-step-item-container">
								<div class="next-step-item-status"></div>
								<div class="next-step-item-node">2
								</div>
								<div class="next-step-item-title"></div>
							</div>
						</div>
						<div class="next-step-item">
							<div class="next-step-item-tail">
								<div class="next-step-item-underlay">
									<div class="next-step-item-overlay"></div>
								</div>
							</div>
							<div class="next-step-item-container">
								<div class="next-step-item-status"></div>
								<div class="next-step-item-node">3
								</div>
								<div class="next-step-item-title"></div>
							</div>
						</div>
						<div class="next-step-item">
							<div class="next-step-item-tail">
								<div class="next-step-item-underlay">
									<div class="next-step-item-overlay"></div>
								</div>
							</div>
							<div class="next-step-item-container">
								<div class="next-step-item-status"></div>
								<div class="next-step-item-node">4
								</div>
								<div class="next-step-item-title"></div>
							</div>
						</div>
						<div class="next-step-item">
							<div class="next-step-item-tail">
								<div class="next-step-item-underlay">
									<div class="next-step-item-overlay"></div>
								</div>
							</div>
							<div class="next-step-item-container">
								<div class="next-step-item-status"></div>
								<div class="next-step-item-node">5
								</div>
								<div class="next-step-item-title"></div>
							</div>
						</div>
						<div class="next-step-item">
							<div class="next-step-item-tail">
								<div class="next-step-item-underlay">
									<div class="next-step-item-overlay"></div>
								</div>
							</div>
							<div class="next-step-item-container">
								<div class="next-step-item-status"></div>
								<div class="next-step-item-node">6
								</div>
								<div class="next-step-item-title"></div>
							</div>
						</div>
						<div class="next-step-item">
							<div class="next-step-item-tail">
								<div class="next-step-item-underlay">
									<div class="next-step-item-overlay"></div>
								</div>
							</div>
							<div class="next-step-item-container">
								<div class="next-step-item-status"></div>
								<div class="next-step-item-node">7
								</div>
								<div class="next-step-item-title"></div>
							</div>
						</div>
						<div class="next-step-item">
							<div class="next-step-item-tail">
								<div class="next-step-item-underlay">
									<div class="next-step-item-overlay"></div>
								</div>
							</div>
							<div class="next-step-item-container">
								<div class="next-step-item-status"></div>
								<div class="next-step-item-node">8
								</div>
								<div class="next-step-item-title"></div>
							</div>
						</div>
						<div class="next-step-item">
							<div class="next-step-item-tail">
								<div class="next-step-item-underlay">
									<div class="next-step-item-overlay"></div>
								</div>
							</div>
							<div class="next-step-item-container">
								<div class="next-step-item-status"></div>
								<div class="next-step-item-node">9
								</div>
								<div class="next-step-item-title"></div>
							</div>
						</div>
						<div class="next-step-item">
							<div class="next-step-item-tail">
								<div class="next-step-item-underlay">
									<div class="next-step-item-overlay"></div>
								</div>
							</div>
							<div class="next-step-item-container">
								<div class="next-step-item-status"></div>
								<div class="next-step-item-node">10
								</div>
								<div class="next-step-item-title"></div>
							</div>
						</div>
						<div class="next-step-item">
							<div class="next-step-item-container">
								<div class="next-step-item-status"></div>
								<div class="next-step-item-node">11
								</div>
								<div class="next-step-item-title"></div>
							</div>
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

@errColor: #e9573f;
@processColor: #49b878;
@nomalColor: #46b8da;

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

.checkbox {
	margin: 0;
}

.next-step {
    width: 100%;
    overflow: hidden;
	border: none;

	.next-step-item {
		flex: 1;
		text-align: center;
		position: relative;

		.next-step-item-tail {
			position: absolute;
			top: 8.5px;
   	 		left: ~"calc(50% + 12px)";
    		width: ~"calc(100% - 22px)";
			height: 1px;

			.next-step-item-underlay {
				width: 100%;
				height: 1px;
				background: #ccc;
				border: 3px solid #e0e0e0;
				.next-step-item-overlay {
					position: relative;
					height: 1px;
					width: 100%;
					top: -1px;
					border: 1px dashed #fff;
				}
			}
		}

		.next-step-item-container {
			text-align: center;

			&.error {
				.next-step-item-status {
					color: @errColor;
				}

				.next-step-item-node-inner {
					background: url('../images/exception.png') center center no-repeat;
				}
			}

			&.process {
				.next-step-item-status {
					color: @processColor;
				}
				.next-step-item-node-inner {
					background: url('../images/exception.png') center center no-repeat;
				}
			}

			.next-step-item-status {
				color: @nomalColor;
				font-size: 16px;
				padding: 5px;
				height: 32px;
			}
			.next-step-item-title {
				font-size: 16px;
				padding: 5px;
				height: 32px;
			}
			.next-step-item-node {
				width: 24px;
				height: 24px;
				line-height: 23px;
				border-radius: 50%;
				border: 2px solid #e0e0e0;
				margin: auto;

				.next-step-item-node-inner {
					width: 100%;
					height: 100%;
					background: url('../images/normal.png') center center no-repeat;
				}
			}
		}
	}

}

.next-step-horizontal {
	display: -moz-box;
    display: -webkit-box;
    display: -ms-flexbox;
	display: -webkit-flex;
	display: flex;
}
</style>