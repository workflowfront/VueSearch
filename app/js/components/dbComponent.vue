<template>
    <div class="container">
        <h1>{{msg}}</h1>

        <el-row :gutter="24">
            <el-col :span="8" :offset="9">
                <el-input v-model="description" placeholder="description"></el-input>
                <el-input v-model="id" placeholder="id"></el-input>
                <el-input v-model="price" placeholder="price"></el-input>
                <el-input v-model="quantity" placeholder="quantity"></el-input>
                <el-input v-model="thumbnail_url" placeholder="thumbnail_url"></el-input>
                <el-input v-model="title" placeholder="title"></el-input>
                <el-button  @click="addUser()" type="primary">add</el-button>
            </el-col>
        </el-row>

        <el-table :data="tableData" stripe style="width:50%" v-loading="loading">
            <el-table-column prop="title" label="name" width="100%"></el-table-column>
            <el-table-column prop="thumbnail_url" label="image" width="100%"></el-table-column>
        </el-table>


    </div>
</template>

<script>
    import axios from 'axios'
    import qs from 'qs'
    export default {
        name : 'DbComponent',
        data(){
            return {
                msg : 'Test',
                description: '',
                id: '',
                price: '',
                quantity: '',
                thumbnail_url: '',
                title: '',
                tableData : ['FF'],
                loading: false
            }
        },
        methods : {
            addUser(){
                var postdata = {
                    description: this.description,
                    id: this.id,
                    price: this.price,
                    quantity: this.quantity,
                    thumbnail_url: this.thumbnail_url,
                    title: this.title
                };
                var that = this;
                axios.post('http://localhost:9090/setdata',qs.stringify(postdata))
                    .then(function(res){
                        console.log(res.data);
                    }).catch(function(err){
                    console.log(err)
                })
                this.loading = true;
                this.description = '';
                this.id = '';
                this.price = '';
                this.quantity = '';
                this.thumbnail_url= '';
                this.title = '';

                setTimeout(function(){
                    that.$message({
                        message: 'done',
                        type: 'success'
                    });
                    that.loading = false;
                    that.tableData.push(postdata)
                }, 1000)
            }
        },
        created : function(){
            axios.get('http://localhost:9090/get')
                .then((res)=>{
                    var data = res.data;
                    console.log(data)
                    this.tableData = data;
                });
        }
    }
</script>

<style>
    .el-input{ width: 30%; float: left; margin-right: 10px}
    button{ float: left; }
    .el-table{  margin: 30px auto;}
    table{ width: 100% !important; }
    table th{ text-align: center !important; }
</style>