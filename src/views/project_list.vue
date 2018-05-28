<template>
  <div class="bg">
      <section>
		
			<div class="com_sel bg_w">
			

				<el-select v-model="OperateModes_value" placeholder="经营性质">
						<el-option
						v-for="item in OperateModes"
						:key="item.OperateModeNo"
						:label="item.OperateModeName"
						:value="item.OperateModeNo">
						</el-option>
				</el-select>
				<el-select v-model="Brands_value" placeholder="品牌">
						<el-option
						v-for="item in Brands"
						:key="item.BrandNo"
						:label="item.BrandName"
						:value="item.BrandNo">
						</el-option>
				</el-select>
				<el-select v-model="Refroms_value" placeholder="项目类型">
						<el-option
						v-for="item in Refroms"
						:key="item.ReformNo"
						:label="item.ReformName"
						:value="item.ReformNo">
						</el-option>
				</el-select>
                
			
			</div> 
			<el-tabs >
				<el-tab-pane label="用户管理"  @click='changeProjectList(item.StatusCode)' v-for="item,index in Prostatus" :key="index">{{item.StatusName}}<i class="circle">2</i></el-tab-pane>
			</el-tabs>
			<nav class="nav_bar_list bg_w" >
			
				<a v-for="item,index in Prostatus"  @click='changeProjectList(item.StatusCode)'>{{item.StatusName}}<i class="circle">2</i></a>
						
			</nav>
		</section>
		<section class="my_p bt bg_w" v-for="item,index in Project_list">
			   <p class="sec_tit">
			    {{item.OperateModeName}} <span class="search_line"></span>{{item.ProjectName}}<span class="fr search_addr">上海</span>
			   </p>
			 <div class="progect_com">
				<p class="com_list" >
					<span class="column"><label class="name">改造类型<span></span></label><span>{{item.ReformTypeName}}</span></span>
					
				</p>
				<p class="com_list">
					<span class="column"><label>计划开工</label><span>{{item.StrPlanStartDate}}</span></span>
				</p>
				
				<p class="com_list">
					<span class="column"><label>计划完工</label><span>{{item.StrPlanFinishedDate}}</span></span>
				</p>
			</div>
			<span class="p_list_arr  el-icon-arrow-right"></span>
		</section>
		
</div>
</template>
<script>
   import axios from 'axios'
 
   export default {
	   data(){
            return {
				 Brands:[],
				 OperateModes:[],
				 Refroms:[],
				 Prostatus:[],
				 Brands_value:'',
				 OperateModes_value:'',
				 Refroms_value:'',
				 Project_list:[],
			}
	   },
	watch:{
		Brands_value(){
			this.changeProjectList()
		},
		OperateModes_value(){
		  this.changeProjectList()
		},
		Refroms_value(){
			 this.changeProjectList()
		}

	},
	  methods:{
		 changeProjectList(params){
		  let OM=-1,BD=-1,PR=-1,PS=10
			 if(this.Brands_value!==''){
				 BD=parseInt(this.Brands_value)
			 }
			 if(this.OperateModes_value!==''){
				 OM=parseInt(this.OperateModes_value)
			 }
			 if(this.Refroms_value!==''){
				 PR=parseInt(this.Refroms_value)
			 }
			 if(params!==''&& typeof(params)!=='undefined'&&params!==null){
				 console.log(typeof(params));
                 PS = params
			 }
			console.log( OM,BD,PR,PS);
			
				axios.get('/api/project',{
					params:{
						om:''+OM+'',
						bd:''+BD+'',
						pr:''+PR+'',
						ps:''+PS+'',
						pageindex:'1'
					}
					}).then((response)=>{
						this.Project_list = response.data.data
						
						console.log(response.data)
					
					})
					.catch((error)=>{
						console.log(error)
					})
			    }

	   },
      created(){
		   
			 axios.get('/api/codevalue/brands').then((response)=>{
				  this.Brands = response.data.data
				console.log(response.data)
			})
			.catch((error)=>{
				console.log(error)
			});
			 axios.get('/api/codevalue/operatemodes').then((response)=>{
				  this.OperateModes = response.data.data
				console.log(response.data)
			
			})
			.catch((error)=>{
				console.log(error)
			});
          axios.get('/api/codevalue/prostatus').then((response)=>{
				  this.Prostatus = response.data.data
				console.log(response.data)
				
			})
			.catch((error)=>{
				console.log(error)
			});

			axios.get('/api/codevalue/reforms').then((response)=>{
				  this.Refroms = response.data.data
				console.log(response.data)
				
			})
			.catch((error)=>{
				console.log(error)
			});
			this.changeProjectList();  
    //    let project_list_axios  = axios.get('/api/project',{
	// 		  params:{
	// 			om:'-1',
	// 			bd:'-1',
	// 			pr:'-1',
	// 			ps:'10',
	// 			pageindex:'1'
	// 		  }
				
	// 		}).then((response)=>{
	// 			  this.Project_list = response.data.data
	// 			console.log('hello world');
	// 			console.log(response.data)
	// 			console.log( this.Brand_list)
	// 		})
	// 		.catch((error)=>{
	// 			console.log(error)
	// 		})
	   }
      
   }
</script>