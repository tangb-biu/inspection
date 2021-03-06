export const patient = [
	{
		path: '/patient',
		data:
		{
			'data|200': [
				{
					'name': /[A-Za-z]{5,8}/,
					'gender|1': ['男', '女'],
					'age': /[1-9][0-9]/,
					'source|1': ['杭州市', '嘉兴市', '湖州市', '衢州市', '温州市', '台州市', '丽水市', '绍兴市', '宁波市', '金华市'],
					'symptom|1': ['感冒', '慢性支气管炎','哮喘', '肺气肿', '支气管扩张', '肺炎', '百日咳', '支原体肺炎','气胸','疱疹性咽峡炎','成人呼吸窘迫综合征','鼾症','胃病','慢性胃炎','胃癌','便秘','慢性腹泻','急性胃炎','急性腐蚀性胃炎','胃肠道功能紊乱','食物中毒','腹痛','大肠癌','癫痫','头痛','偏头痛','糖尿病','甲亢','白血病','地中海贫血','淋巴瘤','再生障碍性贫血','过敏性紫癜','维生素B12缺乏所致贫','缺铁性贫血','贫血','红斑狼疮','痛风','强直性脊柱炎','尿路感染','慢性肾炎'],
					'register|1': ['农村', '城市'],
					'hospital|1': ['浙医二院', '浙一医院', '浙江省中医院','杭州市第一人民医院', '杭州市第二人民医院', '杭州市中医院'],
					'date|1': (function(){let arr = [];for(let i=1; i<=12; i++){arr.push(i+'月')} return arr;}()),
				}
			]
		}
	}
]