<template>
   <div class="bg">
       <section class="my_p bt bg_w">
			   <p class="sec_tit dot_bt">
				加盟<span class="search_line"></span>上海恒硕酒店项目 <span class="fr search_addr">上海</span>
			   </p>
			 <div class="progect_com">
				<p class="com_list" >
					<span class="column"><label class="name">酒店编号<span></span></label><span>HN3023222</span></span>
					<span class="column"><label class="justify">品牌<span></span></label><span>橘子</span></span>
				</p>
				<p class="com_list">
					<span class="column"><label>经营性质</label><span>加盟</span></span>
				</p>
				<p class="com_list">
					<span class="column"><label>省/直辖市</label><span>四川</span></span>
					<span class="column"><label class="justify">城市<span></span></label><span>成都</span></span>
				</p>
				<p class="com_list">
					<span class="column"><label>酒店地址</label><span>玉林路230号</span></span>
				</p>
			</div>
		</section>
		<section class="my_p bt bg_w">
			<p class="sec_tit ">
				工程进度（已完成80%）
			   </p>
		</section>
		<section class="my_p bt bg_w">
			<p class="sec_tit ">
				项目日报
			 </p>
			<input type="text" id="my-input"   data-toggle='date' />
			 
		</section>

   </div>
</template>

<script>

export default {
	methods:{
		initData(){
			$("#my-input").calendar({
			value: ['2015-12-05']
		  });	
		  alert(1212);
		}
	},
	created(){
		this.initData()
	}
	
}
</script>

